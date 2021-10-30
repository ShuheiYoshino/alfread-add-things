import alfy from 'alfy'
import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'
dotenv.config()
sgMail.setApiKey(process.env.API_KEY)

const input = alfy.input
const [taskName, description] = input.split('-d').map(el => el.trim())
const msg = {
  to: process.env.THINGS_EMAIL,
  from: process.env.MY_EMAIL,
  subject: taskName,
  text: description || 'This task added by Alfred.'
}

sgMail.send(msg).catch(e => {
  console.log(e)
  throw new Error(e)
})
