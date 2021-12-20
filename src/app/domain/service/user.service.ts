import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'src/environments/environment';
import { IUser } from '../model/IUser';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsers() {

    return this.httpClient.get<IUser[]>(`${API_PATH}users`)
    .pipe(      
      tap(console.warn),
      delay(2000) /* just for show the progress spinner */
    )

  }

}
