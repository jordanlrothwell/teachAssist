const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/teachassistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
