//console.log(JSON.parse(movies));

let allMovies = JSON.parse(movies);

for (let i = 0; i < allMovies.length; i++) {
    document.getElementById(
        "moviesResult"
    ).innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-around" style="color:white; margin-bottom: 20px; padding: 0;">
<div class="card flexbox-card" style="width: 18rem; background:rgb(24,24,24);">
    <img class="card-img-top" src=${allMovies[i].image} alt="${allMovies[i].movieName}">
    <div class="card-body">
        <h5 class="card-title">${allMovies[i].movieName}</h5>
        <p class="card-text" style=" font-size:10px;">${allMovies[i].description}</p>
        <p class="p text-success">Director : ${allMovies[i].director}</p>
        <p class="p text-success">Gerne : ${allMovies[i].gerne}</p>
        <p class="p text-success">Year : ${allMovies[i].year}</p>
        <p class="p text-success">Rate : ${allMovies[i].rate}</p>
        <div class="d-flex align-items-center">
        <button class="btn btn-primary-outline text-warning btnsLike" id="result">Like <span>👍</span></button>
        <h4 class="bg-success text-light rounded-circle movieLikes" style="width: 20%; text-align:center;">${allMovies[i].likes}</h4>
            
        </div>
    </div>
</div>
</div>`;
}

let btns = document.getElementsByClassName("btnsLike");
let butons = document.getElementsByClassName("movieLikes");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        butons.item(i);
        resultLikes(i);
    });
}

function resultLikes(index) {
    allMovies[index].likes += 1;
    butons.item(index).innerHTML = allMovies[index].likes; // FALSE
}

//  Sort the Movies

allMovies.sort(function(a, b) {
    return b.likes - a.likes;
});

document.getElementById("sort").addEventListener("click", function() {
    allMovies.sort(function(a, b) {
        return b.likes - a.likes;
    });

    let sortindMoviesDom = "";

    for (let i = 0; i < allMovies.length; i++) {
        sortindMoviesDom += `<div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-around" style="color:white; margin-bottom: 20px; padding: 0;">
    <div class="card flexbox-card" style="width: 18rem; background:rgb(24,24,24);">
        <img class="card-img-top" src=${allMovies[i].image} alt="${allMovies[i].movieName}">
        <div class="card-body">
            <h5 class="card-title">${allMovies[i].movieName}</h5>
            <p class="card-text" style=" font-size:10px;">${allMovies[i].description}</p>
            <p class="p text-success">Director : ${allMovies[i].director}</p>
            <p class="p text-success">Gerne : ${allMovies[i].gerne}</p>
            <p class="p text-success">Year : ${allMovies[i].year}</p>
            <p class="p text-success">Rate : ${allMovies[i].rate}</p>
            <div class="d-flex align-items-center">
            <button class="btn btn-primary-outline text-warning btnsLike" id="result">Like <span>👍</span></button>
            <h4 class="bg-success text-light rounded-circle movieLikes" style="width: 20%; text-align:center;">${allMovies[i].likes}</h4>
                
            </div>
        </div>
    </div>
    </div>`;
    }

    document.getElementById("moviesResult").innerHTML = sortindMoviesDom;

    let btns = document.getElementsByClassName("btnsLike");
    let butons = document.getElementsByClassName("movieLikes");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            butons.item(i);
            resultLikes(i);
        });
    }
});