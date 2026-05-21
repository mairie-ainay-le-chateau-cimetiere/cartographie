
// ======================
// TITRE
// ======================
const titre = "Cimetière communal d'Ainay-le-Château ";

document.addEventListener("DOMContentLoaded", function () {

    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = titre;

    titleDiv.style.position = "absolute";
    titleDiv.style.top = "10px";
    titleDiv.style.left = "50%";
    titleDiv.style.transform = "translateX(-50%)";
    titleDiv.style.zIndex = "9999";
    titleDiv.style.background = "rgba(255,255,255,0.9)";
    titleDiv.style.padding = "8px 15px";
    titleDiv.style.borderRadius = "6px";
    titleDiv.style.fontWeight = "bold";
    titleDiv.style.fontFamily = "Arial";

    document.body.appendChild(titleDiv);
});


// ======================
// LIMITES CARTE
// ======================
function initMapLimits(map) {

    if (!map) return;

    map.setMinZoom(16);
    map.setMaxZoom(22);

    map.setMaxBounds([
        [46.7070, 2.6909],
        [46.7087, 2.6958]
    ]);

    map.options.maxBoundsViscosity = 1.0;
}


// ======================
// POPUPS
// ======================
document.addEventListener("DOMContentLoaded", function () {

    const style = document.createElement('style');

    style.innerHTML = `
        .leaflet-popup-content {
            white-space: pre-wrap;
        }
    `;

    document.head.appendChild(style);
});

// ======================
// STYLE RECHERCHE
// ======================
document.addEventListener("DOMContentLoaded", function () {

    const style = document.createElement('style');

    style.innerHTML = `
        .leaflet-control-search .search-input {
            width: 260px !important;
        }

        .leaflet-control-search .search-tooltip {
            min-width: 260px;
            max-width: 600px;
        }

        .leaflet-control-search .search-tip {
            white-space: nowrap !important;
        }
    `;

    document.head.appendChild(style);
});


// ======================
// LABEL RECHERCHE
// ======================
document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        const searchContainer = document.querySelector('.leaflet-control-search');

        if (searchContainer && !document.getElementById('label-defunts')) {

            const label = document.createElement('span');

            label.id = 'label-defunts';
            label.innerHTML = ' Rechercher un défunt';

            label.style.marginLeft = '8px';
            label.style.fontSize = '14px';
            label.style.fontFamily = 'Arial';
            label.style.fontWeight = 'bold';

            searchContainer.appendChild(label);
        }

    }, 1000);
});


// ======================
// SUPPRESSION ZOOM DOUBLON
// ======================
document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        const zoom = document.querySelectorAll('.leaflet-control-zoom');

        if (zoom.length > 1) {
            zoom[1].remove();
        }

    }, 800);
});

// ======================
// REORGANISATION POPUPS
// PHOTO A LA FIN
// ======================
document.addEventListener("click", function () {

    setTimeout(function () {

        const popups = document.querySelectorAll('.leaflet-popup-content');

        popups.forEach(function (popup) {

            // Cherche une image dans la popup
            const img = popup.querySelector('img');

            if (!img) return;

            // Déplace l'image à la fin
            popup.appendChild(img);

        });

    }, 50);

});

// ======================
// STYLE PHOTOS POPUP
// ======================
document.addEventListener("DOMContentLoaded", function () {

    const style = document.createElement('style');

    style.innerHTML = `
        .leaflet-popup-content img {
            max-width: auto;
            max-height: 600px;
            width: auto;
            height: auto;
            display: block;
            margin: 8px auto;
            border-radius: 6px;
        }
    `;

    document.head.appendChild(style);
});
