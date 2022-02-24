class User {


    constructor(firstName, lastName, userName, password, age) {
        this.firstName = firstName
        this.lastName = lastName

        this.userName = userName
        this.password = password
        this.age = age
        this.isLoggedIn = false
        this.lastLoggedIn = 0
        this.isActive = true


    }


    signIn() {
        if (this.isActive) {
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now
        } else {

            alert('this account has been deleted')
        }
    }


    signOut() {
        this.isLoggedIn = false
    }


    getLastLoggedIn() {
        const date = new Date(this.lastLoggedIn)
        return date.toLocaleTimeString()

    }

    deactivateUser() {
        this.isActive = false

    }


    reactivateUser() {
        this.isActive = true
        alert('welcome back' + this.firstName)

    }
}



class Teacher extends User {

    constructor(firstName, lastName, userName, password, age, subject, salary) {

        super(firstName, lastName, userName, password, age)

        this.subject = subject

        this.salary = salary
        this.workHours = 0


    }

    giveMark() {


    }

}








class Student extends User {

    constructor(firstName, lastName, userName, password, age, object, grade, tuition) {

        super(firstName, lastName, userName, password, age)

        this.object = object
        this.grade = grade
        this.tuition = tuition

    }

    takeMark() {


    }

}






class School {


    constructor(name) {
        this.name = name
        this.grades = {}
        this.teachers = []
        this.students = []

    }


    registerStudent(firstName, lastName, userName, password, age, object, grade, tuition) {

        const student= new Student(firstName, lastName, userName, password, age, object, grade, tuition)
        this.students.push(student)
    }







    hireTeacher(firstName, lastName, userName, password, age, subject, salary) {

        const teacher= new Teacher(firstName, lastName, userName, password, age, subject, salary)
        this.teachers.push(teacher)
    }



}




















const school = new School('American House')
school.hireTeacher('Adam', 'muna', 'momo2005', 'fguhhl', 35,'P.E')
school. registerStudent('Hanin', 'farhat', 'HaninFarhat05', 'fguhhl', 16)

console.log(school);