import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'


class App extends Component{
    constructor(props){
    
        super(props);
        this.state={
            pictures:["tina.jpeg","kopek.jpg","zurafa.jpg"],
            item:Math.floor(Math.random()*3),
            due:1 
        }

    }

    
    


showAllPictures = () =>{
    const {pictures,item,due}=this.state;
    document.getElementById("img0").setAttribute("src",pictures[item]);
    document.getElementById("img1").setAttribute("src",pictures[(item+1)%3]);
    document.getElementById("img2").setAttribute("src",pictures[(item+2)%3]);
}
//bu fonksiyon tüm fotoğrafların açılmasını sağlar

ClickEventOne = (e) =>{

//addEventListener() ile img0'a tıklamaları takip edebiliriz.


document.getElementById("img0").setAttribute("src",this.state.pictures[this.state.item]);
document.getElementById("img0").setAttribute("name",this.state.pictures[this.state.item]);
//burada rastgele belirlenen index'te hangi fotoğraf varsa img0'a aktarılır.daha sonra hangi resmin eklendiği bilgisine ulaşabilmek için
//name attribute de ekledik"
if(e.target.name=="tina.jpeg")
{   
    this.setState({due:-1});
    if(this.state.due==1 || this.state.due==0)
    { document.getElementById("hak").innerHTML="Tebrikler Doğru Cevap";
    document.getElementById("alanID").innerHTML='KAZANDINIZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a> ';
    this.showAllPictures();}
    //eğer resim kediye aitse yukarıdaki bilgi satırında ve aşağıdaki yeşil alandaki değişimleri yazdık.
    //<a> etiketiyle TIKLAYINIZ kısmına link tanımladık bu link ise href="index.html" denilerek sayfanın yenilenmesini
    //yani oyunun yeniden başlamasını sağlıyor.showAllPictures ile ise tüm resimleri açıyoruz.
}
else{
    this.setState({due:this.state.due-1});
    console.log(this.state.due);
    //eğer tıkladığımız resim kediye ait değilse can bir azalır
    if(this.state.due==1){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +this.state.due +" hakkınız kaldı";
        //ilk yanlışımız ise kaç hakkımız kaldığına dair bilgilendirme
    }
    
    if(this.state.due==0){
        document.getElementById("hak").innerHTML="Yanlış Cevap. KAYBETTİNİZ ...";
        document.getElementById("alanID").innerHTML='KAYBETTİNİZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a>  ';
        this.showAllPictures();
        this.setState({due:-1});
        //ikinci yanlışımız ise gerekli bilgilendirmeler ve tüm resimlerin gösterilmesini sağladık

    }
    
}

}




ClickEventTwo=(e)=>{
      
document.getElementById("img1").setAttribute("src",this.state.pictures[(this.state.item+1)%3]);
document.getElementById("img1").setAttribute("name",this.state.pictures[(this.state.item+1)%3]);
//rastgele sayının bir fazlasın mod 3 ünü alarak bir sonraki dizi elemanını img1'e aktardık

if(e.target.name=="tina.jpeg")
{
    
    this.setState({due:-1});
    
    if(this.state.due==1 || this.state.due==0)
    { document.getElementById("hak").innerHTML="Tebrikler Doğru Cevap";
    document.getElementById("alanID").innerHTML='KAZANDINIZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a> ';
    this.showAllPictures();}
}
else{
    this.setState({due:this.state.due-1});
    
    if(this.state.due==1){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +this.state.due +" hakkınız kaldı";
    }
    if(this.state.due==0){
        document.getElementById("hak").innerHTML="Yanlış Cevap. KAYBETTİNİZ ...";
        document.getElementById("alanID").innerHTML='KAYBETTİNİZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a> ';
        this.showAllPictures();
        this.setState({due:-1});

    }
}



}


ClickEventThree=(e)=>{


     
document.getElementById("img2").setAttribute("src",this.state.pictures[(this.state.item+2)%3]);
document.getElementById("img2").setAttribute("name",this.state.pictures[(this.state.item+2)%3]);
//rastgele üretilen indexe 2 ekleyerek son kalan kısma kullanılmayan son dizi elemanını aktardık.

if(e.target.name=="tina.jpeg")
{   
    this.setState({due:-1});
    
    if(this.state.due==1 || this.state.due==0)
    { document.getElementById("hak").innerHTML="Tebrikler Doğru Cevap";
    document.getElementById("alanID").innerHTML='KAZANDINIZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a> ';
    this.showAllPictures();}
   
}
else{
    this.setState({due:this.state.due-1});
    
    if(this.state.due==1){
        document.getElementById("hak").innerHTML="Yanlış Cevap " +this.state.due +" hakkınız kaldı";
    }
    if(this.state.due==0){
        document.getElementById("hak").innerHTML="Yanlış Cevap. KAYBETTİNİZ ...";
        document.getElementById("alanID").innerHTML='KAYBETTİNİZ... YENİDEN DENEMEK İÇİN <a class="link" href="index.html">TIKLAYINIZ </a>';
        this.showAllPictures();
        
    }
}


e.preventDefault();


}
render(){
    return (
    <div>
        
        <h2>Kedi Bulmaca</h2>
    <h3 id="hak"></h3>
    <img id="img0" className="kart" src="joker.jpg" onClick={this.ClickEventOne}  />
    <img id="img1" className="kart" src="joker.jpg" onClick={this.ClickEventTwo} />
    <img id="img2" className="kart" src="joker.jpg" onClick={this.ClickEventThree} />

    <div className="mesaj">
    <p id="alanID">Kedi Kartını bulmak için kartın üzerine tıkla</p>
        </div>

    </div>)
}

}

ReactDOM.render(<App/>,document.getElementById("root"));












