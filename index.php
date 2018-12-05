<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <!-- Author @ Paul Biocco -->
    <meta charset="utf-8">
    <title>Demo Dynamic Div creation</title>
  </head>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <script type="text/javascript" src="/Assets/AnimalLoader.js" ></script>

  <body>

  <script type="text/javascript">
    loadAnimalInfo(<?php if(isset($_GET['animalID'])) echo $_GET['animalID'];?>);
  </script>

    <!-- Top section of site. Will contain the chooser -->
    <div id = "pickerArea">
      <h3>Use the thingie to pick an animal!</h3>

      <select id="animalChooser" oninput ="getAnimalDesc()">
        <option value="default">Choose an animal!</option>
        <option value="dog">1. Dog</option>
        <option value="duck">2. Duck</option>
        <option value="fish">3. Fish</option>
        <option value="giraffe">4. Giraffe</option>
        <option value="lion">5. Lion</option>
        <option value="octopus">6. Octopus</option>
        <option value="snake">7. Snake</option>
        <option value="swan">8. Swan</option>
        <option value="tiger">9. Tiger</option>
        <option value="turtle">10. Turtle</option>
      </select>

    </div>

    <!-- Bottom section will contain an image -->

    <h3 id ="animalInfoArea">

    </h3>

  </body>
</html>
