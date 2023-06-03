const db = require('../db');
const table_name = 'projects';

class ProjectController {
  async createProject(req, res) {
    try {
      const { user_id, name } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' ( user_id, name) values ($1, $2) RETURNING *',
        [ user_id, name]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getProject(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      if (elem.rows.length > 0) {
        for (let i = 0; i < elem.rows.length; i++) {
          const blocks_count = await db.query('SELECT * FROM blocks WHERE project_id = $1', [elem.rows[i].id])
          let temp_obj = {blocks_count: blocks_count.rows.length}
          elem.rows[i] = Object.assign(elem.rows[i], temp_obj)
        }
      } 
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneProject(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where user_id = $1', [id]);
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateProject(req, res) {
    try {
      const { id,  user_id, name } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set user_id = $1, name = $2 where id = $3 RETURNING *',
        [ user_id, name, id]
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
