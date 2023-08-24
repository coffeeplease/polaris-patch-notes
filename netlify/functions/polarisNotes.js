const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'webhookData.json');

exports.handler = async function (event, context) {
  try {
    // Read data from the JSON file
    const data = fs.readFileSync(dataFilePath, 'utf8');
    const parsedData = JSON.parse(data);

    return {
      statusCode: 200,
      body: JSON.stringify(parsedData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred' }),
    };
  }
};