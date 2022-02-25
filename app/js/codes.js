let contactFormLink = document.getElementById('contact-form-link');

let contactBlockForm = document.getElementById('contact-block-form');
let contactBlockButton = document.getElementById('contactBlockSend');

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
};


//блок-форма

function Input(type, value, placeholder, classList, id) {
  this.type = type;
  this.value = value;
  this.placeholder = placeholder;
  this.classList = classList;
  this.id = id;
};

Input.prototype.create = function () {
  const input = document.createElement("input");
  input.type = this.type;
  input.value = this.value;
  input.placeholder = this.placeholder;
  input.classList = this.classList;
  input.id = this.id;
  contactBlockForm.appendChild(input);
};

const input1 = new Input("text",  "", "Your NAME", "contact-block__form-user", "name");
input1.create();

const input2 = new Input("email", "", "Your Email", "contact-block__form-user", "mail");
input2.create();

const textarea = new Input("text", "", "Write message", "contact-block__questions-user", "message");
textarea.create();

//валидация

const users = [];

contactBlockButton.addEventListener('click', function (event) {
  event.preventDefault();

  let elems = contactBlockForm.children;
  for (let contactBlockForm of elems){
    if(contactBlockForm.className !== 'contact-block__send' ){

      let isValidationPassed = true;

      if(contactBlockForm.value === ''){
        contactBlockForm.style.border = '1px solid red'
        isValidationPassed = false;
      }
      else{
        contactBlockForm.style.border = 'none';

        const name = document.body.querySelector("#name").value;
        const mail = document.body.querySelector('#mail').value;
        const message = document.body.querySelector('#message').value;

        let user = {
          name,
          mail,
          message
        };
        
        if (isValidationPassed === true){
            let user1 = users.push(user);
        } 
      }      
    }
    localStorage.setItem('user', JSON.stringify(users)); 
  }
});




