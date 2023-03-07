const db = require("../db");

class UserController {
  async createUser(req, res) {
    try {
      const { name, password, email, age } = req.body;
      const exist_name = await db.query("SELECT * FROM users where name = $1", [name])
      const exist_email = await db.query("SELECT * FROM users where email = $1", [email])
      if (exist_email.rows.length !== 0) {
        res.json([{ message: "Email already exists" }])
      } else if (exist_name.rows.length !== 0) {
        res.json([{ message: "Username already exests" }])
      } else {
        const newUser = await db.query(
          "INSERT INTO users (name, password, email, age) " +
            "values ($1, $2, $3, $4) RETURNING *",
          [name, password, email, age] 
        );
        res.json(newUser.rows[0]);
      }
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getUsers(req, res) {
    try {
      const elem = await db.query("SELECT * FROM users");
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneUser(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query("SELECT * FROM users where id = $1", [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateUser(req, res) {
    try {
      const { id, name, password, email, age } = req.body;
      const elem = await db.query(
        "UPDATE users set name = $2, password = $3, " +
          "email = $4, age = $5 where id = $1 RETURNING *",
        [id, name, password, email, age]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const deleted_elem = await db.query("DELETE FROM users where id = $1", [id]);
      if (deleted_elem.rowCount === 1) {
        res.status(200).send([{ message: "Successfully deleted!" }])
      } else {
        res.send([{ message: "Does not exist..." }]);
      }
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
}

module.exports = new UserController();
