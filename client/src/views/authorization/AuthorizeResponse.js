


export default class AuthorizeResponse {

	static auth(data) {

		return !(data && data instanceof Object && data.hasOwnProperty("unauthorized") && data.unauthorized === true);

	}

}