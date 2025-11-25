import { Builder, By, until } from 'selenium-webdriver';

describe('UI test: instance authorization status', () => {
  let driver: any;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  }, 20000);

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test('should display instance state on the page', async () => {
    const instanceId = process.env.ID_INSTANCE;
    await driver.get(`https://console.green-api.com/instanceList/${instanceId}`);

    // ДАЁМ СТРАНИЦЕ ЗАГРУЗИТЬСЯ
    await driver.sleep(3000);

    // ⚠️ ПРОКРУТКА ВНИЗ, чтобы элемент стал видимым
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
    await driver.sleep(1500);

    // Ищем статус
    const statusElement = await driver.wait(
      until.elementLocated(By.css('span.statusesAuth')),
      15000,
    );

    const statusText = await statusElement.getText();
    console.log('UI status:', statusText);

    const allowed = ['Авторизован', 'Неавторизован', 'Авторизуется', 'Заблокирован'];
    expect(allowed).toContain(statusText);
  }, 30000); // увеличенный таймаут для теста
});
