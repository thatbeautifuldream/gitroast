"use server";

import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import type { Profile } from "~/actions/github";
import { db } from "~/server/db";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const findOrGenerateTextAction = async ({
  profile,
}: {
  profile: Profile | null;
}) => {
  const roast = await db.roast.findUnique({
    where: {
      username: profile?.login,
    },
  });

  if (roast?.message) {
    return roast?.message;
  }

  const result = await generateText({
    model: groq("llama3-8b-8192"),
    temperature: 1,
    prompt: `You are a witty assistant asked to create a profile roast for a GitHub user named ${profile?.login} who has ${profile?.public_repos} repositories and ${profile?.followers} followers.
    Render the roast in plain text format not markdown or any other format.
    `,
  });
  console.log(result.text);
  return result.text;
};
