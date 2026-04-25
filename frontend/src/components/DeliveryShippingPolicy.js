import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function DeliveryShippingPolicy() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const leftMenuItems = ['HOME', 'ABOUT'];
  const rightMenuItems = ['COLLECTIONS', 'CONTACT US'];

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
            <Box 
              component="img"
              src="/images/logo.png"
              alt="SAGAR JEWELLER"
              sx={{ height: { xs: '40px', md: '60px' }, width: 'auto' }}
            />
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
        </Box>
      </Drawer>

      {/* Spacing for fixed header */}
      {/* <Toolbar sx={{ minHeight: { xs: '70px', md: '80px' } }} /> */}

      {/* Delivery and Shipping Policy Content with Full Background */}
      <Box 
        sx={{ 
          position: 'relative',
          backgroundImage: 'url(/images/longbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh'
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 0
          }}
        />

        {/* Content with Transparent Background */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 6 } }}>
          <Box sx={{ 
            p: { xs: 3, md: 5 },
            bgcolor: 'transparent',
            borderRadius: 2
          }}>
            {/* Title */}
            <Typography 
              variant="h3" 
              align="center" 
              sx={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                color: '#fff',
                mb: 1,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              Delivery and Shipping Policy
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center" 
              sx={{ 
                color: '#d4af37',
                mb: 4,
                letterSpacing: '1px'
              }}
            >
              Fast & Secure Delivery Across India
            </Typography>

            <Divider sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.3)' }} />

            {/* Shipping Policy Section */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Shipping Policy
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 3 }}>
              Sagar Jewellers offers shipping on every order within India. Your order will be shipped to you with a fully secured logistics system. We request customers to inspect the delivered package for any damage or tampering before receiving or signing the receipt.
            </Typography>

            {/* Delivery Section */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Delivery
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Packages will be dispatched within 2 days of payment and are shipped via courier service. The shipping fee includes handling and packing fees as well as postage costs. Transport fees will vary and are based on the total weight of the package. We suggest you club your items in one order. If you place separate orders for a group of items, the shipping fee will apply to each of them.
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Boxes are amply sized and your items are well-protected.
            </Typography>

            {/* Additional Information */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Need Assistance?
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              If you have any questions about our Delivery and Shipping Policy, please feel free to contact us through our website or write to us at Sales@sagarjewels.in
            </Typography>
          </Box>
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
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: '1rem', 
            color: '#d4af37',
            letterSpacing: '1px'
          }}
        >
          QUICK LINKS
        </Typography>
        
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
        
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 2, fontSize: '0.8rem' }}>
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/'}>Home</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/about'}>About Us</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/collections'}>Collections</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/contact'}>Contact Us</Box><br />
        </Typography>
      </Grid>
      
      {/* Column 3 - OUR POLICIES */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: '1rem', 
            color: '#d4af37',
            letterSpacing: '1px'
          }}
        >
          OUR POLICIES
        </Typography>
        
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
        
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 2, fontSize: '0.8rem' }}>
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/terms'}>Terms and Conditions</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/privacy'}>Privacy Policy</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/disclaimer'}>Disclaimer</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/refund'}>Refund Policy</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/shipping'}>Shipping and Delivery Policy</Box><br />
          <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/cancellation'}>Cancellation and Return Policy</Box>
        </Typography>
      </Grid>
      
      {/* Column 4 - REACH US - Updated Information */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: '1rem', 
            color: '#d4af37',
            letterSpacing: '1px'
          }}
        >
          REACH US
        </Typography>
        
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
        
        {/* Address */}
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem', mb: 2 }}>
          📍 71, 12th Cross Rd, 2nd Stage,<br />
          Mahalakshmi Layout,<br />
          Bengaluru, Karnataka – 560086
        </Typography>
        
        {/* Phone */}
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem', mb: 1 }}>
          📞 <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = 'tel:+918277181308'}>
            +91 8277181308
          </Box><br />
          📞 <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = 'tel:+917090850000'}>
            +91 7090850000
          </Box>
        </Typography>
        
        {/* Email */}
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem', mb: 1 }}>
          📧 <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = 'mailto:sales@sagarjewels.in'}>
            sales@sagarjewels.in
          </Box>
        </Typography>
        
        {/* Website */}
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem', mb: 1 }}>
          🌐 <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.open('https://sagarjewels.in', '_blank')}>
            sagarjewels.in
          </Box>
        </Typography>
        
        {/* Store Timings
        <Typography variant="body2" sx={{ color: '#b8b8b8', lineHeight: 1.8, fontSize: '0.8rem', mt: 2 }}>
          🕒 Monday – Sunday: 10:00 AM – 9:00 PM
        </Typography> */}
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

export default DeliveryShippingPolicy;