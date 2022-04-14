let data = [
  {
    title: "Zhejiang, China",
    description:
      "My grandpa, otherwise known as Yeye on my dad's side, was born here in the early 1900s.",
    side: "dad",
    exists: "false",
    lat: 30.2655,
    lon: 120.1536,
  },
  {
    title: "Shanxi, China",
    description:
      "Yeye joined the army around 1940s in his early teens. He was extremely smart for his age and was a craftsman, specifically working with glass. He worked in the army until 1945, when he later went to university.",
    side: "dad",
    exists: "false",
    lat: 37.8734,
    lon: 112.5627,
  },
  {
    title: "Shanghai, China",
    description:
      "My grandmother was born and raised in Shanghai. Yeye's army relocated to Shanghai, China where he met and fell in love with my grandmother, Nai Nai.",
    side: "dad",
    exists: "false",
    lat: 31.2304,
    lon: 121.4737,
  },
  {
    title: "Xian, China",
    description:
      "Once Nai Nai and Ye ye got married, Yeye went to Xi'an Normal University, the capital of the province Shanxi, where he specialized in finance. The term, normal universities, is a reference to institutions that are created to train teachers.",
    side: "dad",
    lat: 34.1576,
    lon: 108.8934,
  },
  {
    title: "Fuzhou, Fujian",
    description:
      "Encouraged by the Chinese government to use their education to help poorer provinces like Fujian, they moved to Fuzhou, Fujian where they started a family of 2 sons and 2 daughters - one of them being my dad or as I like to call him, Baba!",
    side: "dad",
    exists: "false",
    lat: 26.0742,
    lon: 119.2965,
  },
  {
    title: "Nanan, Fujian",
    description:
      "I call my grandpa on my moms's side Ah-gong. This means grandpa in the Minan dialect local to where my grandpa is born - Nanan, Fujian. Fun fact, the creator of Tiktok is also Minan descent and the word, Tiktok, originates from the Minan word for dancing. This is a very significant place because it is also where my grandmother, Ah-ma, was born. They were both from rural areas and were arranged married here too!",
    side: "mom",
    exists: "false",
    lat: 24.9604,
    lon: 118.3863,
  },
  {
    title: "SanMing, Fujian",
    description:
      "Ah-Gong and Ah-Ma later moved to SangMing where they started a beautiful family of three girls where the middle sister is my mom!",
    side: "mom",
    exists: "false",
    lat: 26.2638,
    lon: 117.63923,
  },
  {
    title: "Singapore",
    description:
      "The history is a bit blurry here but Ah-Gong's dad moved to Singapore after giving birth to Ah-Gong. We have some relatives here, though I'm not too sure how we're connected. But I hope to one day visit Singapore!",
    side: "mom",
    exists: "false",
    lat: 1.3521,
    lon: 103.8198,
  },
  {
    title: "Fuzhou University, Fujian",
    description:
      "This is the place where my parents met at English Night hosted by their university, fell in love, and got married! They went on a lot of dates around the city, like Gulangyu Island, and my mom would often ride on the back of my dad's bicycle. Something I miss most about home is eating dinner with my parents and listening to their stories back in college.",
    side: "family",
    lat: 26.2638,
    lon: 117.63923,
  },
  {
    title: "Fuzhou General Hospital, Fujian",
    description:
      "My brother and I are seven years apart. Because of China's one child policy, my brother was born in Fuzhou, Fujian while I was born in Toronto, Canada (try to find my marker!)",
    side: "family",
    exists: "false",
    lat: 26.2638,
    lon: 117.63923,
  },
  {
    title: "Toronto, Ontario",
    description:
      "In 2001, my parents courageously immigrated to Toronto, Ontario where they basically restarted their lives in hopes of a better and brighter future for their children. A year later, they gave birth to me and our family was complete :)",
    side: "family",
    exists: "true",
    image: "toronto.png",
    lat: 43.6532,
    lon: -79.3832,
  },
  {
    title: "Berkeley, California",
    description:
      "When I was 10 years old, my brother left for college at Berkeley, California. I missed him a lot while he was away but seeing how carefree he was in California was definitely a big influence on my mindset in life.",
    side: "family",
    exists: "true",
    image: "berk.jpeg",
    lat: 37.8715,
    lon: -122.273,
  },
  {
    title: "San Francisco, California",
    description:
      "After graduating college in 2016, my brother moved to San Francisco and this is where he currently resides!",
    side: "family",
    exists: "true",
    image: "sf.jpeg",
    lat: 37.7749,
    lon: -122.4194,
  },
  {
    title: "Los Angeles, California",
    description:
      "This is where I am now for college! To be honest, it's been hard transitioning but I'm grateful for all the people and adventures I have experienced in the last year.",
    side: "family",
    exists: "true",
    image: "LA.jpeg",
    lat: 34.0522,
    lon: -118.2437,
  },
];

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var map = L.map("map").setView([3, 3], 10);

function color (side){

    if (side == "mom"){
        return violetIcon;
    }

    else if (side == "dad") {
        return redIcon;
    }

    else {
        return greenIcon;
    }
}

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    className: 'map-tiles'
}).addTo(map);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);
// before looping the data, create an empty FeatureGroup
let mom = L.featureGroup();
let dad = L.featureGroup();
let family = L.featureGroup();

data.forEach(function (item, index) {
  // add data to sidebar
  console.log (index);
  console.log (item);

  $('.navigation').append(`<div class="sidebar-item" onclick="flyToIndex(${index})">${item.title}</div>`)
  if (item.exists != "true") {
    var img = new Image();
    img.src = item.image;
    console.log(img.src);

    var marker = L.marker([item.lat, item.lon], {icon: color(item.side)})
      .addTo(map)
      .bindPopup(
        "<strong>" +
          item.title +
          "</strong>" +
          "<br>" +
          item.description
      )
      .openPopup();
  }

  else {
    var marker = L.marker([item.lat, item.lon], {icon: color(item.side)})
    .addTo(map)
    .bindPopup(
      "<strong>" +
        item.title +
        "</strong>" +
        "<br>" +
        item.description +
        '<img src="' +
        item.image +
        '" style="width:100%"' +
        "</img>"
    )
    .openPopup();
  }
 
  if (item.side == "mom") {
    mom.addLayer(marker);
  }

  else if (item.side == "dad") {
      dad.addLayer(marker);
  }

  else {
      family.addLayer(marker);
  }

});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// function to fly to a location by a given id number
function flyToIndex(index) {
    console.log (index);
    map.flyTo([data[index].lat,data[index].lon],12)

	// open the popup
	myMarkers.getLayers()[index].openPopup()
}


//define layers
let layers = {
	"Mom": mom,
    "Dad": dad,
    "Family": family,

}
//add layer control box
L.control.layers(null,layers).addTo(map)

// L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     className: 'map-tiles'
// }).addTo(map);

map.fitBounds(mom.getBounds());
map.fitBounds(dad.getBounds());
map.fitBounds(family.getBounds());


