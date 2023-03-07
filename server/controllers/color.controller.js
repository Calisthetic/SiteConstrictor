const db = require('../db');
const table_name = 'color';

class ColorController {
  async createColor(req, res) {
    try {
      const { color, opacity } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (color, opacity) values ($1, $2) RETURNING *',
        [color, opacity]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getColor(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneColor(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateColor(req, res) {
    try {
      const { id, color, opacity } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set color = $1, opacity = $2 where id = $5 RETURNING *',
        [color, opacity, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteColor(req, res) {
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

module.exports = new ColorController();
