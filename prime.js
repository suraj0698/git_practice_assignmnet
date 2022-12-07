// Program to find prime number

let factor=0;
    for(i=0; i<=num; i++){
        if(num % i==0){
            factor++
        }
    } 
        if(factor==2)
    {
        console.log("Yes");
    } 
    else 
    {
        console.log("No");
    }