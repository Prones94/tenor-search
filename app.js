const express = require('express');
const app = express();
const port = 3000


// Routes
app.get('/', (req, res) => {
  console.log(req.query) ;
  res.render('home');
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