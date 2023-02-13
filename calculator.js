const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res) => {
    let numbers = req.query.numbers;
    let sum = 0;
  
    if (!numbers) {
      res.status(400).send({ error: 'Numbers are required' });
    } else {
      numbers = numbers.split(',');
      numbers.forEach(number => {
        sum += parseInt(number);
      });
      res.send({ result: sum });
    }
});

app.get('/multiplication', (req, res) => {
  let numbers = req.query.numbers;
  let product = 1;

  if (!numbers) {
    res.status(400).send({ error: 'Numbers are required' });
  } else {
    numbers = numbers.split(',');
    numbers.forEach(number => {
      product *= parseInt(number);
    });
    res.send({ result: product });
  }
});
app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
  });