import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';

const About = () => {
  const teamMembers = [
    {
      name: 'Nikhil Singh ',
      position: 'CEO & Founder',
      image: '/images/team/john.jpg',
      description: 'Over 10 years of experience in pest control industry.',
    },
    {
      name: 'Ajay Tiwari ',
      position: 'Technical Director',
      image: '/images/team/sarah.jpg',
      description: 'Expert in integrated pest management solutions.',
    },
    {
      name: 'Anand Shukla',
      position: 'General Manager',
      image: '/images/team/mike.jpg',
      description: 'Specializes in large-scale commercial pest control.',
    },
  ];

  const achievements = [
    'Best Pest Control Company 2025',
    'ISO 9001:2015 Certified',
    'Environmental Excellence Award',
    'Customer Satisfaction Award',
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Company Introduction */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About PestMark Facility Management
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          Your Trusted Partner in Pest Control Since 2017
        </Typography>
        <Typography variant="body1" paragraph>
          PestMark has been at the forefront of pest control services for over a decade,
          providing effective and environmentally responsible solutions to homes and
          businesses across the region. Our commitment to excellence and customer
          satisfaction has made us the preferred choice for pest control services.
        </Typography>
      </Box>

      {/* Mission and Vision */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                To provide safe, effective, and environmentally responsible pest
                control solutions while maintaining the highest standards of
                professional service and customer satisfaction.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                To be the leading pest control service provider, recognized for
                innovation, sustainability, and commitment to protecting both
                people and the environment.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Our Values */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Values
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6">Safety First</Typography>
              <Typography variant="body2">
                We prioritize the safety of our clients, technicians, and the environment.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6">Excellence</Typography>
              <Typography variant="body2">
                We strive for excellence in every service we provide.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <GroupsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6">Teamwork</Typography>
              <Typography variant="body2">
                We believe in the power of collaboration and shared expertise.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6">Integrity</Typography>
              <Typography variant="body2">
                We maintain the highest standards of professional ethics.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Our Team */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} md={4} key={member.name}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.position}
                  </Typography>
                  <Typography variant="body2">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Achievements */}
      <Box>
        <Typography variant="h4" gutterBottom align="center">
          Our Achievements
        </Typography>
        <Grid container spacing={2}>
          {achievements.map((achievement) => (
            <Grid item xs={12} sm={6} md={3} key={achievement}>
              <Card>
                <CardContent>
                  <Typography variant="body1" align="center">
                    {achievement}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 