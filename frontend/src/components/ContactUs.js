import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider,
  TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

function ContactUs() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const leftMenuItems = ['HOME', 'ABOUT'];
  const rightMenuItems = ['COLLECTIONS', 'CONTACT US'];

  // Live location coordinates for Sagar Jeweller
  const mapLocation = {
    address: "71, 12th cross, Mahalakshmi Layout, Bangalore 560086",
    lat: 12.9788,
    lng: 77.5719
  };

  return (
    <Box sx={{ bgcolor: '#fff' }}>
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

      {/* Spacing for fixed header */}
      {/* <Toolbar sx={{ minHeight: { xs: '70px', md: '80px' } }} /> */}

      

     {/* Hero Section - YOUR PERFECT PIECE AWAITS */}
<Box 
  sx={{ 
    py: { xs: 8, md: 8 },
    position: 'relative',
    backgroundImage: 'url(/images/bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    height:'50%',
  }}
>
  {/* Dark overlay for better text readability */}
  <Box 
    sx={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 0
    }}
  />
  
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
    <Typography 
      variant="h2" 
      sx={{ 
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        fontSize: { xs: '2rem', md: '3rem' },
        color: '#fff',
        mb: 3,
        mt:8,
        letterSpacing: '-0.5px'
      }}
    >
      YOUR PERFECT PIECE AWAITS.
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ 
        color: '#fff',
        fontSize: { xs: '0.9rem', md: '1rem' },
        lineHeight: 1.8,
        maxWidth: '800px',
        mx: 'auto'
      }}
    >
      Whether you're seeking a custom design, expert advice, or simply wish to explore our collections in person, our team is here to assist you. Reach out to us, and let's make your jewellery dreams a reality.
    </Typography>
  </Container>
</Box>

      {/* Main Contact Section - Full Background Image */}
      <Box 
        sx={{ 
          position: 'relative',
          backgroundImage: 'url(/images/contactbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay for better readability */}
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0
          }}
        />
        
        {/* Content on top of background */}
        <Box sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              
              {/* Left Side - Contact Form */}
              <Grid item xs={12} md={6}>
                <Box component="form" sx={{ maxWidth: '100%' }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: '#fff' }}
                    InputProps={{ sx: { borderRadius: 0 } }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    type="email"
                    sx={{ mb: 3, bgcolor: '#fff' }}
                    InputProps={{ sx: { borderRadius: 0 } }}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    sx={{ mb: 3, bgcolor: '#fff' }}
                    InputProps={{ sx: { borderRadius: 0 } }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ mb: 3, bgcolor: '#fff' }}
                    InputProps={{ sx: { borderRadius: 0 } }}
                  />
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{ 
                      bgcolor: '#d4af37',
                      color: '#1a1a1a',
                      borderRadius: 0,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      '&:hover': { bgcolor: '#b8960c' }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Grid>

              {/* Right Side - Map and Contact Info */}
              <Grid item xs={12} md={6}>
                {/* Live Map */}
                <Box 
                  sx={{ 
                    height: '250px',
                    width: '100%',
                    mb: 4,
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                >
                  <iframe
                    title="Sagar Jeweller Location"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=77.55,12.96,77.59,13.00&layer=mapnik&marker=${mapLocation.lat},${mapLocation.lng}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </Box>

                {/* Contact Information */}
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600,
                    color: '#d4af37',
                    mb: 3,
                    letterSpacing: '1px'
                  }}
                >
                  CONNECT WITH US
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#fff', lineHeight: 1.8, mb: 1 }}>
                    <strong>71, 12th cross, Mahalakshmi Layout,</strong><br />
                    Bangalore 560086
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', lineHeight: 1.8, mb: 1 }}>
                    <PhoneIcon sx={{ fontSize: '16px', mr: 1, verticalAlign: 'middle' }} />
                    8277181308<br />
                    <PhoneIcon sx={{ fontSize: '16px', mr: 1, verticalAlign: 'middle' }} />
                    7090850000
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', lineHeight: 1.8 }}>
                    <EmailIcon sx={{ fontSize: '16px', mr: 1, verticalAlign: 'middle' }} />
                    Sales@sagarjewels.in<br />
                    <LanguageIcon sx={{ fontSize: '16px', mr: 1, verticalAlign: 'middle' }} />
                    sagarjewels.in
                  </Typography>
                </Box>

                {/* Get Directions Button */}
                <Button 
                  variant="outlined"
                  startIcon={<LocationOnIcon />}
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapLocation.address)}`, '_blank')}
                  sx={{ 
                    color: '#d4af37',
                    borderColor: '#d4af37',
                    borderRadius: 0,
                    mt: 2,
                    bgcolor: 'rgba(0,0,0,0.5)',
                    '&:hover': { 
                      borderColor: '#fff',
                      color: '#fff',
                      bgcolor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                >
                  Get Directions
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
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

export default ContactUs;