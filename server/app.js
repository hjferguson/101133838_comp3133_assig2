const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');


const uri = "mongodb+srv://harlanjazz:7xHS4c1HFFuaNdAm@fullstack2assign2.2nvpugl.mongodb.net/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));

const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(userRoutes);
app.use(employeeRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
