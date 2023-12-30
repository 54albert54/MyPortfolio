import { Resend } from "resend";

const emailKey = import.meta.env.VITE_EMAIL_KEY;

const resend = new Resend(emailKey);

export const sendEmail = (data) => {
  const dataEmail = {
    from: "onboarding@resend.dev",
    to: "angelalberto545@gmail.com",
    subject: "!!!Correo enviado desde el Porfolio",
    html: `<p> correo departe <br/>${data.name} <br/> correo:${data.emailaddress} <br/><br/> <strong>${data.emailaddress}</strong>!</p>`,
  };
 
console.log('se envio email',resend);

 resend.emails.send(dataEmail);
};
