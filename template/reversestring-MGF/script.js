document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('stringInput');
    const button = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Hide button since it's no longer needed
    button.style.display = 'none';

    // Generate result in real time
    input.addEventListener('input', function () {
        const value = input.value;

        if (value.length > 3) {
            result.textContent = reverseString(value);
        } else {
            result.textContent = '';
        }
    });
});