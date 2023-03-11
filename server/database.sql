drop database site_constructor;
create database site_constructor;
\connect site_constructor;

-- ! Удалить расширение у текста
-- ! Добавитьь новых свойств ниже

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(31) NOT NULL,
    password VARCHAR(31) NOT NULL,
    email VARCHAR(63) NOT NULL,
    age SMALLINT
);
CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name VARCHAR(31) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE shadow(
    id SERIAL PRIMARY KEY,
    marginx INTEGER,
    marginy INTEGER,
    -- Размытие
    blur INTEGER NOT NULL,
    -- Насыщенность
    spread INTEGER NOT NULL,
    -- Прозрачность
    shadow_opacity REAL,
    -- Внутренняя
    type_inner BOOLEAN,
    shadow_color CHAR(7)
);
CREATE TABLE size(
    id SERIAL PRIMARY KEY,
    width VARCHAR(4),
    height VARCHAR(4),
    -- z-index
    layer SMALLINT
);
CREATE TABLE color(
    id SERIAL PRIMARY KEY,
    color CHAR(7),
    opacity REAL
);
CREATE TABLE gradient(
    id SERIAL PRIMARY KEY,
    radial BOOLEAN,
    direction SMALLINT,
    color1 CHAR(7),
    color2 CHAR(7),
    opacity1 REAL,
    opacity2 REAL
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
    in_color CHAR(7),
    in_type VARCHAR(63),
    out_width SMALLINT,
    out_margin SMALLINT,
    out_color CHAR(7),
    out_type VARCHAR(63)
);
CREATE TABLE border_radius(
    id SERIAL PRIMARY KEY,
    radius1 SMALLINT NOT NULL,
    radius2 SMALLINT NOT NULL,
    radius3 SMALLINT NOT NULL,
    radius4 SMALLINT NOT NULL
);
CREATE TABLE texts(
    id SERIAL PRIMARY KEY,
    in_text TEXT NOT NULL,
    text_color CHAR(7),
    back_color CHAR(7),
    text_horizontal_align VARCHAR(63),
    text_vertical_align VARCHAR(63),
    -- overline, underline, line-through and combos
    text_decoration VARCHAR(63),
    text_decoration_color CHAR(7),
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
);
CREATE TABLE texts_shadow(
    id SERIAL PRIMARY KEY,
    ts_marginx INTEGER,
    ts_marginy INTEGER,
    -- Размытие
    ts_blur INTEGER,
    -- Насыщенность
    ts_spread INTEGER,
    -- Прозрачность
    ts_opacity REAL,
    ts_color CHAR(7)
);
CREATE TABLE property(
    id SERIAL PRIMARY KEY,
    shadow_id INTEGER,
    size_id INTEGER,
    color_id INTEGER,
    gradient_id INTEGER,
    position_id INTEGER,
    border_id INTEGER,
    border_radius_id INTEGER,
    texts_id INTEGER,
    texts_shadow_id INTEGER,
    -- 
    FOREIGN KEY (shadow_id) REFERENCES shadow (id),
    FOREIGN KEY (size_id) REFERENCES size (id),
    FOREIGN KEY (color_id) REFERENCES color (id),
    FOREIGN KEY (gradient_id) REFERENCES gradient (id),
    FOREIGN KEY (position_id) REFERENCES position (id),
    FOREIGN KEY (border_id) REFERENCES border (id),
    FOREIGN KEY (border_radius_id) REFERENCES border_radius (id),
    FOREIGN KEY (texts_id) REFERENCES texts (id),
    FOREIGN KEY (texts_shadow_id) REFERENCES texts_shadow (id)
);
CREATE TABLE blocks(
    id SERIAL PRIMARY KEY,
    block_name VARCHAR(31) NOT NULL,
    project_id INTEGER NOT NULL,
    property_id INTEGER NOT NULL,
    -- 
    FOREIGN KEY (project_id) REFERENCES projects (id),
    FOREIGN KEY (property_id) REFERENCES property (id)
);