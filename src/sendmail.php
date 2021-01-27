<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   use PHPMailer\PHPMailer\SMTP;

   require 'modules/PHPMailer/src/Exception.php';
   require 'modules/PHPMailer/src/PHPMailer.php';
   require 'modules/PHPMailer/src/SMTP.php';

   $mail = new PHPMailer(true);

   $mail->IsSMTP();
	 $mail->Host = "smtp.mail.ru";
	 $mail->SMTPAuth = true;
 	 $mail->Username = 'pshontest@mail.ru';
	 $mail->Password = 'm0a9i8l7';
   $mail->SMTPSecure = 'ssl';
	 $mail->Port = 465;

   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'modules/phpmailer/language/');
   $mail->IsHTML(true);

   //от кого письмо
   $mail->setFrom('pshontest@mail.ru', 'Название отправителя');
   //кому отправить
   $mail->addAddress('pshontest@mail.ru');
   //тема письма
   $mail->Subject = 'Письмо обратной связи';

   //тело письма
   $body = '<h1>Письмо от пользователя</h1>';

   //проверки на заполненность полей
   if(trim(!empty($_POST['name']))) {
      $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
   }
   if(trim(!empty($_POST['email']))) {
      $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
   }
   if(trim(!empty($_POST['telephone']))) {
    $body.='<p><strong>Phone:</strong> '.$_POST['telephone'].'</p>';
   }
   if(trim(!empty($_POST['select']))) {
      $body.='<p><strong>Выбор пользователя:</strong> '.$_POST['select'].'</p>';
   }

   if(trim(!empty($_POST['utm-source'].$_POST['utm-medium'].$_POST['utm-campaign']))) {
    $body.='<hr><br><h1>UTM-метки</h1><br><table style = "border-collapse: collapse"><tr style="font-weight: bold"><td style = "border: 1px solid #000; padding: 5px">Ресурс</td><td style = "border: 1px solid #000; padding: 5px">Тип</td><td style = "border: 1px solid #000; padding: 5px">Компания</td></tr><tr>';
   }
   if(trim(!empty($_POST['utm-source']))) {
    $body.='<td style = "border: 1px solid #000; padding: 5px">'.$_POST['utm-source'].'</td>';
   }
   if(trim(!empty($_POST['utm-medium']))) {
    $body.='<td style = "border: 1px solid #000; padding: 5px">'.$_POST['utm-medium'].'</td>';
   }
   if(trim(!empty($_POST['utm-campaign']))) {
    $body.='<td style = "border: 1px solid #000; padding: 5px">'.$_POST['utm-campaign'].'</td>';
   }
   $body.='</tr></table>';
   //прикрепление файла
   if (!empty($_FILES['picture']['tmp_name'])) {
    //путь загрузки файла
    $filePath = __DIR__ . $_FILES['picture']['name'];
    //грузим файл
    if (copy($_FILES['picture']['tmp_name'], $filePath)) {
       $fileAttach = $filePath;
       $body.='<p><strong>Фото в приложении</strong>';
       $mail->addAttachment($fileAttach);
    }
 }

   $mail->Body = $body;

   //обработчик отправки
    if (!$mail->send()) {
       $message = 'Ошибка';
    } else {
       $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);
?>