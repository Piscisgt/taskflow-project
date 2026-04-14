const express = require("express")
const cors = require("cors")
const { PORT } = require("./config/env")

const app = express()

// =====================
// MIDDLEWARES
// =====================
app.use(cors())
app.use(express.json())

// LOGGER
app.use((req, res, next) => {
  const start = Date.now()

  res.on("finish", () => {
    const duration = Date.now() - start
    console.log(`${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`)
  })

  next()
})

// =====================
// RUTA TEST
// =====================
app.get("/", (req, res) => {
  res.json({ message: "API TaskFlow funcionando" })
})

// =====================
// ERROR HANDLER
// =====================
app.use((err, req, res, next) => {
  console.error(err)

  if (err.message === "NOT_FOUND") {
    return res.status(404).json({ error: "No encontrado" })
  }

  res.status(500).json({ error: "Error interno del servidor" })
})

// =====================
// START SERVER
// =====================
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})