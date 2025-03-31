import React, { useState } from 'react'
import { CheckboxState } from '../../utils/CheckboxInitialState'
import CheckboxWrapper from '../checkbox-wrapper/checkbox-wrapper'

const RecursiveCheckboxes = () => {
    const [checkboxesState, setCheckboxesState] = useState({...CheckboxState})

    return <CheckboxWrapper props={checkboxesState} changeState={(e) => setCheckboxesState(e)}></CheckboxWrapper>
}

export default RecursiveCheckboxes