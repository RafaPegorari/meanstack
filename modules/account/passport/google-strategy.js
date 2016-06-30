'use strict';

var googleStrategy = require('passport-google-oauth').OAuth2Strategy,
    settings = require('config'),
    findOrCreateOAuth = require('./find-or-create-oauth');

/**
 * Strategy Google.
 */
module.exports = function (passport) {
    passport.use('google',
        new googleStrategy(
            {
                clientID: settings.googleStrategy.clientID,
                clientSecret: settings.googleStrategy.clientSecret,
                callbackURL: settings.googleStrategy.callbackURL,
                passReqToCallback: true
            },
            function (req, token, refreshToken, profile, done) {
                findOrCreateOAuth(req, token, refreshToken, profile, done);
            }
        )
    );
};