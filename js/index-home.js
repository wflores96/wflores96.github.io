$(() => {

    // BEGIN MaterializeCSS features
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    // END MaterializeCSS featuers

    // close side menu on any click inside
    $('#MobileNav a').click(() => {
        M.Sidenav.getInstance($('#MobileNav')).close();
    })

});
