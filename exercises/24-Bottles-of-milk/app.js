for(let i=97;i>=0;i--){
    if(i==1){
        console.log(i + " bottle of milk on the wall, "+ i+ " bottle of milk. Take one down and pass it arround, "+ "no more bottles of milk on the wall.");
        console.log("No more bottles of milk on the wall, No more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
    }
    else{
        console.log(i + " bottles of milk on the wall, " + i+ " bottles of milk. Take one down and pass it arround, "+ (i-1) + " bottles of milk on the wall.");
    }
    
}