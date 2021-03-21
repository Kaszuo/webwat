import mysql from "mysql";

const connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "si8zxzsuXGRt7ItN",
  database: "webwat"
});
export default connection;
