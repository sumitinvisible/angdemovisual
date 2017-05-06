import { AngdemovisualPage } from './app.po';

describe('angdemovisual App', () => {
  let page: AngdemovisualPage;

  beforeEach(() => {
    page = new AngdemovisualPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
