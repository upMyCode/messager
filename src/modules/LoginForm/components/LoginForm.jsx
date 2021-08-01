import React from "react"
import { Input, Form, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import Block from "../../../components/Block"
import { Link } from "react-router-dom"
import Button from "../../../components/Button"

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожайлуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Form.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  )
}

export default LoginForm
