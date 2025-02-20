const express = require('express');
const app = express();

//midelware
app.use(express.json())
app.use("/api", require("./router/usuarioRouter"))
app.use("/api", require("./router/adminRouter"))

//servidor
const PORT= 3020;
app.listen(PORT, () => {
    console.log(`servidor corriendo en pueto: ${PORT}`);
});