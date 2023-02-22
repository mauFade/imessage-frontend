import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return (
    <h1>
      <button onClick={() => signIn("google")}>Sign in</button>
    </h1>
  );
}
