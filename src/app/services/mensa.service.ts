import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import {Menus} from '../models/menus';

// Injectable marks it as a service that can be injected
@Injectable({
    providedIn: 'root'
})
export class MensaService {

    private readonly baseUrl: string = 'https://digiboard.htwk-leipzig.de/digiboard/getmensa.php';

    constructor(
        private http: HttpClient
    ) {
    }

    getMeals() {
        return this.http.get<Menus>(this.baseUrl)
            .pipe(map((res: Menus) => res))
            .pipe(delay(500));
    }
}
