const db = require('../db');
const table_name = 'border';

class BorderController {
  async createBorder(req, res) {
    try {
      const { in_width, in_color, in_type, out_width, out_margin, out_color, out_type } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (in_width, in_color, in_type, out_width, out_margin, out_color, out_type) '+
        'values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [in_width, in_color, in_type, out_width, out_margin, out_color, out_type]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getBorder(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneBorder(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateBorder(req, res) {
    try {
      const { id, in_width, in_color, in_type, out_width, out_margin, out_color, out_type } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set in_width = $1, in_color = $2, in_type = $3, out_width = $4, '+
        'out_margin = $5, out_color = $6, out_type = $7 where id = $8 RETURNING *',
        [in_width, in_color, in_type, out_width, out_margin, out_color, out_type, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteBorder(req, res) {
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

module.exports = new BorderController();
