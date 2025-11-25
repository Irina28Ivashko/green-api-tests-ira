import { greenApi } from '../greenApi';

describe('getChatHistory succes', () => {
  // проверка с валидными данными
  test('should return 200 and an array (possibly empty)', async () => {
    const chatId = '77712973203@c.us';
    const res = await greenApi.getChatHistory(chatId, 50);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  // count = 0
  test('should return 200 when count is 0 (API returns empty array)', async () => {
    const chatId = '77712973203@c.us';
    const res = await greenApi.getChatHistory(chatId, 0);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });
});
