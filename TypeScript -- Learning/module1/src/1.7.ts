 {

// spread operator
//  rest operator
//  destructuring


// Learning Spread Operator

const bros1 : string [] = ['Mir' , 'firoz' , 'Mizan' ,];
const bros2 : string [] = ['Tonmoy' , 'Rahat' , 'Star Boy' ,];

bros1.push(...bros2)

console.log('Updated Bros1 + Bros2------->>>' , bros1);
console.log('Bros2------->>>' , bros2);

const mentors1 ={
    typescript : 'Madara Uciha',
    redux : 'Denzo',
    dbms : 'Sakura',
}

const mentor2 = {
    prisma: ' Firoz' ,
    next : "tonmoy" ,
    cloud : 'Nahid' , 

}

const mentorList = {
    ...mentors1,
    ...mentor2,
}

console.log ('Merge MentorList ----------------->>> ' , mentorList);







//  Learn Rest Operator

const greetFriends = (...friends:string[]) => () =>{
    friends.forEach((friend:string)=> console.log(`Hi ${friend}`));
};

greetFriends('Abul' , 'Kabul' , 'Babul' , 'Ubul' , 'Labul')();




const greetFriendss= (...friend : string[]) => () => {
    friend.forEach((friends:string) => console.log(`HI Bros ${friends}`))
}

greetFriendss( "Abul",
    "Kabul",
    "Babul",
    "Ubul",
    "Labul",
    "Jubul",
    "Ratul",
    "Shihab",
    "Tamim",
    "Fahim")();

    }