// File 1: person.js - DEFAULT EXPORT

const person = {
    name: 'Max'
}

export default person


// File 2: utility.js - NAMED EXPORTS

export const clean = () => { ... }
export const baseData = 10;



// File 3: app.js

// Default exports can be named anything
import person from './person.js'
import prs from './person.js'

// named exports must be within { ... }
// exact name must be used
import { baseData } from './utility.js'
import { clean } from './utility.js'
// can be combined into import { baseData, clean } from...


// named exports can do this:

// a)
// import { smth as Smth } from './utility.js' // to rename

// b)
// import * as bundled from './utility.js'
// Then use bundled.baseData , bundled.clean to access exported things