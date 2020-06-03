//Add height and weight to Fluffy
var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
cat[3]={"height":"6"};cat[4]={"weight":"10"};console.log(cat);

//Fluffy name is spelled wrongly. Update it to Fluffyy
var ins=cat.name="fluffyy";
   console.log(cat.name);

//List all the activities of Fluffyy’s catFriends.
console.log(cat.catFriends[0].activities,cat.catFriends[1].activities);

//Print the catFriends names.
console.log(cat.catFriends[0].name,cat.catFriends[1].name);


//Print the total weight of catFriends
console.log(cat.catFriends[0].weight+cat.catFriends[1].weight);


//Print the total activities of all cats (op:6)
console.log(cat.activities+cat.catFriends[0].activities+cat.catFriends[1].activities);


//Add 2 more activities to bar & foo cats
var ins=cat.catFriends[0].activities="cake";
var ins1=cat.catFriends[1].activities="dance";console.log(cat);


//Update the fur color of bar
var update=cat.catFriends[0].furcolor="brown"
console.log(cat);
