const profile = {
    name:'ali',
    age:30,
    prof:'stu',
    cg:3.4,
    sports:'basketball'
}

const findKeys = Object.keys(profile);
console.log(findKeys);

const findValues = Object.values(profile);
console.log(findValues);

const findBoth = Object.entries(profile);
console.log(findBoth);

// one way of deleting object property
delete profile.cg;
console.log(profile);

// other way of deleting object property

const {prof, ...delprof} = profile;
console.log(delprof);

Object.seal(profile);
profile.name = "aliiiiiiiia";
profile.brand = 'nike';

Object.freeze(profile)
profile.source = 'bangladesh';
profile.income = 'dollar';
profile.cg = 5.0;
delete profile.name;
console.log(profile);

