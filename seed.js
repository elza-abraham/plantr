const db = require('./models');
db.sync({force: true})
    .then(() => {
        console.log('successfully connected to database')
        db.close()
    })
    .catch(err => {
        console.log('Error: ' + err)
        db.close()
    })