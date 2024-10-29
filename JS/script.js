// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ELABORAZIONE

const cardsGrid = document.getElementById("cards-grid");
const nameInput = document.getElementById("name-input");
const roleInput = document.getElementById("role-input");
const emailInput = document.getElementById("email-input");
const imgInput = document.getElementById("img-input");
const addButton = document.getElementById("add-button");
const teamForm = document.getElementById("team-form");

for (let i = 0; i < teamMembers.length; i++) {
  cardsGrid.innerHTML += `
 <div class="col">
              <div class="card text-center m-3">
                <img
                  src="./${teamMembers[i].img}"
                  alt="${teamMembers[i].name}"
                  class="img-fluid card-img"
                />
                <div class="card-body">
                  <h5 class="card-title">${teamMembers[i].name}</h5>
                  <h5 class="card-text">${teamMembers[i].role}</h5>
                  <h5 class="card-text">${teamMembers[i].email}</h5>
                </div>
              </div>
            </div>`;
}

//ELABORAZIONE BONUS FORM AGGIUNTA MEMBRO

addButton.addEventListener("click", () => {
  event.preventDefault();
  if (
    nameInput.value === "" ||
    roleInput.value === "" ||
    emailInput.value === "" ||
    imgInput.value === ""
  ) {
    alert("Inserisci tutti i valori");
    return;
  } else {
    cardsGrid.innerHTML += `
 <div class="col">
              <div class="card text-center m-3">
                <img
                  src="./img/${imgInput.value}"
                  alt="${nameInput.value}"
                  class="img-fluid card-img"
                />
                <div class="card-body">
                  <h5 class="card-title">${nameInput.value}</h5>
                  <h5 class="card-text">${roleInput.value}</h5>
                  <h5 class="card-text">${emailInput.value}</h5>
                </div>
              </div>
            </div>`;

    nameInput.value = "";
    roleInput.value = "";
    emailInput.value = "";
    imgInput.value = "";
  }
});
