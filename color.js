document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector('#red').onlcick = function() {
        document.querySelector('#hello').style.color = 'red';
    }
    document.querySelector('#blue').onlcick = function() {
        document.querySelector('#hello').style.color = 'blue';
    }
    document.querySelector('#green').onlcick = function() {
        document.querySelector('#hello').style.color = 'green';
    }
    
});