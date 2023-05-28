### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

#### Ans : The primary purpose of creating a model with interface and schema is to force the user to give meaningful data that I need in the backend. The interface also helps by providing type safety. Creating a model with the interface allows us to catch the error on the runtime and compile time; otherwise, it could break our production code.

---

### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

#### Ans : Filed filtering is one of the essential concepts of MongoDB. Because by using filed filtering, we can only retrieve the fields we need; otherwise, it will pull all the fields from the database, which can be costly. Using the project method, I can include and exclude fields from the document.

---

### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

#### Ans : A instance method is a method that is created from the class instance. Using that concept mongoose allow us to create a custom instance method where I can put my own logic based on that model. Here is an example : -

```
schema.method('fullName', function fullName() {
  return this.firstName + ' ' + this.lastName;
});
```

---

### Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

#### Ans : I can use these query operators in many ways. Here are some examples :

```
<!-- $ne -->
db.users
  .find({ age: { $ne: 30 }, "favorites.color": "green" })
  .projection({ "favorites.color": 1, age: 1 })
  .sort({ age: 1 });

<!-- $gt -->
db.users
  .find({ age: { $gt: 30 }, "favorites.color": "green" })
  .projection({ "favorites.color": 1, age: 1 })
  .sort({ age: 1 });

<!-- $lt -->
db.users
  .find({ age: { $lt: 30 }, "favorites.color": "green" })
  .projection({ "favorites.color": 1, age: 1 })
  .sort({ age: 1 });

<!-- $gte -->
db.books.aggregate([
  {
    $facet: {
      featured: [{ $match: { rating: { $gte: 4 } } }],
      popular: [{ $match: { rating: { $gte: 4 } } }],
      BestSeller: [{ $match: { rating: { $gt: 4.5 } } }],
    },
  },
]);

<!-- $lte -->
db.users
  .find({ age: { $lte: 30 }, "favorites.color": "green" })
  .projection({ "favorites.color": 1, age: 1 })
  .sort({ age: 1 });
```

---

### Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

#### Ans : $in operator is an operator that takes an array of elements and matches them to a specified field. If those elements exist on the field, it will give those documents. On the other hand, $nin works the same way, but it will provide me with those documents that do not exist on the field.
