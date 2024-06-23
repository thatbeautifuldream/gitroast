import { db } from "~/server/db";
import type { Prisma } from "@prisma/client";

export type Roast = {
  id?: number;
  username: string;
  message: string;
};

export const saveRoast = async (roast: Roast) => {
  const { id, username, message } = roast;
  const isRoasted = await db.roast.findUnique({
    where: { id },
  });

  if (!isRoasted) {
    await db.roast.create({
      data: { username, message },
    } as Prisma.RoastCreateArgs);
  }
  await db.roast.update({
    where: { id: id },
    data: { username, message },
  } as Prisma.RoastUpdateArgs);
};

// get roast by username

export const getRoast = async ({ username }: { username: string }) => {
  return await db.roast.findUnique({
    where: { username: username },
  });
};
