import { BeerColor } from "../../../domain/enums/beer-color";

export function defineBeerColor(ebc : number) : BeerColor{    // on précise ce que l'on veut retourner, ici, BeerColor
let tab: Array<[number, BeerColor]> = [
  [138,BeerColor.IMPERIAL_STOUT],
  [79,BeerColor.EXPORT_STOUT],
  [69, BeerColor.BALTIC_PORTER],
  [57,BeerColor.STOUT],
  [47,BeerColor.PORTER],
  [39, BeerColor.DUNKEL],
  [33, BeerColor.AMBER],
  [26, BeerColor.GARDE],
  [20, BeerColor.EXTRA_SPECIAL_BITTER],
  [16, BeerColor.SAISON],
  [12, BeerColor.IPA],
  [8, BeerColor.WEISS],
  [6, BeerColor.GOLDEN],
  [4,BeerColor.PALE]];

for (var [range,intensity] of tab) {
  if (ebc>=range){
    return intensity;
  }
}

return BeerColor.UNKNOWN;
}
