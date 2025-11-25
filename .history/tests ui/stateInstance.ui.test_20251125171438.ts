import { Builder, By, until } from 'selenium-webdriver';

describe('UI test: instance authorization status', () => {
  let driver: any;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test('should display instance state on the page', async () => {
    // 🔹 Здесь нужно подставить твой реальный id инстанса
    const instanceId = process.env.ID_INSTANCE;

    await driver.get(`https://console.green-api.com/instance/${instanceId}`);

    // 🔍 Ищем элемент, где отображается статус
    const statusElement = await driver.wait(until.elementLocated(By.css('.MuiChip-label')), 10000);

    const statusText = await statusElement.getText();
    console.log('UI status:', statusText);

    const allowed = ['Авторизован', 'Неавторизован', 'authorized', 'notAuthorized', 'blocked'];
    expect(allowed).toContain(statusText);
  });
});
