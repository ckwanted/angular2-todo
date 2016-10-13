import { Angular2TodoPage } from './app.po';

describe('angular2-todo App', function() {
  let page: Angular2TodoPage;

  beforeEach(() => {
    page = new Angular2TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
