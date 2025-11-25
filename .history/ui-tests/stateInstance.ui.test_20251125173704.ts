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
    const instanceId = process.env.ID_INSTANCE;

    // идём на страницу просмотра инстанса
    await driver.get(`https://console.green-api.com/instance${instanceId}`);

    // ждём появления span со статусом
    const statusElement = await driver.wait(
      until.elementLocated(By.css('span.statusesAuth')),
      15000,
    );

    const statusText = await statusElement.getText();
    console.log('UI status:', statusText);

    const allowed = ['Авторизован', 'Неавторизован'];
    expect(allowed).toContain(statusText);
  }, 20000);
});
