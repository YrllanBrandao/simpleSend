import app from './server';
import dotenv from 'dotenv';

dotenv.config();

const PORT:number = Number(process.env.PORT  || 2000);


app.listen(PORT, ()=> console.log(`running on PORT \x1b[33m${PORT}\x1b[0m`));