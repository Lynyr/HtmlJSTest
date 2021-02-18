<?php
  $array = [
    "https://i.imgur.com/or5foMa.jpg",
    "https://i.imgur.com/g82jRNO.jpg",
    "https://i.imgur.com/PU6tKcK.jpg",
    "https://i.imgur.com/QbUzipX.jpg"
  ];
?>
<img src = "<?php echo $array[rand(0, sizeof($array)-1)]>";
