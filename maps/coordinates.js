// Spot markers to explore (center of spot)
/** cUni 3 spots to explore **/
var universum = {
    lat: 53.106733,
    lng: 8.84503
};

var maritim = {
    lat: 53.108020,
    lng: 8.845980
};

var haus = {
    lat: 53.106572,
    lng: 8.841387
};

/** lUni 2 spots to explore **/
var lUniRotaryClub  = {
    lat: 53.105926,
    lng: 8.836219
}

var lUniPlayingGround = {
    lat: 53.107882,
    lng: 8.832095
}

/** rUni 3 spots to explore**/

var rUniCanteenLake = {
    lat: 53.107470,
    lng: 8.850707
}

var rUniLibrary = {
    lat: 53.108513,
    lng: 8.85384
}

var rUniBuildingGW2 = {
    lat: 53.106950,
    lng: 8.853877
}

/** bUni 1 spot to explore**/

var bUniMunteHotel = {
    lat: 53.104259,
    lng: 8.841149
}

/** tUni 2 spots to explore**/
var tUniKuhgraben = {
    lat: 53.109170,
    lng: 8.844626
}

var tUniMaxPlanckInstitut = {
    lat: 53.109653,
    lng: 8.847447
}
// Squares to the spots (areas to be uncovered)
/** outerCoords = ? (I assume, cover Bremen) **/
var outerCoords = [{
    lat: 53.057950,
    lng: 8.816177
},
    {
        lat: 53.120631,
        lng: 8.820297
    },
    {
        lat: 53.120817,
        lng: 8.868027
    },
    {
        lat: 53.062465,
        lng: 8.868019
    }
];

/** cUni spot squares **/
var universumCords = [{

    lat: 53.106465,
    lng: 8.844368
},
    {
        lat: 53.106955,
        lng: 8.844368
    },

    {
        lat: 53.106955,
        lng: 8.845561
    },
    {
        lat: 53.106465,
        lng: 8.845561
    },
];


var maritimCords = [{

    lat: 53.106934,
    lng: 8.843850
},
    {
        lat: 53.107797,
        lng: 8.843850
    },

    {
        lat: 53.107772,
        lng: 8.845625
    },
    {
        lat: 53.107015,
        lng: 8.845625
    },
];

//Haus Am Walde missing?

/** lUni spot square **/
var lUniRotaryClubSquare = [{

    lat: 53.106139,
    lng: 8.835800
},
    {
        lat: 53.105913,
        lng: 8.835800
    },

    {
        lat: 53.105913,
        lng: 8.836379
    },
    {
        lat: 53.106139,
        lng: 8.836379
    },
];

var lUniPlayingGroundSquare = [{
    lat: 53.108127,
    lng: 8.831118
},
    {
        lat: 53.107595,
        lng: 8.831118
    },

    {
        lat: 53.107595,
        lng: 8.832116
    },
    {
        lat: 53.108127,
        lng: 8.832116
    },
];

/** rUni spot squares **/
var rUniCanteenLakeSquare = [{
    lat: 53.107817,
    lng: 8.850052
},
    {
        lat: 53.107573,
        lng: 8.850052
    },

    {
        lat: 53.107573,
        lng: 8.851501
    },
    {
        lat: 53.107817,
        lng: 8.851501
    },
];

var rUniLibrarySquare = [{
    lat: 53.108513,
    lng: 8.853378
},
    {
        lat: 53.107669,
        lng: 8.853378
    },

    {
        lat: 53.107669,
        lng: 8.854237
    },
    {
        lat: 53.108513,
        lng: 8.854237
    },
];

var rUniBuildingGW2Square = [{
    lat: 53.107408,
    lng: 8.853180
},
    {
        lat: 53.106429,
        lng: 8.853180
    },

    {
        lat: 53.106429,
        lng: 8.854521
    },
    {
        lat: 53.107408,
        lng: 8.854521
    },
];

/** bUni spot square **/
var bUniMunteHotelSquare = [{
    lat: 53.104526,
    lng: 8.840827
},
    {
        lat: 53.104136,
        lng: 8.840827
    },

    {
        lat: 53.104136,
        lng: 8.841455
    },
    {
        lat: 53.104526,
        lng: 8.841455
    },
];

/** tUni spot squares**/
var tUniKuhgrabenSquare = [{
    lat: 53.108815,
    lng: 8.844954
},
    {
        lat: 53.109340,
        lng: 8.844954
    },

    {
        lat: 53.109340,
        lng: 8.844010
    },
    {
        lat: 53.108815,
        lng: 8.844010
    },
];

var tUniMaxPlanckInstitutSquare = [{
    lat: 53.109998,
    lng: 8.846694
},
    {
        lat: 53.109605,
        lng: 8.846694
    },

    {
        lat: 53.109605,
        lng: 8.847622
    },
    {
        lat: 53.109998,
        lng: 8.847622
    },
];

// marker to center map
var cUni = {
    lat: 53.1065845,
    lng: 8.843579 // new
};
var tUni = {
    lat: 53.1100755,
    lng: 8.843579 // new
}
var bUni = {
    lat: 53.1030935,
    lng: 8.843579 //new
}
var lUni = {
    lat: 53.1065845,
    lng: 8.832663
}
var rUni = {
    lat: 53.1065845,
    lng: 8.854495
}

// map squares if all spots explored

var cUniSquare = [{
    lat: 53.108330,
    lng: 8.838121
},
    {
        lat: 53.108330,
        lng: 8.849037
    },

    {
        lat: 53.104839,
        lng: 8.849037
    },
    {
        lat: 53.104839,
        lng: 8.838121
    },
];

var bUniSquare = [{
    lat: 53.104839,
    lng: 8.838121
},
    {
        lat: 53.104839,
        lng: 8.849037
    },

    {
        lat: 53.101348,
        lng: 8.849037
    },
    {
        lat: 53.101348,
        lng: 8.838121
    },
];

var lUniSquare = [{
    lat: 53.108330,
    lng: 8.827205
},
    {
        lat: 53.108330,
        lng: 8.838121
    },

    {
        lat: 53.104839,
        lng: 8.838121
    },
    {
        lat: 53.104839,
        lng: 8.827205
    },
];

var rUniSquare = [{
    lat: 53.108330,
    lng: 8.849037
},
    {
        lat: 53.108330,
        lng: 8.859953
    },

    {
        lat: 53.104839,
        lng: 8.859953
    },
    {
        lat: 53.104839,
        lng: 8.849037
    },
];

var tUniSquare = [{
    lat: 53.111821,
    lng: 8.838121
},
    {
        lat: 53.111821,
        lng: 8.849037
    },

    {
        lat: 53.108330,
        lng: 8.849037
    },
    {
        lat: 53.108330,
        lng: 8.838121
    },
];

var hotelThings = {
    lat: 53.106068,
    lng: 8.848359
};

var galileo = {
    lat: 53.107397,
    lng: 8.849184
};
