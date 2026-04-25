// import React, { useState } from 'react';
// import {
//   AppBar, Toolbar, Typography, Button, Container, Grid, Box,
//   IconButton, Drawer, List, ListItem, ListItemText, Divider
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// function PrivacyPolicy() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const leftMenuItems = ['HOME', 'ABOUT'];
//   const rightMenuItems = ['COLLECTIONS', 'CONTACT US'];

//   return (
//     <Box sx={{ bgcolor: '#fff' }}>
//       {/* Header/Navigation */}
//       <AppBar 
//         position="fixed" 
//         elevation={0} 
//         sx={{ 
//           bgcolor: 'transparent',
//           background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
//           py: 1,
//           zIndex: 1200
//         }}
//       >
//         <Toolbar sx={{ 
//           display: 'flex', 
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           px: { xs: 2, md: 6 }
//         }}>
          
//           <IconButton 
//             onClick={() => setMobileOpen(true)}
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, flex: 1 }}>
//             {leftMenuItems.map((item) => (
//               <Button 
//                 key={item} 
//                 onClick={() => window.location.href = item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
//                 sx={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '1px', '&:hover': { color: '#d4af37' } }}
//               >
//                 {item}
//               </Button>
//             ))}
//           </Box>

//           <Box 
//             sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }}
//             onClick={() => window.location.href = '/'}
//           >
//             <Box 
//               component="img"
//               src="/images/logo.png"
//               alt="SAGAR JEWELLER"
//               sx={{ height: { xs: '40px', md: '60px' }, width: 'auto' }}
//             />
//           </Box>

//           <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, flex: 1, justifyContent: 'flex-end' }}>
//             {rightMenuItems.map((item) => (
//               <Button 
//                 key={item} 
//                 onClick={() => window.location.href = item === 'COLLECTIONS' ? '/collections' : '/contact'}
//                 sx={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '1px', '&:hover': { color: '#d4af37' } }}
//               >
//                 {item}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ width: 40, display: { xs: 'block', md: 'none' } }} />
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
//         <Box sx={{ width: 280, p: 2, bgcolor: '#4d0e2e', height: '100%' }}>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
//             <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Box sx={{ textAlign: 'center', mb: 4, cursor: 'pointer' }} onClick={() => { window.location.href = '/'; setMobileOpen(false); }}>
//             <Typography variant="h6" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#d4af37', letterSpacing: '1px' }}>
//               SAGAR JEWELLERS
//             </Typography>
//           </Box>
//           <Divider sx={{ bgcolor: '#7a2a4a' }} />
//           <List>
//             <ListItem button onClick={() => { window.location.href = '/'; setMobileOpen(false); }}>
//               <ListItemText primary="HOME" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
//             </ListItem>
//             <ListItem button onClick={() => { window.location.href = '/about'; setMobileOpen(false); }}>
//               <ListItemText primary="ABOUT" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
//             </ListItem>
//             <ListItem button onClick={() => { window.location.href = '/collections'; setMobileOpen(false); }}>
//               <ListItemText primary="COLLECTIONS" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
//             </ListItem>
//             <ListItem button onClick={() => { window.location.href = '/contact'; setMobileOpen(false); }}>
//               <ListItemText primary="CONTACT US" primaryTypographyProps={{ sx: { textAlign: 'center', color: '#fff', '&:hover': { color: '#d4af37' } } }} />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       {/* Spacing for fixed header */}
//       {/* <Toolbar sx={{ minHeight: { xs: '70px', md: '80px' } }} /> */}

//        <Box 
//                     sx={{ 
//                       position: 'fixed',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       backgroundColor: 'rgba(0, 0, 0, 0.3)',
//                       zIndex: 0
//                     }}
//                   />

//       {/* Privacy Policy Content with Full Background */}
//       <Box 
//         sx={{ 
//           position: 'relative',
//           backgroundImage: 'url(/images/longbg.png)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'fixed',
//           minHeight: '100vh'
//         }}
//       >
//         {/* Dark Overlay for better readability */}
//         <Box 
//           sx={{ 
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.7)',
//             zIndex: 0
//           }}
//         />

//         {/* Content with Transparent Background */}
//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 6 } }}>
//           <Box sx={{ 
//             p: { xs: 3, md: 5 },
//             bgcolor: 'transparent',
//             borderRadius: 2
//           }}>
//             {/* Title */}
//             <Typography 
//               variant="h3" 
//               align="center" 
//               sx={{ 
//                 fontFamily: 'Playfair Display, serif',
//                 fontWeight: 700,
//                 color: '#fff',
//                 mb: 1,
//                 fontSize: { xs: '1.8rem', md: '2.5rem' },
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
//               }}
//             >
//               Privacy Policy
//             </Typography>
//             <Typography 
//               variant="subtitle1" 
//               align="center" 
//               sx={{ 
//                 color: '#d4af37',
//                 mb: 4,
//                 letterSpacing: '1px'
//               }}
//             >
//               Your Privacy Matters to Us
//             </Typography>

//             <Divider sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.3)' }} />

//             {/* Welcome Section */}
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 3 }}>
//               Welcome to https://sagarjewels.in/. This section explains the Privacy Policy of the https://sagarjewels.in/ website. We would like to state that our privacy policy is subject to change without any prior intimation and you shall be required to review the same on a regular basis.
//             </Typography>
            
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 3 }}>
//               https://sagarjewels.in/ will not share any personal information such as Name, Mobile Number, Email ID, etc. of our website users with others. It is Sagar Jewellers' first priority to maintain the secrecy of the details of our website users.
//             </Typography>

//             {/* PLEASE READ THE FOLLOWING TERMS */}
//             <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
//               PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY
//             </Typography>

//             {/* PERSONAL INFORMATION COLLECTED */}
//             <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
//               PERSONAL INFORMATION COLLECTED
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               By accepting this privacy policy, you authorize Sagar Jewellers to collect, store and use any information that you provide on our Website. The information collected by us includes all information submitted by you through our website such as your name, address, contact number, email ID, and such other information sent by you via emails to our email ID.
//             </Typography>

//             {/* Cookies */}
//             <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
//               Cookies
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               Cookies are small pieces of information saved by your browser onto your computer. Cookies are used to record various aspects of your visit and assist Sagar Jewellers in providing you with uninterrupted service. Sagar Jewellers does not use cookies to save Personal Information for outside uses.
//             </Typography>

//             {/* USE OF INFORMATION COLLECTED */}
//             <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
//               USE OF INFORMATION COLLECTED
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               Sagar Jewellers owns all the information collected via the Website or applications installed on the website. As applicable, the information collected by Sagar Jewellers shall be used to contact you about the Website and online store related news and Services available on the Website; monitor and improve the Website; calculate the number of visitors to the Website and to know the geographical locations of the visitors; update you on all the special offers available on the Website and provide you with a better shopping experience. This includes sending emails intimating the various offers on the online store. You may at any time choose to unsubscribe from such emails. Some of your information may be shared with and used by third parties who shall need to have access to such information, such as courier companies, credit card processing companies, vendors, etc., to enable them and Sagar Jewellers to perform their duties and fulfil your order requirements. Sagar Jewellers does not allow any unauthorized persons or organizations to use any information that Sagar Jewellers may collect from you through this Website. However, Sagar Jewellers is not responsible for any information collected or shared or used by any other third-party website due to your browser settings.
//             </Typography>
            
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               Sagar Jewellers reserves the right to share any of your personal information to comply with the orders of subpoenas, court orders or other legal processes. Your Personal Information may be disclosed pursuant to such subpoenas, court orders or legal processes, which shall be without notice to you.
//             </Typography>
            
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               Sagar Jewellers may share collective information such as demographics and Website usage statistics with our sponsors, advertisers or other third parties (such third parties do not include Sagar Jewellers' marketing partners and network providers). When this type of information is shared, such parties do not have access to your Personal Information. When you contact Sagar Jewellers through any means such as chat/email, Sagar Jewellers reserves the right to include your email ID for marketing communications. You can unsubscribe from such communications at any time.
//             </Typography>
            
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               This Website may contain links which may lead you to other websites. Please note that once you leave our Website you will be subject to the Privacy Policy of the other website and this Privacy Policy will no longer apply.
//             </Typography>
            
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               By using this website, you signify your agreement to the terms of this privacy policy. Sagar Jewellers reserves the right, in our sole discretion, to change, modify, add or delete portions of the terms of this privacy policy at any time.
//             </Typography>

//             {/* Contact Us */}
//             <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
//               Contact Us
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
//               If you have any questions about this Privacy Policy, please feel free to Contact Us through our Website or write to us at https://sagarjewels.in/
//             </Typography>
//           </Box>
//         </Container>
//       </Box>

//      {/* Footer */}
//          <Box sx={{ bgcolor: '#580f32', color: '#fff', py: 6 }}>
//            <Container maxWidth="lg">
//              <Grid container spacing={4}>
               
//                {/* Column 1 - Logo and Brand */}
//                <Grid item xs={12} sm={6} md={3}>
//                  <Box 
//                    component="img"
//                    src="/images/logo.png"
//                    alt="SAGAR JEWELLER"
//                    sx={{ 
//                      maxWidth: '200px',
//                      height: 'auto',
//                      mb: 2,
//                      mt:5,
//                      cursor: 'pointer'
//                    }}
//                    onClick={() => window.location.href = '/'}
//                  />
//                </Grid>
               
//                {/* Column 2 - QUICK LINKS */}
//                <Grid item xs={12} sm={6} md={3}>
//                  <Typography 
//                    variant="h6" 
//                    sx={{ 
//                      fontWeight: 600, 
//                      mb: 2, 
//                      fontSize: '1rem', 
//                      color: '#fff',
//                      letterSpacing: '1px'
//                    }}
//                  >
//                    QUICK LINKS
//                  </Typography>
//                  <Typography variant="body2" sx={{ color: '#999', lineHeight: 2, fontSize: '0.8rem' }}>
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/'}>Home</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/about'}>About Us</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/collections'}>Collections</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/contact'}>Contact Us</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/sitemap'}>Site Map</Box>
//                  </Typography>
//                </Grid>
               
//                {/* Column 3 - OUR POLICIES */}
//                <Grid item xs={12} sm={6} md={3}>
//                  <Typography 
//                    variant="h6" 
//                    sx={{ 
//                      fontWeight: 600, 
//                      mb: 2, 
//                      fontSize: '1rem', 
//                      color: '#fff',
//                      letterSpacing: '1px'
//                    }}
//                  >
//                    OUR POLICIES
//                  </Typography>
//                  <Typography variant="body2" sx={{ color: '#999', lineHeight: 2, fontSize: '0.8rem' }}>
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/terms'}>Terms and Conditions</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/privacy'}>Privacy Policy</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/disclaimer'}>Disclaimer</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/refund'}>Refund Policy</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/shipping'}>Shipping and Delivery Policy</Box><br />
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = '/cancellation'}>Cancellation and Return Policy</Box>
//                  </Typography>
//                </Grid>
               
//                {/* Column 4 - REACH US */}
//                <Grid item xs={12} sm={6} md={3}>
//                  <Typography 
//                    variant="h6" 
//                    sx={{ 
//                      fontWeight: 600, 
//                      mb: 2, 
//                      fontSize: '1rem', 
//                      color: '#fff',
//                      letterSpacing: '1px'
//                    }}
//                  >
//                    REACH US
//                  </Typography>
//                  <Typography variant="body2" sx={{ color: '#999', lineHeight: 1.8, fontSize: '0.8rem', mb: 2 }}>
//                    Diamond Talkies Road, Opp. PCR Complex,<br />
//                    Chintamani - 563 125, Karnataka, India.
//                  </Typography>
//                  <Typography variant="body2" sx={{ color: '#999', lineHeight: 1.8, fontSize: '0.8rem', mb: 1 }}>
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = 'tel:+918154252379'}>
//                      +91 81542 52379, 99454 30961.
//                    </Box>
//                  </Typography>
//                  <Typography variant="body2" sx={{ color: '#999', lineHeight: 1.8, fontSize: '0.8rem' }}>
//                    <Box component="span" sx={{ cursor: 'pointer', '&:hover': { color: '#d4af37' } }} onClick={() => window.location.href = 'mailto:namasrinivasajewellers@gmail.com'}>
//                      namasrinivasajewellers@gmail.com
//                    </Box>
//                  </Typography>
//                </Grid>
//              </Grid>
             
//              <Divider sx={{ my: 4, bgcolor: '#7a2a4a' }} />
             
//              {/* Copyright */}
//              <Typography variant="body2" align="center" sx={{ color: '#ccc', fontSize: '0.75rem' }}>
//                © 2025 Sagar Jeweller. All rights reserved.
//              </Typography>
//            </Container>
//          </Box>
//     </Box>
//   );
// }

// export default PrivacyPolicy;


import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Box,
  IconButton, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';  // Add this import

function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
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

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 6 } }}>
          <Box sx={{ 
            p: { xs: 3, md: 5 },
            bgcolor: 'transparent',
            borderRadius: 2
          }}>
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
              Privacy Policy
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
              Your Privacy Matters to Us
            </Typography>

            <Divider sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.3)' }} />

            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 3 }}>
              Welcome to https://sagarjewels.in/. This section explains the Privacy Policy of the https://sagarjewels.in/ website. We would like to state that our privacy policy is subject to change without any prior intimation and you shall be required to review the same on a regular basis.
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 3 }}>
              https://sagarjewels.in/ will not share any personal information such as Name, Mobile Number, Email ID, etc. of our website users with others. It is Sagar Jewellers' first priority to maintain the secrecy of the details of our website users.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              PERSONAL INFORMATION COLLECTED
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              By accepting this privacy policy, you authorize Sagar Jewellers to collect, store and use any information that you provide on our Website. The information collected by us includes all information submitted by you through our website such as your name, address, contact number, email ID, and such other information sent by you via emails to our email ID.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Cookies
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Cookies are small pieces of information saved by your browser onto your computer. Cookies are used to record various aspects of your visit and assist Sagar Jewellers in providing you with uninterrupted service. Sagar Jewellers does not use cookies to save Personal Information for outside uses.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              USE OF INFORMATION COLLECTED
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Sagar Jewellers owns all the information collected via the Website or applications installed on the website. As applicable, the information collected by Sagar Jewellers shall be used to contact you about the Website and online store related news and Services available on the Website; monitor and improve the Website; calculate the number of visitors to the Website and to know the geographical locations of the visitors; update you on all the special offers available on the Website and provide you with a better shopping experience. This includes sending emails intimating the various offers on the online store. You may at any time choose to unsubscribe from such emails. Some of your information may be shared with and used by third parties who shall need to have access to such information, such as courier companies, credit card processing companies, vendors, etc., to enable them and Sagar Jewellers to perform their duties and fulfil your order requirements. Sagar Jewellers does not allow any unauthorized persons or organizations to use any information that Sagar Jewellers may collect from you through this Website. However, Sagar Jewellers is not responsible for any information collected or shared or used by any other third-party website due to your browser settings.
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Sagar Jewellers reserves the right to share any of your personal information to comply with the orders of subpoenas, court orders or other legal processes. Your Personal Information may be disclosed pursuant to such subpoenas, court orders or legal processes, which shall be without notice to you.
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              Sagar Jewellers may share collective information such as demographics and Website usage statistics with our sponsors, advertisers or other third parties (such third parties do not include Sagar Jewellers' marketing partners and network providers). When this type of information is shared, such parties do not have access to your Personal Information. When you contact Sagar Jewellers through any means such as chat/email, Sagar Jewellers reserves the right to include your email ID for marketing communications. You can unsubscribe from such communications at any time.
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              This Website may contain links which may lead you to other websites. Please note that once you leave our Website you will be subject to the Privacy Policy of the other website and this Privacy Policy will no longer apply.
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              By using this website, you signify your agreement to the terms of this privacy policy. Sagar Jewellers reserves the right, in our sole discretion, to change, modify, add or delete portions of the terms of this privacy policy at any time.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, color: '#d4af37', mb: 2, mt: 3 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, mb: 2 }}>
              If you have any questions about this Privacy Policy, please feel free to Contact Us through our Website or write to us at https://sagarjewels.in/
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer with Working Links */}
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

export default PrivacyPolicy;