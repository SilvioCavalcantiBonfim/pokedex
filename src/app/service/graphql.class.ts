import { Apollo, gql } from "apollo-angular";

export class graphql{
    private query = (code: number) => gql`query pokemon_pokemonspecies{
        pokemon_v2_pokemonspecies(where: {id: {_eq: ${code}}}){
          pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
            nodes {
              name
              height
              weight
              types: pokemon_v2_pokemontypes {
                slot
                type: pokemon_v2_type {
                  name
                }
              }
            }
          }
        }}`;
    
    constructor(public apollo: Apollo){}
   
    public requestGraphQL(code: number) : any {
        return this.apollo.watchQuery({
            query: this.query(code)
          }).valueChanges;
    }
    
}