const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit: 10,
    password: '!QAZ1qaz',
    user: 'root',
    database: 'test',
    host: 'localhost',
    port: '3306'
});

let testdb = {};

testdb.all = () => {
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM test.users`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = testdb;