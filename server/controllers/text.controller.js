const db = require('../db');
const table_name = 'texts';

class TextController {
  async createText(req, res) {
    try {
      const { 
        in_text, text_color, back_color, text_horizontal_align, 
        text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
        text_decoration_thickness, font_weight, font_style, font_size, 
        font_family, text_indent, letter_spacing, line_height 
      } = req.body;
      const new_elem = await db.query(
        'INSERT INTO ' + table_name + ' (in_text, text_color, back_color, text_horizontal_align, text_vertical_align, '+
        'text_decoration, text_decoration_color, text_decoration_style, text_decoration_thickness, font_weight, '+
        'font_style, font_size, font_family, text_indent, letter_spacing, line_height) values '+
        '($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
        [
          in_text, text_color, back_color, text_horizontal_align, 
          text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
          text_decoration_thickness, font_weight, font_style, font_size, 
          font_family, text_indent, letter_spacing, line_height
        ]
      );
      res.json(new_elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getText(req, res) {
    try {
      const elem = await db.query('SELECT * FROM ' + table_name + '');
      res.json(elem.rows);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async getOneText(req, res) {
    try {
      const id = req.params.id;
      const elem = await db.query('SELECT * FROM ' + table_name + ' where id = $1', [id]);
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async updateText(req, res) {
    try {
      const { id, in_text, text_color, back_color, text_horizontal_align, 
        text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
        text_decoration_thickness, font_weight, font_style, font_size, 
        font_family, text_indent, letter_spacing, line_height 
      } = req.body;
      const elem = await db.query(
        'UPDATE ' + table_name + ' in_text = $1, text_color = $2, back_color = $3, text_horizontal_align = $4, '+
        'text_vertical_align = $5, text_decoration = $6, text_decoration_color = $7, text_decoration_style = $8, '+
        'text_decoration_thickness = $9, font_weight = $10, font_style = $11, font_size = $12, '+
        'font_family = $13, text_indent = $14, letter_spacing = $15, line_height = $16 where id = $17 RETURNING *',
        [in_text, text_color, back_color, text_horizontal_align, 
          text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
          text_decoration_thickness, font_weight, font_style, font_size, 
          font_family, text_indent, letter_spacing, line_height, id
        ]
      );
      res.json(elem.rows[0]);
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteText(req, res) {
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

module.exports = new TextController();
