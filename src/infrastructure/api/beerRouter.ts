import { Router } from "express";
import { getAllBeers } from "../../application/use-case/get-all-beers";
import { makeBeerRepository } from "../provider/beer-repository-factory";

export function createBeerRouter() {
  const router = Router();

  const beerRepository = makeBeerRepository();

  router.get("/", async (_, res) =>
    res.json({
      beers: await getAllBeers({ beerRepository }),
    }),
  );

  /*
  router.get("/me", async (_, res) => {
    res.json({
      tastedBeer: getAllTastedBeers({tastedBeerRepository}),
    });
  });

  router.post("/me", async (req, res)=> {
     const { id } = req.body;

    });*/
  
  return router;
}
