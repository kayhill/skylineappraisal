document.addEventListener('DOMContentLoaded', function() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'));
    M.FormSelect.init(document.querySelectorAll('select'));

    var year = document.getElementById('copyright-year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
