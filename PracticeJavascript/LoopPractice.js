//while loops
    // var number= 0;
    // while(number<100){
    //     number+=1
    //     console.log(number)
    // }
    // while(true){
    //     number+=1
    //     console.log(number)
    // }
    // while(false){
    //     number+=1
    //     console.log(number)
    // }

    //forloop
    // for(let num=0;num<=100;num++)
    // {
    //     console.log(num)
    // }

    //datatypes

    var age= 10                                             //number 
    var yourName= "Rohit "                                  //string
    var name ={ firstname : "Rohit", lastname: "Jaiswal"}   //object
    let truth = false                                       // boolean
    let groceries=['Apple','banana','grapes']               //array
    let random;                                             //undefiend
    let nothing = null                                      //value null


    //string in javascript (common method)

    let fruits = 'banana,apple,orange,blackberry'
    let morefruits= 'banana\napple'
    console.log(fruits)
    console.log(morefruits)
    console.log(fruits.length)
    console.log(fruits.indexOf('nan'))
    console.log(fruits.slice(2,6))
    console.log(fruits.toUpperCase())
    console.log(fruits.toLocaleUpperCase())
    console.log(fruits.toUpperCase())
    console.log(fruits.charAt(3))
    console.log(fruits[2])
    console.log(fruits.split('')) // split by character
    console.log(fruits.split(',')) // split by comma


    //Arrays
    let fruit = ['banana','apple','orange','blackberry']
    console.log(fruit.length)
    fruit = new Array('banana','apple','orange','blackberry')
    fruit[0] ="pineapple"
    console.log(fruit)

    for(let  i = 0;i<fruit.length;i++){
        console.log(fruit[i])
    }
    
    //array common method

    console.log(fruit.toString())
    console.log(fruit.join('*'))
    console.log(fruit.pop(),fruit)  //remove last item 
    console.log(fruit.push("whiteberry"),fruit)  //appneds 
    fruit[fruit.length]="new fruit"  //same as push
    console.log(fruit)
    console.log(fruit.shift(),fruit)  //remove first element from list
    fruit.unshift("Watermelom")
    console.log(fruit)  // add first element in aaray 

    let vegetables= ['tomato','brocolli','cucmber']

    let allgroceries=fruit.concat(vegetables)  //combine arrays
    console.log(allgroceries)
    console.log(allgroceries.reverse())
    console.log(allgroceries.sort)

    let someNumber=[33,7,9,5,11,45,8,65,34,23,10,23]

    console.log(someNumber.sort(function(a,b){ return a-b})) // ascending order sorting
    console.log(someNumber.sort(function(a,b){ return b-a}))  //desending order

    let emptyArray=new Array()

    for(let num=0;num<10;num++){
        emptyArray.push(num)
    }
    console.log(emptyArray)



    //object in javascript



    
    
    




