import React from 'react'
import IconReaded from '../IconReaded'
import Time from '../Time'
import classNames from 'classnames'
import './DialogItem.scss'

const getAvatar = avatar => {
    if (avatar) {
        return (
            <img src={avatar} alt='Стив Джобс jpg'/>
        )
    } 
    return // make avatar  
}

const DialogItem = ({ user, message, unreaded }) => {
    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
            <div className='dialogs__item-avatar'>
                {/* <img src={user.avatar} alt={`${user.fullname} avatar`}/> */}
                 {getAvatar('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/274px-Steve_Jobs_Headshot_2010-CROP.jpg')}   
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b>Стив Джобс</b>
                    <span>
                        {/* <Time date='Sun Aug 22 2021 20:10:30'/> */}
                        19.15
                    </span>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <p>
                        Оставайтесь голодными ghggggggggggggggggggggggggggggggggggggg...
                    </p>
                    <IconReaded isMe={true} isReaded={false} />
                    {unreaded > 0 && ( 
                        <div className='dialogs__item-info-bottom-count'>{unreaded > 9 ? '+9' : unreaded}</div>
                    )}
                </div>    
            </div>
        </div>
    )
}

export default DialogItem
