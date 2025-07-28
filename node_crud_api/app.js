const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // for raw JSON
app.use(bodyParser.urlencoded({ extended: true })); // for form-data and url-encoded


// Routes
app.use('/', userRoutes);
app.use('/', productRoutes);

app.get('/', (req, res) => res.send('API is running'));

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
