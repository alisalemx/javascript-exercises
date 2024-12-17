const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    return currentAge > oldestAge ? currentPerson : oldestPerson;
  });
};

const getAge = function (birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }

  return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
