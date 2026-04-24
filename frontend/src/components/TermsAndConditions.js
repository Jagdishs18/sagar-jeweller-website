import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider,
  Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';  // Add this import

function TermsAndConditions() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();  // Add this

  const leftMenuItems = ['HOME', 'ABOUT'];
  const rightMenuItems = ['COLLECTIONS', 'CONTACT US'];

  // Navigation function
  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
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
                onClick={() => handleNavigation(item === 'HOME' ? '/' : `/${item.toLowerCase()}`)}
                sx={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '1px', '&:hover': { color: '#d4af37' } }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box 
            sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }}
            onClick={() => handleNavigation('/')}
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
                onClick={() => handleNavigation(item === 'COLLECTIONS' ? '/collections' : '/contact')}
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
          <Box sx={{ textAlign: 'center', mb: 4, cursor: 'pointer' }} onClick={() => handleNavigation('/')}>
            <Typography variant="h6" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#d4af37', letterSpacing: '1px' }}>
              SAGAR JEWELLERS
            </Typography>
          </Box>
          <Divider sx={{ bgcolor: '#7a2a4a' }} />
          <List>
            <ListItem button onClick={() => handleNavigation('/')}>
              <ListItemText primary="HOME" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/about')}>
              <ListItemText primary="ABOUT" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/collections')}>
              <ListItemText primary="COLLECTIONS" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/contact')}>
              <ListItemText primary="CONTACT US" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Spacing for fixed header */}
      {/* <Toolbar sx={{ minHeight: { xs: '70px', md: '80px' } }} /> */}

      {/* Terms and Conditions Content with Full Background */}
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
              Terms and Conditions
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
              of Use
            </Typography>

            <Divider sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.3)' }} />

            {/* Terms of Use Section */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Terms of Use
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Please read these terms of use carefully before using this website. If you do not agree to this Terms of Use you may not use this Website. By using this Website, you signify your explicit assent to this Terms of Use as well as the Website's Privacy Policy (which is hereby incorporated by reference herein). These Terms of Use sets out the legally binding terms of services available on the Website as well as the terms of use of this Website. These Terms of Use along with the Privacy Policy extends to both users, who visit the Website but do not transact business on the Website ("Users / Guests") as well as users who are registered with the Website to transact business on the Website ("Members"). The Company reserves the right to modify or terminate any portion of the Website or the Services offered by the Company for any reason, without notice and without liability to you or any third party. You are responsible for regularly reviewing these Terms of Use so that you will be apprised of any changes. Nothing in these Terms of Use should be construed to confer any rights to third-party beneficiaries.
            </Typography>

            {/* Description of Services */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Description of Services
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              This Website provides access to trading, pricing, news and other information services related to Sagar Jewellers. Certain Services available on this Website are for the use of Members only. Please note that some of the terms of these Terms of Use differ for purchases for personal consumption and for investment purposes. This Website offers services for Members who wish to purchase from Sagar Jewellers for personal consumption, inclusive of customized and readymade Jewellery. Some items may appear slightly larger or smaller than actual size due to screen defaults and photography techniques. Sometimes the items may be represented larger than the actual size in order to clearly show details, or smaller than the actual size in order to show the entire item. The Company shall not be liable for any legal action on this account.
            </Typography>

            {/* User Registration */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              User Registration
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Users may register on the Website to become Members prior to the completion of any transaction on the Website. To register on the Website, the User will have to provide Personal Information (as defined in the Privacy Policy), including but not limited to name, e-mail, contact number, and contact address, which will be used for verification purposes. Registration is only a one-time process and if the Member has previously registered, he/she shall login/sign into his/her account.
            </Typography>

            {/* Order */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Order
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              In the event of a User wishing to make a purchase, the User may be required to register on the website after adding the item(s) to the shopping cart. Members shall also provide any other mandatory information required under the law, such as Personal Account Number (PAN), at the time of purchase if required. Orders are normally considered complete only after the payment has been received by Sagar Jewellers. To confirm orders, Sagar Jewellers may at random call Members who have placed orders through the Website. We will confirm the order only after verification. In the event the bank rejects or declines to honour any payment transaction made by a Member towards an order, Sagar Jewellers shall have the right to refuse to ship the order to the Member without any liability whatsoever.
            </Typography>

            {/* Terms & Conditions of Use */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Terms & Conditions of Use of the Website
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              BY USING THIS WEBSITE YOU REPRESENT AND WARRANT THAT: You are 18 years of age or older and that your use of the Website and/or Services shall not violate any applicable law or regulation. All registration information you submit is truthful and accurate and that you agree to maintain the accuracy of such information. Your membership is solely for your personal and non-commercial use. Any use of this Website or its content other than for personal purposes is prohibited. Your personal and non-commercial use of this Website shall be subject to the following restrictions: (i) you may not modify any content of the Website, including but not limited to any public display, description, performance, sale, rental, or pricing of the product; (ii) you may not decompile, reverse engineer, or disassemble the content; or (iii) remove any copyright, trademark registration, or other proprietary notices from the content. You further agree not to access or use this Website in any manner that may be harmful to the operation of this Website or its content.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              You will not (a) use any product or service available on the Website and/or Services for commercial purposes of any kind, or (b) advertise or sell any products, services or otherwise (whether or not for profit), or solicit others (including, without limitation, solicitations for contributions or donations) or use any public forum for commercial purposes of any kind, or (c) use the Website and/or Services in any way that is unlawful, or harms Sagar Jewellers or any other person or entity, as determined in Sagar Jewellers' sole discretion.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              You will not post, submit, upload, distribute, or otherwise transmit or make available any software or other computer files that contain a virus or other harmful component, or otherwise impair or damage the Website and/or Services or any connected network, or otherwise interfere with any person or entity's use or enjoyment of the Website and/or Services. You will not engage in any form of antisocial, disrupting, or destructive acts, including "flaming," "spamming," "flooding," "trolling," "phishing" and "griefing" as those terms are commonly understood and used on the Internet. You will not delete or modify any content of the Website and/or Services, including but not limited to legal notices, disclaimers or proprietary notices such as copyright or trademark symbols, logos, that you do not own or have express permission to modify.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              https://sagarjewels.in/ cannot and will not assure that other users are or will be complying with the foregoing rules or any other provisions of this Terms of Use, and, as between you and https://sagarjewels.in/, you hereby assume all risk of harm or injury resulting from any such lack of compliance. All information, content and material contained in the Website and/or Services are https://sagarjewels.in/'s copyrighted property. All trademarks, service marks, trade names, and trade dress are proprietary to https://sagarjewels.in/. No information, content or material from the Website and/or Services may be copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way without https://sagarjewels.in/'s express written permission.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              You acknowledge that when you access a link that leaves the Website, the site you will enter is not controlled by https://sagarjewels.in/ and different terms of use and privacy policy may apply. By accessing links to other sites, you acknowledge that https://sagarjewels.in/ is not responsible for those sites. https://sagarjewels.in/ reserves the right to disable links from third-party sites to the Website, although https://sagarjewels.in/ is under no obligation to do so.
            </Typography>

            {/* Disclaimer */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Disclaimer
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              YOU EXPRESSLY UNDERSTAND AND AGREE THAT: The information, content and materials on this website and/or services are provided on an "as is" and "as available" basis. https://sagarjewels.in/ and all its affiliates, officers, employees, agents, partners and licensors disclaim all warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose and non-infringement. https://sagarjewels.in/ makes all reasonable efforts to display the products listed for sale on its website(s) as accurately as possible. However, https://sagarjewels.in/ cannot guarantee that your monitor's display of any product colour, texture or detail will be accurate. https://sagarjewels.in/ does not warrant that product descriptions or other content are accurate, complete, reliable, current or error-free. While https://sagarjewels.in/ makes every effort to ensure that products are described and priced accurately, in the event that an item is deemed to be priced incorrectly, https://sagarjewels.in/ reserves the right to refuse the sale of that item.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              https://sagarjewels.in/ does not warrant that the functions contained in content, information and materials on the website and/or services will be uninterrupted, timely or error-free. Any material downloaded or otherwise obtained through the website and/or services is accessed at your own risk. You hereby indemnify, defend, and hold https://sagarjewels.in/ harmless from and against any and all losses, damages, liabilities and costs arising from your use of the website. You expressly understand that under no circumstances shall the Company be liable for any damages including loss of profits, data, or goodwill.
            </Typography>

            {/* Final Acceptance */}
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Final Acceptance
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              I HAVE READ THE TERMS OF USE AND AGREE TO ALL OF THE PROVISIONS CONTAINED ABOVE.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer with Working Links */}
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

export default TermsAndConditions;