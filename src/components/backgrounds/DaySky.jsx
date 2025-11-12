import { useEffect, useRef } from "react";

export default function DaySky() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const clouds = Array.from({ length: 6 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.5,
      width: 150 + Math.random() * 100,
      height: 50 + Math.random() * 20,
      speed: 0.2 + Math.random() * 0.3,
      opacity: 0.4 + Math.random() * 0.2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawCloud = (cloud) => {
      ctx.save();
      ctx.translate(cloud.x, cloud.y);
      ctx.scale(cloud.width / 100, cloud.height / 60);

      // Draw puffy cloud shape using multiple arcs
      ctx.beginPath();
      ctx.arc(0, 0, 20, Math.PI * 0.5, Math.PI * 1.5);
      ctx.arc(25, -10, 25, Math.PI * 1, Math.PI * 1.85);
      ctx.arc(50, 0, 20, Math.PI * 1.1, Math.PI * 1.9);
      ctx.arc(25, 10, 25, Math.PI * 1.5, Math.PI * 0.5);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(-20, -20, 60, 20);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      gradient.addColorStop(1, "rgba(230, 230, 230, 0.6)");

      ctx.fillStyle = gradient;
      ctx.globalAlpha = cloud.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const draw = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#a7d8ff'); // soft sky blue
      gradient.addColorStop(0.6, '#d4f1ff'); // pale blue
      gradient.addColorStop(1, '#f8fbff'); // near white
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      clouds.forEach((cloud) => {
        cloud.x += cloud.speed;
        if (cloud.x - cloud.width / 2 > canvas.width) cloud.x = -cloud.width;
        drawCloud(cloud);
      });

      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} id="day-sky" className="w-full h-full"></canvas>
    </div>
  );
}
