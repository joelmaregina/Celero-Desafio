$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

function showDescription (){
    document.getElementById("prato-main").onmouseover().getElementById(".link-main").style.display("flex")
}