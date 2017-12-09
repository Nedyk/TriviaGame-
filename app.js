<script type="text/javascript">
$(document).ready(function(){
var score ;
//hide instructions
  $("#start").show();
  $( "button" ).click(function() {
   // timer();
    $("#start").hide();
 
});
  //show game
   $("#hid").hide();
  $( "button" ).click(function() {
  //timer();  
 $( "#hid" ).show( "slow" );
 timer();
});
//

total = 5; 
var answers=["NewEngland", "8000", "Pacific", "Basketball", "1989"];


$(".checkbox-inline").click(function(){

score = 0;
  var q1 = $("input[name='Question1']:checked").val();
    console.log(q1);
    console.log(answers[0]);
    if(q1===answers[0]){
  score++;
}
var q2 = $("input[name='Question2']:checked").val();
console.log(q2);  
if(q2===answers[1]){
  score++;
}
var q3 = $("input[name='Question3']:checked").val();
    console.log(q3);
    if(q3===answers[2]){
  score++;
}
var q4 = $("input[name='Question4']:checked").val();
console.log(q4);
if(q4===answers[3]){
  score++;
}
var q5 = $("input[name='Question5']:checked").val();
console.log(q5);
if(q5===answers[4]){
  score++;
}
console.log(score);
    
  });



var seconds = 15;


var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    $("#timer").text("Timer :" + " "+timeleft);
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        $("#score").html("<button><strong>Click here to see your score</strong></button>");
        $("#score").click(function(){
        $("#score").text("You scored " + score + " out of " + total);
        });}
    },1000);
});





</script>