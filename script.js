let hanumanji = [
    {
  name: "balaji",
  photoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gbckjp4UtVEiGz7tIVOZM9yl2L_HT9JDpg&s",
  text: "बजरंग बली की भक्ति एक खूबसूरत एहसास हैं, जो करता है उसे ही पता है.",
},
{
  name: "Hanuman ji",
  photoUrl:
    "https://www.shutterstock.com/image-photo/hanuman-ji-260nw-2565524085.jpg",
  text: "हनुमान तेरी भक्ति में मस्त, भक्त हमेशा रहते तुझसे अभ्यस्त. ",
},
{
  name: "Bajrang bali",
  photoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Qj3vsRlA1PRw1apd_ICF0yRbHqCfw2pvzA&s",
  text: "हनुमान का जो भक्त कहाए, राम की कृपा पाता जाए. ",
},
    ]

    let img = document.querySelector(".img")
    let texts = document.querySelector(".paragph")
    let author = document.querySelector(".author")

    let index = 0;
    updated();
    function updated(){
      const { name, photoUrl, text } = hanumanji[index];
      img.src = photoUrl;
      texts.innerText = text;
      author.innerText = name;

      index++;
      if(hanumanji.length===index){
        index = 0;
      }
      setTimeout(() => {
        updated();
      }, 5000);
    }