"use strict";
{
    //  Learning function
    // Normal function
    // Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 2);
    const addArrow = (num1, num2) => num1 + num2;
    // object  ---> function ----> method 
    const poorUser = {
        name: 'Ali',
        balance: 0,
        addBalance(balance) {
            return ` My new balance is : ${this.balance + balance} `;
        }
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
