import React from 'react'
import './Dialogs.scss'
import DialogItem from '../DialogItem'
import orderBy from 'lodash/orderBy'
import isToday from 'date-fns/isToday'

const Dialogs = ({ items, userId }) => {
    return (
        <div className='dialogs'>
            {orderBy(items, ['created_at'],['desc']).map((item) => (
                    <DialogItem 
                        key={item._id} 
                        isMe={item.user._id === userId} 
                        {...item}
                    />  
                ))
            }    
        </div>
    )
}

export default Dialogs
