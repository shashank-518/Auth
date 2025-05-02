import cors from "cors"
import express from "express"

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({message: "Hello world"})
});

app.listen(port, () => console.log("Server is running @ port 5000"));