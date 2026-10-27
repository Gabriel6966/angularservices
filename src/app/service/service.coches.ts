import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

let urlApi = environment.urlApiCoches;

@Injectable()
export class ServiceCoches{

    constructor(private _http:HttpClient){
    }

    getCoches(): Observable<any>{
        return this._http.get(urlApi + "/webresources/coches");
    }

    //getCochesPromesa(): Promise<any>{
    //    let promise = new Promise((resolve)=>{
    //        this._http.get(urlApi).subscribe((response)=>{
    //            resolve(response);
    //        });
    //    });
    //    return promise;
    //}
}