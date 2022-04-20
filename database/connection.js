

const mysql = require('mysql2')
// const { NULL } = require('mysql/lib/protocol/constants/types')


const DB = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  password: '$AnchalYadav@123000#',
  database: 'blog'
})

DB.connect();

DB.connect((err)=>{
  if(!err){
    DB.query(`SELECT 1 FROM blogs`, (err , result)=>{
      if(err){
        console.log("creating table")
        DB.query(`CREATE TABLE blogs(
          id INT NOT NULL AUTO_INCREAMENT PRIMARY KEY,
          title VARCHAR(100) NOT NULL,
          description VARCHAR(5000) NOT NULL,
          created TIMESTAMP DEFAULT CURRENT_TIMESTAMP),
          status  TINYINT(1) UNSIGNED NOT NULL DEFAULT '0`)
        console.log("create table")
      } else{
        console.log("Table Already Exist")
      }
    })
  }
  else{
    console.log("Failed to Connect DataBase")
  }
})
// CREATE TABLE blogs(id INT NOT NULL AUTO_INCREAMENT PRIMARY KEY,title VARCHAR(100) NOT NULL,description VARCHAR(5000) NOT NULL,created TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
// INSERT INTO blogs ('id', 'title', 'desc') VALUES (2,"INSERT INTO Syntax", 'If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows');
// NSERT INTO blogs VALUES ("Introduction Bootstrap", "Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.Looking to quickly add Bootstrap to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? Head to the downloads page.");
module.exports= DB