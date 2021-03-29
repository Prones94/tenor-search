const express = require('express');
const app = express();
const port = 3000


// Routes
app.get('/', (req, res) => {
  const gifURL = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245';
  res.render('hello-gif', {gifURL});
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