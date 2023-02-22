import Auth from "@/components/Auth";
import Chat from "@/components/Chat";
import { Box } from "@chakra-ui/react";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return <Box>{data?.user?.username ? <Chat /> : <Auth />}</Box>;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
