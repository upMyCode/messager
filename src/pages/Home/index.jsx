import React from "react";
// import { Route } from 'react-router-dom'
import { Message, Dialogs } from "../../components";
import {
  UsergroupAddOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import "./Home.scss";

const Home = () => {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <UsergroupAddOutlined />
              <span>Список диалогов</span>
            </div>
            <FormOutlined />
          </div>
          <div className="chat__sidebar-search">
            <Search
              placeholder="Поиск среди контактов"
              onSearch={onSearch}
              style={{ width: 295 }}
            />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userId={0}
              items={[
                {
                  _id: "614eebec965047478c174a84",
                  index: 0,
                  text: "Enim est sint ad sint pariatur amet quis veniam consectetur deserunt nostrud. Labore do proident ex cillum quis. Sit in ut excepteur adipisicing laborum non excepteur officia cillum.",
                  created_at:
                    "Mon Jan 06 2014 15:32:51 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebecd2e416ec0535b1bc",
                    fullname: "Mabel",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec97a1d02547a7a874",
                  index: 1,
                  text: "Elit incididunt fugiat aute occaecat commodo incididunt officia proident deserunt irure non consectetur Lorem. Cillum nostrud esse sint cillum. Sit elit quis eiusmod pariatur Lorem est ad qui fugiat do.",
                  created_at:
                    "Wed Oct 14 2020 03:02:46 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec1fd8eaa11f51b08f",
                    fullname: "Paige",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec505a400be967aa57",
                  index: 2,
                  text: "Consequat consectetur amet cupidatat quis sunt. Ea ad sit cupidatat enim irure eiusmod proident eu ea cupidatat. Ad dolore cupidatat mollit dolore ipsum proident id.",
                  created_at:
                    "Sat Jan 31 2004 01:28:51 GMT+0200 (Москва, стандартное время)",
                  user: {
                    __id: "614eebecc8f6a4464f46b463",
                    fullname: "Chrystal",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebece4a1ebed96e0b5a8",
                  index: 3,
                  text: "Elit ea deserunt nulla culpa. Enim excepteur occaecat pariatur nisi velit fugiat nisi esse non officia duis eu dolore. Incididunt veniam cillum occaecat ullamco aute ad elit commodo duis.",
                  created_at:
                    "Wed Jan 02 2019 21:23:26 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebecb03ae888d4582447",
                    fullname: "Dennis",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec3237e01d556fa2bd",
                  index: 4,
                  text: "Quis ad ipsum non occaecat sint consectetur Lorem exercitation velit. Consequat eu in excepteur amet magna minim. Adipisicing nulla pariatur laboris exercitation dolor nulla ea aute occaecat consectetur veniam ad minim velit.",
                  created_at:
                    "Tue May 22 1990 07:06:24 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec8289c463702b8377",
                    fullname: "Johns",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec8d1f4c2c5dd7a046",
                  index: 5,
                  text: "Officia aliquip occaecat deserunt magna do nulla reprehenderit incididunt enim tempor ut laborum. Anim voluptate officia dolore nostrud consectetur mollit esse irure aliquip ut et esse. Minim quis cupidatat amet deserunt sit deserunt eiusmod sint reprehenderit.",
                  created_at:
                    "Sun Nov 06 2005 06:23:29 GMT+0200 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec0599e2727d07e5e0",
                    fullname: "Moreno",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec3cace58fef249fc6",
                  index: 6,
                  text: "Non laborum consectetur quis ullamco eu enim ut id reprehenderit cupidatat fugiat elit ipsum. Elit culpa amet tempor amet exercitation. Eu minim mollit pariatur id irure nisi excepteur commodo.",
                  created_at:
                    "Mon Feb 28 2011 05:37:41 GMT+0200 (Москва, стандартное время)",
                  user: {
                    __id: "614eebecfc69c6405e59cb5a",
                    fullname: "Velma",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec192c15492108fada",
                  index: 7,
                  text: "Labore est sint eu fugiat pariatur voluptate est duis. Ut elit dolore laborum adipisicing. Ex aute ut Lorem officia excepteur esse anim sint.",
                  created_at:
                    "Thu May 17 1984 16:12:14 GMT+0400 (Москва, летнее время)",
                  user: {
                    __id: "614eebeca3eef5b2464267d4",
                    fullname: "Herman",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebecd4181bc6002f094a",
                  index: 8,
                  text: "Id ex eiusmod laboris ut consectetur mollit duis duis laboris non pariatur. Cillum id ut culpa amet tempor quis sunt proident occaecat. Nulla nisi ex excepteur ipsum labore commodo pariatur est.",
                  created_at:
                    "Mon Sep 05 2005 17:59:34 GMT+0300 (Москва, летнее время)",
                  user: {
                    __id: "614eebec8e86696031e9fb5f",
                    fullname: "Carmela",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec229c8952c558289e",
                  index: 9,
                  text: "Velit nostrud ex eu est non consectetur. Aute voluptate sunt proident occaecat elit excepteur eiusmod dolor. Est enim enim est culpa.",
                  created_at:
                    "Thu Dec 16 1999 11:54:01 GMT+0200 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec541feaf667be23af",
                    fullname: "Wyatt",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec13a524f68e3ffb8c",
                  index: 10,
                  text: "Eiusmod sunt culpa duis reprehenderit minim fugiat ipsum magna voluptate. Pariatur consequat enim laborum amet amet ex duis laboris voluptate. Sunt voluptate aliquip anim est elit exercitation.",
                  created_at:
                    "Fri Apr 28 1989 16:18:12 GMT+0400 (Москва, летнее время)",
                  user: {
                    __id: "614eebecb9bc4558454e2366",
                    fullname: "Chris",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebecb08bed454349046c",
                  index: 11,
                  text: "Elit sint sint consectetur laboris ullamco exercitation ex dolore minim do occaecat qui officia aute. Nulla incididunt dolore fugiat ipsum commodo. Enim veniam amet exercitation est officia do.",
                  created_at:
                    "Fri Jun 20 1997 19:56:53 GMT+0300 (Москва, летнее время)",
                  user: {
                    __id: "614eebec4608fd33fce5cd97",
                    fullname: "Estrada",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebece1b7fc6dcc1b9571",
                  index: 12,
                  text: "Nisi magna laboris tempor minim. Cillum cillum dolore velit eiusmod Lorem esse cillum culpa exercitation. Irure do deserunt mollit Lorem mollit.",
                  created_at:
                    "Fri Jun 28 2019 16:10:39 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec6b302c01387bb9eb",
                    fullname: "Mcmahon",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec4da707937954fdf7",
                  index: 13,
                  text: "Culpa laboris proident irure et cupidatat non anim culpa magna ullamco Lorem ullamco anim amet. Elit laborum do veniam in anim in ullamco culpa. Aliqua ut exercitation do consectetur nostrud laborum quis consequat.",
                  created_at:
                    "Sat May 22 1993 16:51:56 GMT+0300 (Москва, летнее время)",
                  user: {
                    __id: "614eebec6684f3dec1b983b7",
                    fullname: "Flynn",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec92758c8f8d379664",
                  index: 14,
                  text: "Occaecat eiusmod dolore est incididunt pariatur velit. Lorem veniam ad voluptate quis aliqua pariatur incididunt dolor aliqua. Veniam aute mollit Lorem dolore tempor.",
                  created_at:
                    "Wed Nov 29 1995 21:53:41 GMT+0200 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec2782400324df06e1",
                    fullname: "Cheri",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebecb1a8c8868e24cf50",
                  index: 15,
                  text: "Ad adipisicing nulla aliquip pariatur. Nulla consequat eiusmod non officia velit sint aliqua. Officia laboris magna veniam amet veniam ea pariatur sint fugiat.",
                  created_at:
                    "Thu Jan 27 1972 07:04:18 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec63935de83b172cb5",
                    fullname: "Amelia",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec973dfa64e1ce9856",
                  index: 16,
                  text: "Deserunt aliqua qui quis velit deserunt in officia exercitation. Veniam ipsum minim nisi consequat pariatur anim. Pariatur ex ut consequat magna proident dolor Lorem fugiat duis nulla.",
                  created_at:
                    "Tue Mar 12 1985 07:47:58 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec28d67d30fe99012d",
                    fullname: "Bowen",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec169e1a11dcc552d6",
                  index: 17,
                  text: "Quis qui consectetur velit sit. Tempor anim nisi ipsum aute sit dolor anim do. Sunt exercitation eiusmod pariatur quis aute eu esse qui ipsum velit deserunt.",
                  created_at:
                    "Fri Sep 11 2020 23:47:32 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebecb9a57a04aea21a91",
                    fullname: "Amalia",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec9cb999e79b645850",
                  index: 18,
                  text: "Nulla qui quis qui qui enim amet sunt voluptate quis. Dolore proident eiusmod non deserunt reprehenderit. Enim fugiat commodo ex exercitation officia anim excepteur veniam ipsum in in adipisicing.",
                  created_at:
                    "Thu Jun 06 2019 16:18:44 GMT+0300 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec82812716facc46be",
                    fullname: "Yolanda",
                    avatar: null,
                  },
                },
                {
                  _id: "614eebec1a51126cae68382b",
                  index: 19,
                  text: "Ea consequat aute dolore dolore mollit aliqua ea. Aliqua laborum culpa incididunt velit tempor eiusmod ut elit aliquip. Aliqua deserunt dolore deserunt fugiat culpa in nulla ut reprehenderit nisi labore commodo.",
                  created_at:
                    "Sun Nov 23 2003 10:05:31 GMT+0200 (Москва, стандартное время)",
                  user: {
                    __id: "614eebec6d7074d57b0869da",
                    fullname: "Elsie",
                    avatar: null,
                  },
                },
              ]}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-fullname">Steve Jobs</b>
              <div className="chat__dialog-header-status">
                <div className="status status--online">онлайн</div>
              </div>
            </div>
            <EllipsisOutlined />
          </div>
        </div>
      </div>
      {/* <Dialogs
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
          <Message 
            avatar='https://sun9-83.userapi.com/impg/DQ96jQU1jHo8QOGuuypKAq4dVCyAD3VnBtzNhQ/rI4V4Y4z1Rg.jpg?size=400x400&quality=96&sign=674b24c16c6aee19edab61bf93319b4c&type=album' 
            date='Wed Aug 04 2021 18:15:57'
            isReaded={true}
            isMe={false}
            isTyping={true}
          /> */}
    </section>
  );
};

export default Home;
