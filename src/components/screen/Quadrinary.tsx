import { Label } from "../ui/label"
import { useAppStore } from "../../store"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { Database } from "database.types"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { z } from "zod"
import { Input } from "../ui/input"

import { Button } from "../ui/button"
import { createClient } from "@supabase/supabase-js"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Textarea } from "../ui/textarea"




export const Quadrinary = () => {
    const { nextStep, id, resetId } = useAppStore((state) => ({ nextStep: state.nextStep, id: state.id, resetId: state.resetId }))

    const navigation = useNavigate()

    const supabase = createClient<Database>(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_PROJECT_KEY)


    const rootSchema = z.object({
        adhesion_test: z.string(),
        avg_dft: z.string().optional(),
        houday: z.string(),
        remarks: z.string(),
        repair_type: z.string(),
        visual_inspection: z.string(),
        supervisior_name: z.string(),
        application_name: z.string(),

    })

    const { control, handleSubmit } = useForm({
        resolver: zodResolver(rootSchema),
    })

    type FormDataType = Partial<Database["public"]["Tables"]["custom_coating_quad"]["Row"]>

    const onSubmit: SubmitHandler<FormDataType> = useCallback(async (data) => {
        // @ts-ignore
        data["avg_dft"] = parseInt(data.avg_dft)
        // @ts-ignore
        data["houday"] = parseInt(data.houday)

        const { error } = await supabase.from("custom_coating_quad").insert([{ ...data, id }])

        if (error) {
            console.log(error)
        }

        nextStep()
        resetId()
        navigation("/viewdata")

    }, [])


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='avg_dft'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Avg. DFT</Label>
                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='houday'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Houday At</Label>
                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='repair_type'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Type of Repair</Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='adhesion_test'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Adhesion Test</Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='visual_inspection'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Visual Inspection</Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='supervisior_name'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Supervisior Name</Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='application_name'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Application Name</Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='remarks'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Remarks</Label>
                            <Textarea {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Button type="submit">Finish</Button>
            </form>


        </>
    )
}