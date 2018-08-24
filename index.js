const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/views/parts');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.use((request, response, next)=>{
  var now = new Date().toString();
  var log = `Connection at ${now}: ${request.method} ${request.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err)=>{
    if (err){
      console.log('Unable to append to server log');
    }
  })
  next();
});

// app.use((request, response, next)=>{
//
//   response.render('down.hbs', {
//     pageHeader: 'Server Maintaince',
//     pageTitle: 'Tango Down'
//   });
// });

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('allCaps', (text)=>{
  return text.toUpperCase();
})

app.get('/', (request, response)=>{
  // response.send('<button>Hello World</button>');
  response.render('index.hbs', {
    pageTitle: 'Home',
    currentYear: new Date().getFullYear()
  });
});

app.get('/fantasy', (request, response)=>{
  response.render('fantasy.hbs', {
    pageTitle: 'Fantasy Theme | Affordable Websites | Developer for Hire',
    currentYear: new Date().getFullYear()
  })
});

app.get('/occult', (request, response)=>{
  response.render('occult.hbs', {
    pageTitle: 'Dark Theme | Affordable Websites | Developer for Hire',
    currentYear: new Date().getFullYear()
  })
});

app.get('/cool-steel', (request, response)=>{
  response.render('cool-steel.hbs', {
    pageTitle: 'Cool-Steel Theme | Affordable Websites | Developer for Hire',
    currentYear: new Date().getFullYear()
  })
});

app.get('/yummy', (request, response)=>{
  response.render('yummy.hbs', {
    pageTitle: 'Yummy Theme | Affordable Websites | Developer for Hire',
    currentYear: new Date().getFullYear()
  })
});

app.get('/bad', (request, response)=> {
  response.send({
    error: 'Bad File Request',
    request: [
      '/',
      'bad'
    ]
  });
});

app.listen(port, ()=>{
  console.log(`Server Listening on port ${port}`);
}); //port
