"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    alpha: number;
    targetAlpha: number;
}

export function Stars() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: Star[] = [];
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((width * height) / 4000); // Density

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5,
                    vx: (Math.random() - 0.5) * 0.2, // Subtle movement
                    vy: (Math.random() - 0.5) * 0.2,
                    alpha: Math.random(),
                    targetAlpha: Math.random(),
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                // Update alpha for twinkling
                if (Math.abs(star.alpha - star.targetAlpha) < 0.01) {
                    star.targetAlpha = Math.random();
                } else {
                    star.alpha += (star.targetAlpha - star.alpha) * 0.02;
                }

                // Move star
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around screen
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(180, 220, 255, ${star.alpha * 0.6})`;
                ctx.fill();

                // Optional: slight glow for larger stars
                if (star.radius > 1) {
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = `rgba(180, 220, 255, ${star.alpha * 0.4})`;
                } else {
                    ctx.shadowBlur = 0;
                }
            });

            // Draw nebula hints (very subtle)
            // This is a simplified version; for complex nebula we'd use images or more complex shaders

            animationFrameId = requestAnimationFrame(draw);
        };

        resize();
        draw();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
                opacity: 0.6,
            }}
        />
    );
}
