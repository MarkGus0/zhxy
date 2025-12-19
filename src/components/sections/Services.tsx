import type { CSSProperties } from "react";
import { services } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";
import styles from "./Services.module.css";

const tones = ["teal", "warm", "cool"] as const;

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="产品与服务"
          title="构建可持续演进的企业级智能体系"
          description="以平台化底座与场景化能力组合，支撑不同规模、不同阶段的企业增长。"
        />
        <div className={styles.grid}>
          {services.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.card} reveal`}
              style={{ "--delay": `${index * 0.08}s` } as CSSProperties}
            >
              <Tag tone={tones[index % tones.length]}>{item.tag}</Tag>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.arrow}>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
