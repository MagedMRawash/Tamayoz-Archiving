module.exports = (app, dbModels) => {

    app.post('/api', (req, res) => {
        console.log(req.body)
        var message = new dbModels.Message(req.body);
        message.save();
        res.status(200)
    })

    app.get('/api', (req, res) => {
        // console.log(req.body)
        // dbModels.Message.find({}).exec((err, result) => {
        //     res.send(result)
        // });
        res.sendFile(__dirname.replace("backend","")+ 'frontend/index.html');
    })
}
// end of routing