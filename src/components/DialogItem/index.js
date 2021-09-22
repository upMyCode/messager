import React from 'react'
import { IconReaded, Avatar } from '../'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import './DialogItem.scss'

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at
        , 'HH:mm'
      )
    }
    return format(created_at
        , 'dd.MM.yy' 
    ) 
}

const DialogItem = ({ user, unreaded, isMe, created_at, text }) => {
    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
            <div className='dialogs__item-avatar'>
                <Avatar user={user} />  
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(created_at)}
                    </span>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <p>
                        {text}
                    </p>
                    {isMe && <IconReaded isMe={true} isReaded={false} />}
                    {unreaded > 0 && ( 
                        <div className='dialogs__item-info-bottom-count'>{unreaded > 9 ? '+9' : unreaded}</div>
                    )}
                </div>    
            </div>
        </div>
    )
}

export default DialogItem
