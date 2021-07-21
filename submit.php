<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'kdemon1234567890@gmail.com';
    $email_subject = "New message for you";
    $email_body = "User Name  : $name.\n".
                    "User Email : $visitor_email.\n".
                        "User Message : $message.\n";
    $to = "2019kucp1120@iiitkota.ac.in";
     
    $headers = "from : $email_from \r\n";
    $headers = "reply to : $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("location: index.html?mail-sent");

?>