import Login from "@/components/login/Login";
import { getUsers } from "@/shared/services/user_service/user_service";

const Auth = async () => {
  const list = await getUsers("/users")

  return <Login users={list} />;
};

export default Auth;
