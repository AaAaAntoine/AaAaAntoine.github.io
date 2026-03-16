function toggleSNIO() {

    var contenu = document.getElementById("descriptionSNIO");

    if (contenu.style.display === "block") {
        contenu.style.display = "none";
    } else {
        contenu.style.display = "block";
    }

}

function toggleBAC() {

    var contenu = document.getElementById("notesBAC");

    if (contenu.style.display === "block") {
        contenu.style.display = "none";
    } else {
        contenu.style.display = "block";
    }

}

function robot(Id){
    var image;

    if (Id =="face"){
        image = "robot_face.jpg";
    }
    else if (Id =="dessus"){
        image = "robot_dessus.jpg";
    }
    else if (Id =="derriere"){
        image = "robot_derriere.jpg";
    }

    document.getElementById("monImage").src = image;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const description = {
        "voyage.jpg": "Depuis longtemps, j'aime beaucoup voyager car cela me permet de découvrir de nouveaux pays, de m’immerger dans des cultures différentes et aussi d’apprendre de nouvelles langues.",
        "sport.jpg": "J'aime pratiquer du sport, notamment le badminton et le tennis de table, j'en ai fait pendant plusieurs années en club. J’ai également eu l'occasion durant ces années d'encadrer des jeunes.",};
    const zone = document.getElementById("description-text");
    document;addEventListener("click",(e)=>{
        
        const nom = e.target.getAttribute("src");
        zone.textContent = description[nom] || "Aucune description disponible";
    });
});