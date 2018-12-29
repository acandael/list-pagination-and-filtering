/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.querySelector('ul.student-list');
const numberOfPages = Math.ceil(list.children.length / 10);
let currentPage = 1;
const paginationDiv = document.createElement('div');
paginationDiv.className = 'pagination';
const pageDiv = document.querySelector('.page');
pageDiv.appendChild(paginationDiv);
const ul = document.createElement('ul');


/* The showPage function loops through all
list items and displays 10 listitems of the
page that was passed.
*/

const showPage = (list, page) => {
   for(let i = 0; i < list.children.length; i += 1) {
      let firstItem = page - 9;
      let lastItem = page;
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
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = i;
      
      // When clicked show page and set current page
      a.addEventListener('click', (e) => { 
         const aLinks = document.querySelectorAll('a');
         currentPage = parseInt(e.target.textContent);
         /* loop through all the links and remove 'active' class
          add active class for the link that was clicked */
         for (let j = 1; j < aLinks.length; j += 1) {
            let pageLink = aLinks[j];
            let linkNumber = parseInt(pageLink.textContent);
            if (linkNumber === currentPage) {
               pageLink.setAttribute('class', 'active');
            } else {
               pageLink.removeAttribute('class');
            }
         }
         showPage(list, parseInt(a.textContent) * 10);
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
