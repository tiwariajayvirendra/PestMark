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
import OptimizedImage from '../components/OptimizedImage';

function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      id: 'cockroach',
      title: 'Cockroach Control',
      description: 'Professional cockroach elimination using advanced techniques. We target both visible infestations and hidden nests to ensure complete eradication.',
      image: '/images/cockroach1.webp',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      features: ['Inspection & Assessment', 'Targeted Treatment', 'Prevention Plan', 'Follow-up Visits']
    },
    {
      id: 'rodent',
      title: 'Rodent Control',
      description: 'Comprehensive rodent management solutions including trapping, exclusion, and sanitation to protect your property from damage and disease.',
      image: '/images/rodent.webp',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #45B7AF 100%)',
      features: ['Entry Point Sealing', 'Safe Trapping', 'Sanitation', 'Monitoring']
    },
    {
      id: 'termite',
      title: 'Termite Control',
      description: 'Advanced termite treatment methods to protect your property from structural damage. We use environmentally friendly solutions for long-term protection.',
      image: '/images/termite.webp',
      gradient: 'linear-gradient(135deg, #96C93D 0%, #7FB800 100%)',
      features: ['Soil Treatment', 'Wood Treatment', 'Baiting Systems', 'Regular Monitoring']
    },
    {
      id: 'mosquito',
      title: 'Mosquito Control',
      description: 'Effective mosquito control solutions to create a comfortable outdoor environment and prevent mosquito-borne diseases.',
      image: '/images/mosquito.webp',
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #5A52E0 100%)',
      features: ['Larvicide Treatment', 'Adult Mosquito Control', 'Breeding Site Elimination', 'Preventive Measures']
    },
    {
      id: 'bedbug',
      title: 'BedBug Control',
      description: 'Thorough bedbug elimination using heat treatment and targeted pesticides. We ensure complete eradication with minimal disruption.',
      image: '/images/bedbug.webp',
      gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)',
      features: ['Heat Treatment', 'Chemical Treatment', 'Inspection', 'Follow-up']
    },
    {
      id: 'spider',
      title: 'Spider Control',
      description: 'Professional spider control services to eliminate unwanted arachnids and prevent future infestations in your home or business.',
      image: '/images/Spiders.webp',
      gradient: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)',
      features: ['Web Removal', 'Entry Point Sealing', 'Treatment', 'Prevention']
    },
    {
      id: 'lizard',
      title: 'Lizard Control',
      description: 'Safe and effective lizard removal services using humane methods to maintain a clean and pest-free environment.',
      image: '/images/houselizards.webp',
      gradient: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)',
      features: ['Humane Removal', 'Entry Point Sealing', 'Habitat Modification', 'Prevention']
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Comprehensive pest control solutions tailored to your specific needs. 
            We use advanced techniques and safe methods to ensure effective results.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  component={RouterLink}
                  to={`/services/${service.id}`}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: 200 }}>
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      sx={{ height: '100%' }}
                      priority={index < 3}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: service.gradient,
                        opacity: 0.7,
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          variant="body2"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 0.5,
                            fontSize: '0.875rem',
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main',
                              mr: 1,
                              flexShrink: 0,
                            }}
                          />
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 3 }}
          >
            Need a Custom Solution?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
          >
            Contact us for a free consultation and customized pest control plan 
            tailored to your specific requirements.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 'bold',
            }}
          >
            Get Free Quote
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Services; 