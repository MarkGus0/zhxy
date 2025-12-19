import type { CSSProperties } from "react";
import { insights } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Insights.module.css";

export function Insights() {
  return (
    <section id="insights" className={`${styles.section} section`}>
      <div className="container">
        <SectionHeading
          eyebrow="动态洞察"
          title="持续输出行业趋势与产品进展"
          description="聚合平台发布、生态合作与行业观察，保持对趋势的敏捷响应。"
          align="center"
        />
        <div className={styles.list}>
          {insights.map((item, index) => (
            <article
              key={item.title}
              className={`${styles.item} reveal`}
              style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
            >
              <span className={styles.date}>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
