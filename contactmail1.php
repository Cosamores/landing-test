<?php
define('SMTP_USERNAME', 'diegocosamores@gmail.com');
define('SMTP_PASSWORD', 'Alienscuradores.');



if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = SMTP_USERNAME;
  $subject = "Novo Lead";

  $full_name = filter_input(INPUT_POST, "full_name", FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
  $mobile = filter_input(INPUT_POST, "mobile", FILTER_SANITIZE_STRING);
  $country = filter_input(INPUT_POST, "country", FILTER_SANITIZE_STRING);
  $state = filter_input(INPUT_POST, "state", FILTER_SANITIZE_STRING);
  $city = filter_input(INPUT_POST, "city", FILTER_SANITIZE_STRING);
  $comments = filter_input(INPUT_POST, "comments", FILTER_SANITIZE_STRING);

  if (!$email) {
    http_response_code(400);
    exit("Por favor, forneça um endereço de e-mail válido.");
  }

  $message = "Nome completo: " . $full_name . "\n" .
             "Email: " . $email . "\n" .
             "Telefone: " . $mobile . "\n" .
             "País: " . $country . "\n" .
             "Estado: " . $state . "\n" .
             "Cidade: " . $city . "\n" .
             "Comentários: " . $comments;

  $headers = "From: " . $email . "\r\n" .
             "Reply-To: " . $email . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo "Obrigado pelo seu contato!";
  } else {
    http_response_code(500);
    exit("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
  }

  exit();
}
?>
