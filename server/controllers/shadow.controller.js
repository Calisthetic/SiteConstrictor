const db = require('../db');
const table_name = 'shadow';

class ShadowController {
  async createShadow(req, res) {
    try {
      const { marginx, marginy, blur, spread, shadow_opacity, type_inner, shadow_color } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (marginx, marginy, blur, spread, shadow_opacity, type_inner, '+
        'shadow_color) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [marginx, marginy, blur, spread, shadow_opacity, type_inner, shadow_color]
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
      const { id, marginx, marginy, blur, spread, shadow_opacity, type_inner, shadow_color } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set marginx = $1, marginy = $2, blur = $3, spread = $4, '+
        'shadow_opacity = $5, type_inner = $6, shadow_color = $7 where id = $8 RETURNING *',
        [marginx, marginy, blur, spread, shadow_opacity, type_inner, shadow_color, id]
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
