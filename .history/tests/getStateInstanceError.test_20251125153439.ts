import { greenApi } from '../greenApi';

describe('getStateInstance error tests', () => {
  test('should handle server errors gracefully', async () => {
    try {
      await greenApi.getStateInstance();
    } catch (err: any) {
      expect([401, 429]).toContain(err.response.status);
    }
  });
});
