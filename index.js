
let data = [
  {
    photo: "img/Budapest.jpg",
    title: "Budapest",
    description: "Population: 1,7 million  Area: 525,2 km² Year of foundation: 1873"
  }, {
    photo: "img/Prague.jpg",
    title: "Prague",
    description: "Population: 1,3 million Area: 496,2 km² Year of foundation: 1344",
  }, {
    photo: "img/Bratislava.jpg",
    title: "Bratislava",
    description: "Population: 0,5 million Area: 367,6 km² Year of foundation: 907",
  }, {
    photo: "img/Berlin.jpg",
    title: "Berlin",
    description: "Population: 3,6 million Area: 891,8 km² Year of foundation: 1237",
  }, {
    photo: "img/Rome.jpg",
    title: "Rome",
    description: "Population: 2,8 million Area: 1 285 km² Year of foundation: 753BC",
  }, {
    photo: "img/Madrid.jpg",
    title: "Madrid",
    description: "Population: 3,2 million Area: 604,3 km² Year of foundation: 865",
  }, {
    photo: "img/Paris.jpg",
    title: "Paris",
    description: "Population: 2,1 million Area: 105,4 km² Year of foundation: 259BC",
  }
];

let currentPhoto = 0;


function loadPhoto(photoNumber) {
  $("#main-photo").attr("src", data[photoNumber].photo);

  $("#main-photo-title").text(data[photoNumber].title);
  $("#main-photo-description").text(data[photoNumber].description);

  $("#main-photo").attr("alt", data[photoNumber].title);


  $("#thumbnails-container").removeClass("selected");

  $(`#thumbnails-container[data-number=${photoNumber}]`).addClass("selected");

  currentPhoto = photoNumber;
}


for (let i = 0; i < data.length; i++) {


  let thumbnail = `
    <div class="thumbnail" data-number="${i}">
        <div class="thumbnail-title">
            <h6>${data[i].title}</h6>
         </div>
        <img class="thumbnail-img" src="${data[i].photo}" data-number="${i}" alt="">
    </div>`;
  $("#thumbnails-container").append(thumbnail);
}



$(".thumbnail").on("click", (event) => {

  currentPhoto = $(event.target).data("number");

  loadPhoto(currentPhoto);
});


$("#forward").on("click", () => {
  let nextPhoto = currentPhoto + 1;
  if (nextPhoto === data.length) {
    nextPhoto = 0;
  }

  loadPhoto(nextPhoto);
});

$("#back").on("click", () => {
  let prevPhoto = currentPhoto - 1;
  if (prevPhoto === -1) {
    prevPhoto = data.length - 1;
  }

  loadPhoto(prevPhoto);
});

loadPhoto(0);