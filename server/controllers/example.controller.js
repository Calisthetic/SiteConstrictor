const db = require('../db');
const table_name = '';

class Controller {
  async create(req, res) {
    try {
      const {  } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (radius1, radius2, radius3, radius4) values ($1, $2, $3, $4) RETURNING *',
        [radius4]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async get(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOne(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async update(req, res) {
    try {
      const { id, radius1, radius2, radius3, radius4 } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set radius1 = $1, radius2 = $2 where id = $5 RETURNING *',
        [radius4, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async delete(req, res) {
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

module.exports = new Controller();
