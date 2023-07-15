let aboutBtn = document.getElementById('aboutBtn');
aboutBtn.onclick = function() {
    let aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({behavior : 'smooth'})
}