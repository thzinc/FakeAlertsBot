const webshot = require('webshot');
const Twitter = require('twitter');

const messages = [
    'WINTER IS COMING. SEEK SHELTER IMMEDIATELY. THIS IS NOT A DRILL.',
    'THE ROBBER IS COMING. HIDE YOUR RESOURCES. A SEVEN WAS ROLLED.',
];

const selectedMessage = messages[Math.floor(Math.random() * messages.length)];

const options = {
    windowSize: {
        // Twitter card size
        width: 1024,
        height: 512,
    },
    onLoadFinished: {
        fn: function () {
            document.getElementById('text').innerText = this.text;
            document.getElementById('minsAgo').innerText = this.minsAgo;
        },
        context: {
            text: selectedMessage,
            minsAgo: Math.ceil(Math.random() * 57) + 1
        }
    }
};

const iosEmergencyAlertsTemplate = ['file://']
    .concat(__dirname.split(/[\\/]+/))
    .concat(['iosEmergencyAlerts', 'template.html'])
    .join('/');

const imageFilename = 'image.png'
webshot(iosEmergencyAlertsTemplate, imageFilename, options, (err) => {
    var data = require('fs').readFileSync(imageFilename);

    const client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    });
    
    client.post('media/upload', { media: data }, function (error, media, response) {
        if (!error) {
            var status = {
                status: ['Emergency Alert', selectedMessage].join('\n'),
                media_ids: media.media_id_string // Pass the media id string
            }

            client.post('statuses/update', status, function (error, tweet, response) {
                if (!error) {
                    console.log(tweet.text);
                } else {
                    console.log(error);
                }
            });
        } else {
            console.error(error);
        }
    });
});