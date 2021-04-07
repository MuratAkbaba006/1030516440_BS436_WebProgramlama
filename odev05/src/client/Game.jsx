import React, { Component } from 'react'



export class Game extends Component {
    constructor(props){
       
        super(props);
        this.state={
            pictures:["tina.jpeg","kopek.jpg","zurafa.jpg"],
            item:Math.floor(Math.random()*3),
            due:1,
            resim1:"joker.jpg",
            resim2:"joker.jpg",
            resim3:"joker.jpg",
            durum:"Kedi Bulmaca",
            hakTakip:"Kedi Kartını bulmak için kartın üzerine tıkla",
            victory:false,
            defeat:false
            
        }

    }

    
    


    showAllPictures = () =>{
    const {pictures,item,due}=this.state;

    
    this.setState({resim1:this.state.pictures[this.state.item]});
    this.setState({resim2:this.state.pictures[(this.state.item+1)%3]});
    this.setState({resim3:this.state.pictures[(this.state.item+2)%3]})
    

    
}
//bu fonksiyon tüm fotoğrafların açılmasını sağlar



ClickEventOne = (e) =>{

//  img0'a tıklanması durumu
    var resim=this.state.pictures[this.state.item];    
    this.setState({resim1:resim},()=>{
       
        if(resim=="tina.jpeg")
{   
    this.setState({due:-1});
    if(this.state.due==1 || this.state.due==0)
    {
    this.setState({victory:true});     
    this.setState({durum:"Tebrikler Doğru Cevap"});
    this.setState({hakTakip:'KAZANDINIZ... YENİDEN DENEMEK İÇİN '});
    this.showAllPictures();}
    //eğer resim kediye aitse yukarıdaki bilgi satırında ve aşağıdaki yeşil alandaki değişimleri yazdık.
    //<a> etiketiyle TIKLAYINIZ kısmına link tanımladık bu link ise href="index.html" denilerek sayfanın yenilenmesini
    //yani oyunun yeniden başlamasını sağlıyor.showAllPictures ile ise tüm resimleri açıyoruz.
}
else{
    this.setState({due:this.state.due-1});
    
    //eğer tıkladığımız resim kediye ait değilse can bir azalır
    if(this.state.due==1){
        this.setState({durum:"Yanlış Cevap " +this.state.due +" hakkınız kaldı"});
        
        //ilk yanlışımız ise kaç hakkımız kaldığına dair bilgilendirme
    }
    
    if(this.state.due==0){
        this.setState({durum:"Yanlış Cevap. KAYBETTİNİZ ..."});
        this.setState({defeat:true});
        this.setState({hakTakip:'KAYBETTİNİZ... YENİDEN DENEMEK İÇİN'});
        this.showAllPictures();
        this.setState({due:-1});
        //ikinci yanlışımız ise gerekli bilgilendirmeler ve tüm resimlerin gösterilmesini sağladık

    }
    
}

    });
      
        
  




}





ClickEventTwo=(e)=>{
    
    var resim=this.state.pictures[(this.state.item+1)%3];
    this.setState({resim2:resim},()=>{
        //rastgele sayının bir fazlasın mod 3 ünü alarak bir sonraki dizi elemanını img1'e aktardık
        if(resim=="tina.jpeg")
{
    
    this.setState({due:-1});
    
    if(this.state.due==1 || this.state.due==0)
    {
        this.setState({victory:true});     
     
    this.setState({durum:"Tebrikler Doğru Cevap"});
    this.setState({hakTakip:'KAZANDINIZ... YENİDEN DENEMEK İÇİN '});
    this.showAllPictures();}
}
else{
    this.setState({due:this.state.due-1});
    
    if(this.state.due==1){
        this.setState({durum:"Yanlış Cevap " +this.state.due +" hakkınız kaldı"});
    }
    if(this.state.due==0){
        this.setState({durum:"Yanlış Cevap. KAYBETTİNİZ ..."});
        this.setState({defeat:true});

        this.setState({hakTakip:'KAYBETTİNİZ... YENİDEN DENEMEK İÇİN'});
        this.showAllPictures();
        this.setState({due:-1});

    }
}
    })
    
    

    








}


ClickEventThree=(e)=>{

    var resim=this.state.pictures[(this.state.item+2)%3]
    this.setState({resim3:resim},()=>{
       //rastgele üretilen indexe 2 ekleyerek son kalan kısma kullanılmayan son dizi elemanını aktardık. 
        
        if(resim=="tina.jpeg")
{   
    this.setState({due:-1});
    
    if(this.state.due==1 || this.state.due==0)
    { 
        this.setState({victory:true});     
        
    this.setState({durum:"Tebrikler Doğru Cevap"});
    this.setState({hakTakip:'KAZANDINIZ... YENİDEN DENEMEK İÇİN '});
    this.showAllPictures();}
   
}
else{
    this.setState({due:this.state.due-1});
    
    if(this.state.due==1){
        this.setState({durum:"Yanlış Cevap " +this.state.due +" hakkınız kaldı"});
    }
    if(this.state.due==0){
        this.setState({durum:"Yanlış Cevap. KAYBETTİNİZ ..."});
        this.setState({defeat:true});

        this.setState({hakTakip:'KAYBETTİNİZ... YENİDEN DENEMEK İÇİN'});
       
        this.showAllPictures();
        
    }
}
    })
    






e.preventDefault();


}
render(){
    const {victory,defeat}=this.state;
    if(victory)
    {
        return (
            <div className="game-result">
                <h2>Kazandın!</h2>
                <div className="action">
                    <img src="tina.jpeg" width="350px" height="350px" style={{display:"block"}}/>
                    <button className="play new-game-button" onClick={()=>{location.href="index.html"}} >Yeni Oyun</button>
                </div>
            </div>
        )
    }
    if(defeat)
    {
        return (
            <div className="game-result">
                <h2>Yanlış cevap, kaybettin :(</h2>
                <div className="action">
                    <button className="play new-game-button" onClick={()=>{location.href="index.html"}}  >Yeni Oyun</button>
                </div>
            </div>
        );
    }
    return (
    <div>
        
        
    <h3 id="hak">{this.state.durum}</h3>
    <div>
    <img id="img0" className="kart" src={this.state.resim1} onClick={this.ClickEventOne}  />
    <img id="img1" className="kart" src={this.state.resim2} onClick={this.ClickEventTwo} />
    <img id="img2" className="kart" src={this.state.resim3} onClick={this.ClickEventThree} />
    </div>    
    <div className="mesaj">
    <p id="alanID">{this.state.hakTakip} {
        this.state.due<0 && <a className="link" href="index.html">TIKLAYINIZ </a>
    } </p>
        </div>

    </div>)
}

}
