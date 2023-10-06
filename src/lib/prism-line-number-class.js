(function() {
    if (typeof Prism === 'undefined' || typeof document === 'undefined' || !document.querySelector) {
        return;
    }

    console.log('prism-line-number-class.js');

    var currentLine = 1;  // Start at the first line

    Prism.hooks.add('before-tokenize', function(env) {
        currentLine = 1;  // Reset the line count before each new code block is tokenized
    });

    Prism.hooks.add('wrap', function(env) {
    });

})();
