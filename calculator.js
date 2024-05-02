  function calculateAddition() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var num3 = parseFloat(document.getElementById('num3').value);
        var result = num1 + num2;
        if (!isNaN(num3)) {
            result += num3;
        }
        document.getElementById('result').innerText = 'Résultat: ' + result;
    }
    
    function calculateSoustraction() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var result = num1 - num2;
        document.getElementById('result').innerText = 'Résultat: ' + result;
    }
    
    function calculateMultiplication() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var num3 = parseFloat(document.getElementById('num3').value);
        var result = num1 * num2;
        if (!isNaN(num3)) {
            result *= num3;
        }
        document.getElementById('result').innerText = 'Résultat: ' + result;
    }
    
    function calculateDivision() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        if (num2 === 0) {
            document.getElementById('result').innerText = "Division par zéro est impossible.";
        } else {
            var result = num1 / num2;
            document.getElementById('result').innerText = 'Résultat: ' + result;
        }
    }

