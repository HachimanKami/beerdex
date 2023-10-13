import { describe } from "node:test";
import { Beer } from "../../../domain/entity/beer";

export class PunkAPIBeerDeserializer {
    public static deserializer(source: any): Beer {
        
        const { id, name, description } = source;
        const beer = new Beer({ id, name });

        beer.description = description;

        return beer;
    }
}