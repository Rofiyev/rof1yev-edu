import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/playlistItems",
  params: {
    part: "snippet",
    maxResults: "85",
  },
  headers: {
    "X-RapidAPI-Key": "9be851b01amsh5bc72c62fbf856bp16fd3bjsn09789c02eeb3",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getData = async (
  params?: string
): Promise<{ succes: boolean; data?: any }> => {
  try {
    const response = await axios.request({
      ...options,
      params: { ...options.params, playlistId: `${params}` },
    });
    return { succes: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { succes: false };
  }
};
