import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { authToken } from "../constants/constants";
import { AlertService } from "../services/alert.service";

@Injectable({ providedIn: 'root' })
export class RedirectAuthGuard implements CanActivate {

    constructor(private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        const userRemember = localStorage.getItem('rememberUser');
        console.log(userRemember)
        const token = localStorage.getItem(authToken)
        if (Boolean(userRemember) && !!token) {
            console.log('home')
            return this._router.parseUrl('home')
        }

        return true
    }
}


export const authGuard: CanActivateFn = (route, state) => {
    const isToken = localStorage.getItem(authToken);
    const alertService = inject(AlertService)
    const router = inject(Router)
    if (isToken) {
        return true
    }
    alertService.fail('You are not logged in')
    return router.parseUrl("/")

}


