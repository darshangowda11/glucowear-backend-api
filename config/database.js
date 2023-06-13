const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const uri= process.env.AZURE_COSMOSDB_CONNECTION_STRING//"mongodb://rkrai187:yL4vK4zJLEMSQC3ChTKK5cjzDR3cYsxEH6kyFO2Lwq4w4Z1SVWNTmDNF2OTbllSK2v21v1djXYSYACDblMhuIw%3D%3D@rkrai187.mongo.cosmos.azure.com:10255/GlucoWear_DB?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@rkrai187@";
mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log('Connected to Azure Cosmos DB');
  })
  .catch((error) => {
    console.error('Error connecting to Azure Cosmos DB:', error);
  });

// Get the connection object
const db = mongoose.connection; 

module.exports = db;

