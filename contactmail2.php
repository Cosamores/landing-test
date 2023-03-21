<?php
// Verificar se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obter os dados do formulário
  $full_name = $_POST['full_name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $comments = $_POST['comments'];

  // Fazer o processamento dos dados aqui, como salvar no banco de dados ou enviar um email
  // Por exemplo:
  $to = 'seu-email@exemplo.com';
  $subject = 'Novo formulário enviado';
  $message = "Nome: $full_name\nEmail: $email\nTelefone: $mobile\nMensagem: $comments";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    // Enviar resposta de sucesso para o cliente
    http_response_code(200);
    echo 'Formulário enviado com sucesso!';
  } else {
    // Enviar resposta de erro para o cliente
    http_response_code(500);
    echo 'Ocorreu um erro ao enviar o formulário.';
  }
} else {
  // Se o formulário não foi enviado através do método POST, enviar resposta de erro para o cliente
  http_response_code(405);
  echo 'Método não permitido.';
}
?>
