import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //  private currentUserSubject: BehaviorSubject<User>;
  //  public currentUser: User;

    constructor(private http: HttpClient) {

      //  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    //    this.currentUser = this.currentUserSubject.asObservable();
      
    }


    public get accessToken() : string {
        return localStorage.getItem('accessToken') || "";
    }


    public async getCurrentUser() : Promise<User> {

        return this.http.get<User>(
            `${environment.apiUrl}/account/getLoggedUser`,     
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accessToken
                }
        }).toPromise();
     
    }


    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/account/login`, { username, password })
            .pipe(map(tokenData => {

                if (tokenData && tokenData.token) {
                    localStorage.setItem('accessToken', tokenData.token);
                }

            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('accessToken');

    }
}