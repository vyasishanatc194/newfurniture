var menuBasedCSSFileName = "HomePage";
window.onload = AddHeader;

function AddHeader() {
    AddExternalCSSFile(menuBasedCSSFileName);
    var headerHtml = "<div class='TopMenu'></div>" +

        "<table cellpadding='1' class='MainMenuTable' >" +
        "<tr>" +
            "<td class='MainMenuItem'>" +
                "HOME" +
            "</td>" +
            "<td class='MainMenuItem'>" +
                "ABOUT" +
            "</td>" +
            "<td class='MainMenuItem'>" +
                "Quality" +
            "</td>" +
            "<td class='MainMenuItem'>" +
                "PRODUCTS" +
    "</td>" +
    "<td class='MainMenuItem'>" +
        "Catalog" +
    "</td>" +
     "<td class='MainMenuItem'>" +
        "Contact" +
    "</td>" +

"</tr>" +
"</table>" +
"" +

"<div style='margin-top:-35px; position:relative; z-index:10; margin-left:120px; width:200px;'>" +
"<img src='images/mainlogo.png' style='height:60px; margin-top:15px; width:250px;' />" +

        "<div class='logoBackBox'></div>" + "</div>";

    var divContainer = "<div id='MenuContainer'></div>"

    document.body.innerHTML = divContainer + document.body.innerHTML;

    var menuContainer = document.getElementById("MenuContainer");
    headerHtml = headerHtml;// + GetSlideImageContent();
    //var topPartHtml = "<div class='ContentTop'></div>";

    //var contentContainer = document.getElementById("content");
    //contentContainer.innerHTML = topPartHtml + contentContainer.innerHTML;



    //alert(headerHtml);
    menuContainer.innerHTML = headerHtml;
    AddFooter();
    AddEvent();

    //alert(document.body.innerHTML);

}

function SetSelectedSideMenuStyle(activePage) {
    if (activePage.toLocaleLowerCase().includes("chairmen")) {
        activePage = "premiumchairs";
    }

    var elements = document.getElementsByClassName('widget-container');
    for (var i = 0; i < elements.length; i++) {
        var liElements = elements[i].getElementsByTagName('li');
        for (var j = 0; j < liElements.length; j++) {
            var aElement = liElements[j].getElementsByTagName('a');
            if (aElement.length > 0) {
                var name = aElement[0].innerHTML.replace(' ', '').toLowerCase().replace('chairs', '').replace('benches', '').replace('series', '');
                name = name.trim();
                if (activePage.toLocaleLowerCase().includes(name) && activePage != "executivelounge" && activePage != "table&school") {
                    //   alert(liElements[j].className);
                    liElements[j].id = "sidebarmenuSelected";
                    // alert(liElements[j].className);
                }
                else if (activePage == "visitorchairs" && name.includes("staff")) {
                    liElements[j].id = "sidebarmenuSelected";
                }
                else if (activePage == "table&school" && name.includes("table")) {
                    liElements[j].id = "sidebarmenuSelected";

                }
                else if (activePage.toLocaleLowerCase() == name.toLocaleLowerCase()) {
                    liElements[j].id = "sidebarmenuSelected";

                }
            }
        }
    }

}

function GetSlideImageContent() {
    var content = " <div style='width:1150px; margin-left:15%;'>" +
       "<section class='slider'>" +

           "<div class='flexslider'style='align-content:center;'>" +

               "<ul class='slides'>" +

                   "<li data-thumb='images/slider/slide1.jpg'> <img src='images/slider/slide1.jpg' /> </li>" +

    "<li data-thumb='images/slider/slide2.jpg'> <img src='images/slider/slide2.jpg' /> </li>" +
    "                                                                                       " +
    "<li data-thumb='images/slider/slide3.jpg'> <img src='images/slider/slide3.jpg' /> </li>" +
    "                                                                                       " +
    "<li data-thumb='images/slider/slide4.jpg'> <img src='images/slider/slide4.jpg' /> </li>" +

              " </ul>" +

           "</div>" +

       "</section>" +

   "</div>";
    return content;
}

function AddFooter() {
    //alert(document.body.innerHTML);
    var headerHtml = "<div class='Footer'>" +
    "Copyright &copy;New looks furnitures. All Rights Reserved </div>";


    document.body.innerHTML = document.body.innerHTML + headerHtml;
    //alert(document.body.innerHTML);
}

function AddEvent() {

    allMenuItems = document.getElementsByClassName("MainMenuItem");

    for (var i = 0; i < allMenuItems.length; i++) {
        allMenuItems[i].addEventListener('click', LoadPage, false);
    }
    var arr = location.pathname.split('/').pop();
    var activePage = arr.replace(".html", "");
    if (activePage.toLowerCase() == "index")
        activePage = "home";
    if (!SetSelectedMenuItemSelected(activePage)) {

        SetSelectedMenuItemSelected("products");
    }
    SetSelectedSideMenuStyle(activePage);
}

function LoadPage(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;

    text = text.toLowerCase();
    if (text == "home")
        text = "index";

    if (text.toLowerCase() != "catalog" && text.toLowerCase() != "products") {
        text = text + ".html";
        window.location.href = text.toLowerCase();
    }
    else if (text.toLowerCase() == "products") {
        text = "chairmenseries" + ".html";
        window.location.href = text.toLowerCase();
    }
    else {
        window.open('Catalog/Catalog.pdf', 'fullscreen=yes');
    }
    //AddHeader();
}

function SetSelectedMenuItemSelected(selectedMenu) {
    var isMenuSelected = false;
    for (var i = 0; i < allMenuItems.length; i++) {

        var item = allMenuItems[i].getElementsByTagName("td")[0];

        if (allMenuItems[i].innerText.toUpperCase() == selectedMenu.toUpperCase()) {
            allMenuItems[i].className = "MainMenuItemSelected";
            isMenuSelected = true;
        }
        else {
            allMenuItems[i].className = "MainMenuItem";
        }
    }

    allMenuItems = document.querySelectorAll('.MainMenuItem, .MainMenuItemSelected');
    if (selectedMenu.toLowerCase() == "products") {

        document.body.style.backgroundImage = "url(images/body.jpg)";
    }
    else if (selectedMenu.toLowerCase() == "contact") {
        AddMapToContactPage();
    }
    return isMenuSelected;

}

function AddMapToContactPage(selectedMenu) {
    var element = document.createElement("script");
    element.setAttribute("src", "https://maps.googleapis.com/maps/api/js?callback=myMap");
    document.getElementsByTagName("head")[0].appendChild(element);

}

function AddExternalCSSFile(fileName) {
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "styles/" + fileName + ".css");
    document.getElementsByTagName("head")[0].appendChild(element);

}