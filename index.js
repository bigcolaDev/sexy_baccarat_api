const express = require("express");
const axios = require("axios");
const cors = require("cors");
const qs = require("qs");
const bodyParser = require("body-parser");
const schedule = require("node-schedule");

const app = express();

//middleware
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

const data = qs.stringify({
	domainType: "1",
	tableStampTimes:
		'[{"domainType":"1","tableID":1,"stampTime":1657795206158,"dealerEventStampTime":1657795224806},{"domainType":"1","tableID":2,"stampTime":1657795184991,"dealerEventStampTime":1657795203674},{"domainType":"1","tableID":3,"stampTime":1657795199324,"dealerEventStampTime":1657795220275},{"domainType":"1","tableID":4,"stampTime":1657795197519,"dealerEventStampTime":1657795216603},{"domainType":"1","tableID":5,"stampTime":1657795178859,"dealerEventStampTime":1657795227970},{"domainType":"1","tableID":6,"stampTime":0,"dealerEventStampTime":1657795166297},{"domainType":"1","tableID":21,"stampTime":1657795195350,"dealerEventStampTime":1657795213578},{"domainType":"1","tableID":31,"stampTime":1657795186405,"dealerEventStampTime":1657795202616},{"domainType":"1","tableID":32,"stampTime":1657795190010,"dealerEventStampTime":1657795206154},{"domainType":"1","tableID":33,"stampTime":0,"dealerEventStampTime":0},{"domainType":"1","tableID":51,"stampTime":1657795165214,"dealerEventStampTime":1657795230774},{"domainType":"1","tableID":56,"stampTime":1657795207282,"dealerEventStampTime":1657795227318},{"domainType":"1","tableID":71,"stampTime":1657795187046,"dealerEventStampTime":1657795207605},{"domainType":"1","tableID":72,"stampTime":0,"dealerEventStampTime":0},{"domainType":"1","tableID":121,"stampTime":1657795165224,"dealerEventStampTime":1657795230776},{"domainType":"1","tableID":126,"stampTime":1657795153901,"dealerEventStampTime":1657795174301}]',
	hallType: "1",
});
const config = {
	method: "post",
	url: "https://bpweb.semgbow777.com/player/query/queryMobileGameHallRoad",
	headers: {
		accept: "application/json, text/javascript, */*; q=0.01",
		"accept-encoding": "gzip, deflate, br",
		"accept-language": "th-TH,th;q=0.9",
		connection: "keep-alive",
		"content-length": "2139",
		"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
		cookie:
			"ROUTEID=.bacweb07; visid_incap_2676700=7IufW92pQeaNYleW7corwQvxz2IAAAAAQUIPAAAAAAB+HNaSzP0IqdaygXI0+rGL; nlbi_2676700=ktMwBq1BsA62zqn/o5WArQAAAABFEa92415bvPALfxsb6G2h; rcr=987; load_balancer=2a4dd6facf6444aaac4b98a724505b80; _ga=GA1.2.1511412549.1657794830; _gid=GA1.2.842123660.1657794830; JSESSIONID=81ED13DA01EF6FF6825B88214E44980F; incap_ses_8025_2676700=RBUHADF+kRXrBFk0M4deb/YL0GIAAAAAHwccgs24XkGlVgpI7ggkkw==; _gat_gtag_UA_153578037_2=1",
		host: "bpweb.semgbow777.com",
		origin: "https://bpweb.semgbow777.com",
		referer:
			"https://bpweb.semgbow777.com/player/singleTableMobileMainV2.jsp?dm=1&title=1&hall=1&sgt=0",
		"sec-ch-ua":
			'".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
		"sec-ch-ua-mobile": "?1",
		"sec-ch-ua-platform": '"Android"',
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"user-agent":
			"Mozilla/5.0 (Linux; Android 12; M2103K19G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
		"x-requested-with": "XMLHttpRequest",
	},
	data: data,
};

app.listen(5000, () => console.log(`Listening on port 5000`));

app.get("/", (req, res) => {
	axios(config)
		.then(function (response) {
			res.send(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
});

schedule.scheduleJob("* * * * *", function () {
	axios(config)
		.then(function (response) {
			console.log("finished...");
		})
		.catch(function (error) {
			console.log(error);
		});
});
