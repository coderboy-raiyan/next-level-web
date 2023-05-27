// Problem - 1
db.users.find({ "address.city": "New York" });

// Problem - 2
db.users
  .find({ email: "johndoe@example.com" })
  .projection({ "favorites.movie": 1 });

// Problem - 3
db.users
  .find({ "favorites.food": "pizza" })
  .projection({ "favorites.food": 1, age: 1 })
  .sort({ age: 1 });

//   Problem - 4
db.users
  .find({ age: { $gt: 30 }, "favorites.color": "green" })
  .projection({ "favorites.color": 1, age: 1 })
  .sort({ age: 1 });

// Problem - 5
db.users.find({ "favorites.movie": "The Shawshank Redemption" }).count();

// Problem - 6
db.users.updateOne(
  { email: "johndoe@example.com" },
  { $set: { "address.zipcode": "10002" } }
);

// Problem - 7
db.users.aggregate({
  $group: { _id: "$favorites.movie", avgAge: { $avg: "$age" } },
});

// Problem - 8
db.users.aggregate([
  { $match: { "favorites.food": "pizza" } },
  { $group: { _id: null, avgAge: { $avg: "$age" } } },
  { $project: { avgAge: { $toInt: "$avgAge" } } },
]);
