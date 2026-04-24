import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Auto finish after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#501728',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      {/* Animated background particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          opacity: 0.3
        }}
      >
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: '#d4af37',
              borderRadius: '50%',
              animation: `floatUp ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
              '@keyframes floatUp': {
                '0%': {
                  transform: 'translateY(0)',
                  opacity: 1
                },
                '100%': {
                  transform: 'translateY(-100vh)',
                  opacity: 0
                }
              }
            }}
          />
        ))}
      </Box>

      {/* Logo Container with Pulse Animation - ONLY CIRCLE SIZE INCREASED */}
      <Box
        sx={{
          width: { xs: '320px', md: '400px' },  // Increased circle size only
          height: { xs: '320px', md: '400px' }, // Increased circle size only
          borderRadius: '50%',
          border: '4px solid #d4af37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          animation: 'pulse 1.5s ease-in-out infinite',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(0.95)',
              boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)'
            },
            '70%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 20px rgba(212, 175, 55, 0)'
            },
            '100%': {
              transform: 'scale(0.95)',
              boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)'
            }
          }
        }}
      >
        {/* Logo - SIZE REMAINS SAME */}
        <Box
          component="img"
          src="/images/logos.png"
          alt="SAGAR JEWELLER"
          sx={{
            width: { xs: '120px', md: '150px' },  // Logo size unchanged
            height: 'auto',
            animation: 'zoomIn 0.8s ease-out',
            '@keyframes zoomIn': {
              '0%': {
                transform: 'scale(0.5)',
                opacity: 0
              },
              '100%': {
                transform: 'scale(1)',
                opacity: 1
              }
            }
          }}
        />
      </Box>

      {/* Brand Name */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          color: '#d4af37',
          mt: 4,
          mb: 1,
          letterSpacing: '4px',
          animation: 'slideUp 0.8s ease-out',
          '@keyframes slideUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(30px)'
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }
        }}
      >
        SAGAR JEWELLER
      </Typography>

      {/* Tagline */}
      <Typography
        variant="body2"
        sx={{
          color: '#d4af37',
          fontStyle: 'italic',
          letterSpacing: '2px',
          opacity: 0.8,
          animation: 'slideUp 0.8s ease-out 0.2s both'
        }}
      >
        Timeless Elegance Since 1985
      </Typography>

      {/* Progress Bar */}
      <Box
        sx={{
          width: { xs: '250px', md: '300px' },
          height: '3px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '3px',
          mt: 4,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #d4af37, #f4e4a1)',
            borderRadius: '3px',
            transition: 'width 0.05s linear'
          }}
        />
      </Box>

      {/* Loading Text */}
      <Typography
        variant="caption"
        sx={{
          color: 'rgba(255,255,255,0.5)',
          mt: 2,
          display: 'block',
          letterSpacing: '2px'
        }}
      >
        LOADING {progress}%
      </Typography>
    </Box>
  );
}

export default SplashScreen;