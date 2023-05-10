### 1. What is TypeScript, and how is it different from JavaScript?

#### Ans: Typescript is an open-source library that enables javascript developers to enforce type safety to their code. The main difference between typescript and javascript is javascript doesn't support type safety by default. On the other hand, typescript supports type safety by default though it has built on top of javascript with strongly typed.

---

### 3. Can you give an example of how to use generics in TypeScript?

#### Ans : We can use generics in many different ways here is an examples :

```
type MaintenanceCostType<T> = {
    name : string;
    cost : number;
    type : boolean | T
}
const maintenance1:MaintenanceCostType<string> = {
    name : "Car engine",
    cost : 12000,
    type : "others",
}
```

### 4. Can you give an example of how to use enums in TypeScript?

```
enum roles {
  admin = "admin",
  user = "user",
  actor = "actor",
}
type UserRoleType = {
  name: string;
  email: string;
  role: roles;
};
const maintenance1: UserRoleType = {
  name: "Daemon targareyn",
  email: "deamon@gmail.com",
  role: roles.actor,
};
```

---

### 6. What is the "as" keyword used for in TypeScript?

#### Ans : It is used mainly for type assertion in typescript.

---

### 7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

#### Ans : When I'm taking a parameter that I have declared as unknown type, and I don't know what it could be, I need to check its type by using ", typeof" and "typeof" gives me whether it is a string boolean or number on the other hand in the same case if I got an object. I am curious to know if the key exists. I can use "In."
