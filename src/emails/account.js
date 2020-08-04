const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/* const msg = {
    to: 'andras.schneider@cubicfox.com',
    from: 'andras.schneider@cubicfox.com',
    subject: 'This is my first cration!',
    text: 'I hope this one actuallz get to you!'
}

sgMail.send(msg).then(() => {}, error => {
    console.log(error)

    if(error.response) {
        console.log(error.response.body)
    }
}) */

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andras.schneider@cubicfox.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const goodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andras.schneider@cubicfox.com',
        subject: 'We\'re sad to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    goodByeEmail
}