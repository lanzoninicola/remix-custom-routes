import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderArgs) => {
  return json({ data: "Data come from the loader in a custom route" });
};

export default function AuthModuleIndex() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Auth Module Index</h1>
      <p>This is the component that contains the Outlet component</p>
      <Outlet />
    </div>
  );
}
