$(document).ready(function() {
  $("button#submit").click(function() {
    
    const yourTypeStr = $("input:radio[name=your-type]:checked").val();
    const yourType = parseInt(yourTypeStr);
    
    const nightStr = $("input:radio[name=night]:checked").val();
    const night = parseInt(nightStr);
    
    const generationStr = $("input:radio[name=generation]:checked").val();
    const generation = parseInt(generationStr);
    
    const result = yourType + night + generation;
    
    
    
    
    
    if (result < 5) {
      $("#shadow").show()
    } else if (result >= 5 && result < 8) {
      $("#sassy").show()
    } else {
      $("#chance").show()
      
    }
    
    console.log(result);
    
    
  event.preventDefault();
  });
});