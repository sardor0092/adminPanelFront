import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crud } from './crud';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  api   = environment.baseUrl + "/api/users";

  constructor(private http:HttpClient) { }
 
   public getAll(page:any): Observable<any>{
     return this.http.get<any> (this.api ,{params:page});
   }
   public create(crud: Crud): Observable<Crud> {
    return this.http.post<Crud>(this.api, crud);
  }
  public update(crud: Crud): Observable<Crud> {
    return this.http.put<Crud>(this.api, crud);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete(this.api + "/" + id);
  }
}
