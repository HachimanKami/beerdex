import { Beer } from "../entity/beer";

export interface BeerRepository {
    getAllBeers(): Promise<Beer[]>;
    getBeer(id:Number): Promise<Beer|undefined>;
}