class Person {
    constructor(params) {
       this.name = params.name;
       this.type = 'person';
    }
    get birthDateStr() {
       return this.birthDate.getDate();
    }
 
    get age() {
       return  Math.floor((new Date() - this.birthDate)/(365*86400000)) + ' лет';
    }
 
    }

    class Student extends Person {
        constructor(params) {
           this.university = params.university;
           this.course = params.course;
           this.type = 'student';
           
        }
    }
    class Teacher extends Person {
        constructor(params) {
           this.post = params.post;
           this.university = params.university;
           this.type = 'teacher';
        }
    }
    
    class PersonFactory {
        create(name, type) {
            switch(type) {
                case 'student':
                    return new Student({name, university:'НГТУ'});
                case 'teacher':
                    return new Teacher({name, university:'НГТУ'});
                default:
                    return new Person({name});
            }
        }
    }
const personFactory = new PersonFactory();
let a = personFactory.create('Sonya','teacher');
console.log(a);