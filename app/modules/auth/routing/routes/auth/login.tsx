import { useLoaderData } from "@remix-run/react";

export default function AuthIndex() {
  const loaderData = useLoaderData();

  return (
    <div>
      <p>I'm the child</p>
    </div>
  );
}
