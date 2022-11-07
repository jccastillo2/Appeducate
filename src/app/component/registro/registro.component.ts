import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from '../models/models';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  DatosU:Usuario={
    nombre:"" ,
    apellidos:"", 
    edad: null,
    correo: "",
    password:""
  }

  constructor() { }

  ngOnInit() {}

  registrar(){
    console.log(this.DatosU)
    this.ngOnInit
    //RouterLink="home"
  }

}
