let menuLinks = document.querySelector(".menu")
        function toggleMenu() {
        menuLinks.classList.toggle('show-menu')
        console.log(menuLinks.classList)
        }



        function toggleMenuDis() {
            let displayIcons = document.getElementById('conttbutt');
            displayIcons.classList.toggle('buttdisplay');
        }