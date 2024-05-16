"use client";
import { useAuthStore } from "@/shared/store/auth/auth";
import { Button, Checkbox, Form, Input, Layout } from "antd";
import {
  ChangeEvent,
  FocusEventHandler,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useSWR from "swr";
import { getUsers } from "@/shared/services/user_service/user_service";
import { IUser } from "@/shared/ui/interfaces";
import { useRouter } from "next/navigation";
import IsAuth from "@/shared/routes/guest/GuestRoutes";
import Link from "next/link";
import Title from "antd/es/typography/Title";
import { setFromStorage, validation } from "@/shared/utils/utils";

const Login: FunctionComponent = () => {
  const router = useRouter();
  const errorMessage = useAuthStore((state) => state.errorMessage);
  const setAuthUser = useAuthStore((state) => state.setAuthUser);
  const setIsLoading = useAuthStore((state) => state.setIsLoading);
  const setErrorMessage = useAuthStore((state) => state.setErrorMessage);

  const { data } = useSWR<IUser[]>("/users", getUsers);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [errorM, setErrorM] = useState<Record<string, string>>({});

  const handleFocuse = () => {
    setErrorM(validation(formData));
    setErrorMessage("");
  };
  const handleBlur = () => {
    setErrorM(validation(formData));
  };

  const onFinish = () => {
    setIsLoading(true);
    try {
      setErrorM(validation(formData));
      if (data) {
        let currentUser: IUser = { id: 0, name: "", password: "", age: 0 };
        data.forEach((user) => {
          if (
            user.name === formData.username &&
            user.password === formData.password
          ) {
            currentUser = user;
          }
        });

        if (currentUser.id !== 0) {
          setFromStorage("user", currentUser);
          setAuthUser(currentUser);
          router.push("/");
          setErrorMessage("");
        } else {
          setErrorMessage("Неверный логин или пароль");
        }
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const disableChange = () => {
    if (formData.username === "" || formData.password === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Form
        name="normal_login"
        style={{
          margin: "auto",
          maxWidth: 400,
          border: "1px solid grey",
          padding: "50px 20px",
          borderRadius: 15,
          textAlign: "center",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item>
          <Title level={4}>Авторизация</Title>
        </Form.Item>
        <Form.Item name="username">
          <Input
            name="username"
            onFocus={handleFocuse}
            onBlur={handleBlur}
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(event) =>
              setFormData({ ...formData, username: event.target.value })
            }
            value={formData.username}
            placeholder="Username"
            style={errorM.username ? { borderColor: "red" } : {}}
          />
          {errorM.username ? (
            <span style={{ color: "red" }}>{errorM.username}</span>
          ) : (
            ""
          )}
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            name="password"
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            value={formData.password}
            onFocus={handleFocuse}
            onBlur={handleBlur}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={errorM.password ? { borderColor: "red" } : {}}
          />
          {errorM.password ? (
            <span style={{ color: "red" }}>{errorM.password}</span>
          ) : errorMessage ? (
            <span style={{ color: "red" }}>{errorMessage}</span>
          ) : (
            ""
          )}
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox
              // onClick={() => setValidate({ ...validate, remember: true })}
              onChange={(event) =>
                setFormData({ ...formData, rememberMe: event.target.value })
              }
              value={formData.rememberMe}
            >
              Remember me
            </Checkbox>
            {errorM.rememberMe ? <span>{errorM.rememberMe}</span> : null}
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            disabled={disableChange()}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ padding: "0px 30px", margin: 10 }}
          >
            Войти
          </Button>
          <div>
            <span>если нет аккаунта можно здесь </span>
            <Link href={"/registration"}>Зарегистрироваться</Link>
          </div>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default IsAuth(Login);
