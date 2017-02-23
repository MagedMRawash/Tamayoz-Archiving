
module.exports = (mongoose) => {
let self = this; 
    // Configration
    // Connect to DB   
    var database;

    mongoose.connect("mongodb://localhost:27017/test", (err, db) => {
        if (!err) {
            console.log("i am in db")
            database = db
        } else {
            console.log(err)
        }
    })

// Models
self.Message = mongoose.model('Message', {
    msg: String
})

return self 

}
