const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-sright');
            entry.target.classList.add('show-sleft');
            entry.target.classList.add('show-sup');
            entry.target.classList.add('show-fadein');
            entry.target.classList.add('show-sright-paragraph');
            entry.target.classList.add('show-sleft-paragraph');
        }
        else {
            
        }
    })
})

const hiddenSlideRight = document.querySelectorAll('.hidden-sright');
hiddenSlideRight.forEach((el) => observer.observe(el));

const hiddenSlideLeft = document.querySelectorAll('.hidden-sleft');
hiddenSlideLeft.forEach((el) => observer.observe(el));

const hiddenSlideUp = document.querySelectorAll('.hidden-sup');
hiddenSlideUp.forEach((el) => observer.observe(el));

const hiddenFadeIn = document.querySelectorAll('.hidden-fadein');
hiddenFadeIn.forEach((el) => observer.observe(el));

const hiddenSlideRightPara = document.querySelectorAll('.hidden-sright-paragraph');
hiddenSlideRightPara.forEach((el) => observer.observe(el));

const hiddenSlideLeftPara = document.querySelectorAll('.hidden-sleft-paragraph');
hiddenSlideLeftPara.forEach((el) => observer.observe(el));
