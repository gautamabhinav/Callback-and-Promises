function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
    
    return function() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
  }

  const person = {
    firstName: 'Mithun',
    lastName: 'S',
    age: 20,
  };
  
  const logAgeInDays = ageInDays(person);
  logAgeInDays(); // logs "The person's full name is John Doe and their age in days is 10950."
  