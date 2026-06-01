import { useRef, useEffect, useCallback } from 'react';
import { P } from '../palette';

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  r: number;
  color: string;
  baseX: number;
  baseY: number;
  baseZ: number;
}

export const ParticleGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);

  const initNodes = useCallback((w: number, h: number) => {
    const count = Math.floor((w * h) / 18000);
    const colors = [P.sand, P.clay, P.terracotta, P.navy];
    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const z = Math.random() * 200 - 100;
      nodes.push({
        x, y, z, baseX: x, baseY: y, baseZ: z,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        vz: (Math.random() - 0.5) * 0.1,
        r: Math.random() * 1.8 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    nodesRef.current = nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
      initNodes(window.innerWidth, window.innerHeight);
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);

    const draw = () => {
      timeRef.current += 0.008;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const connDist = 120;

      // Update positions
      for (const n of nodes) {
        const drift = Math.sin(timeRef.current + n.baseX * 0.01) * 0.08;
        n.x += n.vx + drift;
        n.y += n.vy + Math.cos(timeRef.current + n.baseY * 0.01) * 0.06;
        n.z += n.vz + Math.sin(timeRef.current + n.baseZ * 0.01) * 0.05;

        // Mouse repulsion
        const dx = n.x - mx;
        const dy = n.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.4;
          n.x += (dx / dist) * force;
          n.y += (dy / dist) * force;
          n.z += force * 2;
        }

        // Gentle pull back to base
        n.x += (n.baseX - n.x) * 0.002;
        n.y += (n.baseY - n.y) * 0.002;
        n.z += (n.baseZ - n.z) * 0.005;

        // Wrap
        if (n.x < -10) n.x = w + 10;
        if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10;
        if (n.y > h + 10) n.y = -10;
        if (n.z < -100) n.z = 100;
        if (n.z > 100) n.z = -100;
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz * 0.2);
          if (dist < connDist) {
            const avgZ = (nodes[i].z + nodes[j].z) / 2;
            const zScale = (avgZ + 100) / 200;
            const alpha = (1 - dist / connDist) * (0.05 + 0.15 * zScale);
            ctx.strokeStyle = `rgba(217,170,144,${alpha})`;
            ctx.lineWidth = 0.2 + 0.8 * zScale;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = 1 + Math.sin(timeRef.current * 2 + n.baseX) * 0.15;
        const zScale = (n.z + 100) / 200;
        const apparentRadius = n.r * pulse * (0.5 + 1.5 * zScale);
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.1, apparentRadius), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.1 + 0.6 * zScale;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [initNodes]);

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
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
};
