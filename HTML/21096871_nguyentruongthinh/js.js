
function KiemTraTamGiac(){
    
var a = eval(prompt("nhap canh a: "));
var b = eval(prompt("nhap canh b: "));
var c = eval(prompt("nhap canh c: "));
if (a + b > c && a + c > b && b + C > a ){
  
if(a==b && b==c && c==a) {  
   alert("Tam Giac Deu");}
else
if(a==b || b==c || c==a) {  
   alert("Tam Giac Can");}
else
   alert("Tam Giac Thuong");
}
else alert("Khong Phai Tam Giac");
}
