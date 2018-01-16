const webshot = require('webshot');
const options = {
    windowSize: {
        // Twitter card size
        width: 1024,
        height: 512,
    },
    onLoadFinished: {
        fn: function() {
            document.getElementById('text').innerText = this.text;
        },
        context: {
            // TODO: figure out text to pass to template
            text: 'WINTER IS COMING. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL.',
            // TODO: Add a random 'N mins ago'
        }
    }
};

const iosEmergencyAlertsTemplate = ['file://']
    .concat(__dirname.split(/[\\/]+/))
    .concat(['iosEmergencyAlerts', 'template.html'])
    .join('/');

// TODO: change logic to not use temp file if possible, then tweet resulting image
webshot(iosEmergencyAlertsTemplate, 'test.png', options, console.error);