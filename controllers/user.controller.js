var Employee = {
    constructor(firstName,lastName,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    },
     add ({newFirstName,newLastName,newEmail}){
       this.firstName = newFirstName,
       this.lastName = newLastName,
       this.email = newEmail;

       return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
       }
    }
}


const employee1 = new Employee('abcdef','acfged','emli')