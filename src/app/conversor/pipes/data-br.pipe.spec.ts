import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2021-09-30 para 30/09/2021', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2021-09-30')).toEqual('30/09/2021');
  });
});
