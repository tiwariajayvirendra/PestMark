import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    alert(
      "This feature is under maintenance. Kindly call on the given number for any queries."
    );
  };

  return (
    <Box sx={{ py: 6 }}>
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
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                  Send us a Message
                </Typography>
                <Box component="form" noValidate>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Phone"
                        type="tel"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          background:
                            "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
                          },
                        }}
                        onClick={handleClick} // Adding the alert event
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Information and Map */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
                  mb: 3,
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                  Contact Information
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    <strong>Address:</strong>
                    <br />
                    B-111, Vishwakarma Coloney, Nr. Sab ki Rasoi,
                    <br />
                    Prahladpur, Delhi-110044
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    <strong>Phone:</strong> 7291865963, 7048308107
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    <strong>Email: </strong> -nikhilsingh@pestmark.in
                  </Typography>
                  <Typography variant="body1">
                    <strong>Business Hours:</strong>
                    <br />
                    Monday - Sunday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </Typography>
                </Box>
              </Paper>

              {/* Google Maps iframe */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 400 },
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.5048468905254!2d77.28916091910214!3d28.499303334443265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce726dda24373%3A0x65006e50c3de628!2sPanel%20Paradise!5e0!3m2!1sen!2sin!4v1744339489309!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
