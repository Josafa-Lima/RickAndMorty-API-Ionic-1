import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }
 getByName(name:string) {
  return this.http.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`)
 }
 getByStatus(status:string) {
  return this.http.get(`https://rickandmortyapi.com/api/character/?status=${status}`)
 }
 getBySpecies(species:string) {
  return this.http.get(`https://rickandmortyapi.com/api/character/?species=${species}`)
 }
    
}


