import React from "react";
import { Form, Input } from "antd";
import {Block, Button} from "../../../components";
import { Link } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useFormik,} from 'formik';

const success = false;

const RegisterForm = props => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      email: '',
      confirm: ''
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
                  message: "Введите email",
                },
              ]}
            >
              <Input
                id='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='email'
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Ваше Имя"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Введите имя пользователя",
                  whitespace: true,
                },
              ]}
            >
              <Input
                id='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder='username'
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Введите пароль",
                }
              ]}
            >
              <Input.Password
                id='password' 
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='password'
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Повторите пароль"
              name="confirm"
              rules={[
                {
                  required: true,
                  message: "Введите пароль",
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
              <Input.Password
                id='confirm'
                value={formik.values.confirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='password'
              />
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
                onClick={formik.handleSubmit}
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