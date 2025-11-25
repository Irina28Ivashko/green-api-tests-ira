import { greenApi } from '../greenApi';

describe('sendMessage success', () => {
  test('should send a text message successfully', async () => {
    const chatId = '77712973203@c.us';
    const message = 'Test message from Jest';

    const res = await greenApi.sendMessage(chatId, message);

    // Проверяем статус
    expect(res.status).toBe(200);

    // Проверяем обязательное поле
    expect(res.data).toHaveProperty('idMessage');
  });
});
