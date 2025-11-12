import { useEffect } from "react";

export default function NightSky() {
  useEffect(() => {
    const canvas = document.getElementById("night-sky");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let stars = [];

    const createStars = () =>
      Array.from({ length: 40 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        speedX: (Math.random() - 0.5) * 0.025, // subtle side drift
        speedY: (Math.random() - 0.5) * 0.025,
      }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = createStars();
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move star
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle effect
        star.alpha += star.twinkleSpeed * star.twinkleDirection;
        if (star.alpha >= 1 || star.alpha <= 0.2) star.twinkleDirection *= -1;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.fill();
      });

      requestAnimationFrame(drawStars);
    };

    resize();
    drawStars();
    window.addEventListener("resize", resize);

    // Optional mouse parallax effect
    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      stars.forEach((star) => {
        star.x += mouseX * 0.05;
        star.y += mouseY * 0.05;
      });
    });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    // bg-gradient-to-b from-gray-900 via-indigo-350 to-black
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-gray-950 via-indigo-350 to-black">
      <canvas id="night-sky" className="w-full h-full"></canvas>
    </div>
  );
}
