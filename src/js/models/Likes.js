export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);

        //Persist data in localStorage
        this.persistData();
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        //Persist data in localStorage
        this.persistData();
    }
    
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        //converts the array to a string, so we can store in storage 
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        //convert the string back to the array
        const storage = JSON.parse(localStorage.getItem('likes'));
       
        //Restore likes from the localStorage
        if(storage) this.likes = storage;
    }
}