function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('pre code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        button.classList.add('copied');
        button.innerHTML = '&#10004; Copied!';
        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = '&#128203; Copy';
        }, 2000);
    });
}
