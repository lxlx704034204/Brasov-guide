$(function() {
  initMarkers();
  initRestaurantsTemplate();
  $(".clickable").on("click", addMarker);

})

function initMarkers() {
  window.markers = [{
      name: "Gaura Dulce",
      picture: "gaura-dulce-9.png",
      index: 0,
      id: "gauraDulce",
      rating: 4.3,
      address: "Piața Sfatului 14, Brașov",
      website: "https://www.gauradulce.ro/",
      nameWebSite: "gauradulce.ro",
      phone: "0268 523 099",
      coordonates: {
        lat: 45.641176,
        lng: 25.590090
      }
    },
    {
      name: "Sergiana",
      picture: "sergiana-brasov.png",
      index: 1,
      id: "sergiana",
      rating: 4.5,
      address: "Mureșenilor 28, Brașov",
      website: "https://www.sergianagrup.ro/restaurante/restaurant-sergiana/",
      nameWebSite: "sergiana.ro",
      phone: "0268 419 775",
      coordonates: {
        lat: 45.645223,
        lng: 25.589811
      }
    },
    {
      name: "Bistro de l'arte",
      picture: "bistro-del-arte.png",
      index: 2,
      id: "bistro",
      rating: 4.4,
      address: "Piața George Enescu 11Bis, Brașov",
      website: "http://bistrodelarte.ro/",
      nameWebSite: "bistrodelarte.ro",
      phone: "0720 535 566",
      coordonates: {
        lat: 45.643226,
        lng: 25.590797
      }
    },
    {
      name: "Casa Hirscher",
      picture: "casa-hirscher.png",
      index: 3,
      id: "hirsher",
      rating: 4.1,
      address: "Piața Sfatului 12-14, Brașov",
      website: "http://casahirscher.ro/",
      nameWebSite: "casahirscher.ro",
      phone: "0268 410 533",
      coordonates: {
        lat: 45.641194,
        lng: 25.589639
      }
    },
    {
      name: "Festival 39",
      picture: "festival_39.png",
      index: 4,
      id: "festival",
      rating: 4.5,
      address: "Republicii 62, Brașov",
      website: "https://www.festival39.com/",
      nameWebSite: "festival39.com",
      phone: "0743 339 909",
      coordonates: {
        lat: 45.643904,
        lng: 25.594023
      }
    },
    {
      name: "Trattorian",
      picture: "trattorian.png",
      index: 5,
      id: "trattorian",
      rating: 4.5,
      address: "Piața George Enescu 14-15, Brașov",
      website: "https://www.facebook.com/trattorianartisanfood",
      nameWebSite: "trattorianartisanfood",
      phone: "0772 222 555",
      coordonates: {
        lat: 45.643172,
        lng: 25.590186
      }
    },
    {
      name: "Gratar Urban",
      picture: "gratar-urban.png",
      index: 6,
      id: "gratar",
      rating: 4.6,
      address: "Michael Weiss 11, Brașov",
      website: "https://www.facebook.com/GratarUrban",
      nameWebSite: "GratarUrban",
      phone: "0731 832 033",
      coordonates: {
        lat: 45.643902,
        lng: 25.590466
      }
    },
    {
      name: "Vino e Sapori",
      picture: "vino-e-sapori.png",
      index: 7,
      id: "vinoESapori",
      rating: 4.6,
      address: " George Barițiu 13, Brașov",
      website: "http://www.vinoesapori.ro/",
      nameWebSite: "vinoesapori.ro",
      phone: "0368 468 593",
      coordonates: {
        lat: 45.640593,
        lng: 25.586722
      }
    }
  ]
}

function initMap() {

  window.map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: 45.642291,
      lng: 25.588908
    },
    zoom: 16
  });
}

function addMarker(event) {
  var restaurantId = $(this).data("markerIndex");
  var marker = new google.maps.Marker({
    position: markers[restaurantId].coordonates,
    map: new google.maps.Map(document.querySelector('#map'), {
      center: markers[restaurantId].coordonates,
      zoom: 18,

    })
  });
}

function initRestaurantsTemplate() {
  var rendered = Mustache.render($('#restautantTemplate').html(), {
    "restaurant": markers
  });
  $('.restaurantContainer').html(rendered);
}