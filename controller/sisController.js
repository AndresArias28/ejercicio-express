const db = require("../config/database")

class SisController {
    static async verMasSolicitados(req, res) {
        let [lista] = await db.query("SELECT * FROM libros ORDER BY cantidad DESC LIMIT 5")
        res.json(lista)

    }
}