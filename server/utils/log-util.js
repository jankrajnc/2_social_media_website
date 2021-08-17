var bunyan = require('bunyan');
require('dotenv').config();

// Creates and returns a logger used in development.
function devLogger() {
    // Set the logging options.
    const devLogger = bunyan.createLogger({
        name: "2_social_media_website",
        level: process.env.LOGGING_LEVEL,
        stream: process.stdout,
        src: true
    });

    return devLogger;
}


// Creates and returns a logger used in production.
function productionLogger() {
    const prodLogger = bunyan.createLogger({
        name: "2_social_media_website",
        level: process.env.LOGGING_LEVEL,
        streams: [
            // Log "info" level and above to the combined log.
            {
                level: 'info',
                path: './logs/combined-log.log'
            },
            // Log "error" level and above to the error log.
            {
                level: 'error',
                path: './logs/error-log.log'
            }
        ],
        src: true
    });

    return prodLogger;
}

function getLogger() {
    if (process.env.NODE_ENV === 'production') {
        return productionLogger();
    } else {
        return devLogger();
    }
}

module.exports = {
    getLogger
};
