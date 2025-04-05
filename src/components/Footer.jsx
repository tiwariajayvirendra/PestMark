import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
            PEST MARK FACILITY MANAGEMENT
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Professional pest control services to protect your home and business.
              We provide effective solutions for all types of pests.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/services"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  Services
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/about"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  About Us
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/contact"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  Contact
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Our Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/services#cockroaches"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  Cockroach Control
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/services#rodents"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  Rodent Control
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/services#termites"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  Termite Control
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  component={RouterLink}
                  to="/services#mosquitoes"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                >
                  Mosquito Control
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
            B-111, Vishwakarma Coloney, Nr. Sab ki Rasoi ,
              <br />
              Prahladpur, Delhi-110044 
              <br />
              Phone:  7291865963, 7048308107
              <br />
              Email:  nikhil.singh@pestmark.in
            </Typography>
            <Typography variant="body2">
              Business Hours:
              <br />
              Monday - Sunday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: 10:00 AM - 4:00 PM
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} PestMark Facility Management. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 