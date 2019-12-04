import { AppPage } from './app.po';
import { browser, element, by, ElementFinder } from 'protractor';

describe('Teste tarefa', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('login');
    
    let userInput = element(by.css('[ng-reflect-name=username]'));
    userInput.sendKeys('usuario');
    expect(userInput.getAttribute('value')).toBe('usuario');
    
    let passwordInput = element(by.css('[ng-reflect-name=password]'));
    passwordInput.sendKeys('password');
    expect(passwordInput.getAttribute('value')).toBe('password');

    let loginButton = element(by.css('#loginButton'));
    loginButton.click();
    browser.waitForAngular();
    browser.get('/tarefas');
    browser.waitForAngular();

  });

  afterEach(() => {
    element(by.css('#logoutButton')).click();
    browser.waitForAngular();
  });1
  

  it('Should delete tarefa', (done) => {

    let primeiroCartao = element.all(by.css('app-tarefa-card')).first();
    let botaoPrimeiroCartao = primeiroCartao.all(by.css('.fa-trash-alt')).first();
    // element(by.cssContainingText('option', 'BeaverBox Testing')).click();

    botaoPrimeiroCartao.click();

    browser.waitForAngular();

    setTimeout(() => {
      expect(primeiroCartao.all(by.css('form-check-label')).isPresent()).toBeFalsy()
      done()
    }, 1000)

  })
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    /* const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry)); */
  });
});
