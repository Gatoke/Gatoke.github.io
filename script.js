$(function() {

    // enable tooltips
    $("body").tooltip({ selector: '[data-toggle=tooltip]'});



    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
    });
});