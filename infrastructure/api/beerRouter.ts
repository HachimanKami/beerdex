import { Router } from "express";

export function createBeerRouter() {
  const router = Router();

  router.get("/", (_, res) =>
    res.json({
      beers: [],
    }),
  );

  return router;
}