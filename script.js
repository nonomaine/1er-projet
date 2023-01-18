let big    = document.querySelector('.big');
let smalls = document.querySelectorAll('.small');

for(small of smalls) {
    small.addEventListener('mouseover', function() {
        let source = this.src;
        big.src = source;
    });
}