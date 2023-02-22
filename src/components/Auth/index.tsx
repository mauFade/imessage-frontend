import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({ reloadSession, session }) => {
  return (
    <Center height="100vh">
      <Stack>
        {session ? (
          <Text>Crie um usuário</Text>
        ) : (
          <>
            <Text fontSize="3xl">Messenger</Text>
            <Button onClick={() => signIn("google")}>
              Continue com Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
