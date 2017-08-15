var markers = [
    {
        name: 'Hombo',
        lat: -36.889907,
        lng: 174.763796
    },
    {
        name: 'Ramarama',
        lat: -36.889907,
        lng: 174.763796
    },
    {
        name: 'Counties Manukau',
        lat:  -37.041573,
        lng: 1174.881557
    },
    {
        name: 'Devonport',
        lat: -36.817135,
        lng: 174.802538
    },
    {
        name: 'Howick',
        lat: -36.899898, 
        lng: 174.915544
    },
    {
        name: 'Henderson',
        lat: -36.871351,
        lng: 174.618343
    },
    {
        name: 'Waima',
        lat: -36.946614, 
        lng: 174.629638
    },
    {
        name: 'Whangaparaoa',
        lat: -36.636357, 
        lng: 174.747909
    },
    {
        name: 'Waitakere',
        lat: -36.890218, 
        lng: 174.690345
    },
    {
        name: 'Ramarama',
        lat: -36.889907,
        lng: 174.763796
    },
    {
        name: 'Ramarama',
        lat: -36.889907,
        lng: 174.763796
    }
    
];

function initMap() {
    
  /*  var homboDojo = {
        lat: -36.889907,
        lng: 174.763796
    };*/
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: lat: 40.9006, lng: 174.8860
    });

    for (var i = 0; i <= markers.length; i++) {
        var marker = new google.maps.Marker({
            position: 'lat: ' + markers[i].lat + ', lng: ' + markers[i].lng,
            map: map,
            icon: 'http://localhost/aikido/wordpress/wp-content/themes/genesis-sample/images/marker-1.svg'
        });

    }

}
