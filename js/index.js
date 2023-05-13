const mainContainer = document.createElement("div");
const wrapper = document.createElement("div");
const btnFwd = document.createElement("button");
const btnBck = document.createElement("button");
const sliderImg = document.createElement("img");

document.body.append(mainContainer);
mainContainer.append(wrapper, btnBck, btnFwd);
wrapper.append(sliderImg);

mainContainer.classList.add("main_container");
wrapper.classList.add("wrapper");
btnBck.classList.add("button", "button_left");
btnBck.append("Back");
btnFwd.classList.add("button");
btnFwd.append("Forward");
sliderImg.classList.add("image");
const imgArray = [
  {
    src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  },
  {
    src: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
  },
  {
    src: "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000",
  },
  {
    src: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  },
  {
    src: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
  },
];

sliderImg.setAttribute("src", imgArray[0].src);
let counter = 0;

function fwdImg() {
  counter++;
  if (counter >= imgArray.length) {
    counter = 0;
  }
  sliderImg.setAttribute("src", imgArray[counter].src);
}
function bckImg() {
  counter--;
  if (counter < 0) {
    counter = imgArray.length - 1;
  }
  sliderImg.setAttribute("src", imgArray[counter].src);
}

btnBck.addEventListener('click' , bckImg)
btnFwd.addEventListener('click' , fwdImg)
