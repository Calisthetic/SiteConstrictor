const db = require('../db');
const table_name = 'blocks';

class BlocksController {
  async createBlock(req, res) {
    try {
      const { project_id, name, shadow_id, size_id, color_id, gradient_id, position_id, 
        border_id, border_radius_id, text_id, text_shadow_id 
      } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (project_id, name, shadow_id, size_id, color_id, gradient_id, '+
        'position_id, border_id, border_radius_id, text_id, text_shadow_id ) values ($1, $2) RETURNING *',
        [project_id, name, shadow_id, size_id, 
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
        'UPDATE ' + table_name + ' set project_id = $1, name = $2, shadow_id = $3, size_id = $4, '+
        'color_id = $5, gradient_id = $6, position_id = $7, border_id = $8, border_radius_id = $9, '+
        'text_id = $10, text_shadow_id = $11 where id = $12 RETURNING *',
        [project_id, name, shadow_id, size_id, 
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
  async deleteBlock(req, res) {
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

module.exports = new BlocksController();
