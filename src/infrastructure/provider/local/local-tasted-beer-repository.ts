import { TastedBeerRepository } from "../../../domain/repository/tasted-beer-repository";
import { TastedBeer } from "../../../domain/entity/tastedBeer";
import { PunkAPITastedBeerDeserializer } from "./local-tasted-beer-deserialiser"; 
import { promises } from "fs";
import { join } from "path";
 
// utiliser la librairie file systeme

export class PunkAPITastedBeerRepository implements TastedBeerRepository {

    private filePath :string;
    
    constructor(){
      this.filePath = join(__dirname, "../../../data/prefered-beer.json")
    }

    async getAllTastedBeers(): Promise<TastedBeer[]> {                  // On promet de retourner un tableau askip :)
        try{
          const data = await promises.readFile(this.filePath)
            return JSON.parse(data.toJSON.toString()) // non completé 
        } catch (err) {
            return[];
        }
    }

    async addTastedBeer(tastedBeer: TastedBeer): Promise<void> {
      const tastedBeer = await this.getAllTastedBeers();
      
      const hasAlreadyTasted = 
      
      try{
            const { data } = await this.get("/beers");

            if(!data?.length){
                return[];
            }
            return data.map((punkAPIBeer: any) => 
            );
        } catch (err) {
            return[];
        }
    }

    async hasLikedBeer(id: number, like: boolean): Promise<void> {
      const tastedBeers = await this.getAllTastedBeers();
      const tastedBeer = tastedBeers.find((tastedBeer) => tastedBeer.id == id);

      if (!tastedBeer) {
        throw new Error("Not found");
      }
      
      const indexOfTastedBeer = tastedBeers.map(({id}) => id).indexOf(id);

      tastedBeers.hasLiked = hasLiked;
      
      tastedBeers[indexOfTastedBeer] = tastedBeer;

      await promises.writeFile(
        this.filePath,
        JSON.stringify({
          tastedBeers,
        }),
      );
    }
}