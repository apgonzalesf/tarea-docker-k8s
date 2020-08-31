import { Component ,  OnInit, OnDestroy} from '@angular/core'

import {PersonasService} from './personas.service'
import { Subscription } from 'rxjs';

//decorador componente  -<los decoradores le dan metadata a nuestra aplicacion
@Component({
  selector: 'app-personas',  //selector que usaremos en html
  templateUrl: './personas.component.html', // codigo html
  styleUrls: ['./personas.component.css']  // hoja de estilo
})
export class PersonasComponent implements OnInit,OnDestroy {
   personasLista : string[] ;
   private personService:PersonasService;
   private personListSubs: Subscription;
   constructor(prsService:PersonasService){
      this.personService = prsService
   }

   ngOnInit(){

    this.personService.fetchPersons();
    this.personListSubs = this.personService.personsChanged.subscribe(personas =>{
      this.personasLista =personas;
    })
   }

   ngOnDestroy(){

   }

 }
