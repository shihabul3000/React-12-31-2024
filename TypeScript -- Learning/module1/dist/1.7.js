"use strict";
{
    // spread operator
    //  rest operator
    //  destructuring
    // Learning Spread Operator
    const bros1 = ['Mir', 'firoz', 'Mizan',];
    const bros2 = ['Tonmoy', 'Rahat', 'Star Boy',];
    bros1.push(...bros2);
    console.log('Updated Bros1 + Bros2------->>>', bros1);
    console.log('Bros2------->>>', bros2);
    const mentors1 = {
        typescript: 'Madara Uciha',
        redux: 'Denzo',
        dbms: 'Sakura',
    };
    const mentor2 = {
        prisma: ' Firoz',
        next: "tonmoy",
        cloud: 'Nahid',
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentor2);
    console.log('Merge MentorList ----------------->>> ', mentorList);
}
