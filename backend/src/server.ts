import express from 'express';
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get("/ping", (request, response) => {
    response.json({ response: "pong" });
});

app.listen(3333);