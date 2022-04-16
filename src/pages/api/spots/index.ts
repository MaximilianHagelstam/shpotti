import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/spot?page=1?limit=5
const get = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res
      .status(400)
      .send({ message: `Wrong request method ${req.method}` });
  }

  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  if (!page || !limit) {
    return res
      .status(400)
      .send({ message: "page and limit are required query parameters" });
  }

  const spots = await prisma.spot.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    skip: limit * (page - 1),
  });

  return res.json(spots);
};

export default get;
