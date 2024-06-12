import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';

import postRoute from './route/post.route.js';
import authRoute from './route/auth.route.js';

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/posts', postRoute);

app.use('/api/auth', authRoute);

app.use('/api/test', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.end(JSON.stringify({
        jaja: '<h1>JoJo test!1231</h1>',
        zaza: '123',
    }));
});

app.listen('8800', () => {
    console.log('Server running...');
});
