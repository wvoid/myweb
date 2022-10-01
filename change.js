
window.onload = function (){
    var item = document.getElementsByClassName("item");
    var it = item[0].getElementsByTagName("div");
 
    var content = document.getElementsByClassName("content");
    var con = content[0].getElementsByTagName("div");
    var btn_login=document.getElementById('login1');
 
    
    
        it[0].onclick = function(){
            // for(let j=0;j<it.length;j++){
            //     it[j].className = '';
            //     con[j].style.display = 'none'
            // }
            // this.className = "active";
            // it[i].index=i;
            // con[i].style.display = "block";
            
             window.location.href='login.html';
                    
                    
                    
            
 
        }
        it[1].onclick=function(){
            window.location.href='register.html';
        }
        btn_login.onclick=function(){
            window.location.href='home.html';
        }
}