import React from "react";
import PropTypes from 'prop-types'
import readedSVG from "../../assests/img/readed.svg"
import noreadedSVG from "../../assests/img/noreaded.svg"

const IconReaded = ({ isMe, isReaded }) => 
  isMe &&
    (isReaded ? (
      <img className="message__icon-readed" src={readedSVG} alt="readed" />
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={noreadedSVG}
        alt="noreaded"
      />
    ))

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}

export default IconReaded;
