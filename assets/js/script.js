document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.menu-hamburger');
    const menu = document.querySelector('.menu-hidden');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('visibile');
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('visibile');
        }
    });

    
    menu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

function SendMail() {
   
    var from_name = document.getElementById("from_name").value.trim();
    var email = document.getElementById("email").value.trim();
    var profession = document.getElementById("profession").value.trim();
    var industry = document.getElementById("industry").value.trim();
    var message = document.getElementById("message").value.trim();

    
    if (!from_name || !email || !profession || !industry || !message) {
        alert("All fields must be filled out!");
        return; 
    }

   
    var params = {
        from_name: from_name,
        email: email,
        profession: profession,
        industry: industry,
        message: message
    };

   
    emailjs.send("service_dvn88zd", "template_lkolvrw", params)
    .then(function(response) {
        alert("Success! Email sent, status: " + response.status);
        document.getElementById("contact-form").reset(); 
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });
}

(function(){
    emailjs.init("ScyjE1eYaPsCYSzW2"); 
})();