import axios from 'axios';

const POLLING_URL = 'http://localhost:3000/polling/123'; // Adjust URL as needed

async function pollServer() {
  try {
    const response = await axios.get(POLLING_URL, {
      timeout: 10000, // Timeout after 30 seconds
    });
    console.log('Received data:', response.data);
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.log('Request timeout. Retrying...');
    } else if (error.response) {
      // The server responded with a status other than 200 range
      console.log('Error status:', error.response.status);
    } else {
      console.log('Error:', error.message);
    }
  } finally {
    // Continue polling regardless of the previous result
    setTimeout(pollServer, 1000); // Wait for 1 second before polling again
  }
}

pollServer();
