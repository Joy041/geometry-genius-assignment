document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleInputB = getInput('triangle-input-b');

    calculator('triangle-value-b', triangleInputB);
    const triangleValueB = getValue('triangle-value-b');

    const triangleInputH = getInput('triangle-input-h');

    calculator('triangle-value-h', triangleInputH);
    const triangleValueH = getValue('triangle-value-h');

    const triangleValue = getValue('triangle-value');

    const triangleTotal = triangleValue * triangleValueB * triangleValueH;

    const area = getValue('triangle-result');
    calculator('triangle-result', triangleTotal);

    const triangleAns = document.getElementById('triangle-ans');
    triangleAns.style.display = 'block';

    const triangleInputBEmpty = document.getElementById('triangle-input-b');
    
    triangleInputBEmpty.value = '';

    const triangleInputHEmpty = document.getElementById('triangle-input-h');

    triangleInputHEmpty.value = '';

    const triangleInputBAlert = triangleInputBEmpty.value;
    if(triangleInputBAlert <= 0 || triangleInputBAlert === ''){
        alert('Enter valid number');
        return;
    }

    
    const triangleInputHAlert = triangleInputHEmpty.value;
    if(triangleInputHAlert <= 0 || triangleInputHAlert === ''){
        alert('Enter valid number');
        return;
    }

})

document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangleInputW = getInput('rectangle-input-w');

    calculator('rectangle-value-w', rectangleInputW);
    const rectangleValueW = getValue('rectangle-value-w');

    const rectangleInputL = getInput('rectangle-input-l');

    calculator('rectangle-value-l', rectangleInputL);
    const rectangleValueL = getValue('rectangle-value-l');

    const rectangleTotal = rectangleValueW * rectangleValueL;

    const area = getValue('rectangle-result');
    calculator('rectangle-result', rectangleTotal);

    const rectangleAns = document.getElementById('rectangle-ans');
    rectangleAns.style.display = 'block';

    const rectangleInputWEmpty = document.getElementById('rectangle-input-w');
    rectangleInputWEmpty.value = '';

    const rectangleInputLEmpty = document.getElementById('rectangle-input-l');
    rectangleInputLEmpty.value = '';

    const rectangleInputWAlert = rectangleInputWEmpty.value;
    if(rectangleInputWAlert <= 0 || rectangleInputWAlert === ''){
        alert('Enter valid number');
        return;
    };

    const rectangleInputLAlert =
    rectangleInputLEmpty.value;
    if(rectangleInputLAlert <= 0 || rectangleInputLAlert === ''){
        alert('Enter valid number');
        return;
    };
})


document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramAmountB = getValue('parallelogram-amount-b');

    calculator('parallelogram-value-b', parallelogramAmountB);
    const parallelogramValueB = getValue('parallelogram-value-b');

    const parallelogramAmountH = getValue('parallelogram-amount-h');

    calculator('parallelogram-value-h', parallelogramAmountH);
    const parallelogramValueH = getValue('parallelogram-value-h');

    const parallelogramTotal = parallelogramValueB * parallelogramValueH;

    calculator('parallelogram-result', parallelogramTotal);

    const parallelogramAns = document.getElementById('parallelogram-ans');
    parallelogramAns.style.display = 'block'; 
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusValue = getValue('rhombus-value')

    const rhombusAmountD1 = getValue('rhombus-amount-d1');

    calculator('rhombus-value-d1', rhombusAmountD1);
    const rhombusValueD1 = getValue('rhombus-value-d1');

    const rhombusAmountD2 = getValue('rhombus-amount-d2');

    calculator('rhombus-value-d2', rhombusAmountD2);
    const rhombusValueD2 = getValue('rhombus-value-d2');

    const rhombusTotal = rhombusValue * rhombusValueD1 * rhombusValueD2;

    calculator('rhombus-result', rhombusTotal);

    const rhombusAns = document.getElementById('rhombus-ans');
    rhombusAns.style.display = 'block'; 
})

document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonValue = getValue('pentagon-value')

    const pentagonAmountP = getValue('pentagon-amount-p');

    calculator('pentagon-value-p', pentagonAmountP);
    const pentagonValueP = getValue('pentagon-value-p');

    const pentagonAmountB = getValue('pentagon-amount-b');

    calculator('pentagon-value-b', pentagonAmountB);
    const pentagonValueB = getValue('pentagon-value-b');

    const pentagonTotal = pentagonValue * pentagonValueP * pentagonValueB;

    calculator('pentagon-result', pentagonTotal);

    const pentagonAns = document.getElementById('pentagon-ans');
    pentagonAns.style.display = 'block'; 
})

document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseValue = document.getElementById('ellipse-value-pi');
    ellipseValue.innerText = '3.14';
    const ellipseValueString = ellipseValue.innerText;
    const ellipseAmount = parseFloat(ellipseValueString);


    const ellipseAmountA = getValue('ellipse-amount-a');

    calculator('ellipse-value-a', ellipseAmountA);
    const ellipseValueA = getValue('ellipse-value-a');

    const ellipseAmountB = getValue('ellipse-amount-b');

    calculator('ellipse-value-b', ellipseAmountB);
    const ellipseValueB = getValue('ellipse-value-b');

    const ellipseTotal = ellipseAmount * ellipseValueA * ellipseValueB;

    calculator('ellipse-result', ellipseTotal.toFixed(2));

    const ellipseAns = document.getElementById('ellipse-ans');
    ellipseAns.style.display = 'block'; 
})
