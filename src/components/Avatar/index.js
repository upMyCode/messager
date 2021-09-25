import React from 'react'
import  generateAvatarFromHash  from '../../helpers/generateAvatarFromHash'
import './Avatar.scss'

const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img 
                src={user.avatar}
                className='avatar'
                alt={`Avatar ${user.fullname}`}
             />
        )
    } else {
        const {color, colorLight} = generateAvatarFromHash(user.__id)
        const firstCharInFullname = user.fullname[0].toUpperCase()

        return (
            <div 
                style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLight}) 96.52%` }} 
                className='avatar avatar--symbol'
            >
                {firstCharInFullname}
            </div>
        )
    } 
    
}

export default Avatar
