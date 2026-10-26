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



  constructor(private _cdr:ChangeDetectorRef, private _service: ServicePersonas) { 

  }

  ngOnInit(): void {
    this._service.getPersonas().subscribe((response) =>{
      console.log("leyendo personas");
      console.log(response);
      this.arrayPersonas = response;
      this._cdr.detectChanges();
    })
  }
}
