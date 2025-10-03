
document.getElementById('navToggle').addEventListener('click', function(){
  var nav = document.getElementById('navList');
  if(nav.style.display === 'flex' || nav.style.display === 'block'){
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile nav if open
    var nav = document.getElementById('navList');
    if(window.innerWidth <= 880) nav.style.display = 'none';
  });
});
