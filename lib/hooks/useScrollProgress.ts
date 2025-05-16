import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollProgressProps {
  targetScale?: [number, number];
  targetOpacity?: [number, number];
  targetX?: [number, number];
  targetY?: [number, number];
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export function useScrollProgress({
  targetScale = [0.8, 1],
  targetOpacity = [0, 1],
  targetX = [0, 0],
  targetY = [50, 0],
  springConfig = {
    stiffness: 200,
    damping: 25,
    mass: 0.5,
  },
}: ScrollProgressProps = {}) {
  const elementRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start end', 'center center'],
  });

  // Create smooth animations with springs
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Transform the progress into specific values
  const scale = useTransform(smoothProgress, [0, 1], targetScale);
  const opacity = useTransform(smoothProgress, [0, 1], targetOpacity);
  const x = useTransform(smoothProgress, [0, 1], targetX);
  const y = useTransform(smoothProgress, [0, 1], targetY);

  return {
    elementRef,
    scale,
    opacity,
    x,
    y,
    scrollYProgress: smoothProgress,
  };
} 