const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(express.static("public")); // Sirve tu HTML y JS

app.post("/enviar-codigo", async (req, res) => {
  const { email, codigo } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Aztlan NET Technology" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Tu código de verificación",
      html: `<h2 style="color:#2d2dff;">Tu código es: <strong>${codigo}</strong></h2><p>Ingresa este código en el formulario para completar tu registro.</p>`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor activo en http://localhost:${PORT}`));


