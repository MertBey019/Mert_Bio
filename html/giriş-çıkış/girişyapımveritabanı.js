const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// MongoDB'ye bağlanma
mongoose.connect("mongodb://localhost:27017/kayit_olma", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Kullanıcı Şeması
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.use(express.json());

// Kayıt Olma Endpoint'i
app.post("/kayit", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Yeni kullanıcı oluştur
    const newUser = new User({ username, password, email });

    // Kullanıcıyı kaydet
    await newUser.save();

    res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Bir hata oluştu." });
  }
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
