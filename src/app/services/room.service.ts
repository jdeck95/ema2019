import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room';

// Injectable marks it as a service that can be injected
@Injectable({
    providedIn: 'root'
})
export class RoomService {

    private readonly createRoomBaseUrl: string = 'https://digiboard.htwk-leipzig.de/raumplanung/addroom.php?';

    constructor(
        private http: HttpClient
    ) {
    }

    createRoom(roomData: Room, deviceid: String) {
        const url = `${this.createRoomBaseUrl}did=${deviceid}&bez=${roomData.Bez}&nr=${roomData.Rnr}`;
        
        return this.http.get<Room>(url);
    }
}
