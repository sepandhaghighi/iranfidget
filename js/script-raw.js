    var options = {
    "element": "mark",
    "className": "",
    "exclude": [],
    "separateWordSearch": false,
    "accuracy": "complementary",
    "diacritics": true,
    "synonyms": {},
    "iframes": false,
    "iframesTimeout": 5000,
    "acrossElements": false,
    "caseSensitive": false,
    "ignoreJoiners": false,
    "wildcards": "disabled",
    }
    
    

var modal = document.getElementById('myModal');
var img=document.getElementById("spinner-image")
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

$('body').on('click','#spinner-image',function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
})


// Image modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}



$(document).ready(function(){
    var footer;
    footer=document.getElementById("login-footer");
    $(".second-class").persiaNumber();
     
    if ($(document).height() > $(window).height()) {
        footer.style.opacity="0.2";
    
}
    
    $("#login-footer").persiaNumber();
    $(".farsi").persiaNumber();
    $(".contact").persiaNumber();
    $("marquee").persiaNumber();
});

$(window).scroll(function() {
    var footer;
    footer=document.getElementById("login-footer");
   if ((window.innerHeight + window.scrollY+90) >= document.body.scrollHeight) {
       footer.style.opacity="1";
   }
    else{
        footer.style.opacity="0.2";
    }
});




function myFunction() {
    var x = document.getElementById("myTopnav");
    var menu=document.getElementById("menu");
    var icon=document.getElementById("mobile-icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        menu.style.height="auto";
        icon.innerHTML='<i class="fa fa-bars fa-rotate-90" aria-hidden="true"></i>';
    } else {
        x.className = "topnav";
        menu.style.height="100px";
        icon.innerHTML='<i class="fa fa-bars " aria-hidden="true"></i>';
    }
}










function card_search(){
    var input,filter,i,j,table_list,td_list,counter,message,instance;
    counter=0;
    input=document.getElementById("myinput");
    filter=input.value.toUpperCase();
    message=document.getElementById("search-message");
    table_list=document.getElementsByClassName("card");
    for(i=0;i<table_list.length;i++){
        td_list=table_list[i].getElementsByTagName("p");
        instance=new Mark(table_list[i]);
        instance.unmark(instance.innerHTML);
        for (j=0;j<td_list.length;j++){
            if(td_list[j].innerHTML.toUpperCase().indexOf(filter)>-1){
                instance.mark(filter,options);
                table_list[i].style.display="";
                counter=counter+1;
                break;
            } 
            else{
                table_list[i].style.display="none";
                
            }
        }
    }
    if (counter==0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
}


      function initMap() {
        var uluru = {lat: 35.694939, lng: 51.408007};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru,
          disableDefaultUI: true,
          scrollwheel: false,
          zoomControl:false
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }




