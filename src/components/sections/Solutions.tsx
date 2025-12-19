import type { CSSProperties } from "react";
import { solutions } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Solutions.module.css";

export function Solutions() {
  return (
    <section id="solutions" className={`${styles.section} section`}>
      <div className="container">
        <SectionHeading
          eyebrow="行业方案"
          title="以场景为中心的解决方案矩阵"
          description="从制造、能源到城市治理，构建覆盖多行业的智能化增长路径。"
          align="center"
        />
        <div className={styles.grid}>
          {solutions.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.card} reveal`}
              style={{ "--delay": `${index * 0.06}s` } as CSSProperties}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
