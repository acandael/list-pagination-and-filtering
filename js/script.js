/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const list = document.querySelector('ul.student-list');
const numberOfPages = Math.ceil(list.children.length / 10);
const paginationDiv = document.createElement('div');
paginationDiv.className = 'pagination';
const pageDiv = document.querySelector('.page');
pageDiv.appendChild(paginationDiv);
const ul = document.createElement('ul');


/* The showPage function loops through all
list items and displays 10 listitems per page.
*/

const showPage = (list, page) => {
   for(let i = 0; i < list.children.length; i += 1) {
      let firstItem = page - 9;
      let lastItem = page;
      // only show 10 list items per page
       if (i >= firstItem && i <= lastItem ) {
          list.children[i].style.display = 'block';
       } else {
          list.children[i].style.display = 'none';
       }
   }
}

/* The appendPageLinks function generates 
the pagination links and adds the 'active'
class to the link that was clicked */

const appendPageLinks = () => {
   // loop through the pages dynamically
   for (let i = 1; i <= numberOfPages; i += 1) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = i;
      // set first link active when page links are initiated
      if (parseInt(a.textContent) === 1) {
         a.className = 'active';
      }
      // When clicked show page and set current page
      a.addEventListener('click', (e) => { 
         const aLinks = document.querySelectorAll('a');
         const currentPage = parseInt(e.target.textContent);
         /* loop through all the links and remove 'active' class
          add active class for the link that was clicked */
         for (let j = 0; j < aLinks.length; j += 1) {
            const pageLink = aLinks[j];
            const linkNumber = parseInt(pageLink.textContent);
            if (linkNumber === currentPage) {
               pageLink.setAttribute('class', 'active');
            } else {
               pageLink.removeAttribute('class');
            }
         }
         showPage(list, currentPage * 10);
      });

      li.appendChild(a);
      ul.appendChild(li);
   }
   paginationDiv.appendChild(ul);
}

// Initiate to first 10 students
showPage(list, 10);

// Generate the page links
appendPageLinks();
