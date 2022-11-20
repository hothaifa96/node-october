let day = 3 ;

//0 -> s
//1 -> s
//2 -> m
//3 -> t
//4 -> w
//5 -> t
//6 -> f
//7 -> s
//8 -> s
//9 -> m
//10-> t

if(day%7==0)
    console.log('s')
    else if(day%7==1)
            console.log('s')
        else if(day%7==2)
            console.log('m')
        else if(day%7==3)
            console.log('t')
        else if(day%7==4)
            console.log('w')
        else if(day%7==5)
            console.log('t')
        else if(day%7==6)
            console.log('f')
 


switch(day%7){
    case 0: 
        console.log('sat');
        break;
    case 1: 
        console.log('sun');
        break;
    case 2: 
        console.log('mon');
        break;
    case 3,5: 
        console.log('th');
        break;
    case 4: 
        console.log('w');
        break;

    case 6: 
        console.log('fri');
        break;
    default: 
        console.log('not a number');
}