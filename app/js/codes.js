let contactFormLink = document.getElementById('contact-form-link');

contactFormLink.onclick = function link() {
    document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'});
  }



/*блок сервисы*/

const servicesBlockContent = document.getElementById("services-block-content");

const arr = [{
  titleService: "Research",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},
{
  titleService: "Portfolio",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Support",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Documentation",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Development",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
},

{
  titleService: "Design",
  descriptionService: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo architecto aspernatur quod. Dolores!"
}
];

arr.forEach((item) => {
  createElement(item.titleService, item.descriptionService);
});

function createElement(title, description){
  const serviceBlock = document.createElement('div');
  serviceBlock.className = "services-block__content-info";
  //заголовок
  const titleService = document.createElement("h1");
  titleService.className = "services-block__content-info-text";
  //текст
  const descriptionService = document.createElement("p");
  descriptionService.className = "services-block__content-info-text";
  //кнопка
  const btnService = document.createElement("button");
  btnService.className = "services-block__content-info-btn";
  btnService.textContent='READ MORE';
  //картинка
  const imgService = document.createElement("img");
  imgService.className = "services-block__content-info-icon";
  imgService.src = "img/smartphone_copy.png";
  //добавление
  servicesBlockContent.appendChild(serviceBlock);
  serviceBlock.append(imgService);
  serviceBlock.append(titleService);
  serviceBlock.append(descriptionService);
  serviceBlock.append(btnService);
  titleService.innerHTML = title;
  descriptionService.innerHTML = description;
}

debugger
