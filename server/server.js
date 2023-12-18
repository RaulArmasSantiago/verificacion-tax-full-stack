import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express();

app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 5000;

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: "123456",
  database: 'prueba'
}

const connectToDatabase= async() => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conexión exitosa a MySQL');
    return connection;
  } catch(error) {
    console.log("Error de conexion a MySQL:", error)
    throw error
  }
}

app.post('/login', async (req, res) => {
  try {
    // Conectar a MySQL
    const connection = await connectToDatabase();

    const body = req.body
    // console.log(body)
    // Ejemplo de consulta SELECTd
    // const [rows] = await connection.execute(`SELECT * FROM users WHERE user="rarmccas" && password="123456"`);;
    const [rows] = await connection.execute(`SELECT * FROM users WHERE user="${body.user}" && password="${body.password}";`);


    console.log(rows)
    rows.length === 1 ? res.status(200).json(rows) : res.status(404).json({"message":"No se encontro el usuario"})
    // res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
})
app.get('/', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});