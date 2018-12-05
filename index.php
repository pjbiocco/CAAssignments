<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <!-- Author @ Paul Biocco -->
    <meta charset="utf-8">
    <title>Demo Dynamic Div creation</title>
  </head>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <script type="text/javascript" src="/Assets/AnimalLoader.js" ></script>

   <!-- Frame busting script. Prevents clickjacking. -->
   <style id="antiClickjack">body{display:none !important;}</style>
   <script type="text/javascript">
    if (self === top) {
        var antiClickjack = document.getElementById("antiClickjack");
        antiClickjack.parentNode.removeChild(antiClickjack);
    } else {
        top.location = self.location;
    }
  </script>
   
  <body>

    <!-- Top section of site. Will contain the chooser -->
    <div id = "pickerArea">
      <h3>Use the thingie to pick an animal!</h3>

      <select id="animalChooser" oninput ="loadAnimalInfo()">
        <option value="0">Choose an animal!</option>
        <option value="1">1. Dog</option>
        <option value="2">2. Duck</option>
        <option value="3">3. Fish</option>
        <option value="4">4. Giraffe</option>
        <option value="5">5. Lion</option>
        <option value="6">6. Octopus</option>
        <option value="7">7. Snake</option>
        <option value="8">8. Swan</option>
        <option value="9">9. Tiger</option>
        <option value="10">10. Turtle</option>
      </select>

    </div>

    <!-- Bottom section will contain an image -->

    <h3 id ="animalInfoArea">

    </h3>

  </body>

  <?php if(isset($_GET['animalID'])) { ?>  <!-- Only execute if using the URL bar for navigation. Will load animal info based on value -->

  <script type="text/javascript">
    document.getElementById("animalChooser").value = <?php echo $_GET['animalID']; ?>;
    loadAnimalInfo(<?php echo $_GET['animalID']; ?>);
  </script>

  <?php } ?>
</html>
