<?php

  //post creates an array containing the entries of the form
  // [name: entry]
  if (isset($_POST['message'])) {
  //declares a variable msg_name which contains the array value for the 'name' key
    $msg_name = $_POST['name'];
    $msg_email = $_POST['email'];
    $msg_message = $_POST['message'];

    //declaring variables to hold email receiver and the email subject
    $to = "m.siegrist92@gmail.com";
    $subject = "Dear skateREV...";

    //writing the message in a varialbe called body - .= is php syntax for appending
    $body = "Howdy, its ";
    $body .= $msg_name;
    $body .= "\r\n";
    $body .= $msg_message;
    $body .= "\r\n";
    $body .= "Email me back at ";
    $body .= $msg_email;


    mail($to, $subject, $body);
};


?>

<html lang="en">
<head>
  <!--Copyright © 2020 SkateREV, www.skaterev.com-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="keywords" content="skateboards, skateboarding, skating, gear, reviews, review, decks, wheels, shoes, trucks, bearings, skate, skaterev, contact">
  <meta name="description" content="SkateREV is a skater-run, skater-written review site. Send us a message through our contact form.">
  <link rel="stylesheet" href="../styles/navbar_update.css">
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap"
  rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet">
  <title>Contact</title>

</head>

<body>

  <div id="nav_bar">

    <a href="../index.html"><img class="logo_image" src="../images/logo/typeface_logo.svg"></a>

    <ul class="tablet_nav">
      <li class="to_hover"><a>Reviews</a>
        <ul>
          <li><a href="../decks/index.html">Decks</a></li>
          <li><a href="../trucks/index.html">Trucks</a></li>
          <li><a href="../shoes/index.html">Shoes</a></li>
          <li><a href="../wheels/index.html">Wheels</a></li>
          <li><a href="../misc/index.html">Misc</a></li>
        </ul>
      </li>
      <li><a href="../about/index.html">About</a></li>
      <li><a href="index.php">Contact</a></li>
    </ul>
    <a id="nav_mobile" href="#">
      <img src="../images/icons/nav_mobile.svg" height=80px>
    </a>
    <ul id="mobile_nav_list" style="display:none;">
      <li><a href="../decks/index.html">Decks</a></li>
      <li><a href="../trucks/index.html">Trucks</a></li>
      <li><a href="../shoes/index.html">Shoes</a></li>
      <li><a href="../wheels/index.html">Wheels</a></li>
      <li><a href="../misc/index.html">Misc</a></li>
      <li><a href="../about/index.html">About</a></li>
      <li><a href="index.php">Contact</a></li>
    </ul>
  </div>

  <!--php script is in the file so the action targets this page
    we are using POST to acces the user's input--->
  <form action="index.php" method="POST">
    <p class="proposal">Find a bug? Want to see a shoe? Game of SKATE challenge?
    </p>

    <h2 class="field_title name_title">Name</h2>
    <input type="text" id="name_field" name="name" class="input_field" required
    pattern = "^[a-zA-Z ]*$">

    <h2 class="field_title email_title">Email</h2>
    <input type="email" id="email_field" name="email" class="input_field" required>

    <h2 class="field_title msg_title">Message</h2>
    <input type="text" id="message_field" name="message"
    class="input_field" required
    pattern="^[a-zA-Z0-9?!. ''""]*$">

    <input type="submit" value="submit" class="send_button">
  </form>

  <script src="../js/mobile_drop.js"></script>


</body>

</html>
