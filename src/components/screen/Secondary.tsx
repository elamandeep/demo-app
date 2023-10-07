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




export const Secondary = () => {
    const { nextStep, id } = useAppStore((state) => ({ setId: state.setId, nextStep: state.nextStep, id: state.id }))

    const navigation = useNavigate()

    const supabase = createClient<Database>(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_PROJECT_KEY)

    function pick<Type>(obj: Record<string, any>, ...props: Array<Type>): Record<string, Type> {
        // @ts-ignore
        return props.reduce(function (result, prop) {
            // @ts-ignore
            result[prop] = obj[prop];
            return result;
        }, {});
    }


    const rootSchema = z.object({
        amb_temp: z.string(),
        amb_temp1: z.string(),
        coating_app_temp: z.string(),
        curing_temp: z.string(),
        dew_point_temp: z.string(),
        dew_point_temp1: z.string(),
        dft: z.string(),
        id: z.string().optional(),
        rh: z.string(),
        rh1: z.string(),
        sid: z.string().optional(),
        time: z.string(),
        time1: z.string()
    })

    const { control, handleSubmit } = useForm({
        resolver: zodResolver(rootSchema),
    })

    type DatabaseType = Partial<Database["public"]["Tables"]["custom_coating_secondary"]["Row"]>

    interface FormDataType extends DatabaseType {
        amb_temp1?: string,
        dew_point_temp1?: string,
        time1?: string,
        rh1?: string,
    }

    const onSubmit: SubmitHandler<FormDataType> = useCallback(async (data) => {
        // @ts-ignore
        data["amb_temp"] = parseFloat(data.amb_temp)
        // @ts-ignore
        data["amb_temp1"] = parseFloat(data.amb_temp1)

        // @ts-ignore
        data["dew_point_temp"] = parseFloat(data.dew_point_temp)
        // @ts-ignore
        data["dew_point_temp1"] = parseFloat(data.dew_point_temp1)
        // @ts-ignore
        data["rh"] = parseFloat(data.rh)
        // @ts-ignore
        data["rh1"] = parseFloat(data.rh1)

        data["id"] = id

        let obj1 = pick<string>(data, "amb_temp", "time", "dew_point_temp", "rh", "dft", "coating_app_temp", "curing_temp", "id")

        let obj2 = pick<string>(data, "amb_temp1", "time1", "dew_point_temp1", "rh1", "dft", "coating_app_temp", "curing_temp", "id")

        let tempObj = { ...obj2, "amb_temp": obj2.amb_temp1, "time": obj2.time1, "dew_point_temp": obj2.dew_point_temp1, "rh": obj2.rh1 }


        // @ts-ignore
        let { amb_temp1, dew_point_temp1, time1, rh1, ...rest } = tempObj



        // @ts-ignore
        const { data: data1, error } = await supabase
            .from('custom_coating_secondary')
            .insert([
                obj1,
                rest
            ])
            .select()


        if (error) {
            console.log(error)
        }
        console.log(data1)
        nextStep()
        navigation("/tertiary")


    }, [supabase])


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='time'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Time</Label>
                            <Input type="time" defaultValue="12:00" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='time1'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Input type="time" defaultValue="12:00" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='amb_temp'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Amb Temp</Label>
                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='amb_temp1'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">

                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='dew_point_temp'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Dew Point</Label>
                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='dew_point_temp1'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">

                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='rh'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>%RH</Label>
                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='rh1'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">

                            <Input type="number" {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='coating_app_temp'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-2.5">
                            <Label>Coating Application Temp</Label>
                            <RadioGroup onValueChange={field.onChange} className="flex" >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem  {...field} value="F" id="f" />
                                    <Label>F &deg;</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem {...field} value="C" id="c" />
                                    <Label>C &deg;</Label>
                                </div>
                            </RadioGroup>
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='curing_temp'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-2.5">
                            <Label>Curing Temp</Label>
                            <RadioGroup onValueChange={field.onChange} className="flex" >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem  {...field} value="F" id="f" />
                                    <Label>F &deg;</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem {...field} value="C" id="c" />
                                    <Label>C &deg;</Label>
                                </div>
                            </RadioGroup>
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='dft'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-2.5">
                            <Label>Spool/ Fitting/ Bend Dry Film</Label>
                            <RadioGroup onValueChange={field.onChange} className="flex" >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem  {...field} value="microns" id="f" />
                                    <Label>Microns</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem {...field} value="mills" id="c" />
                                    <Label>Mills</Label>
                                </div>
                            </RadioGroup>
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />



                <Button type="submit">Next</Button>
            </form>


        </>
    )
}