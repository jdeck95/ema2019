import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

// Injectable marks it as a service that can be injected
@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly baseUrl: string = 'https://digiboard.htwk-leipzig.de/raumplanung/register.php?';

    constructor(
        private http: HttpClient
    ) {
    }

    registerUser(userData: User) {
        const url = `${this.baseUrl}email=${userData.email}&name=${userData.name}&vorname=${userData.vorname}`;
        
        return this.http.get<User>(url);
    }
}
