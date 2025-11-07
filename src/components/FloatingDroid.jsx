import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// A cute mini robot that follows the user's cursor around the page.
// The Spline scene looks at your cursor; we smoothly spring the container to the pointer.
export default function FloatingDroid() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add a nice, responsive spring to the motion values
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
    >
      {/* Soft glow behind the droid */}
      <div className="pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-60" style={{
        background: 'radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(56,189,248,0.2) 45%, rgba(0,0,0,0) 70%)'
      }} />

      <div className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64">
        <Spline
          scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </motion.div>
  );
}
