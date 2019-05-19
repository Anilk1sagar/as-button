import { AsButtonModule } from './button.module';

describe('ButtonModule', () => {
  let buttonModule: AsButtonModule;

  beforeEach(() => {
    buttonModule = new AsButtonModule();
  });

  it('should create an instance', () => {
    expect(buttonModule).toBeTruthy();
  });
});
