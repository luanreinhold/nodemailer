const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();

app.get("/send-email", async (req, res) => {

    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
    });
    
    var message = {
        from: "",
        to: "",
        subject: "Olá, venha conhecer nossos planos!",
        text: "Você ganhou um desconto para assinar nosso plano mensal de /n blalblablalbalblabla",
        html: "Você ganhou um desconto para assinar nosso plano mensal de <br>blalblablalbalblabla"
    };

    transport.sendMail(message, function (err, ) {
        if (err) {
            console.log('Houve um erro: ', err);
        } else {
            console.log('Email Enviado!');
            }
    });

    return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!"
    });

});

app.listen(process.env.PORT, () => {
    console.log(`api subiu na porta ${process.env.PORT} // navegador acesso: http://localhost:5000/send-email`);
});