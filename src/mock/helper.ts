export class Res {
  respHeader = {
    status: 0,
    message: '',
    txnId: ''
  };
  respBody = {
    data: undefined
  };

  constructor(type: string, data: any = {}) {
    this.respHeader.status = type === 'success' ? 0 : 2000;
    this.respHeader.message = type === 'success' ? 'ok' : 'has some error';
    this.respBody.data = data;
  }
}
