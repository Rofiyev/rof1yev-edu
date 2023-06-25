import axios from "axios";

const BaseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "70",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getData = async (
  urlData: string
): Promise<{ succes: boolean; data?: any }> => {
  try {
    const response = await axios.get(`${BaseUrl}/${urlData}`, options);
    return { succes: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { succes: false };
  }
};