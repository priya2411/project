import { ImageSelectorPage } from './app.po';

describe('image-selector App', () => {
  let page: ImageSelectorPage;

  beforeEach(() => {
    page = new ImageSelectorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
