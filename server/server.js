const express = require("express");
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let mysqlConnection = mysql.createConnection(require("./db_config"));

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Connection is failed', err)
    }
    else {
        console.log('Connection is successful')
    }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/animal", (req, res) => {
    mysqlConnection.query("SELECT * FROM animal", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            console.log('trouble')
            throw err;
        }
    });
});

app.get("/animal/filtered", (req, res) => {
    mysqlConnection.query("SELECT * FROM animal", (err, rows, fields) => {
        if (!err) {
            let obj_type = req.query.type;
            let obj_expense = req.query.expense;
            console.log(obj_type);
            if (obj_type !== undefined) {
                rows = rows.filter(row =>  row.anim_type === obj_type);
            }
            if (obj_expense !== undefined) {
                console.log(obj_expense.split('-')[0])
                console.log(typeof(obj_expense.split('-')[0]))
                rows = rows.filter((row) => row.daily_expense >= +obj_expense.split('-')[0] && row.daily_expense <= +obj_expense.split('-')[1])
            }
            res.send(rows)
        } else {
            console.log('trouble')
            throw err;
        }
    });
});

/*app.get('/animal', (req, res) => {
    let { partnerList } = req.query;
});*/

app.use(express.static('public'));

