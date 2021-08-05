import React from 'react'
import { Route } from 'react-router-dom'
import Message from '../../components/Message'
import './Home.scss'

const Home = () => {
    return (
        <section className='home'>
          <Message 
            avatar='https://sun9-83.userapi.com/impg/DQ96jQU1jHo8QOGuuypKAq4dVCyAD3VnBtzNhQ/rI4V4Y4z1Rg.jpg?size=400x400&quality=96&sign=674b24c16c6aee19edab61bf93319b4c&type=album' 
            text="🤔 К сожалению, мы не можем оценить как скоро вы достигнете вашей цели, так как текущая среднегодовая доходность по вашему портфелю нулевая" 
            date='Wed Aug 04 2021 15:15:57'
            isMe={false}
            attachments={[
              {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
              },
              {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
              },
              {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random=3&nature,wa ter'
              }
            ]}
          />
          <Message 
            avatar='https://sun9-83.userapi.com/impg/DQ96jQU1jHo8QOGuuypKAq4dVCyAD3VnBtzNhQ/rI4V4Y4z1Rg.jpg?size=400x400&quality=96&sign=674b24c16c6aee19edab61bf93319b4c&type=album' 
            text="🤔 Hello fthrhrthrthrthtrhrhrthrthrthrthrthrthrthtr  сожалению, мы не можем оценить как скоро вы достигнете вашей " 
            date='Wed Aug 04 2021 18:15:57'
            isMe={true}
            isReaded={false}
          />                
        </section>
    )
}

export default Home
