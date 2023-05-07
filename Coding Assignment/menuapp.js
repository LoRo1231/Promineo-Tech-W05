//Menu App for Favorite Books & Characters

class FavoriteCharacters{
        constructor (name){
            this.name = name;
            // this.favoriteCharacters = []; //does not add to array
        }

    describe(){
        return `${this.name} is on of my favorite characters`; //This line is not returning
    }
}

//---------------------------------------------------------------

class FavoriteBooks{
    constructor (book){
        this.book = book;
        // this.favoriteBooks = []; //does not add to array
    }

    describe(){
        return `${this.book} is one of my favorites.`; //This line is not returning
    }
}

//------------------------------------------------------------------

class Menu{

    constructor(){
        this.favoriteBooks = [] //moved arrays inside the menu and now the menu will keep showing properly
        this.favoriteCharacters = [];
        this.selectedBook = null;
        this.selectedCharacter = null;
    }

        start(){
            let selection = this.showMainMenuOptions(); //top-down devlp. this doesn't exist yet
                while (selection !== 0){
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

    showMainMenuOptions(){ //fixed after moving arrays inside menu class
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
        this.favoriteCharacters.push(new FavoriteCharacters(name));
    }

    addFavoriteBook (){
        let book = prompt("What is your favorite book?");
        this.favoriteBooks.push(new FavoriteBooks(book));
        }

    deleteFavoriteCharacter (){ //can't test, array is not showing
        let index = prompt("Enter the index number of the character you'd like to delete");
        if (index > -1 && index < this.favoriteCharacter){
            this.favoriteCharacter.name.splice(index,1);
        }
    }

    deleteFavoriteBook (){ //can't test, array is not showing
        let index = prompt("Enter the index number of the book you'd like to delete");
        if (index > -1 && index < this.favoriteBooks){
            this.favoriteBooks.name.splice(index,1);
        }
    }

    displayFavoriteCharacters (){
        //code below now works for showing the view menu prompt but doesn't return 
        //the value after imputting the index number
        let index = prompt("Select number index number of character you'd like to view: ");
        if (index > -1 && index < this.favoriteCharacters.length){
            this.selectedCharacter = this.favoriteCharacters[index];
        }
        let characterString = '';
            for (let i = 0; i < this.favoriteCharacter.length; i++){
            characterString += i + ')' + this.favoriteCharacter[i].name + '\n';
            }
            alert(characterString);
        }


    displayFavoriteBooks (){
        //code below now works for showing the view menu prompt but doesn't return 
        //the value after imputting the index number
        let index = prompt("Select index number of book you'd like to view: ");
        if (index > -1 && index < this.favoriteBooks.length){
            this.selectedBook = this.favoriteBooks[index];
        }
        let bookString = '';
            for (let i = 0; i < this.favoriteBooks.length; i++){
            bookString += i + ')' + this.favoriteBooks[i].name + '\n';
            }
            alert(bookString);
    }
}

let menu = new Menu();
menu.start();

