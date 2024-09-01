import * as React from 'react'

type UseToggleReturn = [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>]

const useToggle = (defaultValue?: boolean): UseToggleReturn => {
	const [value, setValue] = React.useState(!!defaultValue)

	const toggle = React.useCallback(() => {
		setValue((x) => !x)
	}, [])

	return [value, toggle, setValue]
}

export default useToggle
