<?php
// Conectar ao banco de dados
$conn = mysqli_connect("localhost", "root", "", "jac_test");

// Verificar se o formulário foi enviado através do método POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obter os dados do formulário e validá-los
  $full_name = htmlspecialchars($_POST['full_name']);
  $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
  $mobile = htmlspecialchars($_POST['mobile']);

  // Verificar se os dados são válidos
  if (!$email) {
    http_response_code(400);
    echo 'Endereço de email inválido.';
    exit;
  }

  // Executar a consulta SQL para inserir os dados
  $sql = "INSERT INTO jac_testet (full_name, email, mobile) VALUES ('$full_name', '$email', '$mobile')";
  $result = mysqli_query($conn, $sql);

  // Verificar se a consulta foi executada com sucesso
  if (!$result) {
    http_response_code(500);
    echo 'Ocorreu um erro ao inserir os dados.';
    exit;
  }

  // Exibir uma mensagem de sucesso
  echo 'Dados inseridos com sucesso.';
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Fechar a conexão com o banco de dados
mysqli_close($conn);
?> 