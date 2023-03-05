create database site_constructor;
-- \connect site_constructor

-- ! Удалить расширение у текста
-- ! Добавитьь новых свойств ниже

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(31),
    password VARCHAR(31),
    email VARCHAR(63),
    age SMALLINT
);
CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
CREATE TABLE blocks(
    id SERIAL PRIMARY KEY,
    project_id INTEGER,
    name VARCHAR(31),
    FOREIGN KEY (project_id) REFERENCES projects (id)
);

CREATE TABLE shadow(
    id SERIAL PRIMARY KEY,
    marginx INTEGER,
    marginy INTEGER,
    -- Размытие
    blur INTEGER,
    -- Насыщенность
    spread INTEGER,
    -- Прозрачность
    opacity REAL,
    -- Внутренняя
    type_inner BOOLEAN,
    color CHAR(6)
);
CREATE TABLE size(
    id SERIAL PRIMARY KEY,
    width VARCHAR(7),
    height VARCHAR(7),
    -- z-index
    layer SMALLINT
);
CREATE TABLE color(
    id SERIAL PRIMARY KEY,
    color CHAR(6),
    opacity REAL,
    gradient BOOLEAN,
    radial_gradient BOOLEAN,
    gradient_direction SMALLINT,
    gradient_color1 CHAR(6),
    gradient_color2 CHAR(6)
);
CREATE TABLE position(
    id SERIAL PRIMARY KEY,
    marginx SMALLINT,
    marginy SMALLINT,
    rotation SMALLINT
);
CREATE TABLE border(
    id SERIAL PRIMARY KEY,
    in_width SMALLINT,
    in_color CHAR(6),
    in_type VARCHAR(63),
    out_width SMALLINT,
    out_margin SMALLINT,
    out_color CHAR(6),
    out_type VARCHAR(63)
);
CREATE TABLE border_radius(
    id SERIAL PRIMARY KEY,
    radius1 SMALLINT,
    radius2 SMALLINT,
    radius3 SMALLINT,
    radius4 SMALLINT
);
CREATE TABLE texts(
    id SERIAL PRIMARY KEY,
    in_text TEXT,
    color CHAR(6),
    back_color CHAR(6),
    text_horizontal_align VARCHAR(63),
    text_vertical_align VARCHAR(63),
    -- overline, underline, line-through and combos
    text_decoration VARCHAR(63),
    text_decoration_color CHAR(6),
    -- solid, double, dotted, dashed, wavy
    text_decoration_style VARCHAR(63),
    -- text_decoration_thickeness line size
    text_decoration_thickness SMALLINT,
    font_weight SMALLINT,
    -- italic
    font_style VARCHAR(63),
    font_size SMALLINT,
    font_family VARCHAR(63),

    -- абзац
    text_indent SMALLINT,
    -- размер пробелов
    letter_spacing SMALLINT,
    -- высота строки (+отступ)
    line_height REAL
    -- !to the end...
);
CREATE TABLE text_shadow(
    id SERIAL PRIMARY KEY,
    marginx INTEGER,
    marginy INTEGER,
    -- Размытие
    blur INTEGER,
    -- Насыщенность
    spread INTEGER,
    -- Прозрачность
    opacity REAL,
    color CHAR(6)
);

CREATE TABLE property(
    id SERIAL PRIMARY KEY,
    block_id INTEGER,
    shadow_id INTEGER,
    size_id INTEGER,
    color_id INTEGER,
    position_id INTEGER,
    border_id INTEGER,
    border_radius_id INTEGER,
    text_id INTEGER,
    text_shadow_id INTEGER,
    FOREIGN KEY (block_id) REFERENCES blocks (id),
    -- 
    FOREIGN KEY (shadow_id) REFERENCES shadow (id),
    FOREIGN KEY (size_id) REFERENCES size (id),
    FOREIGN KEY (color_id) REFERENCES color (id),
    FOREIGN KEY (position_id) REFERENCES position (id),
    FOREIGN KEY (border_id) REFERENCES border (id),
    FOREIGN KEY (border_radius_id) REFERENCES border_radius (id),
    FOREIGN KEY (text_id) REFERENCES texts (id),
    FOREIGN KEY (text_shadow_id) REFERENCES text_shadow (id)
);
