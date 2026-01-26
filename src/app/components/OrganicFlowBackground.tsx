'use client';

import React, { useEffect, useRef } from 'react';

export default function OrganicFlowBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let width = 0;
        let height = 0;

        // Configuration
        const particleCount = 800; // Increased Density
        const colors = [
            '#26a69a', // Teal
            '#80cbc4', // Light Teal
            '#0ea5e9', // Blue
            '#4f46e5', // Indigo
        ];

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            length: number;
            color: string;
            speed: number;
            angle: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.length = Math.random() * 4 + 3; // Shorter length (3-7px)
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speed = Math.random() * 0.5 + 0.5; // Faster speed (0.5-1.0)
                this.angle = 0;
            }

            update() {
                // Create an organic "brain-like" flow using sine/cosine interactions
                // This simulates a flow field without heavy Perlin noise libraries
                const scale = 0.005;
                // Complex flow formula
                this.angle = (Math.cos(this.x * scale) + Math.sin(this.y * scale)) * Math.PI * 2;

                // Add some time-based variation
                const time = Date.now() * 0.0001;
                this.angle += Math.sin(time) * 0.5;

                this.vx = Math.cos(this.angle) * this.speed;
                this.vy = Math.sin(this.angle) * this.speed;

                this.x += this.vx;
                this.y += this.vy;

                // Wrap around screen
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                // Draw the "hyphen" oriented in the direction of movement
                context.moveTo(this.x, this.y);
                context.lineTo(this.x - this.vx * this.length * 4, this.y - this.vy * this.length * 4);

                context.strokeStyle = this.color;
                context.lineWidth = 1.0; // Thinner/Sleeker
                context.lineCap = 'round';
                context.globalAlpha = 0.6;
                context.stroke();
                context.globalAlpha = 1.0;
            }
        }

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        window.addEventListener('resize', init);
        animate();

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply"
        />
    );
}
