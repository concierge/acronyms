let maker = require('acronym-maker'),
	generator = require('acronym');

exports.run = (api, event) => {
    if (event.arguments.length !== 2) {
        return api.sendMessage("WTF are you doing?", event.thead_id);
    }

    let ac = event.arguments[1];
	if (ac.length >= 3 && ac.length <= 15 && api.random([true, false])) {
		// method 1
		maker.create(ac, (err, res) => {
			if (err) {
				return api.sendMessage("Something went wrong. Its probably your fault " + event.sender_name, event.thead_id);
			}
			let msg = res.join(' ');
			api.sendMessage(msg, event.thead_id);
		});
	}
	else {
		let res = generator(ac);
		api.sendMessage(res, event.thead_id);
	}
};
