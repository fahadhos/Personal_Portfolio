
// ==== toggle icon navbar

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


// scroll section


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a ');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    // Sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // ==== remove toggle icon and navbar when click navbar link (scroll) =======//

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// scroll reveal 
ScrollReveal({
    // reset: true,
    distance : '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

// === Typed JS code  ==//

const typed = new Typed('.multiple-text',{
strings: ['Full Stack Developer_','Youtuber_','Day-Dreamer_','Blogger_'],

typeSpeed: 100,
backSpeed:99,
backDelay: 990,
loop: true
});

    // for Sending email code
function sendmail() {
    var params = {

        name: document.getElementById('name').value,

        email: document.getElementById('email').value,

        phone: document.getElementById('phone').value,

        subject: document.getElementById('subject').value,

        msg: document.getElementById('msg').value,




    };


    const serviceid = "service_p91amrr";
    const templateid = "template_5qku9qn";
    // const templateid = "template_rj3r7bp";

    emailjs.send(serviceid, templateid, params).then(
        res => {
            if( document.getElementById("name").value!== ""|| 
            document.getElementById("email").value !== ""||
            document.getElementById("phone").value !== ""||
            document.getElementById("subject").value !== ""||
            document.getElementById("msg").value !== ""  )
            {
                 document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("msg").value = "";
            console.log(res);

            swal("Thank you for reaching out to me!", "I have received your message successfully!", "success");  // alert("your message sent successfully");

            }
            else {
                // Perform any other actions or show an error message if the fields are empty
                swal("Error", "Please fill in all the required fields.", "error");
              }
           
        }).catch((err) => console.log(err));
}


//<!-- download er jonno custom date append korar script -->
 
    // Function to get the current date in the desired format
    function getFormattedDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
      var day = String(date.getDate()).padStart(2, '0');
      return year + '-' + month + '-' + day;
    }
  
    // Function to update the download link with the current date
    function updateDownloadLink() {
      var downloadLink = document.getElementById('downloadLink');
      var currentDate = getFormattedDate();
      downloadLink.setAttribute('download', 'Fahad_Hossain_Resume_File_' + currentDate + '.pdf');
    }
  
    // Call the function to update the download link on page load
    updateDownloadLink();
  
  
//<!-- download er jonno custom date append korar script -->
