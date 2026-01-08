import nodemailer from 'nodemailer'; 
import {WELCOME_EMAIL_TEMPLATE, NEWS_SUMMARY_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates"; 
 
export const transporter = nodemailer.createTransport({ 
    host: 'smtp.resend.com', 
    port: 587, 
    secure: false, // must be false for port 587 
    auth: { 
        user: 'resend', // always 'resend' for Resend SMTP 
        pass: process.env.RESEND_API_KEY!, 
    }, 
}) 
 
export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => { 
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE 
        .replace('{{name}}', name) 
        .replace('{{intro}}', intro); 
 
    const mailOptions = { 
        from: `"PredictX" <predictx@jsmastery.pro>`, 
        to: email, 
        subject: `Welcome to PredictX - your stock market toolkit is ready!`, 
        text: 'Thanks for joining PredictX', 
        html: htmlTemplate, 
    } 
 
    await transporter.sendMail(mailOptions); 
} 
 
export const sendNewsSummaryEmail = async ( 
    { email, date, newsContent }: { email: string; date: string; newsContent: string } 
): Promise<void> => { 
    const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE 
        .replace('{{date}}', date) 
        .replace('{{newsContent}}', newsContent); 
 
    const mailOptions = { 
        from: `"PredictX News" <predictx@jsmastery.pro>`, 
        to: email, 
        subject: `📈 Market News Summary Today - ${date}`, 
        text: `Today's market news summary from PredictX`, 
        html: htmlTemplate, 
    }; 
 
    await transporter.sendMail(mailOptions); 
};
