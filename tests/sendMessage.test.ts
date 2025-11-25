import { greenApi } from '../greenApi';

describe('sendMessage success', () => {
  test('should send a text message successfully', async () => {
    const chatId = '77712973203@c.us';
    const message = 'I use Green-API to send this message to you!';

    const res = await greenApi.sendMessage(chatId, message);

    console.log('Ответ сервера:', res.data);

    expect(res.status).toBe(200); // Проверка статуса 200
    expect(res.data).toHaveProperty('idMessage'); // проверка пустого поля
  });
});
