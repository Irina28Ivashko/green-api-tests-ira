import { greenApi } from '../greenApi';

describe('sendMessage success', () => {
  test('should send a text message successfully', async () => {
    const chatId = '77712973203@c.us';
    const message = 'I use Green-API to send this message to you!';

    const res = await greenApi.sendMessage(chatId, message);

    // Проверка статуса 200
    expect(res.status).toBe(200);

    // Проверка обязательного поля
    expect(res.data).toHaveProperty('idMessage');
  });
});
