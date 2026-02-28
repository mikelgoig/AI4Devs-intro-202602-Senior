document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('stringInput');
    const button = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Hide button initially
    button.style.display = 'none';

    // Show button only when input length > 3
    input.addEventListener('input', function () {
        if (input.value.length > 3) {
            button.style.display = 'inline-block';
        } else {
            button.style.display = 'none';
            result.textContent = '';
        }
    });

    button.addEventListener('click', function () {
        const value = input.value;
        const reversed = reverseString(value);
        result.textContent = reversed;
    });
});