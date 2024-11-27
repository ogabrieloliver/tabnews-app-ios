function status(request, response) {
  response.status(200).json({ Chave: "Acima da media" });
}

export default status;
