import { greenApi } from '../greenApi';

describe('getChatHistory succes', () => {
  test('should return 200 and an array (possibly empty)', async () => {
    const chatId = '77712973203@c.us';
    const res = await greenApi.getChatHistory(chatId, 50);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });
});
