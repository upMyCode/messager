const convertTime = (time) => {
    const mins = Math.floor(time / 60)
    const sec = (time % 60).toFixed()
    const fullTime = `${mins < 10 ? '0' : ''}${mins}:${sec < 10 ? '0' : ''}${sec}`

    return fullTime
}

export default convertTime