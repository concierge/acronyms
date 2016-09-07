let maker = require('acronym-maker'),
	generator = require('acronym');

exports.run = (api, event) => {
    if (event.arguments.length !== 2) {
        return api.sendMessage("WTF are you doing?", event.thread_id);
    }

    let ac = event.arguments[1];
	if (ac.length >= 3 && ac.length <= 15 && api.random([true, false]) && /^[a-zA-Z]+$/.test(ac)) {
		// method 1 - will probably produce better acronyms but has length limits and cant deal with numbers/punctuation
		maker.create(ac, (err, res) => {
			if (err) {
				return api.sendMessage("Something went wrong. Its probably your fault " + event.sender_name, event.thread_id);
			}
			let msg = res.join(' ');
			api.sendMessage(msg, event.thread_id);
		});
	}
	else {
		// method 2 - can deal with anything
		let res = generator(ac);
		api.sendMessage(res, event.thread_id);
	}
};
