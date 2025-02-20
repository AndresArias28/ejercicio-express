let db = require("../config/database")

class AdminController {
    static async agregarLibro(req, res) {
        console.log(req.body);
        let { titulo, autor, anio_publicacion, disponibilidad, creado_en } = req.body
        await db.query("INSERT INTO libros (titulo, autor, anio_publicacion, disponibilidad, creado_en) VALUES (?,?,?,?,?)", [titulo, autor, anio_publicacion, disponibilidad,creado_en])
        res.send("Libro agregado")
    }

    static async actualizarLibro(req, res) {
        let { id } = req.params
        let { titulo, autor, anio_publicacion, disponibilidad, creado_en } = req.body
        await db.query("UPDATE libros SET titulo=?, autor=?, anio_publicacion=?, disponibilidad=?, creado_en=? WHERE id=?", [titulo, autor, anio_publicacion, disponibilidad, creado_en, id])
        res.send("Libro actualizado")
    }

    static async eliminarLibroNoDisponible(req, res) {
        await db.query("DELETE FROM libros WHERE disponibilidad='0'")
        res.send("Libros eliminados")
    }


}

module.exports = AdminController