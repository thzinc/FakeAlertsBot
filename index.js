const webshot = require('webshot');
const options = {
    // siteType: 'html',
    windowSize: {
        width: 1024,
        height: 512,
    },
};

const iosEmergencyAlertsTemplate = ['file://']
    .concat(__dirname.split(/[\\/]+/))
    .concat(['iosEmergencyAlerts', 'template.html'])
    .join('/');
console.log('iosEmergencyAlertsTemplate', iosEmergencyAlertsTemplate);
webshot(`${iosEmergencyAlertsTemplate}?text=${escape('WINTER IS COMING. SEEK IMMEDIATE SHELTER. THIS IS NOT A DRILL.')}`, 'test.png', options, console.error);