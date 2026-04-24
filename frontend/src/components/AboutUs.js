import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function AboutUs() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const leftMenuItems = ['HOME', 'ABOUT'];
  const rightMenuItems = ['COLLECTIONS', 'CONTACT US'];

  return (
    <Box sx={{ bgcolor: '#fff' }}>
      {/* Header/Navigation - Same as Homepage */}
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
      gap: 6,
      flex: 1
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

    {/* Empty div for mobile balance */}
    <Box sx={{ width: 40, display: { xs: 'block', md: 'none' } }} />
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

      {/* Hero Section - Single Slide (FOR EVERY BOND THAT LASTS A LIFETIME) */}
      <Box 
        sx={{ 
          height: { xs: '70vh', md: '85vh' },
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(/images/aboutbg.jpg)',
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
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }
        }}
      >
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
              FOR EVERY BOND THAT
              <br />
              LASTS A LIFETIME
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
              Crafted for timeless moments.
            </Typography>
          </Box>
        </Container>
      </Box>

{/* OUR STORY SECTION */}
<Box
  sx={{
    py: { xs: 6, md: 10 },
    position: 'relative',
    backgroundImage: 'url(/images/bg.webp)', // 👉 background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <Container maxWidth="lg">
    <Grid container spacing={4} alignItems="center">
      
      {/* LEFT SIDE LOGO */}
      <Grid item xs={12} md={4}>
        <Box
          component="img"
          src="/images/logo.webp"
          alt="Logo"
          sx={{
            width: { xs: '120px', md: '180px' },
            display: 'block',
            mx: { xs: 'auto', md: 0 }, // center on mobile, left on desktop
          }}
        />
      </Grid>

      {/* RIGHT SIDE CONTENT */}
      <Grid item xs={12} md={8}>
        
        {/* HEADING */}
        <Typography
          variant="h4"
          sx={{
            color: '#d4af37',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
            mb: 1,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          OUR STORY
        </Typography>

        {/* LINE IMAGE */}
        <Box
          component="img"
          src="/images/line.webp"
          alt="line"
          sx={{
            width: '180px',
            mb: 3,
            display: { xs: 'block', md: 'block' },
            mx: { xs: 'auto', md: 0 }
          }}
        />

        {/* TEXT */}
        <Typography
          sx={{
            color: '#333',
            fontSize: '1rem',
            lineHeight: 1.8,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Sagar Jewellers stands as a beacon of exquisite craftsmanship, 
          unwavering trust, and unparalleled quality in the world of fine jewellery. 
          With a rich heritage spanning generations, we have dedicated ourselves to 
          crafting and creating diverse collections in gold, diamond, and silver. 
          Our journey began with a simple yet profound belief: that every piece of 
          jewellery holds a unique story, a memory, or a promise. We seamlessly blend 
          traditional charm with modern aesthetics, ensuring each design is not just 
          a form of adornment, but a timeless heirloom designed to be cherished across generations.
        </Typography>

      </Grid>
    </Grid>
  </Container>
</Box>

    {/* OUR JOURNEY IN HIS WORDS Section - Flexbox Layout */}
<Box 
  sx={{ 
    py: { xs: 6, md: 8 },
    position: 'relative',
    backgroundImage: 'url(/images/bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4
    }}>
      
      {/* Left Image */}
      <Box 
        component="img"
        src="/images/left.png"
        alt="Left Decoration"
        sx={{ 
          width: { xs: '80px', md: '380px' },
          height: 'auto'
        }}
      />
      
      {/* Center Content */}
      <Box sx={{ textAlign: 'center', maxWidth: '600px' }}>
  <Box 
  component="img"
  src="/images/profile.png"
  alt="Vinod Kumar"
  sx={{ 
    width: { xs: '120px', md: '300px' },
    height: { xs: '120px', md: '400px' },
    borderRadius: '10%',
    objectFit: 'cover',
    display: 'block',
    mx: 'auto', // 👉 centers horizontally
    mt: -5,
    border: '3px solid #d4af37'
  }}
/>
        
  {/* Our Journey Section */}
<Box 
  sx={{ 
    py: { xs: 6, md: 8 },
    position: 'relative'
  }}
>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
      
      {/* OUR JOURNEY, IN HIS WORDS - Text Content */}
     <Typography 
  variant="h3" 
  sx={{ 
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    fontSize: { xs: '1.2rem', md: '2.5rem' }, // slightly reduced for mobile
    color: '#d4af37', // 👉 gold color
    mb: 3,
    textAlign: 'center',
    whiteSpace: 'nowrap', // 👉 force single line
    position: 'relative',
    display: 'inline-block',
    mx: 'auto'
  }}
>
  OUR JOURNEY, IN HIS WORDS

  {/* underline */}
  <Box
    sx={{
      width: '60%',
      height: '3px',
      backgroundColor: '#d4af37',
      margin: '10px auto 0',
      borderRadius: '2px'
    }}
  />
</Typography>

      {/* Quote Text */}
      {/* <Typography 
        variant="body1" 
        sx={{ 
          color: '#666',
          fontSize: { xs: '0.95rem', md: '1.1rem' },
          lineHeight: 1.8,
          mb: 3,
          fontStyle: 'italic',
          textAlign: 'center',
          widows:'100%',
        }}
      >
        "For generations, <strong>Sagar Jewellers</strong> has been more than a business; it's been a passion fueled by the trust and smiles of our patrons. Every piece we craft carries a piece of our heart, designed to be a timeless part of your journey. Welcome to the Sagar family."
      </Typography> */}

      <Typography 
  variant="body1" 
  sx={{ 
    fontSize: { xs: '0.95rem', md: '1.1rem' },
    lineHeight: 1.8,
    mb: 3,
    fontStyle: 'italic',
    textAlign: 'center',
    width: '100%',
    background: 'linear-gradient(135deg, #ffffff, #dcdcdc, #bfbfbf, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  "For generations, <strong>Sagar Jewellers</strong> has been more than a business; it's been a passion fueled by the trust and smiles of our patrons. Every piece we craft carries a piece of our heart, designed to be a timeless part of your journey. Welcome to the Sagar family."
</Typography>

      {/* Author Name */}
      <Typography 
        variant="h6" 
        sx={{ 
          fontFamily: 'Playfair Display, serif',
          fontWeight: 600,
          color: '#d4af37',
          mb: 4,
          textAlign: 'center'
        }}
      >
        — Vinod Kumar
      </Typography>

      {/* Contact Us Button */}
      <Button 
        variant="outlined" 
        onClick={() => window.location.href = '/contact'}
        sx={{ 
          color: '#d4af37',
          borderColor: '#d4af37',
          borderRadius: 0,
          px: 5,
          py: 1.5,
          fontSize: '0.9rem',
          letterSpacing: '1px',
          cursor: 'pointer',
          bgcolor: 'transparent',
          '&:hover': {
            borderColor: '#b8960c',
            color: '#b8960c',
            bgcolor: 'transparent'
          }
        }}
      >
        Contact Us
      </Button>

    </Box>
  </Container>
</Box>
      </Box>
      
      {/* Right Image */}
      <Box 
        component="img"
        src="/images/right.png"
        alt="Right Decoration"
        sx={{ 
          width: { xs: '80px', md: '380px' },
          height: 'auto'
        }}
      />
      
    </Box>
  </Container>
</Box>

      {/* Contact Us Section */}
      {/* <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#1a1a1a',
                  mb: 3
                }}
              >
                Contact Us
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, mb: 2 }}>
                We'd love to hear from you. Reach out to us for any inquiries, custom designs, or to schedule a visit to our showroom.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#d4af37',
                  color: '#1a1a1a',
                  borderRadius: 0,
                  px: 4,
                  py: 1.5,
                  '&:hover': { bgcolor: '#b8960c' }
                }}
              >
                Get in Touch
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ bgcolor: '#faf8f0', p: 4 }}>
                <Typography variant="h6" sx={{ color: '#d4af37', mb: 2 }}>CONTACT INFO</Typography>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 2 }}>
                  8277181308<br />
                  7090850000<br />
                  Sales@sagarjewels.in<br />
                  sagarjewels.in
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

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
  );
}

export default AboutUs;