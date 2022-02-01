import express from 'express';

const app = express();

app.post('/users')

app.listen(3000, () => {
    console.log('server started at port 3000');
})