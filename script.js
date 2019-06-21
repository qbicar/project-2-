/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item'); //pulling info from html to find class.student-item and its content
const studentPage = 10;                                         // number of items to display on page


  // Create the `showPage` function 


const showPage = (list, page) => {                           //list = 54 students, //page = number of pages
  let startIndex = (page * studentPage) - studentPage;       //startindex is defined as page # * 10 (num of students to display)
  let endIndex = (page * studentPage);                        //end index identifies page and number of students to display on that page but should be for the ending amount
for (var i = 0; i < list.length; i++) {                     // if i (page num = 0) , & i is less than studentlist amount , i will generate another page based on amount
    if (i >= startIndex && i < endIndex) {                  // if i is greater than start index and i is less than endindex it will display block or none.
      list[i].style.display = 'block';                      //will display student list in the style of a block on html
    }
    else {
      list[i].style.display = 'none';                       // will hide student list and the length from displaying on page
    }
  }
}
showPage(studentList, 1);                                   //calling my showpage function, 1 is identified as a page num



  // Create the `appendPageLinks function`
const appendPageLinks = (list) => {
  let totalPages = Math.ceil(list.length / studentPage)     //totalnum of pages = amount list of students that should be displayed on each page 

  let div = document.createElement('div');                  //creating a div element
  let page = document.querySelector('.page')                //.page is a class identified in html
  let ul = document.createElement('ul');                    //creating a ul element

  div.className = 'pagination';                              //gave my div a class name of pagination
  page.appendChild(div);                                     // div is being added onto page class in html
  div.appendChild(ul);                                       // ul element id being added onto div element


  for (i = 1; i <= totalPages; i++) {                       //for loop for total pages. i will start at page num 1 and calculate how many pages should be generated
    let li = document.createElement('li');                  //create an element for li
    let a = document.createElement('a');                    //create an element for a 
    a.setAttribute('href', '#')                             //set element a as an href link tag </a>
    ul.appendChild(li);                                     //added li element to my ul element
    li.appendChild(a);                                      //added a element to my li element
    a.textContent = i;                                      // href , # text contents of 'a' will be for i so when totalpages is executed it will be a clickable amount of links displayed

    ul.addEventListener('click', (e) => {                   //event handler function , on click it will target my links anf the page and display contents of showpage function
      let link = e.target
      let page = e.target.textContent;
      showPage(list, page);


      let linkys = document.querySelectorAll('a');          //linkys is defined as all 'a' anchor elements
      for (let m = 0; m < linkys.length; m++) {             // 
        linkys[m].className = 'none';                       // all anchors(linkys) in array m will run equation and display none if the user is not on that current active page
      }
      link.className = 'active';                            //link is my event target so when link is clicked it will display active and show current page

    })
  }
}

appendPageLinks(studentList);                                     //calling appendpagelink function to display everything running in that function
