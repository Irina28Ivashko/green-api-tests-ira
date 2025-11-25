import { greenApi } from '../greenApi';

describe('getStateInstance succes', () => {
  test('should return 200 and stateInstance field', async () => {
    const res = await greenApi.getStateInstance();

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('stateInstance');

    const validStates = ['notAuthorized', 'authorized', 'blocked'] as const;
    expect(validStates).toContain(res.data.stateInstance);
  });
});
