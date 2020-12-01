<?php
$errors = '';
$myemail = 'prabhav.jain10@gmail.com';//<-----Put Your email address here.

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone_number = $_POST['phone'];
$contact = $_POST['contact'];
$message = $_POST['message'];

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Phone Number: $phone_number \n Preferred Contact Method: $contact \n Message \n $message";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: index.html');
}
?>
