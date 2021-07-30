import React from "react"
import Button from "../../components/Button"
import Block from "../../components/Block"
import "./Auth.scss"

const Auth = () => {
  return (
    <section className="auth">
      <Block>
        <Button type="primary" size="large">
          This is button
        </Button>
      </Block>
    </section>
  )
}

export default Auth
