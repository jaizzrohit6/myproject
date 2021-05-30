//Linked list look like in js

const list ={
	head:{
		value: 10,
		next:{
			value:12,
			next:{
				value:8,
				next:{
					value:6,
					next:null
				}
			}
		}
	}
};
console.log(typeof(list),JSON.stringify(list))
var a=7
console.log(typeof(typeof(typeof(a))))


class ListNode{
	constructor(data){
		this.data=data
        this.next=null
		// this.next = {
        //     data :  constructor(9),
        //     next : null
        // }
	}
    
}

class LinkedList{
	constructor(head=null){
		this.head=head
	}
}
let node1=new ListNode(2)
let node2=new ListNode(5)
node1.next=node2
console.log(node1,node2)
let newlist =new LinkedList(node1)
console.log(newlist.head.next.data)

// size() {
//     let count = 0; 
//     let node = this.head;
//     while (node) {
//         count++;
//         node = node.next
//     }
//     return count;
// }



class Rectange{
    constructor(length,width){
        this.length=length
        this.width=width
      
    }
    // getter
    get areaRectangle(){
        return this.callArea()

    }
    //method
    callArea(){
        return this.length * this.width
    }
    
}

let squareArea = new Rectange(10,10)
console.log(squareArea.areaRectangle)
// let areaRectangle = this.length* this.width
// console.log(areaRectangle)
// return areaRectangle

// var area = new Rectange(3,5)
// console.log(areaRectangle)

    // node1={
    //     data:2,
    //     next:{
    //         data:5,
    //         next:null
    //     }
    // }
//console.log(constructor(6))


// console.log(constructor())

//ploygon

class Polygon{
    constructor(...sides){
        this.sides=sides
    }
    //method
    *getSides(){
        for(const side of sides){
            yield side
        }
    }
}

const pentagon=new Polygon(1,2,3,4,5)

console.log(pentagon)

console.log(...pentagon.sides)
