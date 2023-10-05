import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Plus } from 'lucide-react';
import { useCallback, useState } from "react"




export const Fields = ({ step }: { step: number }) => {
    const randomId = function (length = 6) {
        return Math.random().toString(36).substring(2, length + 2);
    };
    const [timeInput, setTimeInput] = useState<Array<any>>(["aaksksism"])


    const handleTimeInput = useCallback((e: { preventDefault: () => void }) => {
        e.preventDefault()
        setTimeInput([...timeInput, randomId])
    }, [randomId])





    if (step === 0) {

        return (
            <>
                <div className="grid w-full items-center gap-4">

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="coating">Format No</Label>
                        <Input type="coating" placeholder="Enter Format No" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="coating">Doc No</Label>
                        <Input type="coating" placeholder="Enter Doc No" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Client</Label>
                        <Select>
                            <SelectTrigger id="client">
                                <SelectValue placeholder="Select Client" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="Seeh al-sarya Engineering LLC">Seeh al-sarya Engineering LLC</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="coating">Type of Coating</Label>
                        <Input type="coating" placeholder="Type of Coating" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="coating">PO Number</Label>
                        <Input type="coating" placeholder="PO Number" />
                    </div>




                </div>
            </>
        )
    }

    else if (step === 1) {
        return (
            <>


                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-2.5">
                        <Label htmlFor="coating">Location</Label>

                        <RadioGroup className="flex" defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Custom Shop</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Sleve</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="flex flex-col space-y-2.5">
                        <Label htmlFor="coating">Shift</Label>
                        <RadioGroup className="flex" defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Day</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Night</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">W.O./Item</Label>
                        <Input id="name" placeholder="Enter W.O/Item" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">FBE Powder Manifacture</Label>
                        <Select>
                            <SelectTrigger id="framework">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="next">AKZONEL</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">FBE Powder grade</Label>
                        <Select>
                            <SelectTrigger id="framework">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="next">AKZONEL</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>




                </div>
            </>
        )
    }


    else if (step === 2) {

        return (
            <>


                <div className="grid w-full items-center gap-4">

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">FBE Batch No</Label>
                        <Input id="name" placeholder="Enter Batch No" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Expire Date:</Label>
                        <Input id="name" placeholder="Select Date" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Repair Material Manufacturer</Label>
                        <Input id="name" placeholder="Enter a Repair Material Manufacturer" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Repair Material Grade</Label>
                        <Input id="name" placeholder="Enter a Repair Material Grade " />
                    </div>

                </div>

            </>
        )
    }

    else if (step === 3) {
        return (
            <>
                <div className="grid w-full items-center gap-4">
                    <Label>Add Row</Label>
                    <Button variant="secondary" onClick={handleTimeInput}>
                        <Plus />
                    </Button>


                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Time(24Hrs)</Label>
                        {timeInput.map((inputValue) => (
                            <Input type="time" defaultValue="00:00" name={inputValue} placeholder="Enter Time" />
                        ))}
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Amb. Temp(C)</Label>
                        {timeInput.map((inputValue) => (
                            <Input type="number" name={inputValue} placeholder="Enter Time" />
                        ))}
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Time(24Hrs)</Label>
                        {timeInput.map((inputValue) => (
                            <Input type="number" name={inputValue} placeholder="Enter Time" />
                        ))}
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">%RH</Label>
                        {timeInput.map((inputValue) => (
                            <Input type="number" name={inputValue} placeholder="Enter Time" />
                        ))}
                    </div>
                </div>
            </>
        )
    }



    else {
        return (
            <>
                <div className="flex justify-center items-center ">
                   <h1 className="font-semibold">Data Sent for Approval</h1>

                </div>
            </>
        )
    }
}