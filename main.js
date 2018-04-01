var thefoxthings=['PURCHASERS','SUSCRIBERS','FEATURES ADDED','CUSTOMERS','COMMENTS']
function myAccFunc() {
    var x = document.getElementById("AccAppend");
    if (x.className.indexOf("sidebar--nonshow") !== -1) {
        $('#AccAppend').append(`<img src="/Maquetacion/images/Rectangle 7.png" alt="Photo sidebar"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`);
        x.className = x.className.replace("sidebar--nonshow", "sidebar--show");
        document.getElementById('image').src = "/Maquetacion/images/怀.png";
    }else{
        if(x.className.indexOf("sidebar--show") !== -1){
            $('#AccAppend').empty();
            x.className = x.className.replace("sidebar--show","sidebar--nonshow");
            document.getElementById('image').src = "/Maquetacion/images/瀀.png";
        }
    }    
}

function addCount(value){
    var num=$("#AppendCount"+value).text();
    $('#AppendCount'+value).empty();
    $("#AppendCount"+value).append((parseInt(num)+1)+`<a onclick="addCount(${value});" >+</a>`);
}

function incCount(value){
    var num=$("#Count"+value).text();
    $('#Count'+value).children("#num").empty();
    $("#Count"+value).children("#num").append((parseInt(num)+1)+`<a class="view" onclick="incCount(${value});" >+</i></a>`);
}

$(".main--thefoxthings").hover(function(){
    $(this).children("div").children("p").children("a").removeClass("view");
}, function() {
    $(this).children("div").children("p").children("a").addClass( "view" );
  });

