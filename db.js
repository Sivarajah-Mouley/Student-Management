const mongoose = require('mongoose');

async function connect() {
    
        try{
            await mongoose.connect('mongodb://localhost:27017/Student_Manage', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
             console.log("MongoDB connection successfully");
          }
           catch(error){
             console.log("MongoDB  not connected ");
           }
    }
  module.exports = connect
  

// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/Student_Manage', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Successfully connected to the database');
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     }
// }

// module.exports = connect;
