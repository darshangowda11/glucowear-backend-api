const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();

 // Database configuration
const db = require("./config/database");

// User routes
const userRoutes = require("./routes/user.routes"); 
// Accelerometer routes
const Accelerometer = require("./routes/accelerometer.routes"); 
// Log routes
const logRoutes = require("./routes/log.routes");
// Resonance routes 
const resonance = require("./routes/resonance.routes"); 
// Test details routes
const testDetails = require("./routes/testDetails.routes"); 
// Wearable others routes
const wearableOthers = require("./routes/wearableothers.routes"); 


// Load environment variables
dotenv.config(); 
const port = process.env.PORT || 3002;

//  Middlewares: - Enable CORS
app.use(cors()); 
//  Middlewares:  - Parse JSON requests
app.use(express.json());
//  Middlewares:  - Parse cookies
app.use(cookieParser()); 


// Routes
// User routes
app.use('/user', userRoutes); 
// Test details routes
app.use("/api/patient", testDetails); 
// Log routes
app.use("/api", logRoutes);
// Resonance routes 
app.use("/api", resonance); 
// Accelerometer routes
app.use("/api", Accelerometer); 
// Wearable others routes
app.use("/api", wearableOthers); 


// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
