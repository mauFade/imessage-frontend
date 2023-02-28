import { userOperations } from "@/graphql/operations/user";
import { CreateUsernameData, CreateUsernameVariables } from "@/util/types";
import { useMutation } from "@apollo/client";
import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({ reloadSession, session }) => {
  console.log(session);

  const [username, setUsername] = useState<string>("");

  const [createUsername, { data, loading, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(userOperations.Mutations.createUsername);

  const onSubmit = async () => {
    if (!username) return;

    try {
      await createUsername({ variables: { username } });
    } catch (error) {
      console.log("onSubmit error", error);
    }
  };

  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize="3xl">Crie um usuário</Text>
            <Input
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event?.target.value)}
            />
            <Button width="100%" onClick={onSubmit}>
              Salvar
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">Messenger</Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={
                <Image src="/images/googlelogo.png" height="20px" alt="logo" />
              }
            >
              Continue com Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
