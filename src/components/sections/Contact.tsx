import { site } from "@/data/site";
import { Button } from "../ui/Button";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>合作联系</span>
            <h2>让智能计算成为你的增长引擎</h2>
            <p>
              我们期待与政府、企业及科研机构共建智能化新范式，
              从诊断、方案到落地，全程协作共创价值。
            </p>
            <div className={styles.actions}>
              <Button href="mailto:hello@zhxy-tech.com" variant="primary" size="lg">
                发送合作意向
              </Button>
              <Button
                href="mailto:hello@zhxy-tech.com?subject=Company%20Profile"
                variant="ghost"
                size="lg"
              >
                获取公司介绍
              </Button>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <span>总部地址</span>
              <strong>{site.location}</strong>
            </div>
            <div>
              <span>合作热线</span>
              <strong>{site.contactPhone}</strong>
            </div>
            <div>
              <span>联系邮箱</span>
              <strong>{site.contactEmail}</strong>
            </div>
            <div className={styles.cardNote}>
              <span>响应时间</span>
              <strong>24h 内回复</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
