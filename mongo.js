/* eslint-disable no-undef */
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url = `mongodb+srv://karvovil:${password}@cluster0.cnk1e.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length<4) {
  Person
    .find({})
    .then(persons => {
      console.log('Phonebook:')
      persons.forEach(person => {
        console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
    })

}else{
  const person = new Person({
    name: name,
    number: number,
  })

  // eslint-disable-next-line no-unused-vars
  person.save().then( () => {
    console.log(`Added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}