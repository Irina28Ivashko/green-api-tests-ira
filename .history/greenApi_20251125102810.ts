import axios from "axios":
import { INSTANCE_ID, API_TOKEN, BASE_URL } from "./config";

export const greenApi = {
  sendMessage: (chatId: string, message: string) => {
    return axios.post(
      `${BASE_URL}/waInstance${INSTANCE_ID}/sendMessage/${API_TOKEN}`,
      {
        chatId,
        message,
      }
    );
  },

  getChatHistory: (chatId: string) => {
    return axios.post(
      `${BASE_URL}/waInstance${INSTANCE_ID}/getChatHistory/${API_TOKEN}`,
      {
        chatId,
      }
    );
  },

  getStateInstance: () => {
    return axios.get(
      `${BASE_URL}/waInstance${INSTANCE_ID}/getStateInstance/${API_TOKEN}`
    );
  },
};
