import express from 'express';

const app = express();

app.use(express.json());

app.listen(3999, () => {
  console.log('App Running');
});
