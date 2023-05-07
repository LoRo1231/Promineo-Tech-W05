//Menu App for Favorite Books & Characters

class FavoriteCharacters{
    constuctor (name, book){
        this.name = name;
        this.book = book;
        this.favoriteCharacter = []; //does not add names to array
    }
addCharacter (name){
    this.favoriteCharacter.push(this.name);
}

describe(){
    return `${this.name} is from the book : ${this.book}`; //This line is not returning
}
}

//---------------------------------------------------------------

class FavoriteBooks{
    constructor (book){
        this.book = book;
        this.favoriteBooks = []; //does not add to array
    }
addFavoriteBook (book){
        this.favoriteBooks.push(book);
}
}

//------------------------------------------------------------------

class Menu{

start(){
    let selection = this.showMainMenuOptions(); //top-down devlp. this doesn't exist yet
        while (selection != 0){
            switch (selection){
                case '1':
                    this.addFavoriteCharacter(); //need to create later - Created on line 80
                    break;
                case '2':
                    this.addFavoriteBook(); //need to create later - Created on line 86
                    break;
                case '3':
                    this.deleteFavoriteCharacter(); //need to create later - Created on line 91
                    break; 
                case '4':
                    this.deleteFavoriteBook(); //need to create later - Created on line 98
                    break;
                case '5':
                    this.displayFavoriteBooks(); //need to create later - Created on line 113
                    break;
                case '6':
                    this.displayFavoriteCharacters(); //need to create later - Created on line 105
                    break;
                default:
                    selection = 0;  
            }
        selection = this.showMainMenuOptions();
        }
    alert ('Thanks for stopping by!'); //this appears properly
}

showMainMenuOptions(){ //This appears as it should but does not re-appear after input
    return prompt(`
    0) Exit
    1) Add Favorite Character
    2) Add Favorite Book
    3) Delete A Character
    4) Delete A Book
    5) Display Books
    6) Display Characters
    `);
}

addFavoriteCharacter(){
    let name = prompt("Who is your favorite book character?");
    let book = prompt("What book are they from?");
    this.favoriteCharacter(new FavoriteCharacters(name,book));
}

addFavoriteBook (){
    let name = prompt("What is your favorite book?");
    this.addFavoriteBook(new FavoriteBooks(name));
}

deleteFavoriteCharacter (){
    let index = prompt("Enter the index number of the character you'd like to delete");
    if (index > -1 && index < this.favoriteCharacter){
        this.favoriteCharacter.name.splice(index,1);
    }
}

deleteFavoriteBook (){
    let index = prompt("Enter the index number of the book you'd like to delete");
    if (index > -1 && index < this.favoriteBooks){
        this.favoriteBooks.name.splice(index,1);
    }
}

displayFavoriteCharacters (){
    let characterString = '';
    for (let i = 0; i < this.favoriteCharacter.length; i++){
        characterString += i + ')' + this.favoriteCharacter[i].name + '\n';
    }
    alert(characterString);
}

displayFavoriteBooks (){
    let bookString = '';
    for (let i = 0; i < this.favoriteBooks.length; i++){
        bookString += i + ')' + this.favoriteBooks[i].name + '\n';
    }
    alert(bookString);
}

}

let menu = new Menu();
menu.start();

