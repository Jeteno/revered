export function Header() {
   const menuContent = [
      {
         href: '#',
         title: 'About Us',
      },
      {
         href: '#',
         title: 'Features',
      },
      {
         href: '#',
         title: 'Pricing',
      },
      {
         href: '#',
         title: 'Product',
      },
      {
         href: '#',
         title: 'Contact',
      },
   ];

   const menuContainer = document.querySelector('.header__list');

   function renderMenu(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
        const cardBlock = `
         <li class="header__paragraph">
            <a href="${item.href}" class="header__paragraph-link">
               ${item.title}
            </a>
         </li>
        `;
    
        cards += cardBlock;
      });
    
      menuContainer.innerHTML = cards;
   };

   renderMenu(menuContent);

   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.menu__body');

   if (iconMenu) {
      iconMenu.addEventListener('click', function () {
        iconMenu.classList.toggle('active__menu');
        menuBody.classList.toggle('active__menu');
        
        if (menuBody.classList.contains('active__menu')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });
    }
}