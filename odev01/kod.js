const pictures = ["tina.jpeg","kopek.jpg","zurafa.jpg"];
const item=Math.floor(Math.random()*3);
var due=2;
//resimleri bir diziye aktardık ve rastgele bir sayı belirledik ve 2 hakkımız olduğunu belirttik.

var showAllPictures = () =>{
    document.getElementById("img0").setAttribute("src",pictures[item]);
    document.getElementById("img1").setAttribute("src",pictures[(item+1)%3]);
    document.getElementById("img2").setAttribute("src",pictures[(item+2)%3]);
}
//bu fonksiyon tüm fotoğrafların açılmasını sağlar


document.getElementById("img0").addEventListener("click",function(e){
//addEventListener() ile img0'a tıklamaları takip edebiliriz.

document.getElementById("img0").setAttribute("src",pictures[item]);
document.getElementById("img0").setAttribute("name",pictures[item]);
//burada rastgele belirlenen index'te hangi fotoğraf varsa img0'a aktarılır.daha sonra hangi resmin eklendiği bilgisine ulaşabilmek için
//name attribute de ekledik
if(e.target.name=="tina.jpeg")
{
    document.getElementById("hak").innerHTML="Tebrikler Doğru Cevap";
    document.getElementById("alanID").innerHTML='KAZANDINIZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a>';
    showAllPictures();
    //eğer resim kediye aitse yukarıdaki bilgi satırında ve aşağıdaki yeşil alandaki değişimleri yazdık.
    //<a> etiketiyle TIKLAYINIZ kısmına link tanımladık bu link ise href="index.html" denilerek sayfanın yenilenmesini
    //yani oyunun yeniden başlamasını sağlıyor.showAllPictures ile ise tüm resimleri açıyoruz.
}
else{
    due--;
    //eğer tıkladığımız resim kediye ait değilse can bir azalır
    if(due==1){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +due +" hakkınız kaldı";
        //ilk yanlışımız ise kaç hakkımız kaldığına dair bilgilendirme
    }
    
    if(due==0){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +due +" hakkınız kaldı.KAYBETTİNİZ ...";
        document.getElementById("alanID").innerHTML='KAYBETTİNİZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a>  ';
        showAllPictures();
        //ikinci yanlışımız ise gerekli bilgilendirmeler ve tüm resimlerin gösterilmesini sağladık

    }
    
}

e.preventDefault();
})


document.getElementById("img1").addEventListener("click",function(e){
    
document.getElementById("img1").setAttribute("src",pictures[(item+1)%3]);
document.getElementById("img1").setAttribute("name",pictures[(item+1)%3]);
//rastgele sayının bir fazlasın mod 3 ünü alarak bir sonraki dizi elemanını img1'e aktardık

if(e.target.name=="tina.jpeg")
{
    
    document.getElementById("hak").innerHTML="Tebrikler Doğru Cevap";
    document.getElementById("alanID").innerHTML='KAZANDINIZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a>';
  showAllPictures();
}
else{
    due--;
    if(due==1){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +due +" hakkınız kaldı";
    }
    if(due==0){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +due +" hakkınız kaldı";
        document.getElementById("alanID").innerHTML='KAYBETTİNİZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a> ';
        showAllPictures();
    }
}

e.preventDefault();
})


document.getElementById("img2").addEventListener("click",function(e){

document.getElementById("img2").setAttribute("src",pictures[(item+2)%3]);
document.getElementById("img2").setAttribute("name",pictures[(item+2)%3]);
//rastgele üretilen indexe 2 ekleyerek son kalan kısma kullanılmayan son dizi elemanını aktardık.

if(e.target.name=="tina.jpeg")
{
    document.getElementById("hak").innerHTML="Tebrikler Doğru Cevap";
    document.getElementById("alanID").innerHTML='KAZANDINIZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a> ';
    showAllPictures();
}
else{
    due--;
    if(due==1){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +due +" hakkınız kaldı";
    }
    if(due==0){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +due +" hakkınız kaldı";
        document.getElementById("alanID").innerHTML='KAYBETTİNİZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a>';
        showAllPictures();
    }
}


e.preventDefault();

})














