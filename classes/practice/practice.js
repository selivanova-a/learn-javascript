class Animal {
  constructor(options) {
    this.name = options.name;
    this.old = options.old;
  }

  sayHi() {
    console.log(`Hi from`, this.name)
  }
}

const dog = new Animal({
  name: 'Rex',
  old: '5'
});

console.log(dog.sayHi());

class Cat extends Animal() {
  constructor(options) {
    super(options);
    this.hasTail = options.hasTail
  }

  voice() {
    console.log('Meow')
  }
}

const cat = new Cat({
  name: 'Vasya',
  old: '3',
  hasTail: true,
})

console.log(cat)
/*console.log(cat.sayHi())
console.log(cat.voice())*/

