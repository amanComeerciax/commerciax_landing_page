'use client';

import { useEffect, useRef } from 'react';

// Continent Landmass check for realistic Earth geography
function isLand(lat: number, lon: number): boolean {
  let l = lon;
  while (l > 180) l -= 360;
  while (l < -180) l += 360;

  // North America
  if (lat >= 15 && lat <= 72 && l >= -168 && l <= -52) {
    if (lat < 28 && l < -115) return false;
    if (lat > 50 && l > -70 && lat < 60) return true;
    if (lat < 25 && l > -80) return false;
    return true;
  }
  // Central America
  if (lat >= 7 && lat <= 20 && l >= -105 && l <= -75) return true;

  // South America
  if (lat >= -56 && lat <= 13 && l >= -82 && l <= -34) {
    if (lat > 0 && l < -78) return false;
    if (lat < -40 && l > -60) return false;
    return true;
  }

  // Europe
  if (lat >= 36 && lat <= 71 && l >= -10 && l <= 45) {
    if (lat < 42 && l < -5) return true; // Iberia
    if (lat > 55 && l > 20) return true; // Scandinavia / Baltic
    return true;
  }

  // Africa
  if (lat >= -35 && lat <= 37 && l >= -18 && l <= 52) {
    if (lat > 20 && l < -15) return false;
    if (lat < -20 && l < 10) return false;
    if (lat > 12 && l > 45 && lat < 30) return false;
    return true;
  }

  // Middle East
  if (lat >= 12 && lat <= 40 && l >= 35 && l <= 65) return true;

  // Asia (including India, China, Russia, SE Asia)
  if (lat >= 5 && lat <= 75 && l >= 45 && l <= 150) {
    if (lat < 30 && l > 55 && l < 70) return false; // Arabian Sea
    if (lat < 10 && l > 70 && l < 80) return true; // Sri Lanka
    if (lat < 35 && l > 68 && l < 90) return true; // India
    if (lat >= 10 && lat <= 55 && l >= 95 && l <= 135) return true; // China / SE Asia
    if (lat > 50 && l >= 45 && l <= 170) return true; // Siberia
    return true;
  }

  // Japan
  if (lat >= 30 && lat <= 46 && l >= 129 && l <= 146) return true;

  // Indonesia / Philippines
  if (lat >= -11 && lat <= 19 && l >= 95 && l <= 141) return true;

  // Australia & New Zealand
  if (lat >= -44 && lat <= -10 && l >= 112 && l <= 154) return true;
  if (lat >= -47 && lat <= -34 && l >= 165 && l <= 179) return true;

  return false;
}

interface GlobePoint {
  lat: number;
  lon: number;
  isLand: boolean;
  size: number;
}

export default function RotatingGlobe({ size = 460 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rotationRef = useRef<number>(0);
  const pointsRef = useRef<GlobePoint[]>([]);

  // Pre-generate points once on mount
  useEffect(() => {
    const pts: GlobePoint[] = [];
    const stepLat = 3.6;
    for (let lat = -78; lat <= 78; lat += stepLat) {
      const cosLat = Math.cos((lat * Math.PI) / 180);
      const numLon = Math.max(8, Math.round(90 * cosLat));
      const stepLon = 360 / numLon;
      for (let lon = -180; lon < 180; lon += stepLon) {
        const land = isLand(lat, lon);
        if (land) {
          pts.push({
            lat,
            lon,
            isLand: true,
            size: Math.random() > 0.8 ? 2.2 : 1.6,
          });
        } else if (Math.random() < 0.08) {
          pts.push({
            lat,
            lon,
            isLand: false,
            size: 1.1,
          });
        }
      }
    }
    pointsRef.current = pts;
  }, []);

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 2 : 2;

    const width = size;
    const height = size;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const cx = width / 2;
    const cy = height / 2;
    const radius = width * 0.38; // Radius of 3D globe sphere

    const tiltX = 0.26; // ~15 degree axial tilt
    const DEG_TO_RAD = Math.PI / 180;

    const render = () => {
      rotationRef.current += 0.0045; // continuous rotation speed
      const rotY = rotationRef.current;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. Soft Outer Atmospheric Blue Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.25);
      glowGrad.addColorStop(0, 'rgba(219, 234, 254, 0.45)');
      glowGrad.addColorStop(0.5, 'rgba(147, 197, 253, 0.25)');
      glowGrad.addColorStop(0.85, 'rgba(59, 130, 246, 0.12)');
      glowGrad.addColorStop(1, 'rgba(37, 99, 235, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // 2. Sphere Base Disk (Soft translucent background)
      const sphereGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      sphereGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      sphereGrad.addColorStop(0.5, 'rgba(240, 246, 255, 0.75)');
      sphereGrad.addColorStop(0.9, 'rgba(219, 234, 254, 0.60)');
      sphereGrad.addColorStop(1, 'rgba(147, 197, 253, 0.50)');
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Delicate Blue Sphere Rim Outline
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // 4. Rotating 3D Latitude Circles (Equator and parallels)
      const latCircles = [-45, -20, 0, 20, 45];
      latCircles.forEach((lat) => {
        const latRad = lat * DEG_TO_RAD;
        const rLat = radius * Math.cos(latRad);
        const yLat = -radius * Math.sin(latRad);

        // Project center and radius with tiltX
        const yProj = cy + yLat * Math.cos(tiltX);
        const ryProj = rLat * Math.sin(tiltX);

        ctx.strokeStyle = lat === 0 ? 'rgba(37, 99, 235, 0.22)' : 'rgba(59, 130, 246, 0.12)';
        ctx.lineWidth = lat === 0 ? 1 : 0.8;
        ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.ellipse(cx, yProj, rLat, Math.abs(ryProj), 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 5. Rotating Longitude Meridians (6 meridians around the globe)
      const meridians = [0, 30, 60, 90, 120, 150];
      meridians.forEach((m) => {
        const mRad = (m * DEG_TO_RAD) + rotY;
        const cosM = Math.cos(mRad);

        // Longitude meridian appears as an ellipse with semi-minor axis depending on rotation
        const rxProj = radius * Math.abs(cosM);
        const isFacing = cosM >= 0;

        ctx.strokeStyle = isFacing ? 'rgba(37, 99, 235, 0.18)' : 'rgba(147, 197, 253, 0.08)';
        ctx.lineWidth = 0.8;
        ctx.setLineDash([2, 5]);
        ctx.beginPath();
        ctx.ellipse(cx, cy, rxProj, radius, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 6. Draw 3D Globe Dots (Real Continents & Navigation Coordinates)
      const points = pointsRef.current;
      const cosTilt = Math.cos(tiltX);
      const sinTilt = Math.sin(tiltX);

      // Sort points roughly by depth for realistic layering
      const projectedPts = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const latRad = p.lat * DEG_TO_RAD;
        const lonRad = (p.lon * DEG_TO_RAD) + rotY;

        // 3D Cartesian coordinates on sphere
        const cosLat = Math.cos(latRad);
        const x3d = radius * cosLat * Math.sin(lonRad);
        const y3d = -radius * Math.sin(latRad);
        const z3d = radius * cosLat * Math.cos(lonRad);

        // Apply axial tilt around X axis
        const yRot = y3d * cosTilt - z3d * sinTilt;
        const zRot = y3d * sinTilt + z3d * cosTilt;

        // Only draw points that are visible or slightly on the back (translucent globe effect)
        if (zRot > -radius * 0.45) {
          // Perspective projection
          const k = 450 / (450 + zRot * 0.5);
          const px = cx + x3d * k;
          const py = cy + yRot * k;

          projectedPts.push({
            px,
            py,
            zRot,
            isLand: p.isLand,
            size: p.size,
          });
        }
      }

      // Sort back-to-front
      projectedPts.sort((a, b) => a.zRot - b.zRot);

      for (let i = 0; i < projectedPts.length; i++) {
        const pt = projectedPts[i];
        const normZ = pt.zRot / radius; // -0.45 to 1.0

        if (normZ < 0) {
          // Back hemisphere (subtle faint translucent dots)
          const alpha = 0.12 * (1 + normZ * 2);
          ctx.fillStyle = `rgba(147, 197, 253, ${Math.max(0.04, alpha)})`;
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, Math.max(0.7, pt.size * 0.6), 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Front hemisphere (brilliant glowing blue continent dots)
          const alpha = 0.45 + 0.55 * normZ;
          const dotRadius = Math.max(1.0, (pt.size * 0.85) + normZ * 0.9);

          if (pt.isLand) {
            // High-contrast cobalt / electric cyan for landmasses
            ctx.fillStyle = normZ > 0.6
              ? `rgba(37, 99, 235, ${alpha})`
              : `rgba(2, 132, 199, ${alpha})`;
          } else {
            // Ocean grid dots
            ctx.fillStyle = `rgba(147, 197, 253, ${alpha * 0.35})`;
          }

          ctx.beginPath();
          ctx.arc(pt.px, pt.py, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 7. Outer Spherical Glass Sheen & Edge Highlight
      const rimGrad = ctx.createRadialGradient(
        cx + radius * 0.5,
        cy - radius * 0.5,
        radius * 0.2,
        cx,
        cy,
        radius
      );
      rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      rimGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.05)');
      rimGrad.addColorStop(0.95, 'rgba(59, 130, 246, 0.2)');
      rimGrad.addColorStop(1, 'rgba(37, 99, 235, 0.35)');
      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [size]);

  return (
    <div className="relative flex items-center justify-center select-none pointer-events-none max-w-full">
      {/* Outer ambient radiant atmospheric ring */}
      <div
        className="absolute rounded-full pointer-events-none max-w-full"
        style={{
          width: `${size * 1.08}px`,
          height: `${size * 1.08}px`,
          background: 'radial-gradient(circle, rgba(191,219,254,0.45) 0%, rgba(59,130,246,0.18) 55%, transparent 75%)',
          filter: 'blur(16px)',
        }}
      />

      {/* The 3D Rotating Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 drop-shadow-[0_15px_35px_rgba(37,99,235,0.18)] max-w-full h-auto"
      />
    </div>
  );
}
