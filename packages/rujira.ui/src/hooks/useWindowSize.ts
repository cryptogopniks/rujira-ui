import { useState, useEffect } from "react";

interface Size {
  width: number;
  height: number;
}

export const BreakPoints = {
  xsmall: 420,
  small: 576,
  medium: 768,
  large: 1024,
  xl: 1440,
  xxl: 1680,
  hd: 1920,
  ultra: 2560,
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: window.outerWidth,
    height: window.outerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export const useWindowDimensions = (innerWidth: number) => {
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= innerWidth);

  useEffect(() => {
    const windowResizeHandler = () => {
      const matchMediaString = `(max-width: ${innerWidth}px)`;

      if (matchMedia(matchMediaString).matches) {
        setIsMobileSize(true);
      } else {
        setIsMobileSize(false);
      }
    };

    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  return isMobileSize;
};