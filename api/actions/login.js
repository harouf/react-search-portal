


export default function login(req) {
	var nano     = require('nano')('http://localhost:5984')
	  , username = req.body.name
	  , userpass = req.body.password
	  , callback = console.log
	  , cookies  = {} // store cookies, normally redis or something
	  ;
	var promise = new Promise(
		(resolve, reject) => {
			nano.auth(username, userpass, function (err, body, headers) {
			  	if (err) {
			    	callback(err);
			    	reject(err.reason);
			  	}else{

				  	if (headers && headers['set-cookie']) {
				    	cookies[user] = headers['set-cookie'];
				  	}
					const user = {
			    		name: body.name
			  		};
					//req.session.user = user;
					callback(user);
					resolve(user);
				}
			});
		}
	);
	return promise;
}
