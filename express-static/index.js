var express = require('express');
const path = require('path');
var app = express();

const directory = path.join(__dirname, 'public');
const staticDir = express.static(directory);
app.use(staticDir);

app.listen(3000, () => {
});
