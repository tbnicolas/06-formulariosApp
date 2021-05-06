import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto:'Carro',
    precio: 10,
    existencias: 100
  }

  constructor() { }

  ngOnInit(): void {
  }

  /* guardar( miFormulario: NgForm ) {
    console.log('submit hecho',miFormulario.value);
  } */
  guardar( ) {
    //console.log(this.miFormulario);
    this.miFormulario.resetForm({
      producto:'algo',
      precio:0,
      existencias:0
    });
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid &&
    this.miFormulario?.controls.producto?.touched;

  }

  precioValido(): boolean {


    if(
      this.miFormulario?.controls.precio?.value < 0
      &&
      this.miFormulario?.controls.precio?.touched ) {
        //console.log('if',this.miFormulario?.controls.precio?.value);

        //this.miFormulario?.controls.precio?.setErrors({'precio':true});

        return true;
    } else {


      //console.log('else',this.miFormulario?.controls.precio?.value);
      return false;
    }
  }


}
