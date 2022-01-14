// index.js

/**
 * Required External Modules
 */

require('dotenv').config();
const express = require("express");
const path = require("path");
const yelp = require('yelp-fusion');
const bodyParser = require('body-parser');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
const apiKey = process.env.YELP_API_KEY;
const client = yelp.client(apiKey);

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use('/src', express.static('src'))
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});





/**
 * Yelp Fusion
 */

app.post('/', (req, res) => {
    client.search({
        term: 'Parking+Lot',
        location: req.body.fname,
    }).then(response => {
        let yyy = JSON.stringify(response.jsonBody.businesses);
        yyy = JSON.parse(yyy);
        console.log(yyy)

    res.render('index', { yyy });
    }).catch(e => {
        res.locals.message = e.message;
        console.log(e);
    });
});


