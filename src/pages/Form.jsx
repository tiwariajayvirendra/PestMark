import React from 'react';
import { TextField, Button, Container, Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

const ProfessionalForm = () => {
  return (
    <Container maxWidth="sm" sx={{ background: '#f4f6f8', padding: 4, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, color: '#1976d2', textAlign: 'center' }}>
        User Information Form
      </Typography>
      <TextField fullWidth label="Full Name" variant="outlined" sx={{ mb: 2, background: 'white' }} />
      <TextField fullWidth label="Phone Number" variant="outlined" sx={{ mb: 2, background: 'white' }} />
      <TextField fullWidth label="Email Address" type="email" variant="outlined" sx={{ mb: 2, background: 'white' }} />
      <TextField fullWidth label="Current Resident Address" variant="outlined" multiline rows={3} sx={{ mb: 2, background: 'white' }} />
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" sx={{ color: '#333' }}>Consent to share data</Typography>
        <RadioGroup row>
          <FormControlLabel value="agree" control={<Radio />} label="I Agree" />
          <FormControlLabel value="disagree" control={<Radio />} label="I Disagree" />
        </RadioGroup>
      </Box>

      <Button variant="contained" fullWidth sx={{ background: '#1976d2', color: 'white', '&:hover': { background: '#1565c0' } }}>
        Submit
      </Button>
    </Container>
  );
};

export default ProfessionalForm;