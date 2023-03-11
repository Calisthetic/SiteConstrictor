const db = require('../db');
const table_name = 'property';

class PropertyController {
  async createProperty(req, res) {
    try {
      const { shadow_id, size_id, color_id, gradient_id, position_id, 
        border_id, border_radius_id, text_id, text_shadow_id } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (shadow_id, size_id, color_id, gradient_id, '+
        'position_id, border_id, border_radius_id, text_id, text_shadow_id ) '+
        'values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [shadow_id, size_id, 
          color_id, gradient_id, position_id, 
          border_id, border_radius_id, 
          text_id, text_shadow_id 
        ]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getProperty(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneProperty(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateProperty(req, res) {
    try {
      const { id, shadow_id, size_id, color_id, gradient_id, position_id, 
        border_id, border_radius_id, text_id, text_shadow_id } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set shadow_id = $1, size_id = $2, '+
        'color_id = $3, gradient_id = $4, position_id = $5, border_id = $6, border_radius_id = $7, '+
        'text_id = $8, text_shadow_id = $9 where id = $10 RETURNING *',
        [ shadow_id, size_id, 
          color_id, gradient_id, position_id, 
          border_id, border_radius_id, 
          text_id, text_shadow_id, id
        ]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteProperty(req, res) {
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

module.exports = new PropertyController();
