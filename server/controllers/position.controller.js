const db = require('../db');
const table_name = 'position';

class PositionController {
  async createPosition(req, res) {
    try {
      const { pos_marginx, pos_marginy, rotation } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (pos_marginx, pos_marginy, rotation) values ($1, $2, $3) RETURNING *',
        [pos_marginx, pos_marginy, rotation]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getPosition(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOnePosition(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updatePosition(req, res) {
    try {
      const { id, pos_marginx, pos_marginy, rotation } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set marginx = $1, marginy = $2, rotation = $3 where id = $4 RETURNING *',
        [pos_marginx, pos_marginy, rotation, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deletePosition(req, res) {
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

module.exports = new PositionController();
