"use client";
import React, { useState } from "react";
import type { FormInstance } from "antd";
import { Button, Form, Input } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import useSWRMutation from "swr/mutation";
import { setAuth } from "@/shared/services/user_service/user_service";
import { useRouter } from "next/navigation";

interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const Registration: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    age: 0,
    password: "",
  });
  const { trigger, error } = useSWRMutation("/users", setAuth);
  const [form] = Form.useForm();
  const onFinish = async () => {
    await trigger(user);
    if (!error) {
      router.push("/auth");
    }
  };

  function handleInputChange(event: any) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  return (
    <Content style={{ textAlign: "center", paddingTop: 20 }}>
      <Form
        form={form}
        style={{
          textAlign: "center",
          padding: 10,
          border: "solid grey 1px",
          maxWidth: 500,
          margin: "auto",
          borderRadius: 10,
        }}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item>
          <Title level={4}>Регистрация</Title>
        </Form.Item>
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: "Имя обязателно для заполнения" }]}
        >
          <Input name="name" placeholder="Имя" onChange={handleInputChange} />
        </Form.Item>
        <Form.Item
          name="age"
          label="Возраст"
          rules={[
            { required: true, message: "Возраст обязателно для заполнения" },
          ]}
        >
          <Input
            name="age"
            placeholder="Возраст"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            { required: true, message: "Пароль обязателно для заполнения" },
          ]}
        >
          <Input.Password
            name="password"
            placeholder="Пароль"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <SubmitButton form={form}>Зарегистрироваться</SubmitButton>
          <div style={{ margin: 10 }}>
            <span>войдите если уже зарегистрировани </span>
            <Link href={"/auth"}>Войти</Link>
          </div>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default Registration;
