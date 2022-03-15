import { useState } from 'react'
import { Form, Wrapper, Button, Span, Input } from './styled'
import arrowIcon from '../../icons/down-arrow-button.svg'

const Converter = () => {
	const [inputValue, setInputValue] = useState('')
	const [result, setResult] = useState('A convertion example => 101010 = 42')

	const handleChange = (e) => setInputValue(e.target.value)

	const handleKeyDown = (e) => {
		const keyCode = e.keyCode || e.which

		// key code 48 = 0
		// key code 49 = 1
		// key code 8 = backspace
		// key code 13 = enter
		const availableKeyCodes = [48, 49, 8, 13]

		if (!availableKeyCodes.includes(keyCode)) {
			e.preventDefault()
		}
	}

	const convertBinaryToDecimal = (binary) => {
		const lastDigitIndex = binary.length - 1
		let power = 0
		let totalDecimal = 0
		for (let i = lastDigitIndex; i >= 0; i--) {
			totalDecimal += binary.charAt(i) * Math.pow(2, power)
			power++
		}
		setResult(totalDecimal)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		convertBinaryToDecimal(e.target[0].value)
	}

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<Input
					name='binaryInput'
					value={inputValue}
					autoComplete='off'
					maxLength={8}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				<Button type='submit'>
					<img src={arrowIcon} />
				</Button>
			</Form>
			<Span>{result}</Span>
		</Wrapper>
	)
}

export default Converter
