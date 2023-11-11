//----------------------------------------Static properties and methods-------------------------------------------------

//Статические методы используются для функциональности, принадлежат классу «в целом»,
// а не относятся к конкретному объекту класса.

//Статические свойства используются в тех случаях, когда мы хотели бы сохранить данные на уровне класса,
// а не какого-то одного объекта.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) { //статический
    return articleA.date - articleB.date;
  }
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS