import { JasonPage } from './app.po';

describe('jason App', function() {
  let page: JasonPage;

  beforeEach(() => {
    page = new JasonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
