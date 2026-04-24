import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function RefundPolicy() {
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

      {/* Refund Policy Content with Full Background */}
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
              Refund Policy
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
              Our Commitment to Your Satisfaction
            </Typography>

            <Divider sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.3)' }} />

            {/* Main Refund Policy Content */}
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 3 }}>
              In case the item you have ordered has been shipped but has not yet been delivered to you, you may still cancel the order online. Your refund will be processed within 7 working days once we receive the originally ordered item back from the courier.
            </Typography>

            {/* Credit Card Section */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Credit Card
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              The credit card account of the Member will be re-credited with the refund amount by Sagar Jewellers. The refund amount will be credited to the Member's account within the time span stipulated by the bank which has issued the credit card.
            </Typography>

            {/* Cheque or Wire Transfer Section */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Cheque or Wire Transfer
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              The refund amount shall be deposited into the bank account of the Member by Sagar Jewellers within seven (7) business days after the receipt of a request for refund by the Member.
            </Typography>

            {/* Additional Note */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Need Help?
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              If you have any questions about our Refund Policy, please feel free to contact us through our website or write to us at Sales@sagarjewels.in
            </Typography>
          </Box>
        </Container>
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

export default RefundPolicy;