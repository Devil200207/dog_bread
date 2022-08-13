import "./styles.css";

var dogname = $("#dog-img");
var dropdown = $("#dog-bread");
var allowed = true;
var dog;

$.get("https://dog.ceo/api/breeds/list/all", function (data) {
  let bread = data.message;
  for (let brr in bread) {
    dropdown.append('<option value="' + brr + '">' + brr + "</option>");
  }
});

dropdown.change(function () {
  allowed = true;
});

function displayDog(dog) {
  let url = "https://dog.ceo/api/breed/" + dog + "/images/random";

  $("dog-img img").remove();

  $.get(url, function (data, status) {
    let imgurl = data.message;
    dogname.append('<img src="' + imgurl + '" alt="' + dog + '">');
  });
}

$("form button").click(function (event) {
  event.preventDefault();

  if (allowed) {
    dog = dropdown.val();
    displayDog(dog);
    allowed = false;
  }
});

$("#next-but a").click(function (event) {
  event.preventDefault();
  if (dog !== undefined) {
    displayDog(dog);
  }
});
