<?php
if(isset($_POST['submit'])) {
    $to = "diegocosamores@gmail.com"; // seu endereço de email aqui
    $subject = "Novo lead de formulário"; // assunto do email
    $name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['mobile'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $comments = $_POST['comments'];
    
    $message = "Nome: $name<br>Email: $email<br>Telefone: $phone<br>País: $country<br>Estado: $state<br>Cidade: $city<br>Comentários: $comments";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <' . $email . '>' . "\r\n";
    
    mail($to, $subject, $message, $headers);
}
?>
