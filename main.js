const progressBar = document.querySelector('.progress-bar');
const checkboxes = document.querySelectorAll('.checkbox');
const inputs = document.querySelectorAll('input');

inputs.forEach((a, b) => a.addEventListener('change', function() {
        let checkbox = checkboxes[b<=3 ? b : 3];
        checkbox.classList.add('checkbox-blue');

        checkbox.addEventListener('animationend', ()=> {    
        
        checkbox.innerHTML = `<i class="fas fa-check"></i>`;

        if (a.value == '') {
            checkbox.innerHTML = `<span>${b+1}</span>`;
        };
        
        if (!checkbox.classList.contains('checkbox-white')) {
            checkbox.classList.add('checkbox-white');
        }
        

        if (checkbox.classList.contains('checkbox-blue')) {
            checkbox.classList.remove('checkbox-blue');
        }


        checkbox.addEventListener('animationend', ()=> {
            if (checkbox.classList.contains('checkbox-white')) {
                checkbox.classList.remove('checkbox-white');
            }
        })

        });

}))

inputs.forEach(a => a.addEventListener('change', function() {;
    let progress = 0;
    inputs.forEach((a,b) => b < 3 && a.value !== ''? progress++: a);
    inputs.forEach(a => a.checked ? progress++: a);

    switch (progress) {
        case 0: progressBar.style.border = 'none';
                progressBar.innerHTML = `<span>0%</span>`;
        break;
        case 1: progressBar.style.borderTop = '2px solid white';
                progressBar.style.borderRight = 'none';
                progressBar.style.borderBottom = 'none';
                progressBar.style.borderLeft = 'none';
                progressBar.innerHTML = `<span>25%</span>`;
        break;
        case 2: progressBar.style.borderTop = '2px solid white';
                progressBar.style.borderRight = '2px solid white';
                progressBar.style.borderBottom = 'none';
                progressBar.style.borderLeft = 'none';
                progressBar.innerHTML = `<span>50%</span>`;
        break;
        case 3: progressBar.style.borderTop = '2px solid white';
                progressBar.style.borderRight = '2px solid white';
                progressBar.style.borderBottom = '2px solid white';
                progressBar.style.borderLeft = 'none';
                progressBar.innerHTML = `<span>75%</span>`;
        break;
        case 4: progressBar.style.borderTop = '2px solid white';
                progressBar.style.borderRight = '2px solid white';
                progressBar.style.borderBottom = '2px solid white';
                progressBar.style.borderLeft = '2px solid white';
                progressBar.innerHTML = `<span>100%</span>`;
        break;
    };
}));