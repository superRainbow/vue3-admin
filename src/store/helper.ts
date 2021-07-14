const tryCatch = (method: Function) => {
  return async (...args: any) => {
    try {
      return await method(...args);
    } catch (error) {
      console.log('error', error);
      return;
    }
  };
};

class Action {
  name = '';
  data = '';

  constructor(name = '', data?: any) {
    this.name = name;
    this.data = data;
  }
}

class JWT {
  accessToken = '';
  refreshToken = '';

  constructor(data: any = {}) {
    this.accessToken = data.accessToken || '';
    this.refreshToken = data.refreshToken || '';
  }
}

class Modal {
  type = '';
  message = '';
  title = '提示';
  cancelText = '取 消';
  submitText = '確 定';
  width = '30%';
  showHeaderClose = true;
  isCancelShow = false;
  confirmCallback = () => {
    return;
  };

  constructor(data: Partial<Modal> = {}) {
    Object.assign(this, data);
  }
}

export { tryCatch, Action, JWT, Modal };
