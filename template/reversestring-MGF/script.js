document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('stringInput');
    const button = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    button.addEventListener('click', function () {
        const value = input.value;
        const reversed = reverseString(value);
        result.textContent = reversed;
    });
});