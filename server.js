// import app from './app.js'
const app = require('./app')

app.get('/', (req, res) => {
  res.send('welcome with me! my name is ben <3')
})

app.route('/users').get((req, res, next) => {
  res.status(200).json({
    users: [],
    success: false
  })
})

app.listen(process.env.PORT, () => {
  console.log(`server run on port ${process.env.PORT}`);
})