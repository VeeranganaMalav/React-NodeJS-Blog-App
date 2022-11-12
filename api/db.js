import mysql from 'mysql';

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root@1998",
    database : "blog"
});

export default db;