import tinycolor from 'tinycolor2'

const generateAvatarFromHash = hash => {
    const [r, g, b] = hash
    .substr(0, 3)
    .split('')
    .map(char => (char.charCodeAt(0) > 255) ? 255 : char.charCodeAt(0))
    const color = tinycolor({ r, g, b })
    const colorLight = tinycolor({ r, g, b }).lighten(40)
    
    return {
        color: color.toHexString(), 
        colorLight: colorLight.toHexString()
    }
}

export default generateAvatarFromHash