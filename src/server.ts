import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './api/v1/routes/index';

const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(cookieParser());

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});