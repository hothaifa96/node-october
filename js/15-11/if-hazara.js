let month =18;
let year = 1996;



if( month < 1 || month > 12 ){
    console.log('Invalid month');
}
else {
    if(month == 2){
        if(year%4 ==0 && year%100 !=0){
            console.log('29 days');
        }
        else{
            console.log('28 days');
        }
    }
    else{
        if(month == 4 || month==6 
            || month == 9 || month==11){
                console.log('30 days');
        }
        else{
            console.log('31 days');
        }
    }
}