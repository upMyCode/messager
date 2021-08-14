import React from "react"
import { Input, Form, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import Block from "../../../components/Block"
import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import { useFormik } from 'formik'

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

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
          onFinish={formik.handleSubmit}
        >
          <Form.Item
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your Username!",
                whitespace: true
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
              id='email'
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
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
              id='password'
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} 
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
              onClick={formik.handleSubmit}
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
