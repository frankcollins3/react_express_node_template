const express = require('express');
const path = require("path");
const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const getDataRouter= require("./routes/getData")
const PORT = 5000;
const app = express();

console.log('getDataRouter')
console.log(getDataRouter)


// middleware
app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000'
// }))
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getData', getDataRouter);
// app.post('/getData', getDataRouter);

app.listen(PORT || 5000, () => console.log(`now that were running on PORT: ${PORT}`))
// app.listen(5000, () => console.log({
//     my: 'favorite',
//     port: 'is',
//     server: '5000!'
// }));

module.exports = app;
