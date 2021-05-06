import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Nicolas',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'Mario Bros'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('Formulario Posteado');
  }

  nombreValido(): boolean {
    if ( this.miFormulario?.controls.nombre?.errors && this.miFormulario?.controls.nombre.touched) {
      return true
    } else {
      return false
    }
  }

  eliminar( index: number ) {

    this.persona.favoritos.splice(index,1);

  }

  agregarJuego() {

    const last = this.persona.favoritos.length - 1;
    //debugger;
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos[last].id +1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

}
