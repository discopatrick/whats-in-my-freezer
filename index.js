var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('whats-in-my-freezer');

app.launch(function(req,res) {
    res.say("You have five chicken wings.");
});

app.intent('AddIntent', {
        "slots":{"ITEM":"FOODITEM"},
        "utterances":["Add {chicken|beef|pork|ITEM}"]
    },function(req,res) {
        res.say('You have added ' + req.slot('ITEM') + ' to your freezer.');
    }
);

module.exports = app;
