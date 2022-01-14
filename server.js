const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');
const handlebars = require('express-handlebars');

const apiKey = 'CL8ByrnKU7w6vUEfiJqJaiepljjvNSjUzIBfiue3kofP7tP_HdwhEpL-JenzIMz5IdV52w91Ym2lqy7HgFaprWTPZk0EYbOJa5So_Z6-gnSaqyeO1wUxMrnvcEPgYXYx';
const client = yelp.client(apiKey);


const app = express();

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());



app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));

app.use('/src', express.static('src'))

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', { layout: 'index' });
});



app.listen(3000, function() {
    console.log('web server listening on port 3000')
})