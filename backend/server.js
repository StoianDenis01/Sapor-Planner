import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Salut din backend Sapor!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend Sapor rulează pe port ${PORT}`));