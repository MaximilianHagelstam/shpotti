import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// POST /api/spot/add
const add = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(400)
      .send({ message: `Wrong request method ${req.method}` });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .send({ message: "Title or description missing from request body" });
  }

  const createdSpot = await prisma.spot.create({
    data: {
      title,
      description,
      userId: session.user.id,
    },
  });

  return res.status(201).json(createdSpot);
};

export default add;
