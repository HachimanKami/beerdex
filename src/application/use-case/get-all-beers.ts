import { Beer } from "../../domain/entity/beer";
import { BeerRepository } from "../../domain/repository/beer-repository";

export type GetAllBeersDependancies = {
  beerRepository : BeerRepository;
};

export async function getAllBeers(desp: GetAllBeersDependancies): Promise<Beer[]> {
  return await desp.beerRepository.getAllBeers();
}