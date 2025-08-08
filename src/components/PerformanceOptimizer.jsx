import React, { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    const enableSmoothScrolling = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    const optimizeFonts = () => {
      // Only add font preconnect if not already present
      if (!document.querySelector('link[href="https://fonts.googleapis.com"]')) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preconnect';
        fontLink.href = 'https://fonts.googleapis.com';
        document.head.appendChild(fontLink);
      }

      if (!document.querySelector('link[href="https://fonts.gstatic.com"]')) {
        const fontLink2 = document.createElement('link');
        fontLink2.rel = 'preconnect';
        fontLink2.href = 'https://fonts.gstatic.com';
        document.head.appendChild(fontLink2);
      }
    };

    // Apply optimizations after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      optimizeImages();
      enableSmoothScrolling();
      optimizeFonts();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
