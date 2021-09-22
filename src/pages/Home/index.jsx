import React from 'react'
// import { Route } from 'react-router-dom'
import {Message, Dialogs} from '../../components'
import './Home.scss'

const Home = () => {
    return (
        <section className='home'> 
          <Dialogs
            userId={0} 
            items = {[
              {
                _id: '3cbb96f485febfd02beb23b654607a6a',
                text: 'dgesgsgdgsgsegesgesgsegdirhrhodebnosngsoeggpsegehgepehgpwgepgewgnednv vwengewngpeongpeowngwegn',
                isReaded: false,
                created_at: new Date(2014, 9, 6, 14, 0),
                user: {
                  _id: '3cbb96f485febfd02beb23b654607a6a',
                  fullname: 'Steve Jobs',
                  isOnline: false,
                  avatar: null
                }
              },
              {
                _id: '3cbb96f485febfd02beb23b654607a6a',
                text: 'dgesgsgdgsgsegesgesgsegdirhrhodebnosngsoeggpsegehgepehgpwgepgewgnednv vwengewngpeongpeowngwegn',
                isReaded: false,
                created_at: new Date(2014, 9, 6, 14, 0),
                user: {
                  _id: '3cbb96f485febfd02beb23b654607a6a',
                  fullname: 'Steve Jobs',
                  isOnline: false,
                  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhCG-fOMCamjLeA9RoZHgXKJLXiFSUh2Wmg&usqp=CAU'
                }
              }
            ]}
          />      
          <Message 
            avatar='https://sun9-83.userapi.com/impg/DQ96jQU1jHo8QOGuuypKAq4dVCyAD3VnBtzNhQ/rI4V4Y4z1Rg.jpg?size=400x400&quality=96&sign=674b24c16c6aee19edab61bf93319b4c&type=album' 
            audio='https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.ogg'
            date='Wed Aug 04 2021 18:15:57'
            isReaded={true}
            isMe={false}
          />
        </section>
    )
}

export default Home
