import { Beer} from "../../../domain/entity/beer";
import { defineBeerColor } from "./define-beer-color";

export class PunkAPIBeerDeserializer {
    public static deserializer(source: any): Beer {
        
        const { id, name, description, image_url, abv, ibu, ebc } = source;
        const beer = new Beer({id, name });

        beer.description = description;
        beer.imageURL = image_url;
        beer.degreeAlcool = abv;
        beer.levelBitterness = ibu;
        beer.color = defineBeerColor(ebc)

        return beer;
    }
    
}