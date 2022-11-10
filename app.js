import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan'
import router from './routes/index'

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/water-notification.app", router);

export default app;