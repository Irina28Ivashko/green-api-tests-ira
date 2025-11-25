import { greenApi } from '../greenApi';

describe('getStateInstance success', () => {
  test('should return 200 and stateInstance field', async () => {
    const res = await greenApi.getStateInstance();

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('stateInstance');

    expect(['notAuthorized', 'authorized', 'blocked']).toContain(res.data.stateInstance);
  });
});
