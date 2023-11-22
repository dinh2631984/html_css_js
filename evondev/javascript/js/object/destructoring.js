const students = {
    name: 'Dinh',
    surname: 'Phan',
    hi: () => console.log(`Hello ${this.surname} ${this.name} `),
    age: '39'
}

const {name, age, ...nms} = students;
console.log(name, age, nms);

function findInfo({ name,age,surname }) {
    console.log(surname, name, age);
}

findInfo(students);