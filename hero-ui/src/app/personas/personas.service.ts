import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map}  from 'rxjs/operators';
import {environment} from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class PersonasService {
  personsChanged = new Subject<string[]>();
  public personas: string[] =[ ];

  constructor(private http:HttpClient){}

    fetchPersons(){
      this.http.get<any>(environment.backend_api+"/heroes")
      .pipe(map(resData => {
        return resData.map(character =>character.name)
      }))
      .subscribe(transformData =>{
        this.personsChanged.next(transformData);
      });
    }


}
