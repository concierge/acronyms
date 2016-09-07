let acronym = require('acronym-maker');

exports.run = (api, event) => {
    if (event.arguments.length !== 2) {
        return api.sendMessage("WTF are you doing?", event.thread_id);
    }

    let ac = event.arguments[1];
    acronym.create(ac, (err, res) => {
        if (err) {
            return api.sendMessage("Something went wrong. Its probably your fault " + event.sender_name, event.thread_id);
        }
        let msg = res.join(' ');
        api.sendMessage(msg, event.thread_id);
    });
};
