function printThis(){
    console.log(this)
}

printThis()

let obj={
    a:10,
    b:20,
    c:printThis,
    d:function(){
        this.c()
        printThis()
        console.log(this.c==printThis)
    }
}

obj.c()
obj.d()

// let x=obj.c
// x()
// //x()
// console.log(typeof x)
// console.log(x==printThis)