import { EmployeeappPage } from './app.po';

describe('employeeapp App', function() {
  let page: EmployeeappPage;

  beforeEach(() => {
    page = new EmployeeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
