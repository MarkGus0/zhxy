import React from "react";
import { metrics } from "@/data/site";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className="reveal" style={{ "--delay": "0.1s" } as React.CSSProperties}>
            <Tag tone="cool">未来算力 / 智能进化</Tag>
          </div>

          <h1 className={`${styles.title} reveal`} style={{ "--delay": "0.2s" } as React.CSSProperties}>
            中徽星原<br />
            <span className={styles.highlight}>构建企业级智能基础设施</span>
          </h1>

          <p className={`${styles.description} reveal`} style={{ "--delay": "0.3s" } as React.CSSProperties}>
            以星原智算平台为核心，贯通数据治理、模型中枢与场景应用，
            打造"算力+算法+数据"的闭环生态，助力企业实现数智化跃迁。
          </p>

          <div className={`${styles.actions} reveal`} style={{ "--delay": "0.4s" } as React.CSSProperties}>
            <Button href="#contact" variant="primary" size="lg">
              预约咨询
            </Button>
            <Button href="#solutions" variant="secondary" size="lg">
              查看解决方案
            </Button>
          </div>

          <div className={`${styles.metrics} reveal`} style={{ "--delay": "0.5s" } as React.CSSProperties}>
            {metrics.map((item) => (
              <div key={item.label} className={styles.metric}>
                <span className={styles.metricValue}>{item.value}</span>
                <span className={styles.metricLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.orbitSystem}>
            <div className={styles.orbitRing} />
            <div className={styles.orbitRing} />
            <div className={styles.orbitRing} />
            <div className={styles.core} />
          </div>

          {/* Primary Card: Platform */}
          <div className={`${styles.card} ${styles.cardPrimary}`}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className={styles.cardTitle}>星原智算平台</div>
            <div className={styles.cardText}>全栈算力调度与模型编排</div>
            <div className={styles.status}>
              <div className={styles.statusDot} />
              <div className={styles.statusText}>系统运行正常</div>
            </div>
          </div>

          {/* Secondary Card: Performance */}
          <div className={`${styles.card} ${styles.cardSecondary}`}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className={styles.cardTitle}>毫秒级响应</div>
            <div className={styles.cardText}>分布式架构保障高并发</div>
          </div>

          {/* Tertiary Card: Security */}
          <div className={`${styles.card} ${styles.cardTertiary}`}>
            <div className={styles.cardTitle} style={{ fontSize: '0.9rem' }}>企业级安全</div>
            <div className={styles.cardText} style={{ fontSize: '0.75rem' }}>全链路数据加密</div>
          </div>
        </div>
      </div>
    </section>
  );
}
