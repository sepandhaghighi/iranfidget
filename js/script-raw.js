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
var modal_flag=Math.floor((Math.random() * 10) + 1);
var spinner_select=Math.floor(Math.random()*6);
var modal_random = document.getElementById('modal-random');
var modal_image=document.getElementsByClassName("modal-body")[0].getElementsByTagName("img")[0];
var modal_footer=document.getElementsByClassName("modal-footer")[0].getElementsByTagName("h3")[0];
var modal_price_first=document.getElementsByClassName("modal-footer")[0].getElementsByTagName("h2")[0];
var modal_price_second=document.getElementsByClassName("modal-footer")[0].getElementsByTagName("h2")[1];


var span = document.getElementsByClassName("close-random")[0];

// When the user clicks on <span> (x), close the modal

var price_sorter = function (data) {
    var i,j,table_list,price,counter,message,from,to,last_object;
    from = parseInt(data.from);
    to = parseInt(data.to);
    counter=0;
    message=document.getElementById("search-message");
    table_list=document.getElementsByClassName("card");
    $(".last-col").removeClass("last-col");
    $(".last-row").removeClass("last-row");
    for(i=0;i<table_list.length;i++){
        price=parseInt(table_list[i].getElementsByTagName("p")[2].innerHTML);
        if((price!=NaN)&&(price*1000<to)&&(price*1000>from)){
                table_list[i].style.display="block";
                last_object=table_list[i]
                counter=counter+1;
                if ((counter%5)==0){
                    table_list[i].classList.add("last-col");
                }
                
            } 
            else{
                table_list[i].style.display="none";
                
            }
        
    }
    if (from==0&&to==150000){
        for(i=0;i<table_list.length;i++){
            table_list[i].style.display="";
        if (((i+1)%5)==0){
            table_list[i].classList.add("last-col");
        }
        if ((table_list.length==i+1)){
            table_list[i].classList.add("last-row");
        }
    }
    }
    else if (counter==0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
    if (last_object!=undefined){
    last_object.classList.add("last-row");
    }
};
$("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 150000,
            from: 0,
            to: 150000,
            type: 'double',
            step: 2000,
            prefix: "",
            grid: true,
            onChange: price_sorter,
            hide_from_to:true,
            prettify_separator:",",
            prettify_enabled:true,
            postfix:"تومان",
            max_postfix:"تومان"
        });

span.onclick = function() {
    modal_random.style.display = "none";
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
    if (modal_flag<6){
    var selected_spinner=table_list[spinner_select];
    modal_image.src=selected_spinner.getElementsByTagName("img")[0].src;
    modal_footer.innerHTML=selected_spinner.getElementsByTagName("img")[0].title;
    modal_price_first.innerHTML=selected_spinner.getElementsByTagName('p')[1].innerHTML;
    modal_price_second.innerHTML=selected_spinner.getElementsByTagName('p')[2].innerHTML;
    modal_random.style.display="block";
    }
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




