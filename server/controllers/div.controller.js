const db = require('../db');
const table_name = '';

class DivController {
  async createDiv(req, res) {
    let numb = 0;
    function Next() {
      numb++
      return numb
    }
    function isNum(value) {
      return isFinite(value) && value === parseInt(value, 10) && value!==0;
    }
    let block_ids = {
      property_id: null,
      shadow_id: null,
      size_id: null,
      color_id: null,
      gradient_id: null,
      position_id: null,
      border_id: null,
      border_radius_id: null,
      texts_id: null,
      texts_shadow_id: null
    }
    try {
      const { project_id, block_name, // default
        shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, shadow_color, //shadow
        width, height, layer, // size
        color, opacity, //color
        gradient, radial, direction, color1, color2, opacity1, opacity2, //gradient
        marginx, marginy, rotation, //position
        in_width, in_color, in_type, out_width, out_margin, out_color, out_type, //border
        radius1, radius2, radius3, radius4, //border-radius
        //text
        in_text, text_color, back_color, text_horizontal_align, 
        text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
        text_decoration_thickness, font_weight, font_style, font_size, 
        font_family, text_indent, letter_spacing, line_height,
        //text-shadow
        ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color
      } = req.body;
      if (project_id !== undefined) {
        // shadow
        if (isNum(blur) || isNum(spread)) {
          const exist_shadow = await db.query(
            'SELECT * FROM shadow where shadow_marginx = $1 and shadow_marginy = $2 and blur = $3 and spread = $4 and '+
            'shadow_opacity = $5 and type_inner = $6 and shadow_color = $7',
            [shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, shadow_color]
          );
          if (exist_shadow.rows.length !== 0) {
            block_ids.shadow_id = exist_shadow.rows[0].id
          } else {
            const new_shadow = await db.query(
              'INSERT INTO shadow (shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, '+
              'shadow_color) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
              [shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, shadow_color]
            )
            block_ids.shadow_id = new_shadow.rows[0].id
          }
        }
        // size
        const exist_size = await db.query(
          'SELECT * FROM size where width = $1 and height = $2 and layer = $3',
          [width, height, layer]
        );
        if (exist_size.rows.length !== 0) {
          block_ids.size_id = exist_size.rows[0].id
        } else {
          const new_size = await db.query(
            'INSERT INTO size (width, height, layer) values ($1, $2, $3) RETURNING *',
            [width, height, layer]
          )
          block_ids.size_id = new_size.rows[0].id
        }
        // color
        if ((gradient === false || gradient === null) && color.length === 7) {
          const exist_color = await db.query(
            'SELECT * FROM color where color = $1 and opacity = $2',
            [color, opacity]
          );
          if (exist_color.rows.length !== 0) {
            block_ids.color_id = exist_color.rows[0].id
          } else {
            const new_color = await db.query(
              'INSERT INTO color (color, opacity) values ($1, $2) RETURNING *',
              [color, opacity]
            )
            block_ids.color_id = new_color.rows[0].id
          }
        } 
        else { // gradient
          const exist_gradient = await db.query(
            'SELECT * FROM gradient where radial = $1 and direction = $2 and '+
            'color1 = $3 and color2 = $4 and opacity1 = $5 and opacity2 = $6',
            [radial, direction, color1, color2, opacity1, opacity2]
          );
          if (exist_gradient.rows.length !== 0) {
            block_ids.gradient_id = exist_gradient.rows[0].id
          } else {
            const new_gradient = await db.query(
              'INSERT INTO gradient (radial, direction, color1, color2, opacity1, opacity2) '+
              'values ($1, $2, $3, $4, $5, $6) RETURNING *',
              [radial, direction, color1, color2, opacity1, opacity2]
            );
            block_ids.gradient_id = new_gradient.rows[0].id
          }
        }
        // position
        const exist_position = await db.query(
          'SELECT * FROM position where marginx = $1 and marginy = $2 and rotation = $3',
          [marginx, marginy, rotation]
        );
        if (exist_position.rows.length !== 0) {
          block_ids.position_id = exist_position.rows[0].id
        } else {
          const new_position = await db.query(
            'INSERT INTO position (marginx, marginy, rotation) values ($1, $2, $3) RETURNING *',
            [marginx, marginy, rotation]
          );
          block_ids.position_id = new_position.rows[0].id
        }
        // border
        if (isNum(in_width) || isNum(out_width)) {
          const exist_border = await db.query(
            'SELECT * FROM border where in_width = $1 and in_color = $2 and in_type = $3 and '+
            'out_width = $4 and out_margin = $5 and out_color = $6 and out_type = $7',
            [in_width, in_color, in_type, out_width, out_margin, out_color, out_type]
          );
          if (exist_border.rows.length !== 0) {
            block_ids.border_id = exist_border.rows[0].id
          } else {
            const new_border = await db.query(
              'INSERT INTO border (in_width, in_color, in_type, out_width, out_margin, out_color, out_type) '+
              'values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
              [in_width, in_color, in_type, out_width, out_margin, out_color, out_type]
            );
            block_ids.border_id = new_border.rows[0].id
          }
        }
        // border-radius
        if (isNum(radius1)) {
          const exist_border_radius = await db.query(
            'SELECT * FROM border_radius where radius1 = $1 and radius2 = $2 and radius3 = $3 and radius4 = $4',
            [radius1, radius2, radius3, radius4]
          );
          if (exist_border_radius.rows.length !== 0) {
            block_ids.border_radius_id = exist_border_radius.rows[0].id
          } else {
            const new_border_radius = await db.query(
              'INSERT INTO border_radius (radius1, radius2, radius3, radius4) values ($1, $2, $3, $4) RETURNING *',
              [radius1, radius2, radius3, radius4]
            );
            block_ids.border_radius_id = new_border_radius.rows[0].id
          }
        }
        // text
        if (in_text !== undefined && in_text !== '') {
          const exist_text = await db.query(
            'SELECT * FROM texts where in_text = $1 and text_color = $2 and back_color = $3 and text_horizontal_align = $4 and '+
            'text_vertical_align = $5 and text_decoration = $6 and text_decoration_color = $7 and text_decoration_style = $8 and '+
            'text_decoration_thickness = $9 and font_weight = $10 and font_style = $11 and font_size = $12 and '+
            'font_family = $13 and text_indent = $14 and letter_spacing = $15 and line_height = $16',
            [in_text, text_color, back_color, text_horizontal_align, 
              text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
              text_decoration_thickness, font_weight, font_style, font_size, 
              font_family, text_indent, letter_spacing, line_height
            ]
          );
          if (exist_text.rows.length !== 0) {
            block_ids.texts_id = exist_text.rows[0].id
          } else {
            const new_text = await db.query(
              'INSERT INTO texts (in_text, text_color, back_color, text_horizontal_align, text_vertical_align, '+
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
            block_ids.texts_id = new_text.rows[0].id
          }
          // text-shadow
          if (isNum(ts_blur) || isNum(ts_spread)) {
            const exist_text_shadow = await db.query(
              'SELECT * FROM texts_shadow where ts_marginx = $1 and ts_marginy = $2 and '+
              'ts_blur = $3 and ts_spread = $4 and ts_opacity = $5 and ts_color = $6',
              [ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color]
            );
            if (exist_text_shadow.rows.length !== 0) {
              block_ids.texts_shadow_id = exist_text_shadow.rows[0].id
            } else {
              const new_text_shadow = await db.query(
                'INSERT INTO texts_shadow (ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, '+
                'ts_color) values ($1, $2, $3, $4, $5, $6) RETURNING *',
                [ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color]
              );
              block_ids.texts_shadow_id = new_text_shadow.rows[0].id
            }
          }
        }
        // remuve nulls from ids
        let array_ids = []
        for (let i in block_ids) {
          if (block_ids[i] !== null) {
            array_ids.push(block_ids[i])
          }
        }
        // property
        const exist_property = await db.query(
          'SELECT * FROM property where shadow_id '+((block_ids.shadow_id === null)?(' IS NULL '):('= $'+Next()))+
          ' and size_id '+((block_ids.size_id === null)?('ISNULL'):('= $'+Next()))+
          ' and color_id '+((block_ids.color_id === null)?('ISNULL'):('= $'+Next()))+
          ' and gradient_id '+((block_ids.gradient_id === null)?('ISNULL'):('= $'+Next()))+
          ' and position_id '+((block_ids.position_id === null)?('ISNULL'):('= $'+Next()))+
          ' and border_id '+((block_ids.border_id === null)?('ISNULL'):('= $'+Next()))+
          ' and border_radius_id '+((block_ids.border_radius_id === null)?('ISNULL'):('= $'+Next()))+
          ' and texts_id '+((block_ids.texts_id === null)?('ISNULL'):('= $'+Next()))+
          ' and texts_shadow_id '+((block_ids.texts_shadow_id === null)?(' IS NULL '):('= $'+Next())), array_ids
        );
        if (exist_property.rows.length !== 0) {
          block_ids.property_id = exist_property.rows[0].id
        } else {
          const new_property = await db.query(
            'INSERT INTO property (shadow_id, size_id, color_id, gradient_id, '+
              'position_id, border_id, border_radius_id, texts_id, texts_shadow_id) '+
              'values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [block_ids.shadow_id, block_ids.size_id, block_ids.color_id, 
              block_ids.gradient_id, block_ids.position_id, block_ids.border_id,
              block_ids.border_radius_id, block_ids.texts_id, block_ids.texts_shadow_id
            ]
          )
          block_ids.property_id = new_property.rows[0].id
        }
        // block
        const new_block = await db.query(
          'INSERT INTO blocks (block_name, project_id, property_id ) values ($1, $2, $3) RETURNING *',
          [block_name, project_id, block_ids.property_id]
        );
        // id of properties
        // for (let i in block_ids) {
        //   console.log(i + ' = ' + block_ids[i])
        // }
        res.json([{message: "Success!"}])
      } else {
        res.json([{ message: "Проект не определён" }])
      }
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }

  async getDiv(req, res) {
    try {
      const block_res = await db.query('SELECT * FROM blocks');
      let results = []
      for (let i = 0; i < block_res.rows.length; i++) {
        const property_res = await db.query('SELECT * FROM property where id = $1', 
        [block_res.rows[i].property_id])
        let result = {}
        delete block_res.rows[i].property_id
        result = Object.assign(result, block_res.rows[i])
        for (let j in property_res.rows[0]) {
          if (property_res.rows[0][j] !== null && j !== "id") {
            const elem = await db.query('SELECT * FROM ' + j.slice(0, -3) + 
            ' where id = $1', [property_res.rows[0][j]]);
            delete elem.rows[0].id
            result = Object.assign(result, elem.rows[0])
          }
        }
        results.push(result)
      }
      res.json(results)
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }

  async getOneDiv(req, res) {
    try {
      const id = req.params.id;
      const block_res = await db.query('SELECT * FROM blocks where id = $1', [id]);
      const property_res = await db.query('SELECT * FROM property where id = $1', 
      [block_res.rows[0].property_id])
      let result = {}
      for (let i in property_res.rows[0]) {
        if (property_res.rows[0][i] !== null && i !== "id") {
          const elem = await db.query('SELECT * FROM ' + i.slice(0, -3) + 
          ' where id = $1', [property_res.rows[0][i]]);
          delete elem.rows[0].id
          result = Object.assign(result, elem.rows[0])
        }
      }
      res.json(result)
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }

  async updateDiv(req, res) {
    let numb = 0;
    function Next() {
      numb++
      return numb
    }
    function isNum(value) {
      return isFinite(value) && value === parseInt(value, 10) && value!==0;
    }
    let block_ids = {
      property_id: null,
      shadow_id: null,
      size_id: null,
      color_id: null,
      gradient_id: null,
      position_id: null,
      border_id: null,
      border_radius_id: null,
      texts_id: null,
      texts_shadow_id: null
    }
    try {
      const { id, project_id, block_name, // default
        shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, shadow_color, //shadow
        width, height, layer, // size
        color, opacity, //color
        gradient, radial, direction, color1, color2, opacity1, opacity2, //gradient
        marginx, marginy, rotation, //position
        in_width, in_color, in_type, out_width, out_margin, out_color, out_type, //border
        radius1, radius2, radius3, radius4, //border-radius
        //text
        in_text, text_color, back_color, text_horizontal_align, 
        text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
        text_decoration_thickness, font_weight, font_style, font_size, 
        font_family, text_indent, letter_spacing, line_height,
        //text-shadow
        ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color
      } = req.body;
      if (project_id !== undefined) {
        // shadow
        if (isNum(blur) || isNum(spread)) {
          const exist_shadow = await db.query(
            'SELECT * FROM shadow where shadow_marginx = $1 and shadow_marginy = $2 and blur = $3 and spread = $4 and '+
            'shadow_opacity = $5 and type_inner = $6 and shadow_color = $7',
            [shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, shadow_color]
          );
          if (exist_shadow.rows.length !== 0) {
            block_ids.shadow_id = exist_shadow.rows[0].id
          } else {
            const new_shadow = await db.query(
              'INSERT INTO shadow (shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, '+
              'shadow_color) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
              [shadow_marginx, shadow_marginy, blur, spread, shadow_opacity, type_inner, shadow_color]
            )
            block_ids.shadow_id = new_shadow.rows[0].id
          }
        }
        // size
        const exist_size = await db.query(
          'SELECT * FROM size where width = $1 and height = $2 and layer = $3',
          [width, height, layer]
        );
        if (exist_size.rows.length !== 0) {
          block_ids.size_id = exist_size.rows[0].id
        } else {
          const new_size = await db.query(
            'INSERT INTO size (width, height, layer) values ($1, $2, $3) RETURNING *',
            [width, height, layer]
          )
          block_ids.size_id = new_size.rows[0].id
        }
        // color
        if (gradient === false && color.length === 7) {
          const exist_color = await db.query(
            'SELECT * FROM color where color = $1 and opacity = $2',
            [color, opacity]
          );
          if (exist_color.rows.length !== 0) {
            block_ids.color_id = exist_color.rows[0].id
          } else {
            const new_color = await db.query(
              'INSERT INTO color (color, opacity) values ($1, $2) RETURNING *',
              [color, opacity]
            )
            block_ids.color_id = new_color.rows[0].id
          }
        } 
        else { // gradient
          const exist_gradient = await db.query(
            'SELECT * FROM gradient where radial = $1 and direction = $2 and '+
            'color1 = $3 and color2 = $4 and opacity1 = $5 and opacity2 = $6',
            [radial, direction, color1, color2, opacity1, opacity2]
          );
          if (exist_gradient.rows.length !== 0) {
            block_ids.gradient_id = exist_gradient.rows[0].id
          } else {
            const new_gradient = await db.query(
              'INSERT INTO gradient (radial, direction, color1, color2, opacity1, opacity2) '+
              'values ($1, $2, $3, $4, $5, $6) RETURNING *',
              [radial, direction, color1, color2, opacity1, opacity2]
            );
            block_ids.gradient_id = new_gradient.rows[0].id
          }
        }
        // position
        const exist_position = await db.query(
          'SELECT * FROM position where marginx = $1 and marginy = $2 and rotation = $3',
          [marginx, marginy, rotation]
        );
        if (exist_position.rows.length !== 0) {
          block_ids.position_id = exist_position.rows[0].id
        } else {
          const new_position = await db.query(
            'INSERT INTO position (marginx, marginy, rotation) values ($1, $2, $3) RETURNING *',
            [marginx, marginy, rotation]
          );
          block_ids.position_id = new_position.rows[0].id
        }
        // border
        if (isNum(in_width) || isNum(out_width)) {
          const exist_border = await db.query(
            'SELECT * FROM border where in_width = $1 and in_color = $2 and in_type = $3 and '+
            'out_width = $4 and out_margin = $5 and out_color = $6 and out_type = $7',
            [in_width, in_color, in_type, out_width, out_margin, out_color, out_type]
          );
          if (exist_border.rows.length !== 0) {
            block_ids.border_id = exist_border.rows[0].id
          } else {
            const new_border = await db.query(
              'INSERT INTO border (in_width, in_color, in_type, out_width, out_margin, out_color, out_type) '+
              'values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
              [in_width, in_color, in_type, out_width, out_margin, out_color, out_type]
            );
            block_ids.border_id = new_border.rows[0].id
          }
        }
        // border-radius
        if (isNum(radius1)) {
          const exist_border_radius = await db.query(
            'SELECT * FROM border_radius where radius1 = $1 and radius2 = $2 and radius3 = $3 and radius4 = $4',
            [radius1, radius2, radius3, radius4]
          );
          if (exist_border_radius.rows.length !== 0) {
            block_ids.border_radius_id = exist_border_radius.rows[0].id
          } else {
            const new_border_radius = await db.query(
              'INSERT INTO border_radius (radius1, radius2, radius3, radius4) values ($1, $2, $3, $4) RETURNING *',
              [radius1, radius2, radius3, radius4]
            );
            block_ids.border_radius_id = new_border_radius.rows[0].id
          }
        }
        // text
        if (in_text !== '') {
          const exist_text = await db.query(
            'SELECT * FROM texts where in_text = $1 and text_color = $2 and back_color = $3 and text_horizontal_align = $4 and '+
            'text_vertical_align = $5 and text_decoration = $6 and text_decoration_color = $7 and text_decoration_style = $8 and '+
            'text_decoration_thickness = $9 and font_weight = $10 and font_style = $11 and font_size = $12 and '+
            'font_family = $13 and text_indent = $14 and letter_spacing = $15 and line_height = $16',
            [in_text, text_color, back_color, text_horizontal_align, 
              text_vertical_align, text_decoration, text_decoration_color, text_decoration_style, 
              text_decoration_thickness, font_weight, font_style, font_size, 
              font_family, text_indent, letter_spacing, line_height
            ]
          );
          if (exist_text.rows.length !== 0) {
            block_ids.texts_id = exist_text.rows[0].id
          } else {
            const new_text = await db.query(
              'INSERT INTO texts (in_text, text_color, back_color, text_horizontal_align, text_vertical_align, '+
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
            block_ids.texts_id = new_text.rows[0].id
          }
          // text-shadow
          if (isNum(ts_blur) || isNum(ts_spread)) {
            const exist_texts_shadow = await db.query(
              'SELECT * FROM texts_shadow where ts_marginx = $1 and ts_marginy = $2 and '+
              'ts_blur = $3 and ts_spread = $4 and ts_opacity = $5 and ts_color = $6',
              [ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color]
            );
            if (exist_texts_shadow.rows.length !== 0) {
              block_ids.texts_shadow_id = exist_texts_shadow.rows[0].id
            } else {
              const new_texts_shadow = await db.query(
                'INSERT INTO texts_shadow (ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, '+
                'ts_color) values ($1, $2, $3, $4, $5, $6) RETURNING *',
                [ts_marginx, ts_marginy, ts_blur, ts_spread, ts_opacity, ts_color]
              );
              block_ids.texts_shadow_id = new_texts_shadow.rows[0].id
            }
          }
        }
        // remuve nulls from ids
        let array_ids = []
        for (let i in block_ids) {
          if (block_ids[i] !== null) {
            array_ids.push(block_ids[i])
          }
        }
        // property
        const exist_property = await db.query(
          'SELECT * FROM property where shadow_id '+((block_ids.shadow_id === null)?(' IS NULL '):('= $'+Next()))+
          ' and size_id '+((block_ids.size_id === null)?('ISNULL'):('= $'+Next()))+
          ' and color_id '+((block_ids.color_id === null)?('ISNULL'):('= $'+Next()))+
          ' and gradient_id '+((block_ids.gradient_id === null)?('ISNULL'):('= $'+Next()))+
          ' and position_id '+((block_ids.position_id === null)?('ISNULL'):('= $'+Next()))+
          ' and border_id '+((block_ids.border_id === null)?('ISNULL'):('= $'+Next()))+
          ' and border_radius_id '+((block_ids.border_radius_id === null)?('ISNULL'):('= $'+Next()))+
          ' and texts_id '+((block_ids.texts_id === null)?('ISNULL'):('= $'+Next()))+
          ' and texts_shadow_id '+((block_ids.texts_shadow_id === null)?(' IS NULL '):('= $'+Next())), array_ids
        );
        if (exist_property.rows.length !== 0) {
          block_ids.property_id = exist_property.rows[0].id
        } else {
          const new_property = await db.query(
            'INSERT INTO property (shadow_id, size_id, color_id, gradient_id, '+
              'position_id, border_id, border_radius_id, texts_id, texts_shadow_id) '+
              'values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [block_ids.shadow_id, block_ids.size_id, block_ids.color_id, 
              block_ids.gradient_id, block_ids.position_id, block_ids.border_id,
              block_ids.border_radius_id, block_ids.texts_id, block_ids.texts_shadow_id
            ]
          )
          block_ids.property_id = new_property.rows[0].id
        }
        // block
        const new_block = await db.query(
          'UPDATE blocks set block_name = $1, project_id = $2, property_id = $3 where id = $4 RETURNING *',
          [block_name, project_id, block_ids.property_id, id]
        );
        // id of properties
        // for (let i in block_ids) {
        //   console.log(i + ' = ' + block_ids[i])
        // }
        res.json([{message: "Success!"}])
      } else {
        res.json([{ message: "Проект не определён" }])
      }
    } catch (err) {
      res.json([{ message: err.message }]);
    }
  }
  async deleteDiv(req, res) {
    try {
      const id = req.params.id;
      const deleted_elem = await db.query('DELETE FROM blocks where id = $1', [id]);
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

module.exports = new DivController();

const div = {
  project_id: 0, 
  block_name: "Block", // default
  marginx: 0, marginy: 0, 
  blur: 0, 
  spread: 0, 
  shadow_opacity: 0.5, 
  type_inner: false, 
  shadow_color: "#000000", //shadow
  width: "100", 
  height: "100", 
  layer: 1, // size
  color: "#000000", 
  opacity: 1, //color
  gradient: false,
  radial: false, 
  direction: 0, 
  color1: "#ffffff", color2: "#000000", 
  opacity1: 0.5, opacity2: 0.5, //gradient
  pos_marginx: 0, pos_marginy: 0, 
  rotation: 0, //position
  in_width: 0, in_color: "#ff0000", in_type: "solid", 
  out_width: 0, out_margin: 0, out_color: "#ff0000", out_type: "solid", //border
  radius1: 0, radius2: 0, radius3: 0, radius4: 0, //border-radius
  //text
  in_text: "", 
  text_color: "#000000", back_color: "", 
  text_horizontal_align: "center", text_vertical_align: "top", 
  text_decoration: "none", text_decoration_color: "#000000", 
  text_decoration_style: "solid", text_decoration_thickness: 1, 
  font_weight: 400, font_style: "normal", font_size: 18, 
  font_family: "Arial", text_indent: 0, letter_spacing: 0, line_height: 18,
  //text-shadow
  ts_marginx: 0, ts_marginy: 0, 
  ts_blur: 0, 
  ts_spread: 0, 
  ts_opacity: 0.5, 
  ts_color: "#000000"
}