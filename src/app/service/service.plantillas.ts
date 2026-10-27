import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

let urlApi = environment.urlApiPlantilla;

@Injectable()
export class ServicePlantillas {

    constructor(private _http:HttpClient){

    }

    getPlantilla(): Observable<any>{
        return this._http.get(urlApi + "/api/Plantilla/funciones")
    }
    
    getFunciones(funcion: string): Observable<any>{
        return this._http.get(urlApi + "api/Plantilla/PlantillaFuncion/" + funcion)
    }

}