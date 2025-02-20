const db = require("../config/database")

class SisController {
    static async verMasSolicitados(req, res) {
        let [lista] = await db.query("SELECT  l.titulo,  COUNT(p.id) AS veces_prestado FROM Prestamos p JOIN Libros l ON p.libro_id = l.id GROUP BY l.id, l.titulo, l.autor ORDER BY veces_prestado DESC")
        res.json(lista)
    }

    static async ultimosPrestamos(req, res) {
        let [lista] = await db.query("SELECT * FROM Prestamos ORDER BY id DESC LIMIT 5")
        res.json(lista)
    }
}

module.exports = SisController