const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelectorAll('nav a');
navBar.forEach(function(obj,indx){
   obj.textContent = siteContent["nav"][`nav-item-${indx+1}`];
    obj.style.color = "green";
  });

const nav1 = document.createElement('a');
nav1.textContent = "Append";
nav1.setAttribute('href', '#')
nav1.style.color = "green";

const nav2 = document.createElement('a');
nav2.textContent = "Prepend";
nav2.setAttribute('href', '#')
nav2.style.color = "green";

const newNav = document.querySelector('nav');

  newNav.appendChild(nav1);
  newNav.prepend(nav2);

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent["cta"]["h1"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src',siteContent["cta"]["img-src"]);

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];
ctaButton.setAttribute('onclick', "changeStyle()");

document.querySelector('.top-content :nth-child(1) h4').textContent = siteContent["main-content"]["features-h4"];
document.querySelector('.top-content :nth-child(1) p').textContent = siteContent["main-content"]["features-content"];

document.querySelector('.top-content :nth-child(2) h4').textContent = siteContent["main-content"]["about-h4"];
document.querySelector('.top-content :nth-child(2) p').textContent = siteContent["main-content"]["about-content"];

document.querySelector('.bottom-content :nth-child(1) h4').textContent = siteContent["main-content"]["services-h4"];
document.querySelector('.bottom-content :nth-child(1) p').textContent = siteContent["main-content"]["services-content"];

document.querySelector('.bottom-content :nth-child(2) h4').textContent = siteContent["main-content"]["product-h4"];
document.querySelector('.bottom-content :nth-child(2) p').textContent = siteContent["main-content"]["product-content"];

document.querySelector('.bottom-content :nth-child(3) h4').textContent = siteContent["main-content"]["vision-h4"];
document.querySelector('.bottom-content :nth-child(3) p').textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".middle-img").setAttribute('src',siteContent["main-content"]["middle-img-src"]);

document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent["contact"]["address"];
document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent["contact"]["phone"];
document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent["contact"]["email"];

document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];

//document.querySelectorAll('nav a').style.color = "green";

function changeStyle(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  const ctaText = document.querySelector('.cta-text h1');
  ctaText.style.color = `#${randomColor}`;
  console.log(randomColor);
}