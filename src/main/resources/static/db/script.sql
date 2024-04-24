CREATE DATABASE vidafarma;


INSERT INTO cliente (dniCliente, nombre, apePaterno, apeMaterno, fechaNacimiento, correo, celular)
VALUES ('71948633', 'Hugo', 'Flores', 'Rodriguez', '1996-02-18', 'hfloresr3@gmail.com', '958977833');

INSERT INTO producto (nombre, descripcion, marca, presentacion, stock, precio)
VALUES ('Betametasona', 'Crema para hongos', 'Marca01', 'Crema', 100, 12.5);
INSERT INTO producto (nombre, descripcion, marca, presentacion, stock, precio)
VALUES ('Panadol', 'Pastilla para dolor de cabeza', 'Marca02', 'Pastilla', 100, 2);
INSERT INTO producto (nombre, descripcion, marca, presentacion, stock, precio)
VALUES ('Electro Oral', '', 'Marca03', 'Frasco', 100, 20);