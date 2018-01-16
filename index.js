const webshot = require('webshot');
const options = {
    windowSize: {
        width: 1024,
        height: 512,
    },
    onLoadFinished: {
        fn: function() {
            document.getElementById('text').innerText = this.text;
        },
        context: {
            text: 'WINTER IS COMING. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL.',
        }
    }
};

const iosEmergencyAlertsTemplate = ['file://']
    .concat(__dirname.split(/[\\/]+/))
    .concat(['iosEmergencyAlerts', 'template.html'])
    .join('/');
console.log('Requesting URL', iosEmergencyAlertsTemplate);
webshot(iosEmergencyAlertsTemplate, 'test.png', options, console.error);