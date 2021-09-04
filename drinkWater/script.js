const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const highlightCups = (index1) => {
  if (index1 === 7 && smallCups[index1].classList.contains('full')) index1--;
  else if (
    smallCups[index1].classList.contains('full') &&
    !smallCups[index1].nextElementSibling.classList.contains('full')
  ) {
    index1--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index1) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
};

const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

updateBigCup();

smallCups.forEach((cup, index1) => {
  cup.addEventListener('click', () => highlightCups(index1));
});
