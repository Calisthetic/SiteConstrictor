const db = require('../db');
const table_name = 'gradient';

class GradientController {
  async createGradient(req, res) {
    try {
      const { radial, direction, color1, color2 } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (radial, direction, color1, color2) values ($1, $2, $3, $4) RETURNING *',
        [radius4]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getGradient(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneGradient(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateGradient(req, res) {
    try {
      const { id, radial, direction, color1, color2 } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set radial = $1, direction = $2, color1 = $3, color2 = $4 where id = $5 RETURNING *',
        [radial, direction, color1, color2, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteGradient(req, res) {
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

module.exports = new GradientController();
