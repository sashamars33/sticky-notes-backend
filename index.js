const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const morgan = require('morgan')
const connectDB = require('./config/db')
const homeRoutes = require('./routes/home', passport)
const pageRoutes = require('./routes/pages', passport)
const cors = require('cors');

const PORT = process.env.PORT || 3001



require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if(process.env.NODE_ENV === 'development' ){
    app.use(morgan('dev'))
}

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
        })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', homeRoutes)
app.use('/pages', pageRoutes)

app.use(
    express.static(path.join(__dirname, "../client/build"))
  );

app.listen(PORT, () => {
    if(process.env.NODE_ENV === 'development'){
        console.log(PORT)
    }
})







// const express = require('express');
// const app = express();
// const MongoClient = require('mongodb').MongoClient;
// const PORT = process.env.PORT || 3001;
// const bodyParser = require('body-parser');
// const path = require('path');

// const cors = require('cors');
// const { equal } = require('assert');

// require('dotenv').config();
// const password = process.env.MONGO_PASS

// app.use(cors());




// MongoClient.connect(`mongodb+srv://sashamars:${password}@cluster0.lmzzc8q.mongodb.net/?retryWrites=true&w=majority`, {useUnifiedTopology: true})
//     .then(client => {
//         console.log("Connected to the Database");
//         const db = client.db('stickys')
//         const pageCollection = db.collection('pages');
//         const noteCollection = db.collection('notes');

//         app.use(express.json())
//         app.use(bodyParser.urlencoded({ extended: true }));

//         app.get('/pages', (req, res) => {
//             pageCollection.find().toArray()
//             .then(results => {
//                 res.send(results);
//             })
//             .catch(error => console.log(error));
//         });

//         app.get('/notes', (req, res) => {
//             noteCollection.find().toArray()
//             .then(results => {
//                 res.send(results);
//             })
//         })

//         app.put('/pages', (req, res) => {
//             if(req.body.selected === true){
//                 pageCollection.findOneAndUpdate({ pageTitle: req.body.pageTitle},
//                 {
//                     $set: {
//                         selected: req.body.selected
//                     }
//                 },
//                 {
//                     upsert: false
//                 })

//                 pageCollection.updateMany({pageTitle: { $not: { $regex: req.body.pageTitle } }},
//                 {
//                     $set: {
//                         selected: !req.body.selected
//                     }
//                 },
//                 {
//                     upsert: false
//                 })

//                 .then(result => {
//                     res.json("Success")
//                 })
//                 .catch(error => console.log(error))
//             }else if(req.body.selected === false){
//                 pageCollection.findOneAndUpdate({ pageTitle: req.body.pageTitle},
//                     {
//                         $set: {
//                             selected: req.body.selected
//                         }
//                     },
//                     {
//                         upsert: false
//                     })
                    
//                     .then(result => {
//                         res.json("Success")
//                     })
//                     .catch(error => console.log(error))
//             }
//         });

//         app.put('/notes', (req, res) => {
//             noteCollection.findOneAndUpdate({
//                 page: req.body.page,
//                 note: req.body.note
//             },{
//                 $set: {
//                     position: {
//                         x: req.body.position.x,
//                         y: req.body.position.y
//                     }
//                 }
//             },{
//                 upsert: false
//             })
//             .then(result => {
//                 res.json("Success")
//                 console.log(result)
//             })
//             .catch(error => console.log(error))
//         })

//         app.post('/pages', (req, res) => {
//             pageCollection.insertOne({
//                 pageTitle: req.body.pageTitle,
//                 selected: false
//             })
//             .then((results) => {
//                 res.json({
//                     pageTitle: req.body.pageTitle,
//                     selected: false
//                 })
//             })
//             .catch(error => console.log(error));
//         });

//         app.post('/notes', (req, res) => {

//             const colorPaletteOne = ['#5B8D8Eff','#7CA4A3ff','#8BB0C3ff','#8DBFB3ff','#7CB089ff','#83C5CBff','#A2DEEEff','#BCB4E0ff','#C6C4F6ff','#B3AADEff']

//             const color = colorPaletteOne[Math.floor(Math.random()*(colorPaletteOne.length))];

//             console.log(req.body, color)
//             noteCollection.insertOne({ 
//                 note: req.body.note, 
//                 page: req.body.pageTitle, 
//                 color: color, 
//                 position: {x: 0, y:0}})
//             .then(result => {
//                 console.log(result)
//                 res.json({
//                     note: req.body.note, 
//                     page: req.body.pageTitle, 
//                     color: color, 
//                     position: {x: 0, y:0}})
//             })
//             .catch(error => console.log(error));
//         })

//         app.delete('/notes', (req, res) => {
//             if(req.body.pageDeleted === true){
//                 noteCollection.deleteMany({
//                     page: req.body.page
//                 })
//                 .then(result => {
//                     res.json(`Deleted Notes`)
//                 })
//                 .catch(error => console.log(error))
//             }else{
//                 noteCollection.findOneAndDelete({note: req.body.note, page: req.body.page})
//                 .then(result => {
//                     res.json('Deleted Note');
//                 })
//                 .catch(error => console.log(error))
//             }
//         })

//         app.delete('/pages', (req, res) => {
//             pageCollection.findOneAndDelete({ pageTitle: req.body.pageTitle})
//                 .then(result => {
//                     res.json(`Deleted page`)
//                 }
//             )
//         })

        
//     });
    


// app.listen(PORT, () => {
//     console.log(`Connected on port ${PORT}`)
// });