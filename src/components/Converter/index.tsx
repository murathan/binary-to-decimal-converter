import * as React from 'react'
import { Form, Wrapper, Button, Span, Input } from './styled'
import arrowIcon from '../../icons/down-arrow-button.svg'

const Converter : React.FC = () => {
	const [inputValue, setInputValue] = React.useState<string>('')
	const [result, setResult] = React.useState<string | number>('A convertion example => 101010 = 42')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => setInputValue(e.target.value)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>):void => {
		const keyCode : string = e.code
		
		const availableKeyCodes : string[] = ['Digit1', 'Digit0', 'Backspace', 'Enter']

		if (!availableKeyCodes.includes(keyCode)) {
			e.preventDefault()
		}
	}

	const convertBinaryToDecimal = (binary : string) : void => {
		const lastDigitIndex : number = binary.length - 1
		let power : number = 0
		let totalDecimal : number = 0
		for (let i : number = lastDigitIndex; i >= 0; i--) {
			totalDecimal += +binary.charAt(i) * Math.pow(2, power)
			power++
		}
		setResult(totalDecimal)
	}

	const handleSubmit = (e: React.FormEvent) : void => {
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
					<img src={arrowIcon as unknown as string} />
				</Button>
			</Form>
			<Span>{result}</Span>
		</Wrapper>
	)
}

export default Converter
