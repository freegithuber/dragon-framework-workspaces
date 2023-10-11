import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor() {}

  /**
   * 获取令牌
   */
  getToken() {
    return window.localStorage.getItem('TOKEN');
  }

  /**
   * 保存令牌
   */
  setToken(username) {
    window.localStorage.setItem('TOKEN', username);
  }

  /**
   * 移除令牌
   */
  removeToken() {
    window.localStorage.removeItem('TOKEN');
  }

}
