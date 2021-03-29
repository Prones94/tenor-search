const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

// Libraries
const Tenor = require("tenorjs").client({
  "Key": "GU8W2OSB2NSD",
  "Filter": "off",
  "Locale": "en_US",
});

// Routes
app.get('/', (req, res) => {
 term = ""
 if(req.query.term) term = req.query.term;
 Tenor.Search.Query(term, "5")
  .then(response => {
    const gifs = response;
    res.render('home', {gifs})
  }).catch(console.error);
});

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;
  res.render('greetings',{name});
})

// Middleware
const exphbs = require('express-handlebars');



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})