import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const leftMenuItems = ['HOME', 'ABOUT'];
  const rightMenuItems = ['COLLECTIONS', 'CONTACT US'];

  // Array of 5 slides with background images
  const slides = [
    {
      id: 1,
      image: '/images/slider.png',
      title: 'FOR EVERY BOND THAT LASTS A LIFETIME',
      subtitle: 'Crafted for timeless moments.'
    },
    {
      id: 2,
      image: '/images/aboutus.png',
      title: 'ELEGANCE THAT SPEAKS VOLUMES',
      subtitle: 'Discover our diamond collection'
    },
    {
      id: 3,
      image: '/images/2.png',
      title: 'CELEBRATE YOUR LOVE STORY',
      subtitle: 'The Promise bridal collection'
    },
    {
      id: 4,
      image: '/images/4.png',
      title: 'EVERYDAY GLAMOUR',
      subtitle: 'Effortless elegance for daily wear'
    },
    {
      id: 5,
      image: '/images/5.png',
      title: 'TIMELESS TRADITIONS',
      subtitle: 'Silver stories for every home'
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={{ bgcolor: '#fff' }}>
    {/* Header/Navigation - Logo Centered Between Menu Items */}
<AppBar 
  position="fixed" 
  elevation={0} 
  sx={{ 
    bgcolor: 'transparent',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
    py: 1,
    zIndex: 1200
  }}
>
  <Toolbar sx={{ 
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    px: { xs: 2, md: 6 }
  }}>
    
    {/* Mobile Menu Icon */}
    <IconButton 
      onClick={() => setMobileOpen(true)}
      sx={{ 
        display: { xs: 'block', md: 'none' }, 
        color: '#fff'
      }}
    >
      <MenuIcon />
    </IconButton>

    {/* Desktop Left Menu - HOME, ABOUT */}
    <Box sx={{ 
      display: { xs: 'none', md: 'flex' }, 
      gap: 4,
      flex: 1,
      alignItems: 'center'
    }}>
      {leftMenuItems.map((item) => (
        <Button 
          key={item} 
          onClick={() => window.location.href = item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
          sx={{ 
            color: '#fff', 
            fontWeight: 500,
            fontSize: '0.9rem',
            letterSpacing: '1px',
            '&:hover': { 
              color: '#d4af37',
              bgcolor: 'transparent'
            }
          }}
        >
          {item}
        </Button>
      ))}
      
      {/* App Store Icons on Desktop */}
      <Box sx={{ display: 'flex', gap: 1.5, ml: 2 }}>
        <IconButton
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.asterix.sagar', '_blank')}
          sx={{ p: 0.5, color: '#fff', '&:hover': { color: '#d4af37', transform: 'scale(1.1)' } }}
        >
          <AndroidIcon sx={{ fontSize: '28px' }} />
        </IconButton>
        <IconButton
          onClick={() => window.open('https://apps.apple.com/us/app/sagar-jewellers/id6760704954', '_blank')}
          sx={{ p: 0.5, color: '#fff', '&:hover': { color: '#d4af37', transform: 'scale(1.1)' } }}
        >
          <AppleIcon sx={{ fontSize: '28px' }} />
        </IconButton>
      </Box>
    </Box>

    {/* Centered Logo - Clickable to Home */}
    <Box 
      sx={{ 
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
      onClick={() => window.location.href = '/'}
    >
      <Box 
        component="img"
        src="/images/logo.png"
        alt="SAGAR JEWELLER"
        sx={{ 
          height: { xs: '40px', md: '60px' },
          width: 'auto'
        }}
      />
    </Box>

    {/* Desktop Right Menu - COLLECTIONS, CONTACT US */}
    <Box sx={{ 
      display: { xs: 'none', md: 'flex' }, 
      gap: 6,
      flex: 1,
      justifyContent: 'flex-end'
    }}>
      {rightMenuItems.map((item) => (
        <Button 
          key={item} 
          onClick={() => window.location.href = item === 'COLLECTIONS' ? '/collections' : '/contact'}
          sx={{ 
            color: '#fff', 
            fontWeight: 500,
            fontSize: '0.9rem',
            letterSpacing: '1px',
            '&:hover': { 
              color: '#d4af37',
              bgcolor: 'transparent'
            }
          }}
        >
          {item}
        </Button>
      ))}
    </Box>

    {/* Mobile App Icons - Now visible on mobile */}
    <Box sx={{ 
      display: { xs: 'flex', md: 'none' }, 
      gap: 1,
      alignItems: 'center'
    }}>
      <IconButton
        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.asterix.sagar', '_blank')}
        sx={{ p: 0.5, color: '#fff', '&:hover': { color: '#d4af37' } }}
      >
        <AndroidIcon sx={{ fontSize: '24px' }} />
      </IconButton>
      <IconButton
        onClick={() => window.open('https://apps.apple.com/us/app/sagar-jewellers/id6760704954', '_blank')}
        sx={{ p: 0.5, color: '#fff', '&:hover': { color: '#d4af37' } }}
      >
        <AppleIcon sx={{ fontSize: '24px' }} />
      </IconButton>
    </Box>
  </Toolbar>
</AppBar>

      {/* Mobile Drawer */}
{/* Mobile Drawer */}
<Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
  <Box sx={{ width: 280, p: 2, bgcolor: '#4d0e2e', height: '100%' }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
      <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Box sx={{ textAlign: 'center', mb: 4, cursor: 'pointer' }} onClick={() => { window.location.href = '/'; setMobileOpen(false); }}>
      <Typography variant="h6" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#d4af37', letterSpacing: '1px' }}>
        SAGAR JEWELLERS
      </Typography>
    </Box>
    <Divider sx={{ bgcolor: '#7a2a4a' }} />
    <List>
      <ListItem button onClick={() => { window.location.href = '/'; setMobileOpen(false); }}>
        <ListItemText primary="HOME" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
      </ListItem>
      <ListItem button onClick={() => { window.location.href = '/about'; setMobileOpen(false); }}>
        <ListItemText primary="ABOUT" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
      </ListItem>
      <ListItem button onClick={() => { window.location.href = '/collections'; setMobileOpen(false); }}>
        <ListItemText primary="COLLECTIONS" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
      </ListItem>
      <ListItem button onClick={() => { window.location.href = '/contact'; setMobileOpen(false); }}>
        <ListItemText primary="CONTACT US" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
      </ListItem>
    </List>
    
    {/* App Store Icons in Mobile Drawer */}
    <Divider sx={{ my: 2, bgcolor: '#7a2a4a' }} />
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
      <IconButton
        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.asterix.sagar', '_blank')}
        sx={{ color: '#fff', '&:hover': { color: '#d4af37' } }}
      >
        <AndroidIcon sx={{ fontSize: '32px' }} />
      </IconButton>
      <IconButton
        onClick={() => window.open('https://apps.apple.com/us/app/sagar-jewellers/id6760704954', '_blank')}
        sx={{ color: '#fff', '&:hover': { color: '#d4af37' } }}
      >
        <AppleIcon sx={{ fontSize: '32px' }} />
      </IconButton>
    </Box>
    <Typography variant="caption" align="center" sx={{ display: 'block', color: '#999', mt: 2 }}>
      Download our App
    </Typography>
  </Box>
</Drawer>

      {/* Hero Section with Background Image Slider */}
    {/* Hero Section with Background Image Slider */}
<Box 
  sx={{ 
    height: { xs: '100vh', md: '100vh' },
    position: 'relative',
    overflow: 'hidden'
  }}
>
  {/* Background Image Slider */}
  {slides.map((slide, index) => (
    <Box
      key={slide.id}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: currentSlide === index ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }
      }}
    />
  ))}

  {/* Content Container */}
  <Container 
    maxWidth="lg" 
    sx={{ 
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      zIndex: 10
    }}
  >
    <Box sx={{ 
      textAlign: 'center', 
      maxWidth: '900px', 
      mx: 'auto',
      width: '100%'
    }}>
      <Typography 
        variant="h1" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.8rem' },
          lineHeight: 1.2,
          color: '#fff',
          mb: 3,
          letterSpacing: '-0.5px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        {slides[currentSlide].title}
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
          color: '#fff',
          fontWeight: 400,
          fontStyle: 'italic',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }}
      >
        {slides[currentSlide].subtitle}
      </Typography>

      {/* Navigation Arrows - Simple Symbols (No import needed) */}
      <Box sx={{ 
        position: 'absolute',
        bottom: { xs: 20, md: '50%' },
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        transform: { md: 'translateY(50%)' },
        pointerEvents: 'none',
        px: { xs: 1, sm: 2, md: 4 }
      }}>
        <IconButton 
          onClick={prevSlide}
          sx={{ 
            bgcolor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(5px)',
            color: '#fff',
            width: { xs: 36, md: 48 },
            height: { xs: 36, md: 48 },
            '&:hover': { 
              bgcolor: '#d4af37',
              transform: 'scale(1.1)'
            },
            pointerEvents: 'auto',
            transition: 'all 0.3s ease'
          }}
        >
          <Typography sx={{ fontSize: { xs: 18, md: 24 }, lineHeight: 1 }}>◀</Typography>
        </IconButton>
        <IconButton 
          onClick={nextSlide}
          sx={{ 
            bgcolor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(5px)',
            color: '#fff',
            width: { xs: 36, md: 48 },
            height: { xs: 36, md: 48 },
            '&:hover': { 
              bgcolor: '#d4af37',
              transform: 'scale(1.1)'
            },
            pointerEvents: 'auto',
            transition: 'all 0.3s ease'
          }}
        >
          <Typography sx={{ fontSize: { xs: 18, md: 24 }, lineHeight: 1 }}>▶</Typography>
        </IconButton>
      </Box>

      {/* Dots Indicator */}
      <Box sx={{ 
        position: 'absolute',
        bottom: { xs: 20, md: 30 },
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: { xs: 1.5, md: 2 }
      }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: currentSlide === index ? { xs: 30, md: 40 } : { xs: 8, md: 10 },
              height: { xs: 8, md: 10 },
              borderRadius: '20px',
              bgcolor: currentSlide === index ? '#d4af37' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#d4af37',
                transform: 'scale(1.2)'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  </Container>
</Box>

      {/* Spacing for fixed header - not needed as hero is full screen */}
      <Toolbar sx={{ display: 'none' }} />

     

{/* Our Philosophy Section */}
<Box 
  sx={{ 
    py: { xs: 6, md: 12 }, 
    position: 'relative',
    backgroundImage: 'url(/images/bg.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: { xs: 'scroll', md: 'fixed' },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      zIndex: 0
    }
  }}
>
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
      
      {/* LEFT CONTENT */}
      <Grid item xs={12} md={5}>
        
        {/* OUR PHILOSOPHY with background image */}
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#d4af37', 
            letterSpacing: '3px',
            fontSize: { xs: '0.8rem', md: '1.2rem' },
            fontWeight: 600,
            mb: 3,
            display: 'inline-block',
            backgroundImage: 'url(/images/philosophy.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: { xs: '8px 16px', md: '12px 24px' },
            textTransform: 'uppercase'
          }}
        >
          OUR PHILOSOPHY
        </Typography>

        {/* CRAFTED FOR TREASURED BONDS */}
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: 'Playfair Display, serif',
            fontWeight: 400,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
            color: '#1a1a1a',
            mb: 2,
            lineHeight: 1.2,
            width: { xs: '100%', md: '590px' }
          }}
        >
          CRAFTED FOR TREASURED BONDS
        </Typography>

        {/* LINE IMAGE - line.webp */}
        <Box
          component="img"
          src="/images/line.webp"
          alt="Decorative Line"
          sx={{
            width: { xs: '200px', md: '400px' },
            height: 'auto',
            mb: 3,
            display: 'block'
          }}
        />

        {/* Description Text */}
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#666',
            fontSize: { xs: '0.9rem', md: '1rem' },
            lineHeight: 1.8,
            mb: 4
          }}
        >
          We believe that the most precious things in life aren't objects, but the invisible 
          threads that connect us — the quiet understanding with a lifelong friend, the 
          comforting hand of a parent, the joyous laughter shared with your children. 
          These are the bonds that truly matter, the moments that make your heart sing.
        </Typography>

        {/* Our Story Button */}
        <Button 
          variant="outlined" 
          onClick={() => window.location.href = '/about'}
          sx={{ 
            color: '#d4af37',
            borderColor: '#d4af37',
            borderRadius: 0,
            px: 5,
            py: 1.2,
            fontSize: '0.85rem',
            letterSpacing: '1px',
            cursor: 'pointer',
            '&:hover': {
              borderColor: '#b8960c',
              color: '#b8960c'
            }
          }}
        >
          Our Story
        </Button>
      </Grid>

      {/* RIGHT IMAGE - family.webp */}
      <Grid item xs={12} md={7}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            position: 'relative',
            width: '100%',
            overflow: 'visible'
          }}
        >
          {/* MAIN IMAGE - family.webp */}
        <Box
  component="img"
  src="/images/family.webp"
  alt="Family"
  sx={{
    width: '100%',
    maxWidth: '550px',
    height: 'auto',
    objectFit: 'contain',  // Changed from 'cover' to 'contain' to show transparent background
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    display: 'block',
    marginLeft: { xs: 'auto', md: 'auto' },
    marginRight: { xs: 'auto', md: 0 },
    backgroundColor: 'transparent',  // Ensure no background color
    mixBlendMode: 'multiply'  // Helps blend transparent images better
  }}
/>

          {/* DECORATIVE CURVE TOP LEFT */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: -10, md: -20 },
              left: { xs: -10, md: -20 },
              width: { xs: '60px', md: '100px' },
              height: { xs: '60px', md: '100px' },
              border: '2px solid #d4af37',
              borderRadius: '50%',
              borderRight: 'none',
              borderBottom: 'none',
              transform: 'rotate(-20deg)',
              opacity: 0.5,
              display: { xs: 'none', sm: 'block' }
            }}
          />

          {/* DECORATIVE CURVE BOTTOM RIGHT */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: -10, md: -20 },
              right: { xs: -10, md: -20 },
              width: { xs: '60px', md: '100px' },
              height: { xs: '60px', md: '100px' },
              border: '2px solid #d4af37',
              borderRadius: '50%',
              borderLeft: 'none',
              borderTop: 'none',
              transform: 'rotate(-20deg)',
              opacity: 0.5,
              display: { xs: 'none', sm: 'block' }
            }}
          />
        </Box>
      </Grid>

    </Grid>
  </Container>
</Box>
      

      {/* Collections Section */}
    
{/* Collections Section - Full Width Background Images */}
{/* Collections Section - Regular Images with Text Overlay */}
{/* Collections Section - Alternating Text Positions */}
<Box sx={{ bgcolor: '#faf8f0' }}>
  
  {/* Collection 1 - Everyday Glam (Text on RIGHT) */}
  {/* Collection 1 - Everyday Glam (Text on RIGHT) */}
<Box sx={{ position: 'relative', height: { xs: '500px', md: '600px' } }}>
  {/* Image - PNG */}
  <Box 
    component="img"
    src="/images/everyday-glam.png"
    alt="Everyday Glam"
    sx={{ 
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
  
  {/* Dark Overlay */}
  <Box 
    sx={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }} 
  />
  
  {/* Text Content - RIGHT Aligned */}
  <Container 
    maxWidth="lg" 
    sx={{ 
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 10
    }}
  >
    <Box sx={{ 
      color: '#fff', 
      maxWidth: '600px',
      textAlign: 'right',
      ml: 'auto',
      mr: { xs: 2, md: 0 }
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2,
          letterSpacing: '-0.5px'
        }}
      >
        Everyday Glam
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          fontSize: { xs: '0.9rem', md: '1.1rem' },
          mb: 3,
          lineHeight: 1.6,
          opacity: 0.95
        }}
      >
        Effortless elegance designed to shine with you, every single day.
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => window.location.href = '/collections'}  // ✅ CHANGED: Added navigation
        sx={{ 
          color: '#fff',
          borderColor: '#fff',
          borderRadius: 0,
          px: 4,
          py: 1.5,
          fontSize: '0.9rem',
          letterSpacing: '1px',
          cursor: 'pointer',  // ✅ CHANGED: Added cursor pointer
          '&:hover': {
            borderColor: '#d4af37',
            color: '#d4af37',
            bgcolor: 'transparent'
          }
        }}
      >
        Explore Our Collections →
      </Button>
    </Box>
  </Container>
</Box>

  {/* Collection 2 - Solitaire Series (Text on LEFT) */}
 {/* Collection 2 - Solitaire Series (Text on LEFT) */}
<Box sx={{ position: 'relative', height: { xs: '500px', md: '600px' } }}>
  {/* Image - PNG */}
  <Box 
    component="img"
    src="/images/solitaire-series.png"
    alt="Solitaire Series"
    sx={{ 
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
  
  {/* Dark Overlay */}
  <Box 
    sx={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }} 
  />
  
  {/* Text Content - LEFT Aligned */}
  <Container 
    maxWidth="lg" 
    sx={{ 
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 10
    }}
  >
    <Box sx={{ 
      color: '#fff', 
      maxWidth: '600px',
      textAlign: 'left',
      mr: 'auto',
      ml: { xs: 2, md: 0 }
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2
        }}
      >
        Solitaire Series
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, mb: 3, lineHeight: 1.6 }}
      >
        Celebrate your unique story with elegant diamond jewellery
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => window.location.href = '/collections'}  // ✅ ADDED: Navigation to collections page
        sx={{ 
          color: '#fff',
          borderColor: '#fff',
          borderRadius: 0,
          px: 4,
          py: 1.5,
          cursor: 'pointer',  // ✅ ADDED: Cursor pointer
          '&:hover': {
            borderColor: '#d4af37',
            color: '#d4af37'
          }
        }}
      >
        Explore Our Collections →
      </Button>
    </Box>
  </Container>
</Box>

  {/* Collection 3 - The Promise (Text on RIGHT) */}
 {/* Collection 3 - The Promise (Text on RIGHT) */}
<Box sx={{ position: 'relative', height: { xs: '500px', md: '600px' } }}>
  {/* Image - PNG */}
  <Box 
    component="img"
    src="/images/promise.png"
    alt="The Promise"
    sx={{ 
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
  
  {/* Dark Overlay */}
  <Box 
    sx={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }} 
  />
  
  {/* Text Content - RIGHT Aligned */}
  <Container 
    maxWidth="lg" 
    sx={{ 
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 10
    }}
  >
    <Box sx={{ 
      color: '#fff', 
      maxWidth: '600px',
      textAlign: 'right',
      ml: 'auto',
      mr: { xs: 2, md: 0 }
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2
        }}
      >
        The Promise
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, mb: 3, lineHeight: 1.6 }}
      >
        Mark the beginning of your new chapter with our bridal jewellery collection
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => window.location.href = '/collections'}  // ✅ ADDED: Navigation to collections page
        sx={{ 
          color: '#fff',
          borderColor: '#fff',
          borderRadius: 0,
          px: 4,
          py: 1.5,
          cursor: 'pointer',  // ✅ ADDED: Cursor pointer
          '&:hover': {
            borderColor: '#d4af37',
            color: '#d4af37'
          }
        }}
      >
        Explore Our Collections →
      </Button>
    </Box>
  </Container>
</Box>

  {/* Collection 4 - Silver Stories (Text on LEFT) */}
 {/* Collection 4 - Silver Stories (Text on LEFT) */}
<Box sx={{ position: 'relative', height: { xs: '500px', md: '600px' } }}>
  {/* Image - PNG */}
  <Box 
    component="img"
    src="/images/silver.png"
    alt="Silver Stories"
    sx={{ 
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  />
  
  {/* Dark Overlay */}
  <Box 
    sx={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }} 
  />
  
  {/* Text Content - LEFT Aligned */}
  <Container 
    maxWidth="lg" 
    sx={{ 
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 10
    }}
  >
    <Box sx={{ 
      color: '#fff', 
      maxWidth: '600px',
      textAlign: 'left',
      mr: 'auto',
      ml: { xs: 2, md: 0 }
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2
        }}
      >
        Silver Stories
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, mb: 3, lineHeight: 1.6 }}
      >
        Elevate your space & traditions with our beautifully crafted silver articles
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => window.location.href = '/collections'}  // ✅ ADDED: Navigation to collections page
        sx={{ 
          color: '#fff',
          borderColor: '#fff',
          borderRadius: 0,
          px: 4,
          py: 1.5,
          cursor: 'pointer',  // ✅ ADDED: Cursor pointer
          '&:hover': {
            borderColor: '#d4af37',
            color: '#d4af37'
          }
        }}
      >
        Explore Our Collections →
      </Button>
    </Box>
  </Container>
</Box>
</Box>


{/* Our Promise Section - With Background Image */}
<Box 
  sx={{ 
    py: { xs: 8, md: 12 }, 
    bgcolor: '#fff',
    position: 'relative',
    backgroundImage: 'url(/images/promise1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // White overlay with opacity
    }
  }}
>
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    {/* Header */}
    {/* Our Promise Header Images - Replace the Typography */}
    <Box 
      component="img"
      src="/images/our-promise.png"
      alt="Our Promise"
      sx={{ 
        display: 'block',
        maxWidth: '50%',
        height: 'auto',
        margin: '0 auto',
        mb: 10
      }}
    />

    <Grid container spacing={4}>
      {/* Purity Guaranteed */}
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Box 
            component="img"
            src="/images/group1.png"
            alt="Purity Guaranteed"
            sx={{ 
              width: '100%', 
              // maxWidth: '200px', 
              mx: 'auto', 
              mb: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}
          />
        </Box>
      </Grid>

      {/* Transparent Pricing */}
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Box 
            component="img"
            src="/images/group2.png"
            alt="Transparent Pricing"
            sx={{ 
              width: '100%', 
              // maxWidth: '200px', 
              mx: 'auto', 
              mb: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}
          />
        </Box>
      </Grid>

      {/* Value for Money */}
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Box 
            component="img"
            src="/images/group3.png"
            alt="Value for Money"
            sx={{ 
              width: '100%', 
              // maxWidth: '200px', 
              mx: 'auto', 
              mb: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}
          />
        </Box>
      </Grid>

      {/* Generations of Trust */}
      <Grid item xs={12} sm={6} md={3}>
        <Box textAlign="center">
          <Box 
            component="img"
            src="/images/group4.png"
            alt="Generations of Trust"
            sx={{ 
              width: '100%', 
              // maxWidth: '200px', 
              mx: 'auto', 
              mb: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}
          />
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>



{/* Footer */}
<Box sx={{ bgcolor: '#580f32', color: '#fff', py: 6 }}>
  <Container maxWidth="lg">
    <Grid container spacing={4}>
      
      {/* Column 1 - Logo and Brand */}
      <Grid item xs={12} sm={6} md={3}>
        <Box 
          component="img"
          src="/images/logo.png"
          alt="SAGAR JEWELLER"
          sx={{ 
            maxWidth: '200px',
            height: 'auto',
            mb: 2,
            mt: 10,
            mr: 5,
            cursor: 'pointer'
          }}
          onClick={() => window.location.href = '/'}
        />
      </Grid>
      
      {/* Column 2 - QUICK LINKS */}
      <Grid item xs={12} sm={6} md={3}>
        {/* Heading with Gold Color */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: '1rem', 
            color: '#d4af37',  // Changed to gold
            letterSpacing: '1px'
          }}
        >
          QUICK LINKS
        </Typography>
        
        {/* Line Image below heading */}
        <Box
          component="img"
          src="/images/line.webp"
          alt="line"
          sx={{
            width: '50px',
            height: 'auto',
            mb: 2,
            display: 'block'
          }}
        />
        
        {/* Links with Diamond Color */}
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 2, fontSize: '0.8rem' }}>
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/'}>Home</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/about'}>About Us</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/collections'}>Collections</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/contact'}>Contact Us</Box><br />
        </Typography>
      </Grid>
      
      {/* Column 3 - OUR POLICIES */}
      <Grid item xs={12} sm={6} md={3}>
        {/* Heading with Gold Color */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: '1rem', 
            color: '#d4af37',  // Changed to gold
            letterSpacing: '1px'
          }}
        >
          OUR POLICIES
        </Typography>
        
        {/* Line Image below heading */}
        <Box
          component="img"
          src="/images/line.webp"
          alt="line"
          sx={{
            width: '50px',
            height: 'auto',
            mb: 2,
            display: 'block'
          }}
        />
        
        {/* Links with Diamond Color */}
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 2, fontSize: '0.8rem' }}>
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/terms'}>Terms and Conditions</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/privacy'}>Privacy Policy</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/disclaimer'}>Disclaimer</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/refund'}>Refund Policy</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/shipping'}>Shipping and Delivery Policy</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/cancellation'}>Cancellation and Return Policy</Box>
        </Typography>
      </Grid>
      
      {/* Column 4 - REACH US */}
      <Grid item xs={12} sm={6} md={3}>
        {/* Heading with Gold Color */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: '1rem', 
            color: '#d4af37',  // Changed to gold
            letterSpacing: '1px'
          }}
        >
          REACH US
        </Typography>
        
        {/* Line Image below heading */}
        <Box
          component="img"
          src="/images/line.webp"
          alt="line"
          sx={{
            width: '50px',
            height: 'auto',
            mb: 2,
            display: 'block'
          }}
        />
        
        {/* Text with Diamond Color */}
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem', mb: 2 }}>
          Diamond Talkies Road, Opp. PCR Complex,<br />
          Chintamani - 563 125, Karnataka, India.
        </Typography>
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem', mb: 1 }}>
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = 'tel:+918154252379'}>
            +91 81542 52379, 99454 30961.
          </Box>
        </Typography>
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem' }}>
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = 'mailto:namasrinivasajewellers@gmail.com'}>
            namasrinivasajewellers@gmail.com
          </Box>
        </Typography>
      </Grid>
    </Grid>
    
    <Divider sx={{ my: 4, bgcolor: '#7a2a4a' }} />
    
    {/* Copyright */}
    <Typography variant="body2" align="center" sx={{ color: '#ccc', fontSize: '0.75rem' }}>
      © 2026 Sagar Jeweller. All rights reserved.
    </Typography>
  </Container>
</Box>
    </Box>
  );
}

export default HomePage;
