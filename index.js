// Init
const express = require('express');
const { dirname } = require('path');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer();

// Setup Network
const PORT = 80;
const IP = '192.168.0.101';


// Ardion Things
const { SerialPort } = require('serialport');
const porta = new SerialPort({
    path: 'COM9',
    baudRate: 9600,
});


// Middleware
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// Routing
app.get('/', function(req, res){
    res.render('index');
});
app.post('/input', upload.none(), function (req, res, next) {
    porta.write(req.body.newtext);
    console.log(req.body.newtext);
  })

// MainLoop
app.listen(PORT, IP, () => console.log(`Server is running on port ${PORT}`));