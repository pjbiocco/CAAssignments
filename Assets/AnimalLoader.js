//Declare variables
var animalDesc;                                                  //Animal description
var animalImgName;                                               //Image file name
var animalName;                                                  //Animal name
var animalID;

function getAnimalDesc(){
    var animalName = document.getElementById('animalChooser').value; //Animal name


    //Sets the information based off of the drop down box.
    if(animalName == "default" ){
       animalDesc = "";
       animalImgName = "";
    }
    else if(animalName == "dog"){
      animalDesc = "The domestic dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.";
      animalImgName = "Assets/dog.png";
    }
    else if(animalName == "duck"){
      animalDesc = "Duck is the common name for a large number of species in the waterfowl family Anatidae which also includes swans and geese. Ducks are divided among several subfamilies in the family Anatidae; they do not represent a monophyletic group but a form taxon, since swans and geese are not considered ducks.";
      animalImgName = "Assets/duck.png";
    }
    else if(animalName == "fish"){
      animalDesc = "Fish are gill-bearing aquatic craniate animals that lack limbs with digits. They form a sister group to the tunicates, together forming the olfactores. Included in this definition are the living hagfish, lampreys, and cartilaginous and bony fish as well as various extinct related groups.";
      animalImgName = "Assets/fish.png";
    }
    else if(animalName == "giraffe"){
      animalDesc = "The giraffe is a genus of African even-toed ungulate mammals, the tallest living terrestrial animals and the largest ruminants. The genus currently consists of one species, Giraffa camelopardalis, the type species. Seven other species are extinct, prehistoric species known from fossils.";
      animalImgName = "Assets/giraffe.png";
    }
    else if(animalName == "lion"){
      animalDesc = "The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail.";
      animalImgName = "Assets/lion.png";
    }
    else if(animalName == "octopus"){
      animalDesc = "The octopus is a soft-bodied, eight-limbed mollusc of the order Octopoda. Around 300 species are recognised, and the order is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids.";
      animalImgName = "Assets/octopus.png";
    }
    else if(animalName == "snake"){
      animalDesc = "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes. Like all squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales.";
      animalImgName = "Assets/snake.png";
    }
    else if(animalName == "swan"){
      animalDesc = "Swans are birds of the family Anatidae within the genus Cygnus. The swans' close relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are considered a distinct subfamily, Cygninae.";
      animalImgName = "Assets/swan.png";
    }
    else if(animalName == "tiger"){
      animalDesc = "The tiger is the largest cat species, most recognizable for its pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, jaguar, leopard, and snow leopard.";
      animalImgName = "Assets/tiger.png";
    }
    else if(animalName == "turtle"){
      animalDesc = "Turtles are diapsids of the order Testudines characterized by a special bony or cartilaginous shell developed from their ribs and acting as a shield. &quot;Turtle&quot; may refer to the order as a whole or to fresh-water and sea-dwelling testudines. The order Testudines includes both extant and extinct species";
      animalImgName = "Assets/turtle.png";
    }


    //Clear animalInfoArea from previous interactions
    document.getElementById("animalInfoArea").innerHTML = "";

    //Dynamically create a dive for both the text area and the image box.
    document.getElementById("animalInfoArea").innerHTML += "<div id = 'imageContainer'></div>"
    document.getElementById("animalInfoArea").innerHTML +=  "<div id = 'infoContainer'></div>";
    document.getElementById("imageContainer").innerHTML = "<img src="+ animalImgName+ " alt='animalName'>";
    document.getElementById("infoContainer").innerHTML =  "<h4 id = 'infoText'>" + animalDesc + " </h4>";

}
