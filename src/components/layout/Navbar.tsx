"use client";

import Link from "next/link";
import { navItems, site } from "@/data/site";
import { Button } from "../ui/Button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import styles from "./Navbar.module.css";
import { useEffect, useMemo, useState } from "react";

export function Navbar() {
  // Extract IDs from navItems (assuming href is like "#id")
  const sectionIds = useMemo(() => {
    const ids = navItems
      .map((item) => item.href.replace("#", ""))
      .filter((id) => id);
    return ["hero", ...ids];
  }, []);

  const activeId = useScrollSpy(sectionIds, 150);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.container} container`}>
          <Link
            href="#hero"
            className={styles.brand}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", " ");
            }}
          >
            <span className={styles.logo}>{site.name}</span>
            <span className={styles.fullName}>{site.fullName}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "smooth",
                      });
                      window.history.replaceState(null, "", `#${id}`);
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <div className={styles.desktopAction}>
              <Button href="#contact" variant="primary" size="md">
                预约演示
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`${styles.toggle} ${isOpen ? styles.active : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileContent}>
          {navItems.map((item, index) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${isActive ? styles.active : ""}`}
                style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.getElementById(id);
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: "smooth",
                    });
                    window.history.replaceState(null, "", `#${id}`);
                  }
                }}
              >
                {item.label}
              </Link>
            )
          })}
          <div className={styles.mobileAction}>
            <Button href="#contact" variant="primary" size="lg" onClick={() => setIsOpen(false)}>
              预约演示
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
