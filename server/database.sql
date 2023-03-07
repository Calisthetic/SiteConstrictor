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
    blur INTEGER,
    -- Насыщенность
    spread INTEGER,
    -- Прозрачность
    shadow_opacity REAL,
    -- Внутренняя
    type_inner BOOLEAN,
    shadow_color CHAR(6)
);
CREATE TABLE size(
    id SERIAL PRIMARY KEY,
    width VARCHAR(7) NOT NULL,
    height VARCHAR(7) NOT NULL,
    -- z-index
    layer SMALLINT
);
CREATE TABLE color(
    id SERIAL PRIMARY KEY,
    color CHAR(6) NOT NULL,
    opacity REAL
)
CREATE TABLE gradient(
    id SERIAL PRIMARY KEY,
    radial BOOLEAN NOT NULL,
    direction SMALLINT,
    color1 CHAR(6) NOT NULL,
    color2 CHAR(6) NOT NULL
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
    radius1 SMALLINT NOT NULL,
    radius2 SMALLINT NOT NULL,
    radius3 SMALLINT NOT NULL,
    radius4 SMALLINT NOT NULL
);
CREATE TABLE texts(
    id SERIAL PRIMARY KEY,
    in_text TEXT NOT NULL,
    text_color CHAR(6),
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
);
CREATE TABLE text_shadow(
    ts_id SERIAL PRIMARY KEY,
    ts_marginx INTEGER,
    ts_marginy INTEGER,
    -- Размытие
    ts_blur INTEGER,
    -- Насыщенность
    ts_spread INTEGER,
    -- Прозрачность
    ts_opacity REAL,
    ts_color CHAR(6)
);
CREATE TABLE blocks(
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL,
    name VARCHAR(31) NOT NULL,
    shadow_id INTEGER,
    size_id INTEGER,
    color_id INTEGER,
    gradient_id INTEGER,
    position_id INTEGER,
    border_id INTEGER,
    border_radius_id INTEGER,
    text_id INTEGER,
    text_shadow_id INTEGER,
    -- 
    FOREIGN KEY (project_id) REFERENCES projects (id)
    
    FOREIGN KEY (shadow_id) REFERENCES shadow (id),
    FOREIGN KEY (size_id) REFERENCES size (id),
    FOREIGN KEY (color_id) REFERENCES color (id),
    FOREIGN KEY (gradient_id) REFERENCES gradient (id),
    FOREIGN KEY (position_id) REFERENCES position (id),
    FOREIGN KEY (border_id) REFERENCES border (id),
    FOREIGN KEY (border_radius_id) REFERENCES border_radius (id),
    FOREIGN KEY (text_id) REFERENCES texts (id),
    FOREIGN KEY (text_shadow_id) REFERENCES text_shadow (id)
);