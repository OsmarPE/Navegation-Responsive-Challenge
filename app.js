const buttonsNav = document.querySelectorAll('button.main-nav__link')


for (const button of buttonsNav) {
    button.addEventListener('click', function(){
        if (this.classList.contains('active')) {
            this.classList.remove('active')  
            return
        }
        buttonsNav.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        

    })
}