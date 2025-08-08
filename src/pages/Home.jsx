import React from "react";
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
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BugReportIcon from "@mui/icons-material/BugReport";
import ShieldIcon from "@mui/icons-material/Shield";
import ForestIcon from "@mui/icons-material/Forest";
import StarIcon from "@mui/icons-material/Star";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";

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
      type: "spring",
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
      ease: "easeInOut",
    },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      id: "cockroach",
      title: "Cockroach Control",
      description: "Effective solutions to eliminate cockroach infestations.",
      image: "/images/cockroach1.webp",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",
    },
    {
      id: "rodent",
      title: "Rodent Control",
      description: "Professional rodent removal and prevention services.",
      image: "/images/rodent.webp",
      gradient: "linear-gradient(135deg, #4ECDC4 0%, #45B7AF 100%)",
    },
    {
      id: "termite",
      title: "Termite Control",
      description: "Comprehensive termite treatment and prevention.",
      image: "/images/termite.webp",
      gradient: "linear-gradient(135deg, #96C93D 0%, #7FB800 100%)",
    },
    {
      id: "mosquito",
      title: "Mosquito Control",
      description: "Mosquito control solutions for your outdoor spaces.",
      image: "/images/mosquito.webp",
      gradient: "linear-gradient(135deg, #6C63FF 0%, #5A52E0 100%)",
    },
    {
      id: "bedbug",
      title: "BedBug Control",
      description:
        "Thorough bedbug elimination using heat treatment and targeted pesticides.",
      image: "/images/bedbug.webp",
      gradient: "linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)",
    },
    {
      id: "spider",
      title: "Spider Control",
      description:
        "Professional spider control services to eliminate unwanted arachnids.",
      image: "/images/Spiders.webp",
      gradient: "linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)",
    },
    {
      id: "lizard",
      title: "Lizard Control",
      description:
        "Safe and effective lizard removal services using humane methods.",
      image: "/images/houselizards.webp",
      gradient: "linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)",
    },
  ];

  return (
    <Box>
      {/* Hero Section with Animations */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg,rgb(223, 206, 96) 0%, #0d47a1 100%)",
          color: "white",
          py: { xs: 6, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <motion.div
          style={{
            position: "absolute",
            top: "100%",
            left: "5%",
            width: "100px",
            height: "100px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "5%",
            width: "150px",
            height: "150px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
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
                      fontWeight: "bold",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    Professional Pest Control Services
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      opacity: 0.9,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    Protect your home and business with our comprehensive pest
                    management solutions. Expert technicians, safe treatments,
                    guaranteed results.
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    size="large"
                    sx={{
                      mr: 2,
                      mb: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255,255,255,0.3)",
                      "&:hover": {
                        background: "rgba(255,255,255,0.3)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/services"
                    variant="outlined"
                    size="large"
                    sx={{
                      mb: 2,
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "white",
                      borderColor: "white",
                      "&:hover": {
                        background: "rgba(255,255,255,0.1)",
                        borderColor: "white",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Our Services
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                style={{ textAlign: "center" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <motion.div
                    animate={floatingAnimation.animate}
                    style={{
                      width: "300px",
                      height: "300px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <BugReportIcon
                      sx={{
                        fontSize: "8rem",
                        color: "white",
                        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                      }}
                    />
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 6 }}
            >
              Our Services
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    component={RouterLink}
                    to={`/services/${service.id}`}
                    sx={{
                      height: "100%",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        sx={{ height: "100%" }}
                        priority={index < 3}
                      />
                      <Box
                        sx={{
                          position: "absolute",
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
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PDF Company Profile Section */}
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 6 }}
            >
              Company Profile
            </Typography>
          </motion.div>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold", mb: 3 }}
                >
                  Learn More About Pestmark
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem" }}>
                  Discover our comprehensive pest control solutions, company history, 
                  and commitment to protecting your home and business. Our detailed 
                  company profile contains everything you need to know about our 
                  services, expertise, and dedication to customer satisfaction.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  Download our complete company profile to learn about our:
                </Typography>
                <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Comprehensive service offerings
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Professional team and expertise
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Safety standards and certifications
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Customer testimonials and success stories
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Contact information and service areas
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href="/Pestmarkcompprofile.pdf"
                  target="_blank"
                  download
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Download Company Profile
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    borderRadius: 3,
                    border: "2px solid #e3f2fd",
                  }}
                >
                  <motion.div
                    animate={pulseAnimation.animate}
                    style={{ display: "inline-block" }}
                  >
                    <PictureAsPdfIcon
                      sx={{
                        fontSize: "6rem",
                        color: "#d32f2f",
                        mb: 2,
                      }}
                    />
                  </motion.div>
                  <Typography
                    variant="h5"
                    component="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Pestmark Company Profile
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Comprehensive information about our pest control services, 
                    company values, and professional expertise.
                  </Typography>
                  <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<PictureAsPdfIcon />}
                    href="/Pestmarkcompprofile.pdf"
                    target="_blank"
                    sx={{
                      borderColor: "#d32f2f",
                      color: "#d32f2f",
                      "&:hover": {
                        borderColor: "#b71c1c",
                        backgroundColor: "rgba(211, 47, 47, 0.04)",
                      },
                    }}
                  >
                    Preview PDF
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 6 }}
            >
              Why Choose Us?
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {[
              {
                icon: ShieldIcon,
                title: "Safe & Effective",
                description:
                  "Our treatments are safe for your family and pets while being highly effective against pests.",
              },
              {
                icon: StarIcon,
                title: "Expert Technicians",
                description:
                  "Certified professionals with years of experience in pest control and management.",
              },
              {
                icon: ForestIcon,
                title: "Eco-Friendly",
                description:
                  "We use environmentally responsible methods and products in all our treatments.",
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                    }}
                  >
                    <motion.div
                      animate={pulseAnimation.animate}
                      style={{ display: "inline-block" }}
                    >
                      <feature.icon
                        sx={{
                          fontSize: "4rem",
                          color: "primary.main",
                          mb: 2,
                        }}
                      />
                    </motion.div>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Contact us today for a free inspection and quote. Don't let pests
              take over your space!
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: "bold",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255,255,255,0.3)",
                "&:hover": {
                  background: "rgba(255,255,255,0.3)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Us Now
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
