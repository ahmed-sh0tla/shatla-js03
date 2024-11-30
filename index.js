var arr1 = [-3 , 8 , 7 ,6 , 5 , -4 , 3 , 2 , 1 ];
console.log(arr1);

arr1.sort(arrange);

function arrange(a , b) {
    // 1) < 0 a comes first 
    // 2) = 0 nothing change 
    // 3) > 0 b comes first 

    return a -b ;  
}

console.log(arr1);




