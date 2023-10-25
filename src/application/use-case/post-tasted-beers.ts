import { BeerRepository } from "../../domain/repository/beer-repository";
import { TastedBeerRepository } from "../../domain/repository/tasted-beer-repository";
import { TastedBeer } from "../../domain/entity/tastedBeer";
export type PostTastedBeersDependancies = {
    tastedBeerRepository : TastedBeerRepository;
};
export type PostBeersDependancies = {
    beerRepository : BeerRepository;
  };

export async function addTastedBeer( id: number, despTastedBeer: PostTastedBeersDependancies, despBeer: PostBeersDependancies): Promise<void> {
  
 const  beer = await despBeer.beerRepository.getBeer(id);
 
 if(!beer){throw new Error("not found");}

 const tastedbeer= new TastedBeer({id : beer.id,name : beer.name});
 tastedbeer.color=beer.color;
 tastedbeer.degreeAlcool=beer.degreeAlcool;
 tastedbeer.description=beer.description;
 tastedbeer.imageURL=beer.imageURL;
 tastedbeer.levelBitterness=beer.levelBitterness;

 await despTastedBeer.tastedBeerRepository.addTastedBeer(tastedbeer);
  
}