import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(to right, #4ade80, #4f46e5)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              PestMark is your trusted partner in pest control solutions. We provide professional and effective pest management services to protect your home and business.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Services
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/services#cockroach"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Cockroach Control
              </Link>
              <Link
                component={RouterLink}
                to="/services#rodent"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Rodent Control
              </Link>
              <Link
                component={RouterLink}
                to="/services#termite"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Termite Control
              </Link>
              <Link
                component={RouterLink}
                to="/services#mosquito"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                Mosquito Control
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn />
                <Typography variant="body2">
                  B-111, Vishwakarma Coloney, Nr. Sab ki Rasoi,
                  <br />
                  Prahladpur, Delhi-110044
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone />
                <Typography variant="body2">
                  Phone: 7291865963, 7048308107
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email />
                <Typography variant="body2">
                  Email: nikhil.singh@pestmark.in
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTime />
                <Typography variant="body2">
                  Business Hours:
                  <br />
                  Monday - Sunday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: 10:00 AM - 4:00 PM
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} PestMark. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 