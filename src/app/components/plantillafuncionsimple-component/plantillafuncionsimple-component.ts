import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicePlantillas } from '../../service/service.plantillas';

@Component({
  selector: 'app-plantillafuncionsimple-component',
  standalone: false,
  styleUrl: './plantillafuncionsimple-component.css',
  templateUrl: './plantillafuncionsimple-component.html',
})
export class PlantillafuncionsimpleComponent implements OnInit {
  public selectedFuncion: string = '';
  public arrayPlantilla!: Array<any>;
  public arrayFunciones!: Array<any>;


  constructor(private _cdr: ChangeDetectorRef, private _service: ServicePlantillas) {
  }

  ngOnInit(): void {
    this._service.getPlantilla().subscribe({
      next: (data) => {
        this.arrayPlantilla = data;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.log("Error al leer plantilla", error);
      }
    });
  }

  getFunciones(): void {
    if (!this.selectedFuncion) {
      this.arrayFunciones = [];
      return;
    }

    this._service.getFunciones(this.selectedFuncion).subscribe({
    next: (data) =>{
      this.arrayFunciones = data;
      this._cdr.detectChanges();
    }, error: (error)=>{
      console.log("Error al leer funciones", error);
      this.arrayFunciones = [];
    }
    });
  }
}
