import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DetalhesService } from '../service/detalhes.service';
import { RequestService } from '../service/request.service';
import { color } from '../variables/variables';

@Component({
  selector: 'app-tazo',
  templateUrl: './tazo.component.html',
  styleUrls: ['./tazo.component.css']
})
export class TazoComponent implements OnInit {
  @Input() code: number = 0;

  currentColor: string = '';
  name: string = '';
  types: string[] = [];
  height:number = 0;
  weight:number = 0;

  constructor(private apollo: Apollo, private info: DetalhesService, private request: RequestService) { }

  get background(): string{
    return `background-color: ${this.currentColor}`;
  }

  onclick(): void{
    if(this.name.length > 0)
      this.info.setPokemon(this.code,this.name,this.types, this.height, this.weight);
  }

  ngOnInit(): void {
    this.request.requestGraphQL(this.code).subscribe(
      (r: any) => {
      this.name = r.data.pokemon_v2_pokemonspecies[0].pokemon.nodes[0].name;
      this.height = r.data.pokemon_v2_pokemonspecies[0].pokemon.nodes[0].height;
      this.weight = r.data.pokemon_v2_pokemonspecies[0].pokemon.nodes[0].weight;
      this.types = r.data.pokemon_v2_pokemonspecies[0].pokemon.nodes[0].types;
      this.currentColor = color[r.data.pokemon_v2_pokemonspecies[0].pokemon.nodes[0].types[0].type.name];
    })
  }
}
