import { Injectable, Injector } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StoreService } from '../shared/services/store.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    token : any = '';
    constructor(
        private router: Router,
        private injector: Injector,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.token = localStorage.getItem('authToken');        
        console.log(this.token);
        if (this.token) {
            // logged in so return true
            return true;
        }
        console.log(this.token);
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}