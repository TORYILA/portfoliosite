        document.getElementById("backtop").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector('.myprofilepic').scrollIntoView({ behavior: 'smooth' });
            })

        document.getElementById("contact-link").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
        });

        let menuLinks = document.querySelector(".menu")
        function toggleMenu() {
        menuLinks.classList.toggle('show-menu')
        console.log(menuLinks.classList)
        }



        function toggleMenuDis() {
            let displayIcons = document.getElementById('conttbutt');
            displayIcons.classList.toggle('buttdisplay');
        }

        function displaytext(){
        const mailElem = document.querySelector('.mailtext');
        mailElem.classList.toggle('displaynum')
        }
        function displayNumba(){
        const mailElem = document.querySelector('.mailnum');
        mailElem.classList.toggle('displaynum')
        }