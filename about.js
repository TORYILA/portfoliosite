        let resumePopup = document.getElementById("resumePopup");

        let resumeLink = document.getElementById("resume-link");

        let closeResume = document.getElementById("closeResume");


        resumeLink.onclick = function() {
        resumePopup.style.display = "block";
        }

        closeResume.onclick = function() {
        resumePopup.style.display = "none";
        }

        window.onclick = function(event) {
        if (event.target == resumePopup) {
            resumePopup.style.display = "none";
        }
        }

        let menuLinks = document.querySelector(".menu")
        function toggleMenu() {
        menuLinks.classList.toggle('show-menu')
        console.log(menuLinks.classList)
        }
