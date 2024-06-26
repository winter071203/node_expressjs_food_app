import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.route';
import bodyParser from 'body-parser';
import morgan from 'morgan';

dotenv.config();
const app: Express = express();

// configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Connect to database
import './configs/database.config';

// Routes
app.use('/api/category', routes.categoryRoute);
app.use('/api/restaurant', routes.restaurantRoute);
app.use('/api/food', routes.foodRoute);
app.use('/api/rating', routes.ratingRoute);
app.use('/api/auth', routes.authRoute);
app.use('/api/user', routes.userRoute); 
app.use('/api/address', routes.addressRoute);
app.use('/api/cart', routes.cartRoute);
app.use('/api/order', routes.orderRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

