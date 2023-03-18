import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {

  code: number = 1;
  name: string = 'Bulbasaur';
  types: any[] = [{type: {name: 'grass'}},{type: {name: 'poison'}}];
  height: number = 7;
  weigth: number = 69;


  constructor() { }

  setPokemon(_code: number, _name: string, _type: string[], _height: number, _weigth: number){
    this.code = _code;
    this.name = _name;
    this.types = _type;
    this.height = _height;
    this.weigth = _weigth;
  }
}
