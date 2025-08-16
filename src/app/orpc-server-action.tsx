'use client';

import { onSuccess } from '@orpc/client';
import { getIssueMessage, parseFormData } from '@orpc/react';
import { useServerAction } from '@orpc/react/hooks';
import { getting } from './actions';

export function OrpcServerAction() {
  const state = useServerAction(getting, {
    interceptors: [
      onSuccess((message) => {
        alert(message);
      }),
    ],
  });

  return (
    <form
      action={(form) => {
        state.execute(parseFormData(form));
      }}
    >
      <input defaultValue="unnoq" name="name" required type="text" />
      <p style={{ color: 'red' }}>{getIssueMessage(state.error, 'name')}</p>
      <button type="submit">Test server action</button>
    </form>
  );
}
