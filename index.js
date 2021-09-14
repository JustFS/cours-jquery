$(".btn1").click(() => {
  $("h1").hide("slow", () => console.log("done !"));
  // $("h1").show();
  // $("h1").toggle();
});

$("#img1").mouseleave(() => {
  $("#img1").css("transform", "scale(0.5)");
});

$("#img2").dblclick(() => {
  $("#img2").css("filter", "blur(3px)");
});

$("body").keydown((e) => {
  console.log(e);
});
