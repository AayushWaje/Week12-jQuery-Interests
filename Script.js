$(document).ready(function () {
  let cars = [
    { make: "Toyota", model: "Camry", year: "2022", info: "MPG: 32, Horsepower: 203", img: "Assets/Camry.jpg" },
    { make: "Ford", model: "Mustang", year: "2022", info: "MPG: 24, Horsepower: 450", img: "Assets/Mustang.jpg" },
    { make: "Honda", model: "Civic", year: "2023", info: "MPG: 35, Horsepower: 158", img: "Assets/Civic.jpg" },
    { make: "Chevrolet", model: "Corvette", year: "2022", info: "MPG: 19, Horsepower: 495", img: "Assets/Corvette.jpg" },
    { make: "BMW", model: "M3", year: "2023", info: "MPG: 23, Horsepower: 473", img: "Assets/M3.jpg" },
    { make: "Audi", model: "A4", year: "2022", info: "MPG: 28, Horsepower: 201", img: "Assets/A4.jpg" },
    { make: "Nissan", model: "Altima", year: "2020", info: "MPG: 31, Horsepower: 188", img: "Assets/Altima.jpg" },
    { make: "Hyundai", model: "Elantra", year: "2023", info: "MPG: 33, Horsepower: 147", img: "Assets/Elantra.jpg" },
    { make: "Tesla", model: "Model 3", year: "2020", info: "Range: 358 miles, Horsepower: 283", img: "Assets/Model3.jpg" },
    { make: "Kia", model: "K5", year: "2025", info: "MPG: 31, Horsepower: 180", img: "Assets/K5.jpg" },
    { make: "Cadillac", model: "Escalade", year: "2025", info: "MPG: 30, Horsepower: 186", img: "Assets/Escalade.jpg" },
    { make: "Subaru", model: "Impreza", year: "2023", info: "MPG: 28, Horsepower: 152", img: "Assets/Impreza.jpg" }
  ];

  let cardElements = [];

  function createCard(car) {
    let card = $("<div></div>").css({
      border: "2px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      width: "220px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      transition: "0.3s"
    });

    let image = $("<img>").attr("src", car.img).css({
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 3",
      objectFit: "cover",
      borderRadius: "8px"
    });

    let title = $("<h3></h3>").text(car.make + " " + car.model).css("color", "#2e3b4e");
    let subtitle = $("<p></p>").text("Year: " + car.year);
    let details = $("<p class='car-details'></p>").text(car.info).hide();

    card.append(image, title, subtitle, details);

    card.hover(
      function () {
        $(this).css("background-color", "#e3f2fd");
      },
      function () {
        $(this).css("background-color", "#ffffff");
      }
    );

    return { cardElement: card, detailsElement: details };
  }

  cars.forEach((car) => {
    let { cardElement, detailsElement } = createCard(car);
    cardElements.push({ card: cardElement, details: detailsElement });
    $("#car-list").append(cardElement);
  });

  $("#random-car").click(function () {
    $(".car-details").hide();
    cardElements.forEach(c => c.card.css("background-color", "#ffffff"));

    let randomIndex = Math.floor(Math.random() * cardElements.length);
    let selected = cardElements[randomIndex];

    selected.card.css("background-color", "#ffffcc");
    selected.details.show();
  });
});
