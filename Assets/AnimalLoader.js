//Author @ Paul Biocco

//Declare variables
var animalDesc;                                                  //Animal description
var animalImgName;                                               //Image file name
var animalName;                                                  //Animal name
var animalID;

function displayAnimalInfo(){  //Displays animal information to the browser.

    //Clear animalInfoArea from previous interactions
    document.getElementById("animalInfoArea").innerHTML = "";

    //Dynamically create a dive for both the text area and the image box.
    document.getElementById("animalInfoArea").innerHTML += "<div id = 'imageContainer'></div>"
    document.getElementById("animalInfoArea").innerHTML +=  "<div id = 'infoContainer'></div>";
    document.getElementById("imageContainer").innerHTML = "<img src="+ animalImgName+ " alt='animalName'>";
    document.getElementById("infoContainer").innerHTML =  "<h4 id = 'infoText'>" + animalDesc + " </h4>";

}

function loadAnimalInfo(){ //Getting Animal's ID

      var animalID = document.getElementById("animalChooser").value;
      if(animalID >= 0 && animalID <= 10)  document.getElementById("animalChooser").value = animalID;   //Set the drop down box to the appropriate
    

  $.ajax(
     {
         data: {animalID:animalID},
         url: "/Assets/animalFinder.php",
         method: "POST",
         error: function(res, textStatus, errorThrown)  { //Give error message if failed
           console.log(textStatus, errorThrown);
           console.log("Error in loadAnimalInfo()");
         },
         success: function(response) {  //Will fetch the animal information from the database in JSON format
             console.log(response);
             if(response == "invalidEntry"){
                  alert("This is not a valid animal ID. Please try again");
                  document.getElementById("animalChooser").value = 0;
             }else{
             animalInfo = JSON.parse(response);

             // document.getElementById("animalInfoArea").innerHTML = response;  Previously used from Assignment 2.

             //Give values
             animalName = animalInfo["Animal"];
             animalImgName = animalInfo["AnimalFile"];
             animalDesc = animalInfo["AnimalDesc"];

             displayAnimalInfo();

            }
         }
     }
  );
}
