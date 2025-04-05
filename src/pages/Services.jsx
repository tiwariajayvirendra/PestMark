import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import cockroachImage from '../assets/images/cockroach1.jpg';
import rodentImage from '../assets/images/rodent.jpg';
import termiteImage from '../assets/images/termite.jpg';
import mosquitoImage from '../assets/images/mosquito.jpg';

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const pests = [
    {
      name: 'Cockroaches',
      description: 'Professional cockroach control services to eliminate these resilient pests from your home.',
      image: cockroachImage,
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
      dangers: [
        'Spread diseases and bacteria',
        'Trigger allergies and asthma',
        'Contaminate food and surfaces',
        'Cause property damage',
      ],
      solutions: [
        'Thorough inspection and identification',
        'Targeted treatment with safe pesticides',
        'Preventive measures and sealing entry points',
        'Follow-up visits to ensure complete elimination',
      ],
    },
    {
      name: 'Rodents',
      description: 'Effective rodent control to protect your property from mice and rats.',
      image: rodentImage,
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #45B7AF 100%)',
      dangers: [
        'Spread diseases through droppings',
        'Cause structural damage',
        'Contaminate food supplies',
        'Create fire hazards with gnawed wires',
      ],
      solutions: [
        'Comprehensive property inspection',
        'Strategic baiting and trapping',
        'Exclusion techniques to prevent entry',
        'Sanitation recommendations',
      ],
    },
    {
      name: 'Termites',
      description: 'Complete termite control solutions to protect your home structure.',
      image: termiteImage,
      gradient: 'linear-gradient(135deg, #96C93D 0%, #7FB800 100%)',
      dangers: [
        'Severe structural damage',
        'Hidden infestations',
        'Costly repairs if untreated',
        'Decreased property value',
      ],
      solutions: [
        'Detailed termite inspection',
        'Soil treatment and baiting systems',
        'Wood treatment and prevention',
        'Regular monitoring and maintenance',
      ],
    },
    {
      name: 'Mosquitoes',
      description: 'Mosquito control services to create a comfortable outdoor environment.',
      image: mosquitoImage,
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #5A52E0 100%)',
      dangers: [
        'Spread deadly diseases',
        'Cause itchy bites and discomfort',
        'Reduce outdoor enjoyment',
        'Potential health risks',
      ],
      solutions: [
        'Standing water elimination',
        'Larvicide treatments',
        'Adult mosquito control',
        'Preventive measures and education',
      ],
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Our Pest Control Services
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="pest control services tabs"
        >
          {pests.map((pest, index) => (
            <Tab
              key={pest.name}
              label={pest.name}
              id={`pest-tab-${index}`}
              aria-controls={`pest-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      {pests.map((pest, index) => (
        <Box
          key={pest.name}
          role="tabpanel"
          hidden={selectedTab !== index}
          id={`pest-tabpanel-${index}`}
          aria-labelledby={`pest-tab-${index}`}
        >
          {selectedTab === index && (
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ position: 'relative', height: 400, overflow: 'hidden' }}>
                    <img
                      src={pest.image}
                      alt={pest.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ background: pest.gradient, color: 'white', flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {pest.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {pest.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom color="error">
                    <WarningIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Dangers and Risks
                  </Typography>
                  <List>
                    {pest.dangers.map((danger) => (
                      <ListItem key={danger}>
                        <ListItemIcon>
                          <BugReportIcon color="error" />
                        </ListItemIcon>
                        <ListItemText primary={danger} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom color="success.main">
                    <CheckCircleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Our Solutions
                  </Typography>
                  <List>
                    {pest.solutions.map((solution) => (
                      <ListItem key={solution}>
                        <ListItemIcon>
                          <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={solution} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default Services; 