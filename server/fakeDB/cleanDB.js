
const mongoose = require('mongoose');
const config = require('../config/dev');
const FakeDB = require('../fakeDB/FakeDB');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async () => {
  const fakeDB = new FakeDB();
  console.log('starting populating db / cleaning up db to initial state');
  await fakeDB.populate();
  await mongoose.connection.close();
  console.log('starting populated');
});