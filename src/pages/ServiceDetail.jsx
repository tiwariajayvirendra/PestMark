import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import servicesData from './servicesData';

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4">Service Not Found</Typography>
        <Button component={RouterLink} to="/services" variant="contained" sx={{ mt: 2 }}>
          Back to Services
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: 8 }} />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h3" gutterBottom>{service.title}</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>{service.longDescription || service.description}</Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>Features:</Typography>
          <ul>
            {service.features && service.features.map((feature, idx) => (
              <li key={idx}><Typography variant="body2">{feature}</Typography></li>
            ))}
          </ul>
          <Button component={RouterLink} to="/services" variant="contained" sx={{ mt: 3 }}>
            Back to Services
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ServiceDetail; 