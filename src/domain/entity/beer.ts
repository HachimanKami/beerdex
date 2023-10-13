import { BeerColor } from "../enums/beer-color";

export type BeerDependencies = {
    id: number;
    name: string;  
  };
   
export class Beer {
  public id: number;
  public name: string;
  public description?: string; // string ou undefined
  public degreeAlcool = 0;
  public levelBitterness = 0;
  public color = BeerColor.UNKNOWN; 
  public imageURL?: string;

  constructor({ id, name }: BeerDependencies) {
    // ce que l'on met dans le constructeur est essentiel dans la création de ma nouvelle bière
    this.id = id;
    this.name = name;
  }
}