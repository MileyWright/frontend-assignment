const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  return heroes.filter(hero => hero.publisher === 'Marvel Comics')
  
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  return heroes.map(hero =>{ return {...hero, characters: hero.characters.split(', ')}})
}


/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  const groupedHero = {
    "DC Comics": [],
    "Marvel Comics": []
  }
  heroes.forEach(hero => {
    if (hero.publisher === "DC Comics") {
      groupedHero["DC Comics"].push(hero)
    } else {
      groupedHero["Marvel Comics"].push(hero)
    }
  })
  return groupedHero;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */

const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const DCSuperhero = [];
  convertCharactersToArray(heroes).forEach(hero => {
    if (hero.publisher === "DC Comics" && hero.characters.length > 1) {
      DCSuperhero.push(hero.superhero)
    }
  })
  return DCSuperhero
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
