import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

import { User } from '@app/models/user';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    public currentUser: User;

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.currentUser = await this.authenticationService.getCurrentUser();
        if (this.currentUser) {
            if (route.data.roles
                 && route.data.roles.filter(role => this.currentUser.roles.includes(role))
                 ) {                
                // authorised so return true
                return true;
            }

            // role not authorised so redirect to home page
            this.router.navigate(['/']);            
            return false;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}