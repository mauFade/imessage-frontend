import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <h1>
      {data?.user ? (
        <button onClick={() => signOut()}>Log out</button>
      ) : (
        <button onClick={() => signIn("google")}>Sign in</button>
      )}
    </h1>
  );
}
