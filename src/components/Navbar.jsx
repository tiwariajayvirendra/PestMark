import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogoClick = () => {
    // Open logo in new tab/window
    window.open('/logo-info', '_blank');
  };

  const menuItems = [
    { text: 'HOME', path: '/' },
    { text: 'SERVICES', path: '/services' },
    { text: 'ABOUT US', path: '/about' },
    { text: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pest Mark
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} component={RouterLink} to={item.path} selected={isActive(item.path)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Contact Information Bar with Indian Flag Colors */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          background: 'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
          color: '#000',
          zIndex: (theme) => theme.zIndex.appBar + 2,
          borderBottom: '2px solid #FF9933',
        }}
      >
        <motion.div
          animate={{
            background: [
              'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
              'linear-gradient(90deg, #138808 0%, #FFFFFF 50%, #FF9933 100%)',
              'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <marquee behavior="scroll" direction="right" style={{ padding: '8px 0', fontWeight: 'bold' }}>
            🇮🇳 Happy Independence Day! 🇮🇳 Call for an appointment and free inspection on this number : 7291865963, 7048308107
          </marquee>
        </motion.div>
      </Box>

      {/* Main Navigation Bar with Indian Flag Color Animation */}
      <AppBar
        position="fixed"
        sx={{
          top: '40px', // Below the contact bar
          background: 'linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
          zIndex: (theme) => theme.zIndex.appBar + 1,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          borderBottom: '3px solid #FF9933',
          overflow: 'hidden', // Important for animation containment
        }}
      >
        {/* Indian Flag Color Animation Stripes */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {/* Saffron Stripe */}
          <motion.div
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              right: '0px',
              height: '33.33%',
              backgroundColor: '#FF9933',
              zIndex: 1,
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* White Stripe */}
          <motion.div
            style={{
              position: 'absolute',
              top: '33.33%',
              left: '0px',
              right: '0px',
              height: '33.33%',
              backgroundColor: '#FFFFFF',
              zIndex: 1,
            }}
            animate={{
              x: [0, -80, 0],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Green Stripe */}
          <motion.div
            style={{
              position: 'absolute',
              top: '66.66%',
              left: '0px',
              right: '0px',
              height: '33.33%',
              backgroundColor: '#138808',
              zIndex: 1,
            }}
            animate={{
              x: [0, 120, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Animated Ashoka Chakra */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid #000080',
              backgroundColor: 'transparent',
              zIndex: 2,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Chakra Spokes */}
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '2px',
                  height: '20px',
                  backgroundColor: '#000080',
                  transformOrigin: '0 0',
                  transform: `translate(-50%, -50%) rotate(${i * 15}deg)`,
                }}
              />
            ))}
          </motion.div>
        </Box>
        
        <Toolbar sx={{ minHeight: { xs: '80px', sm: '100px' }, position: 'relative', zIndex: 2 }}>
          {/* Logo and Brand Section */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 1,
              gap: 2
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Typography
                variant="h4"
                component="div"
                onClick={handleLogoClick}
                sx={{
                  fontWeight: 'bold',
                  color: '#000',
                  cursor: 'pointer',
                  textShadow: '2px 2px 4px rgba(255,255,255,0.8)',
                  '&:hover': {
                    color: '#FF9933',
                  },
                }}
              >
                Pest Mark
              </Typography>
            </motion.div>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: isActive(item.path) ? '#FF9933' : '#000',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal',
                      backgroundColor: isActive(item.path) ? 'rgba(255, 153, 51, 0.1)' : 'transparent',
                      borderRadius: '20px',
                      px: 3,
                      py: 1,
                      border: isActive(item.path) ? '2px solid #FF9933' : '2px solid transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 153, 51, 0.2)',
                        color: '#FF9933',
                        border: '2px solid #FF9933',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.text}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            background: 'linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
