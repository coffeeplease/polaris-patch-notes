exports.handler = async function (event, context) {
    try {
      const payload = JSON.parse(event.body);
  
      // You can now work with the payload received from GitLab.
      // Process the payload as needed for your use case.
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Webhook received successfully' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'An error occurred' }),
      };
    }
  };
  