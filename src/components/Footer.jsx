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
  Paper,
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
  Security,
  Verified,
  Star,
  TrendingUp,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hover: {
      x: 10,
      color: '#FFD700',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Box
        component="footer"
        sx={{
          py: 8,
          px: 2,
          mt: 'auto',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4ade80 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '400px',
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        >
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              fontSize: '4rem',
              color: '#FFD700',
            }}
          >
            🏆
          </motion.div>
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              top: '30%',
              right: '15%',
              fontSize: '3rem',
              color: '#FFD700',
            }}
          >
            ⭐
          </motion.div>
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '20%',
              fontSize: '2.5rem',
              color: '#FFD700',
            }}
          >
            🎯
          </motion.div>
        </Box>

        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      }}
                    >
                      PestMark
                    </Typography>
                  </motion.div>
                </Box>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  PestMark is your trusted partner in pest control solutions. We provide professional and effective pest management services to protect your home and business with cutting-edge technology and eco-friendly solutions.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: LinkedIn, label: 'LinkedIn' },
                  ].map((social, index) => (
                    <motion.div
                      key={social.label}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconButton 
                        color="inherit" 
                        aria-label={social.label}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 215, 0, 0.2)',
                          },
                        }}
                      >
                        <social.icon />
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold',
                    color: '#FFD700',
                    mb: 3,
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { text: 'Home', path: '/' },
                    { text: 'Services', path: '/services' },
                    { text: 'About Us', path: '/about' },
                    { text: 'Contact', path: '/contact' },
                  ].map((link, index) => (
                    <motion.div
                      key={link.text}
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      <Link
                        component={RouterLink}
                        to={link.path}
                        color="inherit"
                        sx={{
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': { 
                            textDecoration: 'none',
                          },
                        }}
                      >
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                        {link.text}
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold',
                    color: '#FFD700',
                    mb: 3,
                  }}
                >
                  Our Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { text: 'Cockroach Control', path: '/services#cockroach' },
                    { text: 'Rodent Control', path: '/services#rodent' },
                    { text: 'Termite Control', path: '/services#termite' },
                    { text: 'Mosquito Control', path: '/services#mosquito' },
                    { text: 'BedBug Control', path: '/services#bedbug' },
                    { text: 'Spider Control', path: '/services#spider' },
                  ].map((service, index) => (
                    <motion.div
                      key={service.text}
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      <Link
                        component={RouterLink}
                        to={service.path}
                        color="inherit"
                        sx={{
                          textDecoration: 'none',
                          fontSize: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': { 
                            textDecoration: 'none',
                          },
                        }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          style={{ fontSize: '0.8rem' }}
                        >
                          🎯
                        </motion.div>
                        {service.text}
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold',
                    color: '#FFD700',
                    mb: 3,
                  }}
                >
                  Contact Us
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}
                  >
                    <LocationOn sx={{ color: '#FFD700', mt: 0.5 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      B-111, Vishwakarma Colony, Nr. Sab ki Rasoi,
                      <br />
                      Prahladpur, Delhi-110044
                    </Typography>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <Phone sx={{ color: '#FFD700' }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      7291865963, 7048308107
                    </Typography>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <Email sx={{ color: '#FFD700' }} />
                    <Typography variant="body1">
                      info@pestmark.com
                    </Typography>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}
                  >
                    <AccessTime sx={{ color: '#FFD700', mt: 0.5 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      <strong>Business Hours:</strong>
                      <br />
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: 10:00 AM - 4:00 PM
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Features Section */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: '3rem' }}
          >
            <Paper
              elevation={8}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 3,
              }}
            >
              <Grid container spacing={3}>
                {[
                  { icon: Security, title: 'Safe & Secure', desc: 'Eco-friendly solutions' },
                  { icon: Verified, title: 'Certified', desc: 'Licensed professionals' },
                  { icon: Star, title: 'Premium Quality', desc: 'Best in class service' },
                  { icon: TrendingUp, title: '24/7 Support', desc: 'Always here for you' },
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={feature.title}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      style={{ textAlign: 'center' }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <feature.icon sx={{ fontSize: '3rem', color: '#FFD700', mb: 2 }} />
                      </motion.div>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {feature.desc}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>

          <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center' }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold',
                color: '#FFD700',
                mb: 2,
              }}
            >
              © {new Date().getFullYear()} PestMark. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Professional Pest Control Services | Trusted by Thousands of Customers
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
}

export default Footer; 