import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { IUserDetail } from '../model/IUserDetail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient: HttpClient) {

  }

  getDetailUser(login: string | null) {

    console.log('login DetailService ' + login);

    return this.httpClient.get<IUserDetail>(`${API_PATH}users/` + login  )

  }


}
