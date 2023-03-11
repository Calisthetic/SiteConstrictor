const db = require('../db');
const table_name = 'blocks';

class BlocksController {
  async createBlock(req, res) {
    try {
      const { project_id, block_name, property_id} = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (block_name, project_id, property_id ) values ($1, $2, $3) RETURNING *',
        [block_name, project_id, property_id]
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
      const { id, project_id, block_name, property_id } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' set block_name = $1, project_id = $2, property_id = $3 where id = $4 RETURNING *',
        [block_name, project_id, property_id, id]
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
