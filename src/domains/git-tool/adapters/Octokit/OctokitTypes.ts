import { Validator } from "../Validator";
import { z } from "zod";
import * as dotenv from "dotenv";
dotenv.config();

export type ockokitConfigType = { token?: string };

export const getOctokitConfig = (config: ockokitConfigType) => {
  return Validator.run(z.object({ token: z.string() }), {
    token: config.token,
  });
};

export const ocktokitToken = getOctokitConfig({ token: process.env.TOKEN });
