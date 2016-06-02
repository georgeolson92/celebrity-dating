$(document).ready(function(){
  $("form#celeb-dating").submit(function(event){
    var name = $("input#name").val();
    var age = $("input#age").val();
    var animal = $("input#animal").val();
    var movietv = $("select#movietv").val();
    var music = $("select#music").val();

    var kevin = "Kevin Spacey";
    var leo = "Leonardo DiCaprio";
    var steve = "Steve Carell";
    var carrie = "Carrie Brownstein";
    var harrison = "Harrison Ford";
    var gaga = "Lady Gaga";

    if (name === "") {
      $(".name-form-group").addClass("has-error");
      $(".name-form-group").append("Please enter name.");
    } else if (age === "") {
      $(".age-form-group").addClass("has-error");
      $(".age-form-group").append("Please enter age.");
    } else if (animal === ""){
      $(".animal-form-group").addClass("has-error");
      $(".animal-form-group").append("Please enter your favorite animal.");
    }
    else if (movietv === "House of Cards" || music === "House" || animal === "eagle"){
      $(".match").text(kevin);
      $(".match-img").attr("src","img/kevin.jpg");
      $("#result").show();
    } else if (movietv === "Titanic" || music === "Classical"){
      $(".match").text(leo);
      $(".match-img").attr("src","img/leo.jpg");
      $("#result").show();
    } else if (movietv === "The Office"){
      $(".match").text(steve);
      $(".match-img").attr("src","img/steve.png");
      $("#result").show();
    } else if (movietv === "Portlandia" || music === "Indie" || animal === "bird"){
      $(".match").text(carrie);
      $(".match-img").attr("src","img/carrie.jpg");
      $("#result").show();
    } else if (movietv === "Star Wars" || music === "Orchestral" || animal === "alien"){
      $(".match").text(harrison);
      $(".match-img").attr("src","img/harrison.jpg");
      $("#result").show();
    } else {
      (".match").text(gaga);
      $(".match-img").attr("src","img/ladygaga.jpg");
      $("#result").show();
    }





    event.preventDefault();
  });
});
