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
        await db.query("UPDATE libros SET disponibilidad = 1 WHERE id=?", [id])
        res.send("Libro devuelto")
    }

    // static async insertarEmpleado(req, res) {
    //     let { nombre, apellido, identificacion, email, contrasena } = req.body// destructuring de req.body
    //     await db.query("INSERT INTO usuario(nombre, apellido, identificacion, email, contrasena) VALUES(?,?,?,?,?)", [nombre, apellido, identificacion, email, contrasena])

    // }

    // static async actualizarEmpleadobyId(req, res) {
    //     let { id } = req.params
    //     let { nombre, apellido, identificacion, email, contrasena } = req.body
    //     await db.query("UPDATE usuario SET nombre=?, apellido=?, identificacion=?, email=?, contrasena=? WHERE id=?", [nombre, apellido, identificacion, email, contrasena, id])
    // }

    // static async eliminarEmpleado(req, res) {
    //     let { id } = req.params
    //     await db.query("DELETE FROM usuario WHERE id=?", [id])
    // }

    // static async buscarEmpleado(req, res) {
    //     let { nombre } = req.params
    //     let [lista] = await db.query("SELECT * FROM usuario WHERE nombre=?", [nombre])
    //     res.json(lista)
    // }

}

module.exports = EmpleadoController