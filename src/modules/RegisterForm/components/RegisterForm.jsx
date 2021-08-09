import React from "react";
import { Form, Input } from "antd";
import Block from "../../../components/Block";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useFormik,} from 'formik';

const success = false;

const RegisterForm = props => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            onFinish={formik.handleSubmit}           
          >
            <Form.Item
              hasFeedback
              label="E-mail"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Введите корректный email'
                },
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Ваше Имя"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Введите имя пользователя!",
                  whitespace: true,
                },
              ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              hasFeedback
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Повторите пароль"
              name="confirm"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста введите пароль!",
                },
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if(!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                      return Promise.reject(
                        'Два пароля не совпадают'
                      )
                  }
                })
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

export default RegisterForm