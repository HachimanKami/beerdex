import { Beer } from "../../domain/entity/beer";
import { BeerRepository } from "../../domain/repository/beer-repository";

export type GetBeersDependancies = {
  beerRepository : BeerRepository;
};

export async function getBeer(id: Number ,desp: GetBeersDependancies): Promise<Beer|undefined> {
  return await desp.beerRepository.getBeer(id);
}