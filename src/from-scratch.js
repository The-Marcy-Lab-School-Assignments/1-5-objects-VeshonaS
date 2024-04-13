const coolGreeting = (person) => {
  if (person.isCool === true ){
    return "What is UP " + person.name.toUpperCase() + "? How you been doin'?"
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};
// person1 = {
//   name: 'Sara',
//   bio: 'Too cool 4 skool.',
//   age: 32,
//   isCool: true
// }
// person2 = {
//   name: 'Bob',
//   bio: 'Average guy.',
//   age: 42,
//   isCool: false
// }

// console.log(coolGreeting( person1))
// console.log(coolGreeting( person2))

const  haveBirthday = (person) => {
  person.age++ ;
}

// firstperson ={
// age: 30 
// }
//  haveBirthday(firstperson)

const becomeSecretAgent = ( person , spyHandle) => {
  if (person.hasOwnProperty('name')){
    delete person.name 
person.spyHandle = spyHandle
}
};
// person1 = {
//   name: 'Sara'
// }

// console.log(becomeSecretAgent(person1))

const carMaker = ( name , maker , year) => {
  return {
    name: name, 
    maker: maker, 
    year: year ,
    needsOilChange: false
  }
};
// let car = carMaker('toyota','hilander', 2012)
// console.log(car)

const weAreNotFriends = (person) => {
 return person.friends.pop()
};
// person1 = {
//   name: 'Sara',
//   age: 30,
//   friends: ['Bob', 'Joe', 'Sally'],
// };
// let breakup = weAreNotFriends(person1)
// console.log(breakup)

const listHobbies = (person) => {
 console.log(`${person.name} likes ${person.hobbies[0]}.`)
 console.log(`${person.name} likes ${person.hobbies[1]}.`)
 console.log(`${person.name} likes ${person.hobbies[2]}.`)
}
// const jo = {
//   name: 'Jo',
//   age: 34,
//   hobbies: ['running', 'biking', 'baking'],
// };
// listHobbies(jo)

const getNextOpponent = (team) => {
  if (team.matches.length === 0){
    return null
  }
  return team.matches[0].teamName
};

const listAllKeys = (object) => {
  return Object.keys(object)
};

const listAllValues = (object) => {
  return Object.values(object)
};

const convertToMatrix = (arrOfObjs) => {
  if (arrOfObjs === 0){
    return []
  }
}


const users = [
  {
    name: 'Sara',
    age: 30,
    bio: 'What a legend',
  },
  {
    name: 'Bob',
    age: 30,
    bio: "Kind of mean if we're being honest",
  },
];

let newObj = convertToMatrix(users)
console.log(newObj)


module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
