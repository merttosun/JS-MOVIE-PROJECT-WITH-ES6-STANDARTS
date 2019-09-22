// function UI(){

// }
class UI {
    static addFilmToUI (newFilm){
        // console.log(newFilm);
        //table ın tbody sini seçmemiz gerekiyor
        /*
        <!-- <tr>
                                                <td><img src="" class="img-fluid img-thumbnail"></td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                              </tr> -->
                                              <!-- <tr>
                                                <td><img src="" class="img-fluid img-thumbnail"></td>
                                                <td></td>
                                                <td></td>
                                                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                              </tr> -->
                                              */
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        
        `;
    
    }
    
    static clearInputs (element1, element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    
    static displayMessages(message,type) { 
        //hata mesajını formun altındaki hr nin altına ekleyeceğiz
        const cardBody = document.querySelector(".card-body"); // card-body classına göre seçicez. zatne ilk divi seçicegimiz için qSelector zaten direk onu seçicek
        //Alert divini oluşturmak
    
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
    
        cardBody.appendChild(div);
    
        //belli bir süre sonra ui'dan temizlenmesi için
    
        setTimeout(function(){
            div.remove();
        },1000);
    
    }
    
    static loadAllFilms (films){
        const filmList = document.getElementById("films");
       films.forEach(function(film){
            filmList.innerHTML += `
                <tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>
            `;
       });
    }
    
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove(); // a nın parentinin parenti yani tr yi kaldırdık.
    }
    
    static clearAllFilmsFromUI(){
        //filmlistesini seçelim
        const filmList = document.getElementById("films");
    
        // filmList.innerHTML = " ";
        while(filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
    
        }
    
    }
}



