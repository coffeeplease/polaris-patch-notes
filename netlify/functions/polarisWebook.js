const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'webhookData.json');

exports.handler = async function (event, context) {
  try {
    const payload = JSON.parse(event.body);

    // Store the payload in the JSON file
    const existingData = fs.existsSync(dataFilePath)
      ? JSON.parse(fs.readFileSync(dataFilePath, 'utf8'))
      : [];
    existingData.push(payload);
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Webhook received and data stored' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred' }),
    };
  }
};
