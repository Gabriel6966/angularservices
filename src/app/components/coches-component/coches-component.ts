import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../service/service.coches';

@Component({
  selector: 'app-coches-component',
  standalone: false,
  styleUrl: './coches-component.css',
  templateUrl: './coches-component.html',
})
export class CochesComponent implements OnInit {
  public arrayCoches!: Array<any>;
  
  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceCoches){

  }

  ngOnInit(): void {
    this._service.getCoches().subscribe({
      next: (response) => {
        console.log("leyendo coches", response);
        this.arrayCoches = response;
        this._cdr.detectChanges();
      }, error: (error) => {
        console.log("Error al leer coches", error);
      }
    })

    //this._service.getCochesPromesa().then((response)=>{
    //  console.log("leyendo coches", response);
    //  this.arrayCoches = response;
    //  this._cdr.detectChanges();
    //}).catch((error: any)=>{
    //  console.log("Error al leer coches", error);
    //})



  }


}
