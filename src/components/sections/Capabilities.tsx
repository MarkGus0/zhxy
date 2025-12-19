import { capabilities } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Capabilities.module.css";

export function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="container">
        <div className={styles.layout}>
          <SectionHeading
            eyebrow="技术引擎"
            title="从数据底座到场景应用的全栈能力"
            description="构建统一技术架构，保障智能平台持续演进与稳定运行。"
          />
          <div className={styles.list}>
            {capabilities.map((item) => (
              <div key={item.step} className={styles.item}>
                <span className={styles.step}>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
