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

var modal = document.getElementById('modal-random');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-random")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('body').on('click','#spinner-image',function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
})


// Image modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}



$(document).ready(function(){
    var footer,i,j,len;
    footer=document.getElementById("login-footer");
    $(".second-class").persiaNumber();
     
    if ($(document).height() > $(window).height()) {
        footer.style.opacity="0.2";
    
}
    
    table_list=document.getElementsByClassName("card");
    len=table_list.length;
    for(i=0;i<len;i++){
        if (((i+1)%5)==0){
            table_list[i].classList.add("last-col");
        }
        if ((len==i+1)){
            table_list[i].classList.add("last-row");
        }
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
        menu.style.height="80px";
        icon.innerHTML='<i class="fa fa-bars " aria-hidden="true"></i>';
    }
}










function card_search(){
    var input,filter,i,j,table_list,td_list,counter,message,instance,alt;
    counter=0;
    input=document.getElementById("myinput");
    filter=input.value.toUpperCase();
    message=document.getElementById("search-message");
    table_list=document.getElementsByClassName("card");
    $(".last-col").removeClass("last-col");
    for(i=0;i<table_list.length;i++){
        td_list=table_list[i].getElementsByTagName("p");
        alt=table_list[i].getElementsByTagName("img")[0].alt;
        instance=new Mark(table_list[i]);
        instance.unmark(instance.innerHTML);
        for (j=0;j<td_list.length;j++){
            if((td_list[j].textContent.toUpperCase().indexOf(filter)>-1)||(alt.toUpperCase().indexOf(filter)>-1)){
                instance.mark(filter,options);
                table_list[i].style.display="";
                counter=counter+1;
                if ((counter%5)==0){
                    table_list[i].classList.add("last-col");
                }
                
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




