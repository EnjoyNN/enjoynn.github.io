<?php
$method = $_SERVER['REQUEST_METHOD'];
//Script Foreach
$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$message = trim($_POST["message"]);
//$departure_page = $_POST['departure-page'];


if((isset($name) && $name != "")){ //Проверка на заполнение

    $to = '46nik46@gmail.com';
    //$to = 'bytka8181@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов


    $subject = 'Заявка с сайта'; //Загаловок сообщения
    
    $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                <p>Имя: '.$name.'</p>
                <p>Номер телефона: '.$phone.'</p>
                <p>Сообщение: '.$message.'</p>
            </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма        
    //$headers .= "From: Письмо из формы <$departure_page>\r\n"; //Наименование и почта отправителя
    
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}