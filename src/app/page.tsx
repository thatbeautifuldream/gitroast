import { redirectToScalarForm } from './actions';
import { CreatePlanetMutationForm } from './orpc-mutation';
import { ListPlanetsQuery } from './orpc-query';
import { OrpcServerAction } from './orpc-server-action';

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-3xl underline">ORPC Playground</h1>
      You can visit the{' '}
      <form action={redirectToScalarForm}>
        <input defaultValue="unnoq" hidden name="user[name]" type="text" />
        <input defaultValue="18" hidden name="user[age]" type="text" />
        <button type="submit">Redirect to Scalar API Reference</button>
      </form>{' '}
      page.
      <hr />
      <OrpcServerAction />
      <hr />
      <CreatePlanetMutationForm />
      <hr />
      <ListPlanetsQuery />
    </div>
  );
}
