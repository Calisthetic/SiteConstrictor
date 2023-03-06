const db = require('../db');
const table_name = 'border_radius';

class BorderRadiusController {
  async createBorderRadius(req, res) {
    try {
      const { radius1, radius2, radius3, radius4 } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (radius1, radius2, radius3, radius4) values ($1, $2, $3, $4) RETURNING *',
        [radius1, radius2, radius3, radius4]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getBorderRadius(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneBorderRadius(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateBorderRadius(req, res) {
    try {
      const { id, radius1, radius2, radius3, radius4 } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set radius1 = $1, radius2 = $2, radius3 = $3, radius4 = $4 where id = $5 RETURNING *',
        [radius1, radius2, radius3, radius4, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteBorderRadius(req, res) {
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

module.exports = new BorderRadiusController();
