//-----------------------------------------------Proxy examples------------------------------------------------------


//Wrapper
//Оборачиваем наш объект в прокси, чтобы добавлять ему новый функционал

const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
  })
}

const position = withDefaultValue(
  {
    x: 2,
    y: 42
  },
  0
)

console.log(position
)


// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: (obj) => Reflect.ownKeys(obj)
      .filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver)
      ? obj[prop]
      : void 0
  })
}

const data = withHiddenProps({
  name: 'Vlad',
  age: 25,
  _uid: '12345',
})
ta

//Optimization
//Создаём обёртку с помощью прокси, чтобы оптимизировать процесс поиска

//const index = {}
//userData.forEach(i => (index[i.id] = i))

const IndexArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach(item => (index[item.id] = item))

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch(prop) {
          case 'push': return item => {
            index[item.id] = item
            arr[prop].call(arr, item)
          }
          case 'findById': return id => index[id]
          default:
            return arr[prop]
        }
      }
    })
  }
})

const users = new IndexArray([
  {id: 1, name: 'Vlad', job: 'Fullstack', age: 25},
  {id: 2, name: 'Vika', job: 'Frontend', age: 27},
  {id: 3, name: 'Tania', job: 'Backend', age: 24},
  {id: 4, name: 'Max', job: 'HR', age: 20},
])





