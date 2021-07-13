<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$mail = new PHPMailer(true);

try{
	//$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host='smtp.yandex.ru';
	$mail->SMTPAuth = true;
	$mail->Username = 'nikita.n-top';
	$mail->Password = 'kfkkmrhfnfyujqdk';
	//$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
	$mail->Port = 25;

	$mail->setFrom('nikita.n-top@yandex.ru', 'Mailer');
	$mail->addAddress('nikita.n-top@yandex.ru');
	//$mail->addAttachment('/var/tmp/file.tar.gz');

	$mail->isHTML(true);
	$mail->Subject = "New Mail From Website!";
	$mail->Body = $Body;
	//для клиентов без html
	$mail->AltBody = $Body;

	$mail->send();
	echo 'success';
}
catch (Exception $e) {
	echo "Ошибка при отправлении сообщения: {$mail->ErrorInfo}";
}

?>
