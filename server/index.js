const dbconnect = require('./src/config/dbconfig');
const app = require('./src/app');
app.listen(3001, ()=>{
    dbconnect()
    console.log('server running :)')
    }
);