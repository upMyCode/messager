import React, { useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {IconReaded, Time} from '../'
import waveSVG from '../../assets/img/wave.svg'
import playSVG from '../../assets/img/play.svg'
import pauseSVG from '../../assets/img/play.svg'
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

    const [isPlay, setPlay] = useState(false)

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
                                    audio && <div className='message__audio'>
                                        <div className='message__audio-progress' style={{ width: '40%'}}></div> 
                                        <div className='message__audio-info'>
                                            <div className='message__audio-btn'>
                                                <button>
                                                    {isPlay ? (
                                                        <img src={playSVG} alt='play svg'/>
                                                    ) : ( 
                                                        <img src={pauseSVG} alt='pause svg'/>
                                                    )}
                                                </button>
                                            </div>
                                            <div className='message__audio-wave'>
                                                <img src={waveSVG} alt='wave svg'/>
                                            </div>
                                            <span className='message__audio-duration'>
                                                00:19    
                                            </span>    
                                        </div>  
                                    </div>
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
