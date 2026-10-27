import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../service/service.personas';

@Component({
  selector: 'app-persona-component',
  standalone: false,
  styleUrl: './persona-component.css',
  templateUrl: './persona-component.html',
})
export class PersonaComponent implements OnInit {

  public arrayPersonas!: Array<any>



  constructor(private _cdr: ChangeDetectorRef, private _service: ServicePersonas) {

  }

  async ngOnInit(): Promise<void> {
    try {
      this.arrayPersonas = await this._service.getPersonasAsync();
      this._cdr.detectChanges();
    } catch (error) {
      console.log("Error al leer personas");
      console.error(error);
    }



    //Metodo con promesa
    //this._service.getPersonasPromesa().then((response)=>{
    //  console.log("leyendo personas");
    //  console.log(response);
    //  this.arrayPersonas = response;
    //  this._cdr.detectChanges();
    //}).catch((error: any)=>{
    //  console.log("Error al leer personas");
    //  console.error(error);
    //})

    //Metodo con susbcribe
    //this._service.getPersonas().subscribe({
    //next: (response) => {
    //  console.log("leyendo personas", response);
    //  this.arrayPersonas = response;
    //  this._cdr.detectChanges();
    //}, error: (error) => {
    //  console.log("Error al leer personas", error);
    //})
  }
}
