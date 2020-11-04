
import config from "config";

import Progress from "progress";

export default class Api {

	constructor(_url) {

		if (!window.API_CACHE_BUCKET)
			window.API_CACHE_BUCKET = {};

		this.progress = Progress;

		this
			.url(_url)
			.method("GET")
			.type("json")
			.body({})
			.cache(false);

	}

	url(v) {
		this._url = !!v.match(/^http/i) ? v : `${config.api.base}${v}`;
		return this;
	}

	cache(v) {
		this._cache = v;
		return this;
	}

	method(v) {
		this._method = v;
		return this;
	}

	type(v) {
		this._type = v;
		return this;
	}

	body(v) {
		this._body = v;
		return this;
	}

	exec() {

		return new Promise(async (resolve, reject) => {

			this.progress.go(.2);

			try {
				
				const options = {
					method: this._method,
					credentials: "include"
				}

				if (options.method.toUpperCase() === "POST")
					options.body = this._body;

				const req =
					window.API_CACHE_BUCKET[this._url] &&
					window.API_CACHE_BUCKET[this._url].hasOwnProperty("timeout") &&
					window.API_CACHE_BUCKET[this._url].timeout > Date.now() ?
						window.API_CACHE_BUCKET[this._url].body :
						await fetch(this._url, options);
					
					

				this.progress.go(.8);

				const result = req[this._type] && typeof req[this._type] === "function" ?  await req[this._type]() : req;

				if (this._cache !== false)
					window.API_CACHE_BUCKET[this._url] = {
						body: result,
						timeout: Date.now() + this._cache
					}

				try {
					if (result.hasOwnProperty("unauthorized"))
						window.handleAuthorized(!result.unauthorized)
				} catch (e) {

				}

				resolve(result);

			} catch(e) {
				reject(e);
			}

		}).finally(() => {

			this.progress.go(1);

		});


	}

}

