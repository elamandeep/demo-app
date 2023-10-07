import { Label } from "../ui/label"
import { useAppStore } from "../../store"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { Database } from "database.types"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { z } from "zod"
import { Input } from "../ui/input"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Button } from "../ui/button"
import { createClient } from "@supabase/supabase-js"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"




export const Tertiary = () => {
    const {  nextStep, id } = useAppStore((state) => ({  nextStep: state.nextStep, id: state.id }))

    const navigation = useNavigate()

    const supabase = createClient<Database>(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_PROJECT_KEY)




    const rootSchema = z.object({
        accept_criteria_a: z.string(),
        accept_criteria_b: z.string(),
        accept_criteria_c: z.string(),
        accept_criteria_d: z.string(),
        accept_criteria_e: z.string(),
        accept_criteria_high: z.string(),
        accept_criteria_low: z.string(),
        curing_time: z.string(),
        cut_back_length: z.string(),
        imos_no: z.string(),
        spool_bend_size: z.string(),
        sr_no: z.string(),
    })

    const { control, handleSubmit } = useForm({
        resolver: zodResolver(rootSchema),
    })

    type FormDataType = Partial<Database["public"]["Tables"]["custom_coating_tertiary"]["Row"]>



    const onSubmit: SubmitHandler<FormDataType> = useCallback(async (data) => {
        // @ts-ignore
        data["cut_back_length"] = data.cut_back_length === "true" ? true : false
        // @ts-ignore
        data["curing_time"] = parseFloat(data.curing_time)
        // @ts-ignore
        data["accept_criteria_a"] = parseInt(data.accept_criteria_a)
        // @ts-ignore
        data["accept_criteria_b"] = parseInt(data.accept_criteria_b)
        // @ts-ignore
        data["accept_criteria_c"] = parseInt(data.accept_criteria_c)
        // @ts-ignore
        data["accept_criteria_d"] = parseInt(data.accept_criteria_d)
        // @ts-ignore
        data["accept_criteria_e"] = parseInt(data.accept_criteria_e)

        const { error } = await supabase.from("custom_coating_tertiary").insert([{...data, id}])

        if (error) {
            console.log(error)
        }
        nextStep()
        navigation("/quadrinary")

    }, [])


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='sr_no'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>SR No (24 Hrs)</Label>
                            <Input type="time" defaultValue="12:00" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='imos_no'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>IMO No. </Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='spool_bend_size'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Spoon/Fitting/ Bend No </Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='cut_back_length'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-2.5">
                            <Label>Coating Application Temp</Label>
                            <RadioGroup onValueChange={field.onChange} className="flex" >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem  {...field} value="true" id="accept" />
                                    <Label>Accept</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem {...field} value="false" id="reject" />
                                    <Label>Reject</Label>
                                </div>
                            </RadioGroup>
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>

                    )}
                />


                <Controller
                    name='curing_time'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Curing Time </Label>
                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='accept_criteria_low'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Acceptence Criteria (325-400) </Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='accept_criteria_high'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Acceptence Criteria (390-435) </Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='accept_criteria_a'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Acceptence Criteria (13.78 - 39.00) </Label>
                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='accept_criteria_b'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">

                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='accept_criteria_c'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">

                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='accept_criteria_d'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">

                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='accept_criteria_e'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">

                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />



                <Button type="submit">Next</Button>
            </form>


        </>
    )
}