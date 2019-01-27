const Notifier = require('notifier');
const Subscriber = require('subscriber');
const Event = require('event');

// Create Events (Observable);
const jsConference = new Event('JS Conference');
const angularConference = new Event('Angular Conference');
const reactConference = new Event('React Conference');

// Create Subscribers (Observer);
const john = new Subscriber('John');
const micky = new Subscriber('Micky');
const leon = new Subscriber('Leon');

// Create Control center (Notifier);
const admin = new Notifier();

init();

console.log(admin.notifier);


function init() {
    jsConference.subscribe(admin);
    angularConference.subscribe(admin);
    reactConference.subscribe(admin);

    jsConference.subscribe(john);
    jsConference.subscribe(micky);
    jsConference.subscribe(leon);
    angularConference.subscribe(micky);
    reactConference.subscribe(leon);

    jsConference.event('15 March');
    angularConference.event('20 June');
    reactConference.event('1 May');
}