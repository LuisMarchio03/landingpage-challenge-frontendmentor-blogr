//Li
const productLi = document.querySelector('#product-li');
const companyLi = document.querySelector('#company-li');
const connectLi = document.querySelector('#connect-li');

const productLiM = document.querySelector('#li-product-mobile');
const companyLiM = document.querySelector('#li-company-mobile');
const connectLiM = document.querySelector('#li-connect-mobile');

// Dropdown
const product = document.querySelector('#product');
const company = document.querySelector('#company');
const connect = document.querySelector('#connect');

const productM = document.querySelector('#product-mobile');
const companyM = document.querySelector('#company-mobile');
const connectM = document.querySelector('#connect-mobile');


productLi.addEventListener('click', () => {
  product.classList.remove('invisible');
});

companyLi.addEventListener('click', () => {
  company.classList.remove('invisible');
});

connectLi.addEventListener('click', () => {
  connect.classList.remove('invisible');
});


// Mobile

productLiM.addEventListener('click', () => {
  productM.classList.remove('invisible');
});

companyLiM.addEventListener('click', () => {
  companyM.classList.remove('invisible');
});

connectLiM.addEventListener('click', () => {
  connectM.classList.remove('invisible');
});