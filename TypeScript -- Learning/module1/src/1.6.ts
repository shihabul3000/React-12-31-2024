{

//  Learning function
// Normal function
// Arrow Function

function add(num1 : number , num2:number): number{
    return num1 + num2;
}

add (2,2 )


const addArrow = (num1 :number , num2:number) :number => num1 + num2

// object  ---> function ----> method 

const  poorUser = {
    name : 'Ali',
    balance : 0 , 

    addBalance (balance: number){
       return ` My new balance is : ${this.balance + balance} ` ;
    }
};

const arr : number [] = [1,4,10]

const newArray : number[] = arr.map ((elem : number) => elem * elem );


}