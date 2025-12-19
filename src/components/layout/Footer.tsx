import Link from "next/link";
import { navItems, site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>
          <div className={styles.logo}>{site.name}</div>
          <p className={styles.summary}>{site.summary}</p>
        </div>
        <div className={styles.links}>
          <span className={styles.label}>导航</span>
          <div className={styles.linkGrid}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.contact}>
          <span className={styles.label}>联系</span>
          <p>{site.location}</p>
          <p>{site.contactPhone}</p>
          <p>{site.contactEmail}</p>
        </div>
      </div>
      <div className={styles.meta}>
        <span>© 2025 {site.fullName}</span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          皖ICP备案2025106563号-1
        </a>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
}
