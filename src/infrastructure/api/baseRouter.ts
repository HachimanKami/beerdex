import { Router } from "express";

export function createBaseRouter() {
  const router = Router();

  router.get("/", (_, res) => {
    return res.json({ message: "I'm alive !" });
  });

  return router;
}

