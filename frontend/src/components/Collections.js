import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Collections() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const leftMenuItems = ['HOME', 'ABOUT'];
  const rightMenuItems = ['COLLECTIONS', 'CONTACT US'];

  // State for each collection's current slide index
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);

  // Sliding images for each collection
  const slides1 = ['/images/e1.png', '/images/e2.png', '/images/e3.png', '/images/e4.png'];
  const slides2 = ['/images/s1.png', '/images/s2.png', '/images/s3.png', '/images/s4.png'];
  const slides3 = ['/images/p1.png', '/images/p2.png', '/images/p3.png', '/images/p4.png'];
  const slides4 = ['/images/sv1.png', '/images/sv2.png', '/images/sv3.png', '/images/sv4.png'];

  // Auto-slide effects for each collection
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prev) => (prev + 1) % slides1.length);
    }, 3000);
    const interval2 = setInterval(() => {
      setCurrentIndex2((prev) => (prev + 1) % slides2.length);
    }, 3000);
    const interval3 = setInterval(() => {
      setCurrentIndex3((prev) => (prev + 1) % slides3.length);
    }, 3000);
    const interval4 = setInterval(() => {
      setCurrentIndex4((prev) => (prev + 1) % slides4.length);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  // Reusable Sliding Images Component
  const SlidingImages = ({ images, currentIndex, onIndexChange, topImage }) => (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: { xs: 2, md: 4 }, 
      flexWrap: 'wrap',
      mt: 6
    }}>
      {images.map((img, index) => (
        <Box 
          key={index} 
          sx={{ 
            width: { xs: '100px', md: '160px' },
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: currentIndex === index ? 'translateY(-12px)' : 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-8px)'
            }
          }} 
          onClick={() => onIndexChange(index)}
        >
          {/* Image Container with Modern Rectangular Frame */}
          <Box sx={{ 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: currentIndex === index 
              ? '0 25px 40px -12px rgba(212, 175, 55, 0.4), 0 0 0 3px #d4af37' 
              : '0 12px 25px -8px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease',
            background: '#fff',
            padding: '4px'
          }}>
            <Box 
              component="img" 
              src={img} 
              sx={{ 
                width: '100%', 
                height: { xs: '100px', md: '160px' },
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }} 
            />
          </Box>
          
          {/* Active Indicator */}
          {currentIndex === index && (
            <Box sx={{ 
              width: '60%',
              height: '3px',
              background: 'linear-gradient(90deg, #d4af37, #f4e4a1)',
              margin: '12px auto 0',
              borderRadius: '3px',
              animation: 'slideIn 0.3s ease'
            }} />
          )}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        backgroundImage: 'url(/images/longbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      {/* CSS Animations */}
      <style>
        {`
          @keyframes slideIn {
            from {
              width: 0%;
              opacity: 0;
            }
            to {
              width: 60%;
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Dark Overlay */}
      <Box 
        sx={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 0
        }}
      />
      {/* Content Container */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header/Navigation */}
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
            
            <IconButton 
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, flex: 1 }}>
              {leftMenuItems.map((item) => (
                <Button 
                  key={item} 
                  onClick={() => window.location.href = item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  sx={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '1px', '&:hover': { color: '#d4af37' } }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box 
              sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }}
              onClick={() => window.location.href = '/'}
            >
              <Box component="img" src="/images/logo.png" alt="SAGAR JEWELLER" sx={{ height: { xs: '40px', md: '60px' }, width: 'auto' }} />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, flex: 1, justifyContent: 'flex-end' }}>
              {rightMenuItems.map((item) => (
                <Button 
                  key={item} 
                  onClick={() => window.location.href = item === 'COLLECTIONS' ? '/collections' : '/contact'}
                  sx={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '1px', '&:hover': { color: '#d4af37' } }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box sx={{ width: 40, display: { xs: 'block', md: 'none' } }} />
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
<Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
  <Box sx={{ width: 280, p: 2, bgcolor: '#4d0e2e', height: '100%' }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
      <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Box sx={{ textAlign: 'center', mb: 4, cursor: 'pointer' }} onClick={() => { window.location.href = '/'; setMobileOpen(false); }}>
      <Typography 
        variant="h6" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          color: '#d4af37',
          letterSpacing: '1px'
        }}
      >
        SAGAR JEWELLERS
      </Typography>
    </Box>
    <Divider sx={{ bgcolor: '#7a2a4a' }} />
    <List>
      <ListItem button onClick={() => { window.location.href = '/'; setMobileOpen(false); }}>
        <ListItemText 
          primary="HOME" 
          primaryTypographyProps={{ 
            sx: { textAlign: 'center', fontWeight: 500, color: '#fff', '&:hover': { color: '#d4af37' } }
          }} 
        />
      </ListItem>
      <ListItem button onClick={() => { window.location.href = '/about'; setMobileOpen(false); }}>
        <ListItemText 
          primary="ABOUT" 
          primaryTypographyProps={{ 
            sx: { textAlign: 'center', fontWeight: 500, color: '#fff', '&:hover': { color: '#d4af37' } }
          }} 
        />
      </ListItem>
      <ListItem button onClick={() => { window.location.href = '/collections'; setMobileOpen(false); }}>
        <ListItemText 
          primary="COLLECTIONS" 
          primaryTypographyProps={{ 
            sx: { textAlign: 'center', fontWeight: 500, color: '#fff', '&:hover': { color: '#d4af37' } }
          }} 
        />
      </ListItem>
      <ListItem button onClick={() => { window.location.href = '/contact'; setMobileOpen(false); }}>
        <ListItemText 
          primary="CONTACT US" 
          primaryTypographyProps={{ 
            sx: { textAlign: 'center', fontWeight: 500, color: '#fff', '&:hover': { color: '#d4af37' } }
          }} 
        />
      </ListItem>
    </List>
  </Box>
</Drawer>

        <Toolbar sx={{ minHeight: { xs: '70px', md: '80px' } }} />

      {/* Collection 1 - Everyday Glam */}
<Box sx={{ height: { xs: '600px', md: '700px' }, position: 'relative', display: 'flex', alignItems: 'center' }}>
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/images/collection1.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
  
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Box component="img" src="/images/eg.png" alt="Everyday Glam" sx={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }} />
    </Box>
    
    {/* Sliding Images - Increased Height and Width */}
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: { xs: 3, md: 5 }, 
      flexWrap: 'wrap',
      mt: 6
    }}>
      {slides1.map((img, index) => (
        <Box 
          key={index} 
          sx={{ 
            width: { xs: '150px', md: '220px' },
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: currentIndex1 === index ? 'translateY(-12px)' : 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-8px)'
            }
          }} 
          onClick={() => setCurrentIndex1(index)}
        >
          {/* Image Container with Modern Rectangular Frame */}
          <Box sx={{ 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: currentIndex1 === index 
              ? '0 25px 40px -12px rgba(212, 175, 55, 0.4), 0 0 0 3px #d4af37' 
              : '0 12px 25px -8px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease',
            background: '#fff',
            padding: '4px'
          }}>
            <Box 
              component="img" 
              src={img} 
              sx={{ 
                width: '100%', 
                height: { xs: '150px', md: '220px' },
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }} 
            />
          </Box>
          
          {/* Active Indicator Line */}
          {currentIndex1 === index && (
            <Box sx={{ 
              width: '60%',
              height: '3px',
              background: '#d4af37',
              margin: '12px auto 0',
              borderRadius: '2px'
            }} />
          )}
        </Box>
      ))}
    </Box>
    
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', borderRadius: '30px', px: 5, py: 1.5, '&:hover': { borderColor: '#d4af37', color: '#d4af37', transform: 'translateY(-2px)' } }}>Explore Collection →</Button>
    </Box>
  </Container>
</Box>

        {/* Collection 2 - Solitaire Series */}
<Box sx={{ height: { xs: '600px', md: '700px' }, position: 'relative', display: 'flex', alignItems: 'center' }}>
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/images/collection2.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
  
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Box component="img" src="/images/ss.png" alt="Everyday Glam" sx={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }} />
    </Box>
    
    {/* Sliding Images - Increased Height and Width */}
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: { xs: 3, md: 5 }, 
      flexWrap: 'wrap',
      mt: 6
    }}>
      {slides2.map((img, index) => (
        <Box 
          key={index} 
          sx={{ 
            width: { xs: '150px', md: '220px' },
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: currentIndex1 === index ? 'translateY(-12px)' : 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-8px)'
            }
          }} 
          onClick={() => setCurrentIndex1(index)}
        >
          {/* Image Container with Modern Rectangular Frame */}
          <Box sx={{ 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: currentIndex1 === index 
              ? '0 25px 40px -12px rgba(212, 175, 55, 0.4), 0 0 0 3px #d4af37' 
              : '0 12px 25px -8px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease',
            background: '#fff',
            padding: '4px'
          }}>
            <Box 
              component="img" 
              src={img} 
              sx={{ 
                width: '100%', 
                height: { xs: '150px', md: '220px' },
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }} 
            />
          </Box>
          
          {/* Active Indicator Line */}
          {currentIndex1 === index && (
            <Box sx={{ 
              width: '60%',
              height: '3px',
              background: '#d4af37',
              margin: '12px auto 0',
              borderRadius: '2px'
            }} />
          )}
        </Box>
      ))}
    </Box>
    
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', borderRadius: '30px', px: 5, py: 1.5, '&:hover': { borderColor: '#d4af37', color: '#d4af37', transform: 'translateY(-2px)' } }}>Explore Collection →</Button>
    </Box>
  </Container>
</Box>

        {/* Collection 3 - The Promise */}
<Box sx={{ height: { xs: '600px', md: '700px' }, position: 'relative', display: 'flex', alignItems: 'center' }}>
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/images/collection3.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
  
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Box component="img" src="/images/cs3.png" alt="Everyday Glam" sx={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }} />
    </Box>
    
    {/* Sliding Images - Increased Height and Width */}
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: { xs: 3, md: 5 }, 
      flexWrap: 'wrap',
      mt: 6
    }}>
      {slides3.map((img, index) => (
        <Box 
          key={index} 
          sx={{ 
            width: { xs: '150px', md: '220px' },
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: currentIndex1 === index ? 'translateY(-12px)' : 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-8px)'
            }
          }} 
          onClick={() => setCurrentIndex1(index)}
        >
          {/* Image Container with Modern Rectangular Frame */}
          <Box sx={{ 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: currentIndex1 === index 
              ? '0 25px 40px -12px rgba(212, 175, 55, 0.4), 0 0 0 3px #d4af37' 
              : '0 12px 25px -8px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease',
            background: '#fff',
            padding: '4px'
          }}>
            <Box 
              component="img" 
              src={img} 
              sx={{ 
                width: '100%', 
                height: { xs: '150px', md: '220px' },
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }} 
            />
          </Box>
          
          {/* Active Indicator Line */}
          {currentIndex1 === index && (
            <Box sx={{ 
              width: '60%',
              height: '3px',
              background: '#d4af37',
              margin: '12px auto 0',
              borderRadius: '2px'
            }} />
          )}
        </Box>
      ))}
    </Box>
    
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', borderRadius: '30px', px: 5, py: 1.5, '&:hover': { borderColor: '#d4af37', color: '#d4af37', transform: 'translateY(-2px)' } }}>Explore Collection →</Button>
    </Box>
  </Container>
</Box>

        {/* Collection 4 - Silver Stories */}
<Box sx={{ height: { xs: '600px', md: '700px' }, position: 'relative', display: 'flex', alignItems: 'center' }}>
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/images/collection4.png)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
  
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Box component="img" src="/images/ssbg.png" alt="Everyday Glam" sx={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }} />
    </Box>
    
    {/* Sliding Images - Increased Height and Width */}
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: { xs: 3, md: 5 }, 
      flexWrap: 'wrap',
      mt: 6
    }}>
      {slides4.map((img, index) => (
        <Box 
          key={index} 
          sx={{ 
            width: { xs: '150px', md: '220px' },
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: currentIndex1 === index ? 'translateY(-12px)' : 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-8px)'
            }
          }} 
          onClick={() => setCurrentIndex1(index)}
        >
          {/* Image Container with Modern Rectangular Frame */}
          <Box sx={{ 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: currentIndex1 === index 
              ? '0 25px 40px -12px rgba(212, 175, 55, 0.4), 0 0 0 3px #d4af37' 
              : '0 12px 25px -8px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease',
            background: '#fff',
            padding: '4px'
          }}>
            <Box 
              component="img" 
              src={img} 
              sx={{ 
                width: '100%', 
                height: { xs: '150px', md: '220px' },
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }} 
            />
          </Box>
          
          {/* Active Indicator Line */}
          {currentIndex1 === index && (
            <Box sx={{ 
              width: '60%',
              height: '3px',
              background: '#d4af37',
              margin: '12px auto 0',
              borderRadius: '2px'
            }} />
          )}
        </Box>
      ))}
    </Box>
    
    <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', borderRadius: '30px', px: 5, py: 1.5, '&:hover': { borderColor: '#d4af37', color: '#d4af37', transform: 'translateY(-2px)' } }}>Explore Collection →</Button>
    </Box>
  </Container>
</Box>

         {/* Footer - Same as Homepage */}
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


    </Box>
  );
}

export default Collections;