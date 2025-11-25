import { greenApi } from '../greenApi';

describe('getChatHistory negative tests (400 Validation Failed)', () => {
  // проверка chatId, неверный формат
  test('should return 400 when chatId has invalid format', async () => {
    try {
      await greenApi.getChatHistory('12345', 10);
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  // проверка chatId, пустая строка
  test('should return 400 when chatId is empty', async () => {
    try {
      await greenApi.getChatHistory('', 10);
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  // проверка chatId, не принимает буквенные значения
  test('should return 400 when chatId contains invalid characters', async () => {
    try {
      await greenApi.getChatHistory('hello', 10);
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  // проверка chatId, не принимает буквенные значения
  test('should return 400 when chatId contains invalid characters', async () => {
    try {
      await greenApi.getChatHistory('hello', 10);
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  // проверка count, не является числом
  test('should return 400 when count is not a number', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', 'hello');
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  // проверка count, не является числом
  test('should return 400 when count is not a number', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', 'hello');
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  test('should return 400 when count is negative', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', -1);
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });
});
