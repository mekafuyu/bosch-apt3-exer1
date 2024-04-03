var nomeGlobal;
var mensagemGlobal;
var dateGlobal;
var darkmode = true;
var hmtltag = document.getElementsByTagName("HTML")[0];
var darkmodeswitch = document.getElementById("darkmodeSwitch");

// darkmodeswitch.setAttribute("checked", darkmode);
function toggle() {
  darkmode = !darkmode;
  if (darkmode) hmtltag.setAttribute("data-bs-theme", "dark");
  else hmtltag.setAttribute("data-bs-theme", "light");
}

function formatarData(data) {
  return data.toLocaleString("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

function conferirMensagemWhatsApp() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var date = formatarData(new Date());

  nomeGlobal = nome;
  mensagemGlobal = mensagem;
  dateGlobal = date;

  document.getElementById("confNome").textContent = nome;
  document.getElementById("confMsg").textContent = mensagem;
  document.getElementById("confDate").textContent = date;
  document.getElementById("conf").classList.remove("hide");
}

function enviar() {
  var numeroTelefone = "5541999999999";

  var linkWhatsApp =
    "https://wa.me/" +
    numeroTelefone +
    "?text=NOME%20DO%20RECEPTOR(A):%20" +
    nomeGlobal +
    "%0AMENSAGEM:%20" +
    mensagemGlobal +
    "%0ADATA:%20" +
    dateGlobal;

  window.open(linkWhatsApp, "_blank");
}
