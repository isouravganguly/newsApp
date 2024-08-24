import axios from 'axios';

const API_KEY = 'KEY'; // Replace with your actual API key
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const getHeadlinesFromApi = async (pageNumber: number): Promise<any> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        // Example of additional parameters
        pageSize: 20,
        page: pageNumber,
        country: 'in', // You can adjust this according to your needs
        category: 'business', // You can choose categories like 'technology', 'health', etc.
      },
    });

    // console.log('API call completed. Here is the response:');
    // console.log(response); // This logs the entire Axios response object
    // console.log('Data from response:');
    // console.log(response.data); // This logs the actual data you're interested in

    return response.data; // Returning the relevant data
  } catch (error: any) {
    console.error('Error occurred during API call:', error.message);
    throw new Error(error.message);
  }
};
