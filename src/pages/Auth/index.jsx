import React from "react"
import Button from "../../components/Button"
import Block from "../../components/Block"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 
  { 
    Input, 
    Form, 
    Icon, 
    Checkbox 
  } from 'antd'
import "./Auth.scss"

const Auth = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <section className="auth">
      <div className="auth__content">
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
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
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
              <a className="login-form-forgot" href="">
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
              <a className='auth__register-link' href='#'>Зарегистрироваться</a>
            </Form.Item>
          </Form>
        </Block>
      </div>
    </section>
  )
}

export default Auth
