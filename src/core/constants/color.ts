const colors = {
  red: 'rgba(239,83,80,0.87)',
  green: '#44D7B5',
  lightGreen: 'rgba(68,215,181,0.25)',
  yellow: '#F8941C',
  black: '#424242',
  white: '#ffffff',
  lightDivider: '#E0E0E0',
  darkDivider: '#515151',
  offwhite: '#F6F7F9',
  offblack: '#7b7b7b',
  dark: '#393939',
  offdark: '#1F2427',
  blue: '#0166FF',
  tealBlue: '#38BBD1',
  indigo: '#448aff',
  pink: '#FEAAAA',
  teal: '#1BB8A3',
  pinky: '#ff4081',
  grey: '#797979',
  lightGrey: '#AEAEAE',
  light: '#E7E7E7',
  orange: '#FF7851',
  lightIndigo: '#E8F0FD',
  transparent: '#ffffff00',
  githubDark: '#0E1117',
  githubDarkAccent: '#161B22',
  purple: '#7E6AF5',
  skyBlue: '#69D8F3',
  mud: '#F3F7F8',
}

const MaterialColors = [
  colors.green,
  colors.orange,
  colors.indigo,
  colors.pinky,
  colors.red,
  colors.teal,
]

const generateRandomNumber = (max: number) => Math.floor(Math.random() * max)
export const getRandomColor = () => MaterialColors[generateRandomNumber(6)]

export default colors
