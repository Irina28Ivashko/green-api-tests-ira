import axios from 'axios';
import { INSTANCE_ID, API_TOKEN, BASE_URL } from './config';

// Клиент для работы с Green API
export const greenApi = {
  // Отправка текста в WhatsApp
  sendMessage: (chatId: string, message: string) => {
    return axios.post(`${BASE_URL}/waInstance${INSTANCE_ID}/sendMessage/${API_TOKEN}`, {
      chatId,
      message,
    });
  },

  // Получение истории сообщений
  getChatHistory: (chatId: string) => {
    return axios.post(`${BASE_URL}/waInstance${INSTANCE_ID}/getChatHistory/${API_TOKEN}`, {
      chatId,
    });
  },

  // Проверка состояния инстанса
  getStateInstance: () => {
    return axios.get(`${BASE_URL}/waInstance${INSTANCE_ID}/getStateInstance/${API_TOKEN}`);
  },
};
