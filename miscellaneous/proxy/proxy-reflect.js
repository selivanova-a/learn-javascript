//-----------------------------------------------Proxy and Reflect------------------------------------------------------

//Object --------------------------------------------
const person = {
  name: 'Vova',
  age: 25,
  jof: 'Frontend'
}

const op = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`)
    return target[prop]
  },

  set(target, prop, newValue) {
    if (prop in target) {
      target[prop] = newValue;
    } else {
      throw new Error('Cannot set property "' + prop + '"')
    }
  },

  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },

  deleteProperty(target, prop) {
    console.log('Deleting...', prop)
    delete target[prop]
    return true
  }
})


//Functions --------------------------------------------
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('Calling fn...')

    return target.apply(thisArg, args).toUpperCase()
  }
})


//Classes --------------------------------------------------

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct...')

    return new target(...args)
  }
})


const p = new PersonProxy('Maxim', 30)

