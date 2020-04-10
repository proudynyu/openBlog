const app = require('./index');

require('dotenv').config();

port = process.env.PORT || 3333;
host = process.env.HOST || "localhost" 

app.listen(port, () => {
    console.log(`Server listening on http://${host}:${port}`);
});