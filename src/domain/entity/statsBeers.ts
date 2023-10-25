import { BeerColor } from "../enums/beer-color";
import { TastedBeer } from "./tastedBeer";

export type InformationsStatsTasterBeers = {
  percentage : number;
  degreeAverage : number;
  bitterBeers : TastedBeer[];
  favoriteColor : BeerColor;  
};

export class StatsBeers {
  public percentage : number;
  public degreeAverage : number;
  public bitterBeers : TastedBeer[];
  public favoriteColor : BeerColor;

  constructor({percentage, degreeAverage, bitterBeers, favoriteColor}:InformationsStatsTasterBeers){
    this.percentage = percentage;
    this.degreeAverage = degreeAverage;
    this.bitterBeers = bitterBeers;
    this.favoriteColor = favoriteColor
  }
}