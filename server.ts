import express, {Application} from 'express';
import dotenv from 'dotenv';


const app: Application = express();


// initial config
console.log('[SERVER] start config');
dotenv.config();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
console.log('[SERVER] end config');


export default app;