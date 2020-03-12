const port = process.env.PORT | 3000;
const path = require('path');
const express = require('express');
const app = express();
const multer = require('multer');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './form-data/');
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use('/', express.static(path.join(__dirname, 'www')));
app.use('/form-data', express.static(path.join(__dirname, 'form-data')));

app.post('/user', upload.single('file'), function (req, res) {
    const data = JSON.stringify(req.body, null, 2);
    fs.writeFileSync(`form-data/${req.body.email}.json`, data)
    res.send(`\n${data}\nhttp://localhost:${port}/${req.file.path}\n`);

});

app.listen(port);
