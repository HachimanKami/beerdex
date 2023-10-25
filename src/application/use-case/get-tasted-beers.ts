import { TastedBeer } from "../../domain/entity/tastedBeer";
import { TastedBeerRepository } from "../../domain/repository/tasted-beer-repository";

export type GetTastedBeersDependancies = {
  tastedBeerRepository : TastedBeerRepository;
};

export async function getTastedBeer(id: number, deps: GetTastedBeersDependancies): Promise<void>{
  return await deps.tastedBeerRepository.getTastedBeer(id);
}
