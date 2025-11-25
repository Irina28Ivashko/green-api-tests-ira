import { greenApi } from '../greenApi';

describe('getStateInstance success', () => {
  test('should return 200 and valid instance state', async () => {
    const res = await greenApi.getStateInstance();

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('stateInstance');
    expect(typeof res.data.stateInstance).toBe('string');
    expect(res.data.stateInstance.length).toBeGreaterThan(0);
  });
});
