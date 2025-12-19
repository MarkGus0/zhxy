import type { CSSProperties } from "react";
import { cases } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";
import styles from "./Cases.module.css";

export function Cases() {
  return (
    <section id="cases" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="标杆实践"
          title="真实场景验证的业务价值"
          description="聚焦高复杂度、高价值行业场景，沉淀可复制的转型方法论。"
        />
        <div className={styles.casesGrid}>
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`${styles.card} reveal`}
              style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
            >
              <Tag tone="warm">{item.industry}</Tag>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.cta}>查看详情 →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
