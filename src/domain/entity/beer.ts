type BeerDependencies = {
    id: number;
    name: string;
    description: string;
    degreeAlcool: number;
    levelBitterness: string;
    color: string; // modifier le titre ultérieurement
  };
  
  export class Beer {
    public id: number;
    public name: string;
    public description?: string; // string ou undefined
    public degreeAlcool?: number;
    public levelBitterness?: string;
    public color?: string;
  
    constructor({ id, name }: BeerDependencies) {
      // ce que l'on met dans le constructeur est essentiel dans la création de ma nouvelle bière
      this.id = id;
      this.name = name;
    }
  }