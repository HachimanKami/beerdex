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

    async getAllBeers(): Promise<Beer[]> {                  
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

    async getBeer(id:Number): Promise<Beer|undefined> {                  
        try{
            console.log(id);
            const { data } = await this.http.get("/beers/"+id);
            console.log(data);
            if(!data){
                return undefined;
            }

            return PunkAPIBeerDeserializer.deserializer(data);

        } catch (err) {
                console.log(err);
                return undefined;
        }
    }
}