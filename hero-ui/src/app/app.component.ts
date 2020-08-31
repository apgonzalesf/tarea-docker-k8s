import { Component } from '@angular/core';

//decorador componente  -<los decoradores le dan metadata a nuestra aplicacion
@Component({
  selector: 'app-root',  //selector que usaremos en html
  templateUrl: './app.component.html', // codigo html
  styleUrls: ['./app.component.css']  // hoja de estilo
})
export class AppComponent {


  // onCrearPersona(nombre:string){
  //   this.personas.push(nombre)

  // }

}
