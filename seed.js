const {db, Gardener, Plot, Vegetable} = require('./models');
db.sync({force: true})
.then(() => {
    console.log('successfully connected to database')
    const vegId = Vegetable.bulkCreate([{name: "Carrot", color: "orange", planted_on: new Date()},
        {name: "Beets", color: "Purple", planted_on: new Date()}
    ])
    .then(() => {
        Gardener.create({name: "test", age: 10, favoriteVegetableId: Vegetable.id})
        .then(() => {
            db.close()
        })
    });
})
.catch(err => {
    console.log('Error: ' + err)
    db.close()
})
