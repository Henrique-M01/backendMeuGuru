import app from './App';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server run on ${PORT}`))