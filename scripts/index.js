// Current year in the footer//
const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

//Displays the last modified//
const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modified ${lastModified}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
const courseDetails = document.getElementById("course-details")

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits</strong>: ${course.credits}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();
    
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
    
  }



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

    function renderCourses(coursesToShow) {
        const courseContainer = document.querySelector('.courses');
        courseContainer.innerHTML = ''; 
        coursesToShow.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-item');
    
            
            if (course.completed) {
                courseCard.classList.add('completed'); 
            }
    
            courseCard.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                
            `;
            
            courseCard.addEventListener('click', () => {
                displayCourseDetails(course);
            });

            courseContainer.appendChild(courseCard);
        });
    
        
        const totalCredits = courses.reduce((sum, course) => {
            return sum + (course.credits ? course.credits : 0);
        }, 0);
        
        document.querySelector('.total-credits').textContent = `Total Credits: ${totalCredits}`;
    }
    
    function showAllCourses() {
        renderCourses(courses);
    }
    
    function showCSECourses() {
        const cseCourses = courses.filter(course => course.subject === 'CSE');
        renderCourses(cseCourses);
    }
    
    function showWDDCourses() {
        const wddCourses = courses.filter(course => course.subject === 'WDD');
        renderCourses(wddCourses);
    }
    
    
    document.querySelector('#all-courses').addEventListener('click', showAllCourses);
    document.querySelector('#cse-courses').addEventListener('click', showCSECourses);
    document.querySelector('#wdd-courses').addEventListener('click', showWDDCourses);
    
    
    renderCourses(courses);
