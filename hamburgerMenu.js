function hamburgerMenu() {
    const links = document.getElementById("smallLinks");
    const banner = document.getElementById('paraBanner');
    const nav = document.getElementById('smallNav');
    const logoName = document.getElementById('logoName');
    const icon = document.getElementById('menuIcon');
    const name = document.getElementById('name');

    if (links.style.display === "block") {
        links.style.display = "none";
        icon.style.display = 'block';
        logoName.style.width = '292px';
        logoName.style.alignItems = 'center';
        document.getElementById('smallNav').style.height = '60px';
        document.getElementById('logo').style.marginTop = '0px';
    } else {
        links.style.display = "block";
        nav.style.height = '350px';
        icon.style.display = 'block';
        logoName.style.width = '700px';
        logoName.style.alignItems = 'normal';
        document.getElementById('logo').style.marginTop = '10px';
        /*name.style.marginTop= '0px';*/
    };
    if (links.style.display === "block") {
        banner.style.position = 'static';
    } else {
        banner.style.position = 'relative';
    };
};