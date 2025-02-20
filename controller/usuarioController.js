let db = require("../config/database")

class EmpleadoController {
    static async consultarCatalogo(req, res) {
        let  [lista]= await db.query("SELECT * FROM libros") 
        res.json(lista)
    }

    static async verEStadolibrosPrestados(req, res) {
        let  [lista]= await db.query("SELECT * FROM prestamos ") 
        res.json(lista)
    }

    static async devolverLibro(req, res) {
        let { id } = req.params
        await db.query("UPDATE prestamos SET estado = 'devuelto' WHERE id=?", [id])
        res.send("Libro devuelto")
    }

}

module.exports = EmpleadoController