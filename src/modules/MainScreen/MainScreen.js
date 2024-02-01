export function MainScreen() {
   const cardContent = [
      {
         title: 'Basic Survival',
         price: 30,
         subtitle: 'Basic',
         list: ['Email addresses', 'Phone numbers', 'Unlimited Lists']
      },
      {
         title: 'Mission Professional',
         price: 276,
         subtitle: 'Boost Tools',
         list: ['Email addresses', 'Phone numbers', 'Unlimited Lists', 'Export contacts', 'Prospecting', '50MB Per File Attachment']
      },
      {
         title: 'Rocketship Premium',
         price: 420,
         subtitle: 'Super Fuel',
         list: ['Email addresses', 'Phone numbers', 'Unlimited Lists', 'Export contacts', 'Prospecting', '50MB Per File Attachment', 'Basic analytics']
      },
   ];

   const cardContainer = document.querySelector('.main-screen__cards');
   let pricesFlag = true;
   let periodFlag = true;
   let pricesValue = cardContent.map(item => item.price);

   function renderCard(apiData) {
      let cards = '';
      let result = apiData;

      result.forEach((item, index) => {
         let listItems = '';
         
         item.list.forEach(listItem => {
            listItems += `<li class="card__body-paragraph">${listItem}</li>`;
         });

         const buttonText = index === 1 ? 'Get Started' : 'Start Free Trial';
         const buttonClass = index === 1 ? 'button__red arrow ' : 'card-footer__button';
         
         const cardBlock = `
            <div class="main-screen__card">
               <div class="main-screen__card-header">
                  <div class="card__header-heading">
                     <div class="heading__title">
                        <h2 class="heading__title-h">${item.title}</h2>
                     </div>
                     <div class="heading__subtitle">
                        <div class="heading__price">
                           <h2 class="heading__price-h"><span class="heading__term-currency">${pricesFlag ? '$' : '₽'}</span> ${pricesValue[index]} <span class="heading__term-link">${periodFlag ? '/Months' : '/Day'}</span></h2>
                        </div>
                     </div>
                  </div>
                  <div class="card__header-description">
                     <p class="description__paragraph">
                        Get Torque’s basic plan to optimise you lead generation process.
                     </p>
                  </div>
               </div>
               <div class="main-screen__card-body">
                  <div class="card__body-cap">
                     <div class="card__body-cap-title">
                        <h3 class="card__body-cap-title-h">Core Features</h3>
                     </div>
                     <div class="card__body-cap-subtitle">
                        <p class="card__body-cap-subtitle-p">${item.subtitle}</p>
                     </div>
                  </div>
                  <ul class="card__body-list">
                     ${listItems}
                  </ul>
               </div>
               <div class="main-screen__card-footer">
                  <button class=" ${buttonClass}"> ${buttonText}</button>               
               </div>
            </div>
         `;
      
         cards += cardBlock;

      });
    
      cardContainer.innerHTML = cards;

      function converterPrice() {
         if (pricesFlag) {
            pricesValue = pricesValue.map(price => price * 90);
            pricesFlag = false;
         } else {
            pricesValue = cardContent.map(item => item.price);
            pricesFlag = true;
         }

         renderCard(cardContent);
      }

      function converterPeriod() {
         if (periodFlag) {
            pricesValue = pricesValue.map(price => Math.round(price / 30));
            periodFlag = false;
         } else {
            pricesValue = pricesValue.map(price => price * 30);
            periodFlag = true;
         }

         renderCard(cardContent);
      }
   
     const pricesLinks = document.querySelectorAll('.heading__term-currency');
     const periodLinks = document.querySelectorAll('.heading__term-link');

      pricesLinks.forEach(link => {
         link.addEventListener('click', converterPrice);
      });

      periodLinks.forEach(link => {
         link.addEventListener('click', converterPeriod);
      });
   };

   renderCard(cardContent);
}


