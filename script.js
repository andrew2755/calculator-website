function solveEquation() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.innerHTML = "Please enter valid numbers.";
        return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultDiv.innerHTML = `The roots are real and different.<br>Root 1: ${root1}<br>Root 2: ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        resultDiv.innerHTML = `The roots are real and equal.<br>Root: ${root}`;
    } else {
        resultDiv.innerHTML = "The roots are imaginary and cannot be calculated.";
    }
}
