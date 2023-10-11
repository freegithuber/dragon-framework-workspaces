import { Injectable } from '@angular/core';
import {
  CanLoad,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Router,
  Route,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './service/app.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ):
    Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

}

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {

  constructor(
    private router: Router,
    private appService: AppService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 登录地址
    const loginUrl = '/login';
    // 注册地址
    const registerUrl = '/register';
    // 判断是否含有令牌
    if (this.appService.getToken()) {
      // 如果含有令牌，并且跳转“登录”、“注册”页面，重定向到“首页”
      if (loginUrl === state.url || registerUrl === state.url) {
        return this.router.navigate(['']);
      } else {
        // 否则直接放行
        return true;
      }
    } else {
      // 如果没有令牌，并且跳转“登录”、“注册”页面，直接放行
      if (loginUrl === state.url || registerUrl === state.url) {
        return true;
      } else {
        // 否则重定向到“登录”页面
        return this.router.navigate([loginUrl]);
      }
    }
  }

}

@Injectable({
  providedIn: 'root',
})
export class CanActivateChildGuard implements CanActivateChild {

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<object> {

  canDeactivate(
    component: object,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
