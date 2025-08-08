import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Cookie as CookieIcon,
  ExpandMore as ExpandMoreIcon,
  Settings as SettingsIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent was already given
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowBanner(true);
    } else {
      setConsentGiven(true);
      try {
        const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences'));
        if (savedPreferences) {
          setPreferences(savedPreferences);
        }
      } catch (error) {
        console.error('Error parsing saved preferences:', error);
      }
    }
  }, []);

  const handleAcceptAll = async () => {
    setIsLoading(true);
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    await submitConsent(allPreferences);
    setIsLoading(false);
  };

  const handleAcceptNecessary = async () => {
    setIsLoading(true);
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    await submitConsent(necessaryOnly);
    setIsLoading(false);
  };

  const handleSavePreferences = async () => {
    setIsLoading(true);
    await submitConsent(preferences);
    setShowSettings(false);
    setIsLoading(false);
  };

  const submitConsent = async (consentPreferences) => {
    try {
      // Save to localStorage for immediate effect
      localStorage.setItem('cookieConsent', 'true');
      localStorage.setItem('cookiePreferences', JSON.stringify(consentPreferences));
      
      // Also try to save to backend if available
      try {
        await fetch('/api/cookies/consent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            consentGiven: true,
            preferences: consentPreferences,
          }),
        });
      } catch (error) {
        console.log('Backend not available, using localStorage only');
      }

      setConsentGiven(true);
      setShowBanner(false);
      setPreferences(consentPreferences);
      
      // Trigger smooth page transition
      document.body.style.overflow = 'auto';
      
      // Add success animation
      const successEvent = new CustomEvent('cookieConsentAccepted', {
        detail: { preferences: consentPreferences }
      });
      window.dispatchEvent(successEvent);
    } catch (error) {
      console.error('Error submitting consent:', error);
      // Even if API fails, allow access for better UX
      setConsentGiven(true);
      setShowBanner(false);
    }
  };

  const handlePreferenceChange = (preference) => (event) => {
    setPreferences({
      ...preferences,
      [preference]: event.target.checked,
    });
  };

  const handleWithdrawConsent = async () => {
    try {
      localStorage.removeItem('cookieConsent');
      localStorage.removeItem('cookiePreferences');
      
      // Also try to withdraw from backend if available
      try {
        await fetch('/api/cookies/withdraw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
      } catch (error) {
        console.log('Backend not available, using localStorage only');
      }
      
      setConsentGiven(false);
      setShowBanner(true);
    } catch (error) {
      console.error('Error withdrawing consent:', error);
    }
  };

  // If consent is given and banner is hidden, show settings button
  if (!showBanner && consentGiven) {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Button
          variant="outlined"
          size="small"
          startIcon={<SettingsIcon />}
          onClick={() => setShowSettings(true)}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          }}
        >
          Cookie Settings
        </Button>
      </Box>
    );
  }

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Paper
              elevation={8}
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderTop: '2px solid #1976d2',
              }}
            >
              <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CookieIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    Cookie Consent
                  </Typography>
                </Box>
                
                <Typography variant="body1" sx={{ mb: 2 }}>
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    onClick={handleAcceptAll}
                    disabled={isLoading}
                    startIcon={isLoading ? <CircularProgress size={16} /> : <CheckCircleIcon />}
                    sx={{ minWidth: 120 }}
                  >
                    {isLoading ? 'Processing...' : 'Accept All'}
                  </Button>
                  
                  <Button
                    variant="outlined"
                    onClick={handleAcceptNecessary}
                    disabled={isLoading}
                    sx={{ minWidth: 140 }}
                  >
                    Necessary Only
                  </Button>
                  
                  <Button
                    variant="text"
                    onClick={() => setShowSettings(true)}
                    disabled={isLoading}
                    startIcon={<SettingsIcon />}
                  >
                    Customize
                  </Button>
                  
                  <Link
                    href="/privacy-policy"
                    variant="body2"
                    sx={{ alignSelf: 'center', textDecoration: 'none' }}
                  >
                    Privacy Policy
                  </Link>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Dialog */}
      <Dialog
        open={showSettings}
        onClose={() => setShowSettings(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
          <SettingsIcon sx={{ mr: 1 }} />
          Cookie Preferences
        </DialogTitle>
        
        <DialogContent>
          <Alert severity="info" sx={{ mb: 2 }}>
            You can customize your cookie preferences below. Some cookies are necessary 
            for the website to function properly.
          </Alert>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Chip
                  label="Necessary"
                  color="primary"
                  size="small"
                  sx={{ mr: 2 }}
                />
                <Typography variant="h6">Necessary Cookies</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 2 }}>
                These cookies are essential for the website to function properly. 
                They cannot be disabled.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preferences.necessary}
                    disabled
                    color="primary"
                  />
                }
                label="Session management and security"
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Chip
                  label="Analytics"
                  color="secondary"
                  size="small"
                  sx={{ mr: 2 }}
                />
                <Typography variant="h6">Analytics Cookies</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 2 }}>
                These cookies help us understand how visitors interact with our website 
                by collecting and reporting information anonymously.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preferences.analytics}
                    onChange={handlePreferenceChange('analytics')}
                    color="secondary"
                  />
                }
                label="Website usage analytics"
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Chip
                  label="Marketing"
                  color="success"
                  size="small"
                  sx={{ mr: 2 }}
                />
                <Typography variant="h6">Marketing Cookies</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 2 }}>
                These cookies are used to track visitors across websites to display 
                relevant and engaging advertisements.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preferences.marketing}
                    onChange={handlePreferenceChange('marketing')}
                    color="success"
                  />
                }
                label="Personalized advertisements"
              />
            </AccordionDetails>
          </Accordion>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setShowSettings(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSavePreferences}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={16} /> : <CheckCircleIcon />}
          >
            {isLoading ? 'Saving...' : 'Save Preferences'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CookieConsent;
