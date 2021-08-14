import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from "date-fns/locale";
import classNames from "classnames";
import readedSVG from "../../assests/img/readed.svg";
import noreadedSVG from "../../assests/img/noreaded.svg";

import "./Message.scss";

const Message = ({ avatar, user, date, text, isMe, isReaded, attachments, isTyping }) => {
    return (
        <div className={classNames("message", { 
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--image": attachments && attachments.length === 1,
            })}
        >
            <div className="message__content">
                {isMe && isReaded ? (
                    <img
                        className="message__icon-readed"
                        src={readedSVG}
                        alt="readed"
                    />
                ) : (
                    <img
                        className="message__icon-readed message__icon-readed--no"
                        src={noreadedSVG}
                        alt="noreaded"
                    />
                )}
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user}`} />
                </div>
                <div className="message__info">
                        {(text || isTyping) && (
                                <div className="message__bubble">
                                    {text && <p className="message__text">{text}</p>}
                                    {isTyping && ( 
                                        <div className='message__typing'>
                                        <span className="dot one"/>
                                        <span className="dot two"/> 
                                        <span className="dot three"/>
                                    </div>
                                )}
                              </div>
                        )}
                        <div className="message__attachments">
                            {attachments &&
                                attachments.map((item) => (
                                    <div className="message__attachments-item">
                                        <img
                                            src={item.url}
                                            alt={item.filename}
                                        />
                                    </div>
                                ))}
                        </div>
                        { date && ( 
                            <span className="message__date">
                                {formatDistanceToNow(Date.parse(date), {
                                    addSuffix: true,
                                    locale: ru,
                                })}
                            </span>
                        )}
                </div>
            </div>
        </div>
    );
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
};

export default Message;
