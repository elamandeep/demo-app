
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Progress } from "../ui/progress"
import { useEffect, useState } from "react"
import { Fields } from "./components/Fields"





export const MainScreen = () => {
    const [step, setStep] = useState<number>(JSON.parse(localStorage.getItem("step") ?? "1"))
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(step * 25)
        localStorage.setItem("step", JSON.stringify(step))
    }, [step])


    const handleNext = () => {
        setStep(step + 1)

    }

    const handlePrev = () => {
        if (step === 0) return
        setStep(step - 1)
    }



    return (
        <>

            <Card className=" w-[350px] md:w-[450px] p-2">
                <Progress value={progress} />
                <CardHeader>
                    <CardTitle>IMOS</CardTitle>
                    <CardDescription>Custom Coating Final Report</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <Fields step={step} />
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" disabled={step === 0} onClick={handlePrev}>Previous</Button>
                    <Button disabled={step===4} onClick={handleNext}>Next</Button>
                </CardFooter>
            </Card>

        </>
    )
}