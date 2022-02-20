const imgList = ["https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg", 
"https://images.pexels.com/photos/7787713/pexels-photo-7787713.jpeg", 
"https://images.pexels.com/photos/383640/pexels-photo-383640.jpeg", 
"https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg", 
"https://images.pexels.com/photos/3616252/pexels-photo-3616252.jpeg"];

const chosenImg = imgList[Math.floor(Math.random()*imgList.length)];

document.body.style.backgroundImage = `url(${chosenImg})`;
