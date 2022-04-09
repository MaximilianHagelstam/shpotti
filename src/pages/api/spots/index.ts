import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/spot
const get = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res
      .status(400)
      .send({ message: `Wrong request method ${req.method}` });
  }

  const spots = await prisma.spot.findMany({});
  return res.json(spots);
};

export default get;
