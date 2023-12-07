import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private myAppUrl = "https://localhost:7207/";
  private myApiUrl = "api/comentario/";
  
  constructor(private http: HttpClient) { }

  getListComentarios(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteComentario(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  getComentario(id: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }

  postComentario(comentario: Comentario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, comentario);
  }

  putComentario(id: number, comentario: Comentario): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, comentario);
  }
}
