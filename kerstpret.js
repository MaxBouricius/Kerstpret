const afbeeldingen = [
    /* 1 */ ["https://cdn.pixabay.com/photo/2017/12/16/22/08/christmas-3023415_960_720.jpg", true], // VERTICAL IMAGE!!!
    /* 2 */ ["https://www.wallpaperup.com/uploads/wallpapers/2013/12/07/187244/45535b5b05c28d5a5ec4a79fc9f28461-375.jpg", false],
    /* 3 */ ["https://www.wallpaperup.com/uploads/wallpapers/2013/12/02/182304/a72b0fb47809b5419a0f6e07272d7074-375.jpg", false],
    /* 4 */ ["https://www.wallpaperup.com/uploads/wallpapers/2012/12/19/25735/9a8ea0acd7b0e60f5a724616829930a9-375.jpg", false],
    /* 5 */ ["https://www.wallpaperup.com/uploads/wallpapers/2013/07/26/122565/4662443c7f3b5be1bf35247435380956-375.jpg", false],
    /* 6 */ ["https://www.wallpaperup.com/uploads/wallpapers/2012/12/01/23328/c520d34c677c93aa47fac381da81e28a-375.jpg", false],
    /* 7 */ ["https://www.wallpaperup.com/uploads/wallpapers/2013/12/03/183615/742b5c8e15920e3ef621fdc2aa1d8c27-375.jpg", false],
    /* 8 */ ["https://cdn.pixabay.com/photo/2017/01/28/16/18/christmas-2015729_960_720.jpg", true], // VERTICAL IMAGE!!!
    /* 9 */ ["https://www.wallpaperup.com/uploads/wallpapers/2012/12/01/23389/e646479096a19647013cd27122ae0540-375.jpg", false],
    /* 10 */ ["https://www.wallpaperup.com/uploads/wallpapers/2014/12/15/554987/17709bfee112d45ef9bf64e039f545ea-375.jpg", false],
];

// eerst maak ik een variable die ik koppen aan de wrapper
let wrapper = document.getElementById('wrapper');

// nu ga ik een forloop maken
for(i=0;i<afbeeldingen.length;i++){
    let afbeelding = document.createElement('img');
    afbeelding.setAttribute('src', afbeeldingen[i][0]);
    afbeelding.setAttribute('alt','${afbeeldingen[i]}e kerstfoto.');
    afbeelding.setAttribute('width', '100%');
    afbeelding.setAttribute('heigth', '100%');
// nu ga ik ervoor zorgen dat grotere fotos andere behandeling krijgen
    if(afbeeldingen[i][1] === true){
        afbeelding.setAttribute('id', 'verticalSpan');
        afbeelding.setAttribute('style', 'margin: auto;')
    } else {
      afbeelding.setAttribute('id', 'normalefoto');
    }
// dit was het

    wrapper.appendChild(afbeelding);
}
