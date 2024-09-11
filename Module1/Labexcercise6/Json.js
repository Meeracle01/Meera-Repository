const book1 = {
    "title" : "Json",
    "description" : "This  is very tough",
    "author" : "Random",
    "number_of_pages" : 987
    }
   

book1.description = "Not very tough anymore"


const book2 = {
    "title" : "Chicken",
    "description" : "Farm Animal",
    "author" : "Jo",
    "number_of_pages" : 10
    }
  

book2.description = "Not very tough anymore"

let library = [book1,book2]
console.log(library)