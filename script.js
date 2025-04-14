const calcButton = document.getElementById("calc_btn");
calcButton.addEventListener("click", calculateAge);

function calculateAge() {
  const birthDateInput = document.getElementById("birth_date");
  const birthDate = new Date(birthDateInput.value);
  const today = new Date();

  function outputReset() {
    output = "";
  }

  if (birthDateInput.value === "") {
    return alert("Please enter your DOB!");
  }

  if (birthDate.setHours(0, 0, 0, 0) > today.setHours(0, 0, 0, 0)) {
    birthDateInput.value = "";
    return alert("Your DOB can't be later than today");
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  let output = "";
  if (birthDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
    output = `Welcome to the world \n Age: ${years} year, ${months} month, ${days} day`;
  } else if (
    today.getDate() === birthDate.getDate() &&
    today.getMonth() === birthDate.getMonth() &&
    today.getFullYear() !== birthDate.getFullYear()
  ) {
    output = `Wish You a Happy Birthday 🎂 \n Your Age: ${years} year${
      years > 1 ? "s" : ""
    }, ${months} month${months > 1 ? "s" : ""}, ${days} day${
      days > 1 ? "s" : ""
    }`;
  } else if (years > 0) {
    output = `Your Age: ${years} year${years > 1 ? "s" : ""}, ${months} month${
      months > 1 ? "s" : ""
    }, ${days} day${days > 1 ? "s" : ""}`;
  } else if (months > 0) {
    output = `You are just: ${months} month${
      months > 1 ? "s" : ""
    }, ${days} day${days > 1 ? "s" : ""} old!`;
  } else {
    output = `You are just ${days} day${days > 1 ? "s" : ""} old!`;
  }

  document.getElementById("age_result").innerText = output;

  birthDateInput.value = "";
}

const clearButton = document.getElementById("clear_btn");
clearButton.addEventListener("click", outputReset);

function outputReset() {
  document.getElementById("age_result").innerText = "";
}

const darkSwitch = document.getElementById("checkboxInput");
darkSwitch.addEventListener("click", darkModeFunc);

function darkModeFunc() {
  const darkCont = document.querySelector(".container");
  darkCont.classList.toggle("dark");
}


