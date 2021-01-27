<?php
	header('Content-Type: text/html; charset=utf-8');
  set_time_limit(0);
  $handle = fopen("feedback-list.txt", "r");
  $n = 0;
  while (!feof($handle)) {
    $bufer = fgets($handle);
    $n=$n+1;
  };
  fclose($handle);
  var_dump($handle);

  $body = date("d.m.y H:i") . "\n";
  if(trim(!empty($_POST['name']))) {
    $body.="Имя: " . $_POST["name"] . "\n";
  }
  if((strlen($_POST['email']) < 100) and (strlen($_POST['email']) > 5)) {
    $body.="Почта: " . $_POST["email"] . "\n";
  }
  if(trim(!empty($_POST['telephone']))) {
    $body.="Телефон: " . $_POST["telephone"] . "\n";
  }
  if(trim(!empty($_POST['utm-source'].$_POST['utm-medium'].$_POST['utm-campaign']))) {
    $body.="UTM-метки: " . "\n";
  }
  if(trim(!empty($_POST['utm-source']))) {
    $body.=$_POST["utm-source"] . "\n";
  }
  if(trim(!empty($_POST['utm-medium']))) {
    $body.=$_POST["utm-medium"] . "\n";
  }
  if(trim(!empty($_POST['utm-campaign']))) {
    $body.=$_POST["utm-campaign"] . "\n\n";
  }

  $fp = fopen("feedback-list.txt", "a");
  $writeFile = fwrite($fp, $body);
  if ($writeFile) echo "true";
  else echo "false";
  fclose($fp);
?>