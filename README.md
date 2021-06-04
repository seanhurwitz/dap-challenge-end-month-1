# Develepor Accelerator Program - Month 1 Assessment

## Introduction

Welcome, coders! By now, I hope you've had lots of fun working with Nodejs and seen all the wonderful opportunities and things you can create with words and logic! This assessment will review all the concepts and applications you have encountered so far, but **MOST OF ALL** it will test your thinking, logic and ability to explore new opportunities and solve tough problems, because that's what makes a good coder, full stop.

## Challenge

### MAD MONSTER RUMBLE ARENA!!!

There's this crazy new trend of collecting, naming and fighting with cute pet-like monsters that live all around the world. Are they made up? NO! It's real, I tell you! They live on in the minds of legends like us. They are hiding out there, somewhere.... **It's your job, fellow coder, to build a database that can store users and their respective monsters, as well as pit two monsters in a head-to-head battle to see who shall be the ultimate victor!**

The user schema is:

```javascript
{
    id: int,
    name: "string",
}
```

The monster schema is:

```javascript
{
    id: int,
    userId: int, //This links to a user, silly!
    name: "string",
    hp: int, //This is the Hit Points of the monster, ie how much life he has
    atk: int, //This is the Attack power of the monster, ie how much hp of the opponent it will deplete
    def: int, //This is the Defense power of the monster, which will determine how much hp he loses when attacked, with some sweet calculations we'll get to later!
}
```

All the fields in each schema are mandatory.

**OPTIONAL**: Use the [joi](https://www.npmjs.com/package/joi) validation library to make sure any inputs fit the schema!

Required methods / functions:

```javascript
createUser(); //Adds a user
updateUser(); //Ability to update the user's name
createMonster(); //Create a monster
updateMonster(); //Ability to update the monster's name
growMonster(); //This method will take in a monster's ID and randomly increase its stats from 1 to 5 points each
fight(); //This method takes in 2 monsters' IDs and lets each one attack the other once. You can add onto this as much as you like, as far as your imagination takes you!
```

**NB**: When creating a monster, you only need to pass through a name. The method itself should set hp, atk and def values by fetching a different random number between from 10 to 20 for each one (hint: Math.random)

### Monster Attacking Algorithm

An example:

MONSTER A: 30 ATK

MONSTER B: 20 DEF, 20 HP

We could just have the attacking monster's ATK minus the defending monster's DEF go straight to the HP of the defending monster. For example: A Attacks B: 30 - 20 = 10 damage, and 20 - 10 is 10. And that will be the remaining HP of the defending monster.
But let's make it more complicated just because!
The net damage dealt will be Monster A's ATK less Monster B's DEF, multiplied by 1 minus the ratio of monster B's DEF to monster A's ATK:

So if A attacks, you take (30-20)x(1- (20/30)) = 10x(1/3) = 3 (ROUND DOWN)

ONE MORE THING: Every attack has a one in seven chance of a critical hit, whereby the net damage is tripled. So if the above was a critical hit, then the damage is 9, not 6.

## Tech Stack

- nodejs, duh...
- Download [Docker](https://www.docker.com/products/docker-desktop) and then [Kitematic](https://github.com/docker/kitematic/releases) to get a mysql container running on your local machine. (Kitematic is technically a deprecated technology, and docker itself will say you can just use docker desktop. If you can get that working, then more power to you!). On kitematic, you can just search for mysql, but [here](https://hub.docker.com/_/mysql) are the docs to give you more info.
- Use the npm [sequelize](https://sequelize.org/) npm library to configure a database with the required schema. If you want a brief crash course on SQL as a language, check [this](https://www.mysqltutorial.org/) out. You really only need to understand creating databases / tables / fields, and basic search and update querying. Don't go into views and stored procedures and the like!

## Outcomes

- Minimum required is a working test function on your root index.js, which will go through each method, run it, and test it. See an example below:

```javascript
let user; //I'm definine the user variable in here so I can use it in all the methods without having to create a user every time.
let monster; //Same as above.

const testCreateUser = async () => {
  const testInput = {
    name: "Charles Jackson",
  };
  user = await createUser(testInput);
  const test = user.name === testInput.name;
  console.log(`CREATE USER: ${test}`);
};

const runTest = async () => {
  await recreateDatabase(); //this is optional but a good point to have, since when you test you don't want id conflicts and such.
  await testCreateUser();
  await testUpdateUser();
  //etc
};

runTest();
```

- We will also be assessing code QUALITY - are things structured neatly, referenced smoothly, readable, etc

## Good luck, fellow pokemo... I mean MONSTER RUMBLE ARENA coders!
