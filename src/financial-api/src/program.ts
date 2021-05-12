import StartUp from "./startup";

let port = process.env.PORT || "5000";

StartUp.app.listen(port, function() {
  console.log(`servidor executando na porta ${port}`);
});
