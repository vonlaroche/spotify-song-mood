import { enumerateManually } from '../helpers/enumerate'

//NOTE: instrumentalness has a bit different scale of values than other enums, so maybe create a different helper check function for it later
export const instrumentalnessInfo = enumerateManually({
  1: 'Fully vocal',
  2: 'Mostly vocal',
  3: 'Somewhat instrumental',
  4: 'Mostly instrumental',
  5: 'Fully instrumental'
})