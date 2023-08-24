// netlify/functions/webhook.js
exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);

    if (data) {
        // Process the data
        console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Webhook data received' })
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Bad request' })
        };
    }
};
