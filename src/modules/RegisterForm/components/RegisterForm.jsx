import React from "react";
import { Form, Input } from "antd";
import Block from "../../../components/Block";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const success = false;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      {!success ? (
        <Block>
          <Form
            name="basic"
            labelCol={{
              span: 11,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Ваше Имя"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Повторите пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Link className="auth__register-link" to="/login">
                Войти в аккаунт
              </Link>
            </Form.Item>
          </Form>
        </Block>
      ) : (
        <div className="auth__success-block">
          <div>
            <ExclamationCircleOutlined
              style={{ fontSize: "50px", color: "#08c" }}
            />
          </div>
          <h2>Подтвердите свой аккаунт</h2>
          <p>
            На Вашу почту отправлено письмо с ссылкой на подтверждение  
            аккаунта.
          </p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
