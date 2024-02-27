const mathOperation = prompt(
			'Вітаю! Напишіть яку математичну дію з двома числами ви хочете виконати використовуючи такі значення: add, sub, mult або div'
		);

		if (
			mathOperation !== 'add' &&
			mathOperation !== 'sub' &&
			mathOperation !== 'mult' &&
			mathOperation !== 'div'
		) {
			alert('Недопустима математична операція');
		} else {
			const firstNumber = +prompt('Введіть перше число для обчислення:');
			const secondNumber = +prompt('Тепер введіть друге число для обчислення:');

			if (isNaN(firstNumber) || isNaN(secondNumber)) {
				alert(
					'Oт халепа! Ви ввели щось крім числа! Це ж калькулятор) Cюди треба вводити тільки числа, спробуйте ще раз)'
				);
			} else if (!firstNumber || !secondNumber) {
				alert('Спочатку треба ввести в поле якесь число! Спробуйте ще раз!');
			} else {
				let result;

				switch (mathOperation) {
					case 'add':
						result = firstNumber + secondNumber;
						alert(`${firstNumber} + ${secondNumber} = ${result}`);
						break;
					case 'sub':
						result = firstNumber - secondNumber;
						alert(`${firstNumber} - ${secondNumber} = ${result}`);
						break;
					case 'mult':
						result = firstNumber * secondNumber;
						alert(`${firstNumber} * ${secondNumber} = ${result}`);
						break;
					case 'div':
						result = firstNumber / secondNumber;
						alert(`${firstNumber} / ${secondNumber} = ${result}`);
						break;
				}
			}
		}