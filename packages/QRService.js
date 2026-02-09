const QRCode = require('qrcode')

function generateQR(textValue) {
    return new Promise((resolve, reject) => {
        QRCode.toDataURL(textValue, function(err, url) {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        })
    });
}

module.exports = {
    generateQR
}
