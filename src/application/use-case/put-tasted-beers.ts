import { TastedBeerRepository } from "../../domain/repository/tasted-beer-repository";

export type PutTastedBeerDependancies = {
  tastedBeerRepository : TastedBeerRepository;
};

export async function setBeerLikedOpinionOnTastedBeer(id: number, hasLiked: boolean, depsTastedBeerLiked : PutTastedBeerDependancies): Promise<void>{
  return await depsTastedBeerLiked.tastedBeerRepository.setBeerLikedOpinionOnTastedBeer(id, hasLiked);
}