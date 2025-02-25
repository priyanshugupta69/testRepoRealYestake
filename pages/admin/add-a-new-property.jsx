import React from 'react'
import Details from '../../components/Property/AddANewProperty/Details'
import UploadPage from '@/components/Property/AddANewProperty/UploadPage';
import LinksPage from '@/components/Property/AddANewProperty/LinksPage';
export default function NewProperty() {

    const [step, setStep] = React.useState(0);
    const incrementStep = () => {
        console.log(step)
        setStep(step + 1)
    }
    const decrementStep = () => {
        setStep(step - 1)
    }

    const renderItem = () => {
        switch (step) {
            case 0:
                return <Details incrementStep={incrementStep} decrementStep={decrementStep} activeStep={1}/>
            case 1:
                return <LinksPage incrementStep={incrementStep} decrementStep={decrementStep} activeStep={2}/>
            case 2:
                return <UploadPage incrementStep={incrementStep} decrementStep={decrementStep} activeStep={3}/>
            default:
                return;
        }
    }

    return (
        <>
            {renderItem()}
        </>
    )
}
