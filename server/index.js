const dbconnect = require('./src/config/dbconfig');
const app = require('./src/app');
dbconnect()
app.listen(3001, ()=>{
    console.log('server running :)')
    }
);