const db = require('../db');
const table_name = 'blocks';

class BlocksController {
  async createBlock(req, res) {
    try {
      const { project_id, name } = req.body;
      const new_elem = await db.query(
        'INSERT INTO  (project_id, name) values ($1, $2) RETURNING *',
        [project_id, name]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getBlocks(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneBlock(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateBlock(req, res) {
    try {
      const { id, project_id, name } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set project_id = $1, name = $2 where id = $5 RETURNING *',
        [project_id, name, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteBlock(req, res) {
    try {
      const id = req.params.id;
      const deleted_elem = await db.query('DELETE FROM ' + table_name + ' where id = $1', [id]);
      res.status(200).send('Successfully deleted with results');
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
}

module.exports = new BlocksController();
