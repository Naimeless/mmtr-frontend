let contactFormLink = document.getElementById('contact-form-link');

contactFormLink.onclick = function link() {
    document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'});
  }



/*блок сервисы*/

const servicesBlockContentInfo = document.getElementById("services-block-content-info");

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
  serviceBlock.className = "servicesBlockContent";
  const titleService = document.createElement("h1");
  const descriptionService = document.createElement("p");
  servicesBlockContent.appendChild(serviceBlock);
  serviceBlock.append(title);
  serviceBlock.append(description);
  titleService.innerHTML = title;
  descriptionService.innerHTML = description;
}

//css





debugger
