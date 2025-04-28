import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Import existing images
import cockroachImage from '../assets/images/cockroach1.jpg';
import rodentImage from '../assets/images/rodent.jpg';
import termiteImage from '../assets/images/termite.jpg';
import mosquitoImage from '../assets/images/mosquito.jpg';
import lizardImage from '../assets/images/houselizards.jpg';
import bedbugImage from '../assets/images/bedbug.jpg';
import spiderImage from '../assets/images/Spiders.jpg';
 

// Remove placeholder images
// const beesImage = 'https://images.unsplash.com/photo-1593061234281-6a53f1a1a2d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      id: 'cockroach',
      title: 'Cockroach Control',
      description: 'Professional cockroach elimination using advanced techniques. We target both visible infestations and hidden nests to ensure complete eradication.',
      image: cockroachImage,
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      features: ['Inspection & Assessment', 'Targeted Treatment', 'Prevention Plan', 'Follow-up Visits']
    },
    {
      id: 'rodent',
      title: 'Rodent Control',
      description: 'Comprehensive rodent management solutions including trapping, exclusion, and sanitation to protect your property from damage and disease.',
      image: rodentImage,
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #45B7AF 100%)',
      features: ['Entry Point Sealing', 'Safe Trapping', 'Sanitation', 'Monitoring']
    },
    {
      id: 'termite',
      title: 'Termite Control',
      description: 'Advanced termite treatment methods to protect your property from structural damage. We use environmentally friendly solutions for long-term protection.',
      image: termiteImage,
      gradient: 'linear-gradient(135deg, #96C93D 0%, #7FB800 100%)',
      features: ['Soil Treatment', 'Wood Treatment', 'Baiting Systems', 'Regular Monitoring']
    },
    {
      id: 'mosquito',
      title: 'Mosquito Control',
      description: 'Effective mosquito control solutions to create a comfortable outdoor environment and prevent mosquito-borne diseases.',
      image: mosquitoImage,
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #5A52E0 100%)',
      features: ['Larvicide Treatment', 'Adult Mosquito Control', 'Breeding Site Elimination', 'Preventive Measures']
    },
    {
      id: 'bedbug',
      title: 'BedBug Control',
      description: 'Thorough bedbug elimination using heat treatment and targeted pesticides. We ensure complete eradication with minimal disruption.',
      image: bedbugImage,
      gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
      features: ['Heat Treatment', 'Chemical Treatment', 'Inspection', 'Follow-up']
    },
    {
      id: 'spider',
      title: 'Spider Control',
      description: 'Professional spider control services to eliminate unwanted arachnids and prevent future infestations in your home or business.',
      image: spiderImage,
      gradient: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)',
      features: ['Web Removal', 'Entry Point Sealing', 'Treatment', 'Prevention']
    },
    {
      id: 'lizard',
      title: 'Lizard Control',
      description: 'Safe and effective lizard removal services using humane methods to maintain a clean and pest-free environment.',
      image: lizardImage,
      gradient: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)',
      features: ['Humane Removal', 'Entry Point Sealing', 'Habitat Modification', 'Prevention']
    },
    // {
    //   title: 'Bees & Wasps Control',
    //   description: 'Expert handling of bee and wasp nests with safe removal techniques to ensure your safety and prevent future infestations.',
    //   image: beesImage,
    //   gradient: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)',
    //   features: ['Nest Removal', 'Safe Treatment', 'Prevention', 'Follow-up']
    // },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            gutterBottom
            align="center"
            sx={{ 
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              background: 'linear-gradient(to right, #4ade80, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ 
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              color: 'text.secondary',
            }}
          >
            We offer comprehensive pest control solutions to protect your home and business.
            Our expert team uses safe and effective methods to eliminate pests and prevent future infestations.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
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
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    textDecoration: 'none',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: { xs: 200, sm: 250 }, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Box>
                  <CardContent sx={{ 
                    background: service.gradient, 
                    color: 'white', 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}>
                    <Typography variant="h6" gutterBottom sx={{ 
                      fontSize: { xs: '1rem', sm: '1.25rem' },
                      fontWeight: 'bold',
                    }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      mb: 1,
                    }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(to right, #4ade80, #4f46e5)',
              '&:hover': {
                background: 'linear-gradient(to right, #4f46e5, #4ade80)',
              },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
            }}
          >
            Get a Free Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Services; 