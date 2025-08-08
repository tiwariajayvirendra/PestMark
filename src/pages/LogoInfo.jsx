import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function LogoInfo() {
  const handleGoBack = () => {
    window.close();
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      py: 4
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Pest Mark Logo
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Our Brand Identity & Symbol
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Logo Display */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}
                  >
                    Full Size Logo
                  </Typography>
                  
                  {/* Large Logo Display */}
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: '400px',
                      height: '400px',
                      margin: '0 auto',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                      border: '3px solid #1976d2',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <img
                      src="/images/logo.webp"
                      alt="Pest Mark Logo - Full Size"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '20px',
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontStyle: 'italic' }}
                  >
                    Click to download or view in original resolution
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Logo Information */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    height: 'fit-content',
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}
                  >
                    Logo Information
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Design Elements
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Our logo features a distinctive shield design with a cockroach silhouette, 
                      symbolizing our commitment to pest control and protection. The shield represents 
                      security and safety, while the insect silhouette clearly communicates our 
                      specialized service area.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Color Scheme
                    </Typography>
                    <Typography variant="body1" paragraph>
                      The logo uses a professional color palette with golden-brown tones for the shield 
                      and black for the insect silhouette, creating a balanced and trustworthy appearance 
                      that reflects our professional approach to pest management.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Brand Message
                    </Typography>
                    <Typography variant="body1" paragraph>
                      "WE CARE - WE CLEAN - WE PROTECT" - This tagline embodies our three core values: 
                      caring for our customers' needs, providing thorough cleaning services, and protecting 
                      their homes and businesses from pests.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Usage Guidelines
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Our logo should always be displayed with adequate spacing and should never be 
                      distorted, recolored, or modified. It represents our brand identity and should 
                      be treated with respect and consistency across all applications.
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<ArrowBackIcon />}
                      onClick={handleGoBack}
                      sx={{
                        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Close Window
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default LogoInfo; 