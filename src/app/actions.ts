'use server';

import { onSuccess } from '@orpc/client';
import { createFormAction } from '@orpc/react';
import { redirect } from 'next/navigation';
import * as z from 'zod';
import { pub } from '@/orpc';

export const getting = pub
  .input(
    z.object({
      name: z.string().min(6),
    })
  )
  .output(z.string())
  .handler(async ({ input }) => {
    return `Hello ${input.name}!`;
  })
  .actionable();

const dosomething = pub
  .input(
    z.object({
      user: z.object({
        name: z.string(),
        age: z.coerce.number(),
      }),
    })
  )
  .handler(({ input }) => {
    console.log('An form action was called!');
    console.log(input);
  });

export const redirectToScalarForm = createFormAction(dosomething, {
  interceptors: [
    onSuccess(async () => {
      redirect('/api');
    }),
  ],
});
