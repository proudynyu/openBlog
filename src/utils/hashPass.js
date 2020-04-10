const crypto = require('crypto')

module.exports = ({
    generatePass(pass) {
        return crypto.createHash('sha256').update(pass).digest('hex');
    }
})