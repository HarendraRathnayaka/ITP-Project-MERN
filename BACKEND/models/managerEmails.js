const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({

  
    email: {
        type: String,
        required: true
    },

   
})


const login = mongoose.model("ManagerEmails", loginSchema); //customer - DB table name

module.exports = login;