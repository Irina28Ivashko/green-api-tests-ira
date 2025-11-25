import { greenApi } from '../greenApi';

// проверяем негативные сценарии
describe('sendMessage negative tests', () => {
  test('should return 400 for empty chatId', async () => {
    try {
      await greenApi.sendMessage('', 'hello');
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  test('should return 400 for invalid chatId format', async () => {
    try {
      await greenApi.sendMessage('12345', 'hello');
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  test('should return 400 for empty message', async () => {
    try {
      await greenApi.sendMessage('77711111111@c.us', '');
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });
});
