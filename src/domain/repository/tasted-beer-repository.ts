import { TastedBeer } from "../entity/tastedBeer";

export interface TastedBeerRepository {
  getAllTastedBeers(): Promise<TastedBeer[]>;

  addTastedBeer(tastedBeer : TastedBeer): Promise<void>;

  hasLikedBeer(id:number, like : boolean): Promise<void>;

}