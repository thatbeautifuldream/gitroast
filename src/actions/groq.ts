"use server";

import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import type { Profile } from "~/actions/github";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const streamTextAction = async ({
  profile,
}: {
  profile: Profile | null;
}) => {
  const result = await streamText({
    model: groq("llama3-8b-8192"),
    temperature: 0.5,
    prompt: `You are a witty assistant asked to create a profile roast for a GitHub user named ${profile?.login} who has ${profile?.public_repos} repositories and ${profile?.followers} followers.`,
  });
  return createStreamableValue(result.textStream).value;
};
