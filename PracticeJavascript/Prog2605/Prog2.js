// 1.Write a JavaScript function to check whether an `input` is a string or not

const isString=function(string){
	if(Object.prototype.toString.call(string)==='[object String]'){
		return true
	}
	else{
		return false
	}
}

console.log(isString("RohitJaiswal"))
console.log(isString(12345))


// 2 Write a JavaScript function to check whether a string is blank or not.

const isEmpty=function (string){
    //string.length
    if(string=="" && string==null && string==undefined){
        return (`String is blank`)
    }
    else{
        return (`string is not blank`)
    }
}
console.log(isEmpty("rohit"))

// 3 Write a JavaScript function to split a string and convert it into an array of words

let stringToArray=function (string){
    return string.trim().split(" ")
}
console.log(stringToArray("Rohit Jaiswal"))


// 4 Write a JavaScript function to extract a specified number of characters from a string

let truncateString=function(str1,length){
    if((str1.constructor===String) && (length>0)){
        return str1.slice(0,length)
    }
}

// 4.2Aproach 2

let truncateString2=function(str1){
    return str1.substring(0,5)
}

console.log(truncateString("Rohit Jaiswal",5)) //Approch1
console.log(truncateString2("Rohit Jaiswal",5))//Approch 2

// 5 Write a JavaScript function to convert a string in abbreviated form

let abbreviatedString=function(str1){
    let trimString = str1.trim().split(" ")
    if(trimString.length>1){
        return (trimString[0] + " " + trimString[1].charAt(0))
    }  
}
console.log(abbreviatedString("Rohit Jaiswal"))

//6 Write a JavaScript function to hide email addresses to protect from unauthorized user

let hideEmail=function(useremail){
    let avg,splitted,part1,part2

    splitted = useremail.split("@")
    part1=splitted[0]
    avg=(part1.length)/2
    part1=part1.substring(0,(part1.length - avg))
    part2=splitted[1]
    return part1 + "....@" + part2

}

console.log(hideEmail("rjaiswal@hotmail.com"))

// 7 Write a JavaScript function to parameterize a string

let string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};

console.log(string_parameterize("My Name Rohit Jaiswal"))


// 8 Write a JavaScript function to capitalize the first letter of a string

let firstLCapital = function(str){}