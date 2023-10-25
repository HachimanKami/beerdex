import { TastedBeer } from "../../domain/entity/tastedBeer";
import { StatsBeers } from "../../domain/entity/statsBeers";
import { TastedBeerRepository } from "../../domain/repository/tasted-beer-repository";
import { BeerColor } from "../../domain/enums/beer-color";

export type GetAllTastedBeersDependancies = {
  tastedBeerRepository : TastedBeerRepository;
};

export async function getStatsBeersTasted(desp: GetAllTastedBeersDependancies): Promise<StatsBeers> {
  const tastedBeers = await desp.tastedBeerRepository.getAllTastedBeers();
  const percentage = getPercentageBeersLiked(tastedBeers);
  const degreeAverage = getDegreeAverageBeersTasted(tastedBeers);
  const bitterBeers = getBitterBeersTasted(tastedBeers);
  const favoriteColor = getFavoriteColorBeers(tastedBeers);

  return new StatsBeers({percentage,degreeAverage,bitterBeers,favoriteColor})
}

function getPercentageBeersLiked(tastedBeers: TastedBeer[]) : number {
  var nbBeerLiked = 0;
  var nbBeerTasted = 0;

  for(var tastedBeer of tastedBeers){
    nbBeerTasted++;
    if(tastedBeer.hasLiked==true){
      nbBeerLiked++;
    }
  }

  return (nbBeerLiked/nbBeerTasted)*100;
}

function getDegreeAverageBeersTasted(tastedBeers: TastedBeer[]) : number {
  var nbBeerTasted = 0;
  var degree = 0;

  tastedBeers.forEach(beer => {
    nbBeerTasted++;
    degree += beer.degreeAlcool;
  });

  return degree/nbBeerTasted;
}

function getBitterBeersTasted(tastedBeers: TastedBeer[]) : TastedBeer[]{
  if(tastedBeers.length<=3){
    return tastedBeers;
  } else { 
    tastedBeers.sort((beer1,beer2)=>beer2.degreeAlcool - beer1.degreeAlcool);
    return tastedBeers.slice(0,3);
  }
}

function getFavoriteColorBeers(tastedBeers: TastedBeer[]) {
  var colors = [
    { color: BeerColor.PALE,value: 0 },
    { color: BeerColor.GOLDEN,value: 0 },
    { color: BeerColor.IPA,value: 0 },
    { color: BeerColor.SAISON,value: 0 },
    { color: BeerColor.EXTRA_SPECIAL_BITTER,value: 0 },
    { color: BeerColor.GARDE,value: 0 },
    { color: BeerColor.AMBER,value: 0 },
    { color: BeerColor.DUNKEL,value: 0 },
    { color: BeerColor.PORTER,value: 0 },
    { color: BeerColor.STOUT,value: 0 },
    { color: BeerColor.BALTIC_PORTER,value: 0 },
    { color: BeerColor.EXPORT_STOUT,value: 0 },
    { color: BeerColor.IMPERIAL_STOUT,value: 0 },
    { color: BeerColor.WEISS,value: 0 },
    { color: BeerColor.UNKNOWN,value: 0}
  ]

  tastedBeers.forEach((beer, index) => {
    if(colors[index].color==beer.color){
      colors[index].value += 1;
    }
  });

  return colors.sort((color1,color2)=>color2.value - color1.value)[0].color;
}