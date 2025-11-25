import { greenApi } from '../greenApi';

describe('getChatHistory negative tests (400 Validation Failed)', () => {
  const expectInvalid = (err: any) => {
    expect([400, 429]).toContain(err.response.status);
    expect(err.response.data).toHaveProperty('message');
  };

  // проверка chatId, неверный формат
  test('should return error when chatId has invalid format', async () => {
    try {
      await greenApi.getChatHistory('12345', 10);
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expectInvalid(err);
    }
  });

  // проверка chatId, пустая строка
  test('should return error when chatId is empty', async () => {
    try {
      await greenApi.getChatHistory('', 10);
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expectInvalid(err);
    }
  });

  // проверка chatId, не принимает буквенные значения
  test('should return error when chatId contains letters', async () => {
    try {
      await greenApi.getChatHistory('hello', 10);
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expectInvalid(err);
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
  test('should return error when count is not a number (string)', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', 'hello');
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expectInvalid(err);
    }
  });

  // проверка count, что не является строкой
  test('should return error when count is a string number', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', '10');
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expectInvalid(err);
    }
  });

  // проверка count не принимает отрицательное значение
  test('should return error when count is negative', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', -1);
      throw new Error('Expected error but got success');
    } catch (err: any) {
      expectInvalid(err);
    }
  });

  // count не принимает пустое значение
  test('should return 400 when count is missing', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us');
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  // count не принимает значение больше 10 знаков
  test('should return 400 when count is a number longer than 10 digits', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', 10000000000);
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });

  // count не принимает буквенные значения
  test('should return 400 when count contains letters', async () => {
    try {
      await greenApi.getChatHistory('77712973203@c.us', 'hello');
      throw new Error('Expected 400 but got success');
    } catch (err: any) {
      expect(err.response.status).toBe(400);
      expect(err.response.data).toHaveProperty('message');
    }
  });
});
