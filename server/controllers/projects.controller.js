const db = require('../db');
const table_name = 'projects';

class ProjectController {
  async createProject(req, res) {
    try {
      const { userId, name } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' ( user_id, name) values ($1, $2) RETURNING *',
        [ userId, name]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getProject(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneProject(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateProject(req, res) {
    try {
      const { id,  userId, name } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set user_id = $1, name = $2 where id = $3 RETURNING *',
        [ userId, name, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteProject(req, res) {
    try {
      const id = req.params.id;
      const deleted_elem = await db.query('DELETE FROM ' + table_name + ' where id = $1', [id]);
      if (deleted_elem.rowCount === 1) {
        res.status(200).send([{'message': 'Successfully deleted!'}])
      } else { 
        (res.send([{'message': 'Does not exist...'}])) 
      }
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
}

module.exports = new ProjectController();
