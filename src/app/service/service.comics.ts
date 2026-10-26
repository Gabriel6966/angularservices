import { Comic } from "../models/comics";
import { Injectable } from "@angular/core";


@Injectable()
export class ServiceComics {

    getComics(): Promise<Comic[]> {
        let path = "./assets/comics.json";

        return fetch(path).then((response) => response.json()).then((data: any[]) => {
            let arrayComics = [];
            for (let elem of data) {

                let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
                arrayComics.push(comic);
            }
            return arrayComics;
        })
    }

}