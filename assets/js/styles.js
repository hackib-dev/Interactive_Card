document.querySelector(".cardName").oninput = () => {
  document.querySelector(".card_name").innerHTML =
    document.querySelector(".cardName").value;
};

document.querySelector(".cardNumber").oninput = () => {
  const cardNumber = document.querySelector(".cardNumber").value;
  const cardInput = document.querySelector(".cardNumber");

  let card = "";
  for (let i = 0; i < cardNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      card += " ";
    }
    card += cardNumber[i];
  }

  if (card.length === 19) {
    cardInput.addEventListener("keypress", (e) => {
      e.preventDefault();
    });
  }

  document.querySelector(".card_num").innerHTML = card;
};

function cardMonth() {
  var month = document.getElementById("month").value;
  document.getElementById("card_month").innerHTML = month;
}

function cardYear() {
  var year = document.getElementById("year").value;
  document.getElementById("card_year").innerHTML = year;
}

function cardCvc() {
  var cvc = document.getElementById("cvc").value;
  document.getElementById("card_pin").innerHTML = cvc;
}

function card() {
  var name = document.querySelector(".cardName").value;
  var number = document.querySelector(".cardNumber").value;
  var month = document.querySelector(".month").value;
  var year = document.querySelector(".year").value;
  var cvc = document.getElementById("cvc").value;

  if (name == "") {
    nameError = document.querySelector(".name_error");
    nameError.style.color = "red";
    nameError.style.fontSize = "xx-small";
    nameError.style.float = "left";
    nameError.innerHTML = "Card Name cannot be empty";
  } else if (name != "") {
    document.querySelector(".name_error").innerHTML = "";
  }

  if (number !== "" && number.match(/^[0-9]+$/) !== null) {
    document.querySelector(".num_error").innerHTML = "";
  } else {
    numError = document.querySelector(".num_error");
    numError.style.color = "red";
    numError.style.fontSize = "xx-small";
    numError.style.float = "left";
    numError.innerHTML = "Wrong format, numbers only";
  }

  if (month == "") {
    monthError = document.querySelector(".mon_error");
    monthError.style.color = "red";
    monthError.style.fontSize = "xx-small";
    monthError.style.float = "left";
    monthError.innerHTML = "Can't be blank";
  } else if (month != "") {
    document.querySelector(".mon_error").innerHTML = "";
  }

  if (year == "") {
    yearError = document.querySelector(".year_error");
    yearError.style.color = "red";
    yearError.style.fontSize = "xx-small";
    yearError.style.float = "left";
    yearError.innerHTML = "Can't be blank";
  } else if (year != "") {
    document.querySelector(".year_error").innerHTML = "";
  }

  if (cvc == "") {
    cvcError = document.getElementById("cvc_error");
    cvcError.style.color = "red";
    cvcError.style.fontSize = "xx-small";
    cvcError.style.float = "left";
    cvcError.innerHTML = "Can't be blank";
  } else if (cvc != "") {
    document.querySelector(".cvc_error").innerHTML = "";
  }

  if (name && number && month && year && cvc != "") {
    var right = document.querySelector(".right");
    right.style.display = "none";
    var thank_you = document.querySelector(".thank_you");
    thank_you.style.display = "block";
  }
}
