import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...

  const planetsWithMoons = data.planets.filter((planet) => {
    return planet.moons !== undefined;
  });

  let obj = planetsWithMoons.find((o) => o.moons.includes(moonName));
  
  return obj.name;

  
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
