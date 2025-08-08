const express = require('express');
const router = express.Router();
const CookieConsent = require('../models/CookieConsent');
const { v4: uuidv4 } = require('uuid');

// Get cookie consent status
router.get('/status', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId || req.headers['x-session-id'];
    
    if (!sessionId) {
      return res.json({
        consentGiven: false,
        sessionId: null,
        preferences: null
      });
    }

    const consent = await CookieConsent.findOne({
      where: { sessionId }
    });

    if (!consent) {
      return res.json({
        consentGiven: false,
        sessionId,
        preferences: null
      });
    }

    res.json({
      consentGiven: consent.consentGiven,
      sessionId: consent.sessionId,
      preferences: consent.preferences,
      consentDate: consent.consentDate
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create or update cookie consent
router.post('/consent', async (req, res) => {
  try {
    const { sessionId, consentGiven, preferences, userId } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    if (!sessionId) {
      return res.status(400).json({ message: 'Session ID is required' });
    }

    let consent = await CookieConsent.findOne({
      where: { sessionId }
    });

    if (consent) {
      // Update existing consent
      await consent.update({
        consentGiven,
        preferences,
        userId: userId || consent.userId,
        ipAddress,
        userAgent,
        consentDate: consentGiven ? new Date() : null,
        lastUpdated: new Date()
      });
    } else {
      // Create new consent
      consent = await CookieConsent.create({
        sessionId,
        consentGiven,
        preferences,
        userId,
        ipAddress,
        userAgent,
        consentDate: consentGiven ? new Date() : null
      });
    }

    // Set session cookie
    res.cookie('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 365 * 24 * 60 * 60 * 1000 // 1 year
    });

    res.json({
      success: true,
      consentGiven: consent.consentGiven,
      sessionId: consent.sessionId,
      preferences: consent.preferences
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Generate new session ID
router.post('/session', async (req, res) => {
  try {
    const sessionId = uuidv4();
    
    res.cookie('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 365 * 24 * 60 * 60 * 1000 // 1 year
    });

    res.json({ sessionId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update cookie preferences
router.patch('/preferences', async (req, res) => {
  try {
    const { sessionId, preferences } = req.body;
    
    if (!sessionId) {
      return res.status(400).json({ message: 'Session ID is required' });
    }

    const consent = await CookieConsent.findOne({
      where: { sessionId }
    });

    if (!consent) {
      return res.status(404).json({ message: 'Cookie consent not found' });
    }

    await consent.update({
      preferences,
      lastUpdated: new Date()
    });

    res.json({
      success: true,
      preferences: consent.preferences
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Withdraw consent
router.post('/withdraw', async (req, res) => {
  try {
    const { sessionId } = req.body;
    
    if (!sessionId) {
      return res.status(400).json({ message: 'Session ID is required' });
    }

    const consent = await CookieConsent.findOne({
      where: { sessionId }
    });

    if (!consent) {
      return res.status(404).json({ message: 'Cookie consent not found' });
    }

    await consent.update({
      consentGiven: false,
      preferences: null,
      consentDate: null,
      lastUpdated: new Date()
    });

    res.json({
      success: true,
      message: 'Cookie consent withdrawn successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get consent statistics (admin only)
router.get('/stats', async (req, res) => {
  try {
    const totalConsents = await CookieConsent.count();
    const givenConsents = await CookieConsent.count({
      where: { consentGiven: true }
    });
    const withdrawnConsents = await CookieConsent.count({
      where: { consentGiven: false }
    });

    res.json({
      total: totalConsents,
      given: givenConsents,
      withdrawn: withdrawnConsents,
      percentage: totalConsents > 0 ? Math.round((givenConsents / totalConsents) * 100) : 0
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
