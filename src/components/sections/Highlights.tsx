import type { CSSProperties } from "react";
import { highlights } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Highlights.module.css";

export function Highlights() {
  return (
    <section id="highlights" className={`${styles.section} section`}>
      <div className="container">
        <SectionHeading
          eyebrow="核心优势"
          title="以工程化方式驱动智能增长"
          description="平台化能力与交付体系并行，让每一次创新都可衡量、可复制、可扩展。"
        />
        <div className={styles.grid}>
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.card} reveal`}
              style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
            >
              <span className={styles.index}>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
