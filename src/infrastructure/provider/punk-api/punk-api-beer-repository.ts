import axios, { AxiosInstance } from "axios";
import { Beer } from "../../../domain/entity/beer";
import { BeerRepository } from "../../../domain/repository/beer-repository";
import { PunkAPIBeerDeserializer } from "./punk-api-beer-deserializer";

export class PunkAPIBeerRepository implements BeerRepository {
    private http: AxiosInstance;

    constructor() {
        this.http = axios.create({
            baseURL: "https://api.punkapi.com/v2/",
        });
    }

    async getAllBeers(): Promise<Beer[]> {                  // On promet de retourner un tableau askip :)
        try{
            const { data } = await this.http.get("/beers");

            if(!data?.length){
                return[];
            }
            return data.map((punkAPIBeer: any) => PunkAPIBeerDeserializer.deserializer(punkAPIBeer)
            );
        } catch (err) {
            return[];
        }
    }
}