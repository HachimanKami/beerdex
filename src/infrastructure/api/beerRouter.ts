import { Router } from "express";
import { getAllBeers } from "../../application/use-case/get-all-beers";
import { makeBeerRepository } from "../provider/beer-repository-factory";
import { getAllTastedBeers } from "../../application/use-case/get-all-tasted-beers";
import { getStatsBeersTasted } from "../../application/use-case/get-stats-tasted-beers";
import { makeTastedBeerRepository} from "../provider/tasted-beer-repository-factory";
import { setBeerLikedOpinionOnTastedBeer } from "../../application/use-case/put-tasted-beers";
import { addTastedBeer } from "../../application/use-case/post-tasted-beers";


export function createBeerRouter() {
  const router = Router();

  const beerRepository = makeBeerRepository();
  const tastedBeerRepository = makeTastedBeerRepository();

  router.get("/", async (_, res) =>
    res.json({
      beers: await getAllBeers({ beerRepository }),
    }),
  );

  router.get("/me", async (_, res) =>
    res.json({
      beers: await getAllTastedBeers({ tastedBeerRepository }),
    }),
  );


  router.get("/me/stats", async (_, res) =>
    res.json({
      statsBeers: await getStatsBeersTasted({tastedBeerRepository})
    }));


  router.post("/me", async (req, res)=> {
    const { id } = req.body;
     
    await addTastedBeer(id,{tastedBeerRepository},{beerRepository});

    res.sendStatus(204);
    
    });

    
  router.put("/me", async(req, res)=> {
    const {id, hasLiked} = req.body; 

    res.json({
      tastedBeer: await setBeerLikedOpinionOnTastedBeer(id, hasLiked, {tastedBeerRepository}),
    })
  });
  
  return router;
}
