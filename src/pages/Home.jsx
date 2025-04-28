import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BugReportIcon from '@mui/icons-material/BugReport';
import ShieldIcon from '@mui/icons-material/Shield';
import ForestIcon from '@mui/icons-material/Forest';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import cockroachImage from '../assets/images/cockroach1.jpg';
import rodentImage from '../assets/images/rodent.jpg';
import termiteImage from '../assets/images/termite.jpg';
import mosquitoImage from '../assets/images/mosquito.jpg';
import lizardImage from '../assets/images/houselizards.jpg';
import bedbugImage from '../assets/images/bedbug.jpg';
import spiderImage from '../assets/images/Spiders.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      id: 'cockroach',
      title: 'Cockroach Control',
      description: 'Effective solutions to eliminate cockroach infestations.',
      image: cockroachImage,
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
    },
    {
      id: 'rodent',
      title: 'Rodent Control',
      description: 'Professional rodent removal and prevention services.',
      image: rodentImage,
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #45B7AF 100%)',
    },
    {
      id: 'termite',
      title: 'Termite Control',
      description: 'Comprehensive termite treatment and prevention.',
      image: termiteImage,
      gradient: 'linear-gradient(135deg, #96C93D 0%, #7FB800 100%)',
    },
    {
      id: 'mosquito',
      title: 'Mosquito Control',
      description: 'Mosquito control solutions for your outdoor spaces.',
      image: mosquitoImage,
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #5A52E0 100%)',
    },
    {
      id: 'bedbug',
      title: 'BedBug Control',
      description: 'Thorough bedbug elimination using heat treatment and targeted pesticides.',
      image: bedbugImage,
      gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
    },
    {
      id: 'spider',
      title: 'Spider Control',
      description: 'Professional spider control services to eliminate unwanted arachnids.',
      image: spiderImage,
      gradient: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)',
    },
    {
      id: 'lizard',
      title: 'Lizard Control',
      description: 'Safe and effective lizard removal services using humane methods.',
      image: lizardImage,
      gradient: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)',
    },
  ];

  return (
    <Box>
      {/* Hero Section with Animations */}
      <Box
        sx={{
          background: 'linear-gradient(135deg,rgb(223, 206, 96) 0%, #0d47a1 100%)',
          color: 'white',
          py: { xs: 8, md: 15 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '100%',
            left: '5%',
            width: '100px',
            height: '100px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '0%',
            right: '5%',
            width: '150px',
            height: '150px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    }}
                  >
                    Professional Pest Control Services
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    paragraph
                    sx={{ 
                      mb: 4, 
                      opacity: 0.9,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                    }}
                  >  
                    Protect your home and family with our expert pest control solutions.
                    Safe, effective, and guaranteed results Call Now -(7291865963, 7048308107)
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, sm: 0 },
                  }}>
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      size="large"
                      fullWidth={isMobile}
                      sx={{
                        mr: { xs: 0, sm: 2 },
                        mb: { xs: 2, sm: 0 },
                        background: 'white',
                        color: theme.palette.primary.main,
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      Get Free Quote
                    </Button>
                    <Button
                      component={RouterLink}
                      to="/services"
                      variant="outlined"
                      size="large"
                      fullWidth={isMobile}
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      Our Services
                    </Button>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: '300px', sm: '350px', md: '400px' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      width: '300px',
                      height: '300px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    style={{
                      position: 'absolute',
                      width: '200px',
                      height: '200px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                    }}
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                    }}
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <BugReportIcon
                      sx={{
                        fontSize: { xs: '5rem', sm: '6rem', md: '8rem' },
                        color: 'white',
                        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))',
                      }}
                    />
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Services Section (moved up) */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mt: { xs: 0, md: 0 } }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h2"
            gutterBottom
            align="center"
            sx={{ 
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    component={RouterLink}
                    to={`/services/${service.id}`}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: { xs: 150, sm: 200 }, overflow: 'hidden' }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </Box>
                    <CardContent sx={{ background: service.gradient, color: 'white', flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <motion.div variants={pulseAnimation} animate="animate">
                    <ShieldIcon
                      sx={{
                        fontSize: { xs: '2.5rem', sm: '3rem' },
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    />
                  </motion.div>
                  <Typography variant="h6" gutterBottom>
                    Expert Protection
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our certified technicians provide professional pest control
                    services with guaranteed results.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <motion.div variants={pulseAnimation} animate="animate">
                    <ForestIcon
                      sx={{
                        fontSize: { xs: '2.5rem', sm: '3rem' },
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    />
                  </motion.div>
                  <Typography variant="h6" gutterBottom>
                    Eco-Friendly Solutions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We use environmentally safe products that are effective against
                    pests while being safe for your family and pets.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <motion.div variants={pulseAnimation} animate="animate">
                    <StarIcon
                      sx={{
                        fontSize: { xs: '2.5rem', sm: '3rem' },
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    />
                  </motion.div>
                  <Typography variant="h6" gutterBottom>
                    Satisfaction Guaranteed
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We stand behind our work with a 100% satisfaction guarantee
                    and free follow-up services if needed.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home; 