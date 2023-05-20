const db = require('../db');
const table_name = 'texts_shadow';

class ShadowController {
  async createShadow(req, res) {
    try {
      const { ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, '+
        'ts_color) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getShadow(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneShadow(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateShadow(req, res) {
    try {
      const { id, ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set ts_marginx = $1, ts_marginy = $2, ts_blur = $3, ts_spread = $4, '+
        'ts_opacity = $5, ts_color = $6 where id = $7 RETURNING *',
        [ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color, id]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteShadow(req, res) {
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

module.exports = new ShadowController();
