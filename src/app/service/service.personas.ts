import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Persona } from "../models/persona";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

let urlApi = environment.urlApiPersonas;

@Injectable()
export class ServicePersonas {
    

    constructor(private _http: HttpClient) {

    }
    getPersonas(): Observable<any> {
        return this._http.get(urlApi);
    }

    getPersonasPromesa(): Promise<any>{
        let promise = new Promise((resolve)=>{
            this._http.get(urlApi).subscribe((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    //Metodo con async/await
    async getPersonasAsync(): Promise<Persona[]>{
        return firstValueFrom(this._http.get<Persona[]>(urlApi))
    }

}