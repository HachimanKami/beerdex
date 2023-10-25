import { TastedBeer } from "../../domain/entity/tastedBeer";
import { TastedBeerRepository } from "../../domain/repository/tasted-beer-repository";

export type GetAllTastedBeersDependancies = {
    tastedBeerRepository : TastedBeerRepository;
};

export async function getAllTastedBeers(desp: GetAllTastedBeersDependancies): Promise<TastedBeer[]> {
  return await desp.tastedBeerRepository.getAllTastedBeers();
}