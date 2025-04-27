USE imaginautak;

-- tabla USER: hasta el 10 fans, hasta el 20 artist, 21 admin
INSERT INTO user (email, username, password, role)
VALUES
('marta.gomez@email.com', 'martag', '$2b$10$xlhX0iL0gXs6EBRHBf2tseXjEt.UMjLI87PmqWJBpmMIdBxzR5nf6', 'user'),
('juan.lopez@email.com', 'juanelo', '$2b$10$kByC04qnq/mvYYap937moufViT4YStngCqYyvnSjOxMyQ735nKvDO', 'user'),
('ana.rivas@email.com', 'anar', '$2b$10$6ZXa/xlA8bieQGlAkiXLP.ToI5wsBZX.NMDVZy.HTlG19D/wwTzd.', 'user'),
('pedro.martin@email.com', 'pedrom', '$2b$10$vh/wv7LZ6.edrSoStklQbegaJoChNjifaUN43Yy906XJ5smiCwcQ.', 'user'),
('laura.navas@email.com', 'launav', '$2b$10$yYgMsPEEryTjUnp.3.0DIOozGH4YCzhHEof8sadyQ6ZIVLf6CUVBC', 'user'),
('david.vera@email.com', 'dvera', '$2b$10$aOa6Dir.gnkuZhwMP/2/.e5ZYzTmRqK/j1L3uHgbRdKVR77OSui16', 'user'),
('sara.fuentes@email.com', 'saraf', '$2b$10$PqO6/SQyZldwKxbZG3eUCeigQVo6bXvRdJONnPegQqQozobRdYSoK', 'user'),
('alberto.rey@email.com', 'albr', '$2b$10$PQ4FfXSfO10a8ZyIwdSMGercsDewf7boAqzOlfxWvkhlXup/UN0gO', 'user'),
('ines.soler@email.com', 'iness', '$2b$10$wRQUHmhIhHXneac2NrxxueMh.xi0jJO0Ya6XljC69zA0SR0UShNX2', 'user'),
('carlos.meza@email.com', 'cmeza', '$2b$10$IjR79OWBsbGUojAqYgE0i.uGh8wFOjyyfDrETLptfUL4EXiFCTqxi', 'user'),
('dalila@email.com', 'crdalila', '$2b$10$4ZbDf4VTEiJhuKI6rzbOxecRgDH3VzQytPciwW7V5Lb3zi6ck8Ar2', 'user'),
('vicky@email.com', 'vickypr', '$2b$10$jTUfvDgInwISBMsgvqMDRu7gRkRUo7pPGxBsqTABn8KpeKkneZfy6', 'user'),
('anais@email.com', 'done', '$2b$10$bYZx3HwtokiABFCfkB4exO/7KQmJ67VCF9.rG/biaufu1JgItVNmy', 'user'),
('igor@email.com', 'igoruve', '$2b$10$GMEdj4WjkT57X49QbSEkceryj5PUeIBLwMQ0XAhv9g4Fo21OAWW.q', 'user'),
('izas@email.com', 'cascun', '$2b$10$gsrtebeeZpRByR/ZMmmsGudvOQkGRhrvF4pt9X1p0Eqy2oQMB7852', 'user'),
('amaia@email.com', 'amaiabarrena', '$2b$10$bO6T7ntonPy7spK.5XudSu0CGPVLz0W2nRJy8M4lclkvqC1x/4EPm', 'user'),
('leo@email.com', 'views', '$2b$10$WxyMuOJ74E489jep4TN0Y.8JAhM0zkPyITxyNzL711fMW05KrFtLW', 'user'),
('lorna@email.com', 'lorr', '$2b$10$yZ6OvJGjGlYq/OVqF68D/.BCkzk0M0UhdEpMPnGub3Q94pNBnh9LG', 'user'),
('kimetz@email.com', 'kimetza', '$2b$10$B4pNbQqCIOfWVHuvCw1u2e3XVlrTqiFQAWvi275BaXMxrFBSq0SB6', 'user'),
('noah@email.com', 'nooooah', '$2b$10$PkB75Nx4YTcvtcH8Sgr/DOYK9hTjvqpP6LCmAXhh0Up0IZdQFAcTC', 'user'),
('admin@email.com', 'admin', '$2b$10$n2lM9PMuO7ZR74nLTNXwQOAuTckOo8RLh/52NcEdQtCbE.W6QpRqq', 'admin');

-- tabla ARTIST
INSERT INTO artist (artist_id, artistic_name, bio, website, social_media_01, social_media_02, img)
VALUES
(11, 'Dalila Cabrera', 'Escritora apasionada por mundos imaginarios y emociones profundas.', 'https://dalilaescribe.com', '@cr_dalila', NULL, 'dalila.jpg'),
(12, 'Vicky PR', 'Diseña joyas únicas de plata inspiradas en los 2000.', NULL, '@vickyjoyas', '@silver_vicky', 'vicky.jpg'),
(13, 'DONE', 'Diseñadora gráfica enfocada en branding con impacto social.', 'https://anaisdesign.com', '@anais.design', NULL, 'anais.jpg'),
(14, 'Igor Uve', 'Ilustrador digital con influencias de los juegos de rol y pokémon', NULL, '@igor.illustrates', NULL, 'igor.jpg'),
(15, 'Izas Camarero', 'Cineasta independiente enfocada en narrativas feministas y surrealistas.', 'https://izasfilms.net', '@izas.cinema', '@filmizas', 'izas.jpg'),
(16, 'Amaia Barrena', 'Poeta urbana con sensibilidad social y enfoque feminista.', NULL, '@amaia.poetry', NULL, 'amaia.jpg'),
(17, 'Leo Alves', 'Fotógrafo de calle y documental, capturando lo invisible.', 'https://leoviews.com', '@views.leo', NULL, 'leo.jpg'),
(18, 'Lorna', 'Pintora abstracta, trabaja con emociones y color como lenguaje.', NULL, '@lorna.art', '@lorna.l', 'lorna.jpg'),
(19, 'Kimetz', 'Activista trans, habla sobre sexualidad, identidad y salud mental', 'https://kimetzart.org', '@kimetz.a', NULL, 'kimetz.jpg'),
(20, 'Goodbye Kepler', 'Banda de rock indie con sonidos tranquilos y letras profundas', 'https://noahmusic.net', '@noah.beats', '@beatsby.noah', 'noah.jpg');

-- tabla FANS
INSERT INTO fan (fan_id, img, bio)
VALUES
(1, 'img/fans/marta.jpg', 'Apasionada del arte urbano y la ilustración digital.'),
(2, 'img/fans/juan.jpg', 'Fan del cómic independiente y el arte expresionista.'),
(3, 'img/fans/ana.jpg', 'Me encanta descubrir artistas emergentes.'),
(4, 'img/fans/pedro.jpg', 'Colecciono arte digital y NFTs.'),
(5, 'img/fans/laura.jpg', 'Seguidora de proyectos de arte feminista y visual.'),
(6, 'img/fans/david.jpg', 'Amo el diseño gráfico y el arte conceptual.'),
(7, 'img/fans/sara.jpg', 'Fan del arte queer y los collages digitales.'),
(8, 'img/fans/alberto.jpg', 'Me interesa el arte social y político.'),
(9, 'img/fans/ines.jpg', 'Amante del arte abstracto y audiovisual.'),
(10, 'img/fans/carlos.jpg', 'Exploro proyectos de artistas jóvenes.');

-- tabla PROJECT
INSERT INTO project (title, description, trigger_warnings, project_url, project_imgs, project_video, created_at)
VALUES
('Entre aplausos y burbujas estrelladas', 'Antología de relatos con background feminista y fantasioso', NULL, 'https://dalilaescribe.com/cuerpos', 'cuerpos.jpg', NULL, NOW()),
('Raíces de plata', 'Colección de joyas inspiradas en raíces, cortezas y estructuras vegetales.', NULL, 'https://vickyjoy.com/raices', 'raices.jpg', NULL, NOW()),
('DONE0424', 'Identidad gráfica de la ilustradora Anaís Cabado, diseño gráfico e ilustración', NULL, 'https://anaisdesign.com/flotantes', 'flotantes.jpg', NULL, NOW()),
('New Pokémons', 'Serie de ilustraciones de variaciones de pokémon ya existentes o pokémon creados por mí', NULL, 'https://igorart.com/bestiario', 'bestiario.jpg', NULL, NOW()),
('La vida en el campo', 'Cortometraje experimental sobre la vuelta a la naturaleza y los pueblos', 'death', 'https://izasfilms.net/tiempomuerto', 'tiempo_muerto.jpg', 'tiempo_muerto.mp4', NOW()),
('Roma es inevitable', 'Libro de poesía sobre cómo todos los caminos llevan a roma, al feminismo y la escritura.', 'mental health', 'https://amaia.poetry/ruinas', 'verso.jpg', NULL, NOW()),
('Luz de barrio', 'Serie fotográfica documental sobre la vida cotidiana.', NULL, 'https://leoviews.com/luzdebarrio', 'luz.jpg', NULL, NOW()),
('Colores del ruido', 'Pinturas abstractas sobre el caos sonoro moderno.', NULL, 'https://lorna.art/ruido', 'ruido.jpg', NULL, NOW()),
('So sad today', 'Charlas explicativas que reflexionan sobre la salud mental de las personas trans', 'mental health', 'https://kimetz.org/rebel', 'rebel.jpg', NULL, NOW()),
('Frankenstein', 'Álbum experimental que combina rock indie y electrónica.', NULL, 'https://noahmusic.net/natsyn', 'natsyn.jpg', 'natsyn.mp4', NOW());

-- tabla CATEGORIES
INSERT INTO category (category_name)
VALUES
('music'),
('theatre'),
('dance'),
('performance'),
('comedy show'),
('illustration'),
('photography'),
('painting'),
('sculpture'),
('graphic design'),
('poetry'),
('literature'),
('cinema'),
('animation'),
('video art'),
('ceramics'),
('jewelry'),
('textile art'),
('handmade crafts'),
('activism'),
('other');

-- tabla ARTIST HAS PROJECT: individual y colaboraciones
INSERT INTO artist_has_project (artist_id, project_id)
VALUES
(11, 1), -- Dalila → "Entre aplausos y burbujas estrelladas"
(12, 2), -- Vicky → "Raíces de plata"
(13, 3), -- Anaís → "DONE0424"
(14, 4), -- Igor → "New Pokémons"
(15, 5), -- Izas → "La vida en el campo"
(16, 6), -- Amaia → "Roma es inevitable"
(17, 7), -- Leo → "Luz de barrio"
(18, 8), -- Lorna → "Colores del ruido"
(19, 9), -- Kimetz → "So sad today"
(20, 10),-- Noah → "Frankenstein"

-- Colaboraciones:
(13, 9), -- Anaís también colaboró en "Rebeldía gráfica" con Kimetz
(14, 5); -- Igor colaboró en "Tiempo Muerto" con Izas


-- tabla PROJECT HAS CATEGORY
INSERT INTO project_has_category (project_id, category_id)
VALUES
(1, 12),  -- literatura
(2, 17),  -- joyería
(3, 10),  -- diseño gráfico
(4, 6),   -- ilustración
(5, 13),  -- cine
(6, 11),  -- poesía
(7, 7),   -- fotografía
(8, 8),   -- pintura
(9, 20),  -- activismo
(10, 1);  -- música

-- tabla FAN FAVS PROJECT
INSERT INTO fan_favorites_project (fan_id, project_id)
VALUES
(1, 1),  -- Marta fan de Dalila (literatura)
(1, 4),  -- Marta también fan de Igor (ilustración)
(2, 9),  -- Juan fan de Kimetz (activismo)
(3, 2),  -- Ana fan de Vicky (joyería)
(3, 3),  -- Ana también fan de Anaís (diseño gráfico)
(4, 5),  -- Pedro fan de Izas (cine)
(5, 6),  -- Laura fan de Amaia (poesía)
(6, 10), -- David fan de Noah (música)
(7, 7),  -- Sara fan de Leo (fotografía)
(8, 9),  -- Alberto fan de Kimetz (activismo)
(9, 8),  -- Inés fan de Lorna (pintura)
(10, 1); -- Carlos fan de Dalila (literatura)

-- tabla FAN FOLLOWS ARTIST
INSERT INTO fan_follows_artist (fan_id, artist_id)
VALUES
(1, 11),  -- Marta sigue a Dalila
(1, 14),  -- Marta sigue a Igor
(2, 19),  -- Juan sigue a Kimetz
(3, 12),  -- Ana sigue a Vicky
(3, 13),  -- Ana sigue a Anaís
(4, 15),  -- Pedro sigue a Izas
(5, 16),  -- Laura sigue a Amaia
(6, 20),  -- David sigue a Noah
(7, 17),  -- Sara sigue a Leo
(8, 19),  -- Alberto sigue a Kimetz
(9, 18),  -- Inés sigue a Lorna
(10, 11); -- Carlos sigue a Dalila
