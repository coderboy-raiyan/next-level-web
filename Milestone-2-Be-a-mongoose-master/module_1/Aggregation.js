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
