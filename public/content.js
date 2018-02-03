
// console.log("RUNNING");

function loadData(data) {
	$("#mainBodyTextRes, #mainBodyTextWait").empty();
	  if (data.length < 5) {
	      for (var i = 0; i < data.length; i++) {
	        var wellSection = $("<div>");
	        wellSection.addClass("well");
	        wellSection.attr("id", "character-well-" + i);
	        $("#mainBodyTextRes").append(wellSection);
	        $("#character-well-" + i).append("<h2>Name:" + data[i].name + "</h2>");
	        $("#character-well-" + i).append("<h3>Time: " + data[i].time + "</h4>");
	        $("#character-well-" + i).append("<h3>Phone: " + data[i].phone + "</h4>");
	        $("#character-well-" + i).append("<h3>Email: " + data[i].email + "</h4>");
	        $("#character-well-" + i).append("<h3>Request: " + data[i].request + "</h4>");
	      }   
      }
      else{
          for (var i = 0; i < 5; i++) {
	        var wellSection = $("<div>");
	        wellSection.addClass("well");
	        wellSection.attr("id", "character-well-" + i);
	        $("#mainBodyTextRes").append(wellSection);
	        $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
	        $("#character-well-" + i).append("<h3>Time: " + data[i].time + "</h4>");
	        $("#character-well-" + i).append("<h3>Phone: " + data[i].phone + "</h4>");
	        $("#character-well-" + i).append("<h3>Email: " + data[i].email + "</h4>");
	        $("#character-well-" + i).append("<h3>Request: " + data[i].request + "</h4>");
	      }
	      for (var i = 5; i < data.length; i++) {
	        var wellSection = $("<div>");
	        wellSection.addClass("well");
	        wellSection.attr("id", "character-well-" + i);
	        $("#mainBodyTextWait").append(wellSection);
	        $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
	        $("#character-well-" + i).append("<h3>Time: " + data[i].time + "</h4>");
	        $("#character-well-" + i).append("<h3>Phone: " + data[i].phone + "</h4>");
	        $("#character-well-" + i).append("<h3>Email: " + data[i].email + "</h4>");
	        $("#character-well-" + i).append("<h3>Request: " + data[i].request + "</h4>");
	      }
      }
};

$.get("/api", function(data) {
      console.log(data);
      loadData(data);
});


$("#add-btn").on("click", function(event) {
      event.preventDefault();

      var newRes = {
        name: $("#name").val().trim(),
        time: $("#resTime").val().trim(),
        phone: $("#phoneNum").val().trim(),
        email: $("#email").val().trim(),
        request: $("#specialRequest").val().trim(),
      };

      // Question: What does this code do??
      $.post("/api/new", newRes)
      .then(function(data) {
        console.log(data);
        if (data.length <= 5) {
	        alert("Adding you to Reservation...");
	    } else {
	    	alert("Adding you to WaitList...");
	    }
	    loadData(data);
      });
});
