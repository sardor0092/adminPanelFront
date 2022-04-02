import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';
import { DeleredialogComponentComponent } from '../../../deleredialog-component/deleredialog-component.component';

@Injectable({
  providedIn: 'root'
})
export class userService {
  api = environment.baseUrl + '/api/user';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  openConfirmDialog(msg: any) {
    return this.dialog.open(
      DeleredialogComponentComponent, {
      width: "350px",
      height: "200px",
      data: {
        massage: msg
      }
    });
  }

  public getAll(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  public create(userlar: User): Observable<User> {
    return this.http.post<User>(this.api, userlar);
  }
  public update(userlar: User): Observable<User> {
    return this.http.put<User>(this.api, userlar);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id);
  }


}
