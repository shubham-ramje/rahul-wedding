import React, { useEffect, useRef } from 'react';

const PetalsOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Rose petals and Gold sparkles
    const totalPetals = window.innerWidth < 768 ? 25 : 45;
    const totalSparkles = window.innerWidth < 768 ? 20 : 35;

    class Petal {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -20 - Math.random() * 50;
        this.size = 10 + Math.random() * 14;
        this.speedY = 1.2 + Math.random() * 1.8;
        this.speedX = -0.8 + Math.random() * 1.6;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = 0.02 + Math.random() * 0.03;
        // Shades of royal crimson, pink rose, and marigold
        const colors = [
          'rgba(216, 27, 96, 0.75)',   // deep pink rose
          'rgba(183, 28, 28, 0.7)',    // royal crimson
          'rgba(225, 112, 85, 0.75)',  // marigold orange
          'rgba(255, 177, 66, 0.7)'    // golden yellow
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.01) * 1.2 + this.speedX;
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;

        if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(Math.cos(this.flip), 1);

        ctx.beginPath();
        // Natural petal curvature (teardrop heart curve)
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, -this.size, 0, -this.size);
        ctx.bezierCurveTo(this.size / 2, -this.size, this.size / 2, -this.size / 2, 0, 0);

        ctx.fillStyle = this.color;
        ctx.fill();

        // Subtle petal vein highlight
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -this.size * 0.85);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }
    }

    class Sparkle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = 1.2 + Math.random() * 2.5;
        this.speedY = -0.3 - Math.random() * 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.alpha = 0.2 + Math.random() * 0.7;
        this.alphaSpeed = 0.01 + Math.random() * 0.02;
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulse += this.alphaSpeed;
        this.alpha = 0.3 + Math.sin(this.pulse) * 0.5;

        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 223, 115, ${Math.max(0, this.alpha)})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.9)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }
    }

    const petals = Array.from({ length: totalPetals }, () => new Petal());
    const sparkles = Array.from({ length: totalSparkles }, () => new Sparkle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      sparkles.forEach((s) => {
        s.update();
        s.draw();
      });

      petals.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 40,
        opacity: 0.85
      }}
    />
  );
};

export default PetalsOverlay;
