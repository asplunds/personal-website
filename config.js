const path = require("path");

module.exports = {

	password: "qwerty",

	mongo: {

		connection: "mongodb://127.0.0.1:27017/",

		database: "baka"

	},

	admin: {

		port: 2000,

		interface: "localhost",

		imageLocation: path.resolve(__dirname, "static/images"),

		videoLocation: path.resolve("D:\\baka"),

		jobLocation: "http://localhost:2000/baka/encoder/",


	}


}