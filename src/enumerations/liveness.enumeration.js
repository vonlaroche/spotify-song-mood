import { enumerateManually } from '../helpers/enumerate'


export const livelinessInfo = enumerateManually({
  1: 'Not live',
  2: 'Probably not live',
  3: 'Neutral',
  4: 'Might be live',
  5: 'Live'
})