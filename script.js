const hamburger = document.querySelector('.hamburger-menu ');
const list = document.querySelector('.hamburger-menu-click');
const links = document.querySelectorAll('.links ');
hamburger.addEventListener('click', () => {
  list.classList.toggle('active');
  hamburger.style.animation = 'scaleUpAndDown 0.3s linear 1 forwards';
  setTimeout(() => {
    hamburger.style.animation = '';
  }, 500);
});
links.forEach((link) => {
  link.addEventListener('click', function () {
    list.classList.remove('active');
  });
});
// page2
const statusAll = document.querySelectorAll('.status');
loadAnimationStarter();

function loadAnimationStarter() {
  statusAll.forEach((status) => {
    if (status.getBoundingClientRect().top < window.innerHeight) {
      widthChanger(status);
    }
  });
}

function widthChanger(status) {
  if (
    status.parentElement.getAttribute('class') ==
    'myskills-card-java myskills-card'
  ) {
    status.style.width = `11rem`;
  } else if (
    status.parentElement.getAttribute('class') ==
    'myskills-card-html myskills-card'
  ) {
    status.style.width = '16rem';
  } else if (
    status.parentElement.getAttribute('class') ==
    'myskills-card-css myskills-card'
  ) {
    status.style.width = '14rem';
  } else if (
    status.parentElement.getAttribute('class') ==
    'myskills-card-php myskills-card'
  ) {
    status.style.width = '9rem';
  }
}

window.addEventListener('scroll', () => {
  // let x = window.innerHeight.getBoundingClientRect().;
  statusAll.forEach((status) => {
    if (
      status.getBoundingClientRect().top < window.innerHeight &&
      status.getBoundingClientRect().top > 0
    ) {
      widthChanger(status);
    } else if (
      status.getBoundingClientRect().top < 0 ||
      status.getBoundingClientRect().top > window.innerHeight
    ) {
      status.style.width = '1rem';
    }
  });
});
