import { Injectable, OnInit } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthenticationService } from '@app/services/authentication.service';
import { User } from '@app/models/user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor, OnInit {
    constructor(private authenticationService: AuthenticationService) { }

    public currentUser: User;

    async ngOnInit() {
        this.currentUser = await this.authenticationService.getCurrentUser();
        console.log(this.currentUser);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url        
        const isLoggedIn = this.currentUser && this.authenticationService.accessToken;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.accessToken}`
                }
            });
        }

        return next.handle(request);
    }
}