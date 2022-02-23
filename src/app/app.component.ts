import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';

  mensaje="";

  registrado=false;

  nombre:string="";

  apellido:string="";

  cargo:string="";

  entradas:any;


  constructor(){

      this.entradas=[
        {titulos:"Python cada día más presente"},
        {titulos:"Java presente desde hace más de 20 años"},
        {titulos:"Kotlin potencia para tus apps"},

      ]

  }


  registrarUser(){

    this.registrado=true;

    this.mensaje="usuario registrado con éxito";

  }
}
