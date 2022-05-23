interface User {
      name: String,
      age: Number,
      occupation: String
};

export type Users = unknown;

export const users: Users[] = [
    {
        name: "Wilker",
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
users.forEach(logPerson);

