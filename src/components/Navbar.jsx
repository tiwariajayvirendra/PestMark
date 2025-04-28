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
import logo from '../assets/images/logo.jpg';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' },
    // { text: 'Login', path: '/login' },
    // { text: 'Register', path: '/register' },
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
  
    {/* Fixed Marquee */}
    <Box
      sx={{
        position: 'fixed',
        top: '0px',
        width: '100%',
        backgroundColor: '#FFFAFA',
        zIndex: (theme) => theme.zIndex.appBar + 2, // Higher than AppBar
      }}
    >
      <marquee behavior="scroll" direction="right">
        Call for an appointment and free inspection on this number : 7291865963, 7048308107
      </marquee>
    </Box>
  
    {/* Fixed AppBar below Marquee */}
    <AppBar
      position="fixed" // important: fixed, not sticky
      sx={{
        top: '30px', // below the marquee (adjust 40px based on your marquee height)
        background: 'linear-gradient(to right, #4ade80, #4f46e5)',
        zIndex: (theme) => theme.zIndex.appBar + 1,
      }}
    >  
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={logo} alt="Pest Mark Logo" style={{ height: 100, marginRight: 16, borderRadius: 10 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            Pest Mark Facility Management
          </Typography>
        </Box>
  
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={{
                  backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
                  color: isActive(item.path) ? '#fff' : 'white',
                  fontWeight: isActive(item.path) ? 'bold' : 'normal',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  
    {/* Content spacer to avoid being hidden behind fixed elements */}
    <Toolbar sx={{ mt: '30px' }} /> {/* Push content down */}
  </>
  
     
  );
}

export default Navbar;
