import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AudioMessage } from '../'
import {IconReaded, Time} from '../'
import "./Message.scss";

const Message = ({ 
    avatar, 
    user, 
    date, 
    text,
    audio, 
    isMe, 
    isReaded, 
    attachments, 
    isTyping }) => {

    return (
        <div className={classNames("message", { 
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--image": attachments && attachments.length === 1,
            "message--is-audio": audio
            })}
        >
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded} />
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user}`} />
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                            <div className="message__bubble">
                                {text && <p className="message__text">{text}</p>}
                                {isTyping && ( 
                                    <div className='message__typing'>
                                        <span className="dot one"/>
                                        <span className="dot two"/> 
                                        <span className="dot three"/>
                                    </div>
                                )}
                                {
                                    audio && <AudioMessage audio={audio} />
                                }
                            </div>
                        )}
                        {attachments && (
                            <div className="message__attachments">
                                {attachments.map((item) => (
                                    <div className="message__attachments-item">
                                        <img
                                            src={item.url}
                                            alt={item.filename}
                                        />
                                    </div>
                                    ))}
                            </div>
                        )}
                    
                        { date && ( 
                            <span className="message__date">
                                <Time date={date} />
                            </span>
                        )} 
                </div>
            </div>
        </div>
    )
};

Message.deafaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    audio: PropTypes.string,
};

export default Message;
