// 1.
/* Use project stage at the last it is recommended*/
db.practice_data.aggregate([
  { $match: { gender: "Male" } },
  { $project: { name: 1, gender: 1 } },
]);

// 2.
// Add fields with data on same collection
db.practice_data.aggregate([
  { $addFields: { slaray: 0 } },
  { $merge: "practice_data" },
]);

// 3.
// Group stage with rename using projection
db.practice_data.aggregate([
  {
    $group: {
      _id: { gender: "$gender", company: "$company", ipAddress: "$ipAddress" },
    },
  },
  { $project: { _id: 0, salary: "$_id" } },
]);

// 4.
// stages using accumulator operators
db.practice_data.aggregate([
  { $match: { age: { $gt: 18 } } },
  {
    $group: {
      _id: {
        gender: "$gender",
        company: "$company",
        ipAddress: "$ipAddress",
        age: { $toInt: { $avg: "$age" } },
      },
    },
  },
  { $project: { _id: 0, salary: "$_id" } },
]);

// 5.
// unwind stage for nested array grouping
db.practice_data.aggregate([
  { $unwind: "$education" },
  { $group: { _id: "$education", count: { $sum: 1 } } },
]);

// 6.
// Multi Stage pipeline using facet
db.practice_data.aggregate([
  { $match: { _id: ObjectId("6406ad65fc13ae5a400000c7") } },
  {
    $facet: { followers: [{ $project: { followers: { $size: "$friends" } } }] },
  },
]);
