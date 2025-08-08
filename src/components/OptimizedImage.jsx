import React, { useState, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';

const OptimizedImage = ({ 
  src, 
  alt, 
  width = '100%', 
  height = 'auto', 
  sx = {}, 
  priority = false,
  sizes = '100vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Set the optimized WebP image path
    setImageSrc(src);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // If WebP fails, try the original format
    const fallbackSrc = src.replace('.webp', '.jpg');
    setImageSrc(fallbackSrc);
  };

  return (
    <Box sx={{ position: 'relative', width, height, ...sx }}>
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      )}
      <picture>
        <source srcSet={imageSrc} type="image/webp" />
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          sizes={sizes}
        />
      </picture>
    </Box>
  );
};

export default OptimizedImage; 