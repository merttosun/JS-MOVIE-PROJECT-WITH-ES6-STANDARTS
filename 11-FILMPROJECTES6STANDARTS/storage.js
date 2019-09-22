class Storage {
    static addFilmToStorage (newFilm){
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
    
        //array e obje atıyoruz 
    
    
        localStorage.setItem("films",JSON.stringify(films));
    
    
    }
    
    static getFilmsFromStorage (){
        let films;
    
        if( localStorage.getItem("films") === null){
    
            //hiç key yoksa henüz
            films = [];
        }else{
    
            films = JSON.parse(localStorage.getItem("films"));
    
        }
    
        return films;
    }
    
    static deleteFilmFromStorage ( filmTitle){
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film,index){
            if(film.title === filmTitle) {
                films.splice(index,1);
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static clearAllFilmsFromStorage  () {
        localStorage.removeItem("films"); // films keyini silerek tüm filmleri silmiş oluyoruz.
        
    }
}
