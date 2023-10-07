import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useAppStore } from '../../store'
import { Database } from 'database.types'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { createClient } from '@supabase/supabase-js';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';






export const Primary = () => {
    const navigation = useNavigate()
    const supabase = createClient<Database>(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_PROJECT_KEY)



    const rootSchema = z.object({
        client: z.string(),
        coating_type: z.string(),
        date: z.string().optional(),
        docs_no: z.string(),
        exp_date: z.string(),
        fbe_powder_batch_no: z.string(),
        fbe_powder_grade: z.string(),
        fbe_powder_manufacturer: z.string(),
        format_no: z.string(),
        id: z.number().optional(),
        location: z.string(),
        po_number: z.string(),
        project: z.string(),
        repair_material_grade: z.string(),
        repair_material_manufacturer: z.string(),
        revision: z.string(),
        shift: z.string(),
        won_or_item_no: z.string(),
        page: z.string()

    })

    type FormDataType = Partial<Database["public"]["Tables"]["custom_coating_report_data"]["Row"]>


    const { nextStep, setId } = useAppStore(state => ({ nextStep: state.nextStep, setId:state.setId}))

    const { control, handleSubmit } = useForm({
        resolver: zodResolver(rootSchema),
    })

    const onSubmit: SubmitHandler<FormDataType> = useCallback(async (data) => {
        // @ts-ignore
        data["fbe_powder_batch_no"] = parseInt(data.fbe_powder_batch_no)
        // @ts-ignore
        data["revision"] = parseInt(data.revision)


        const { data:res,error } = await supabase.from("custom_coating_report_data").insert([data]).select("*")
        if (error){
            console.log(error)
        }

        if (typeof res !== null) {
            // @ts-ignore
            setId(res[0]["id"])   
        }
        nextStep()
        navigation("/secondary")
    }, [supabase])


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Controller
                    name='format_no'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Format No</Label>
                            <Input {...field} className='uppercase' />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='docs_no'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Doc No</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='revision'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Revision</Label>
                            <Input {...field} type='number' className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='page'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Page</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='client'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Client</Label>
                            <Select onValueChange={field.onChange} {...field}>
                                <SelectTrigger id="client">
                                    <SelectValue placeholder="Select Client" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Seeh al-sarya Engineering LLC">Seeh al-sarya Engineering LLC</SelectItem>
                                </SelectContent>
                                <Label className='text-red-500'>{error?.message}</Label>
                            </Select>
                        </div>
                    )}
                />

                <Controller
                    name='coating_type'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Type of Coating</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />


                <Controller
                    name='project'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Project</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='shift'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Shift</Label>
                            <RadioGroup onValueChange={field.onChange} className="flex" >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem  {...field} value="day" id="day" />
                                    <Label >Day</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem {...field} value="night" id="night" />
                                    <Label>Night</Label>
                                </div>
                            </RadioGroup>
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='location'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Location</Label>
                            <RadioGroup onValueChange={field.onChange} className="flex" >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem {...field} value="custom shop" id="custom shop" />
                                    <Label >Custom Shop</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem {...field} value="seleeve" id="seleeve" />
                                    <Label>Seleeve</Label>
                                </div>
                            </RadioGroup>

                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='po_number'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>PO Number</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name="won_or_item_no"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>W.O.N/ Item N'</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='fbe_powder_manufacturer'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>FBE Powder Manifacture</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />

                <Controller
                    name='repair_material_manufacturer'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Repair Material Manufacturer</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>

                        </div>
                    )}
                />

                <Controller
                    name='fbe_powder_grade'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>FBE Powder grade</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>

                        </div>
                    )}
                />


                <Controller
                    name='repair_material_grade'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Repair Material Grade</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>

                        </div>
                    )}
                />



                <Controller
                    name='fbe_powder_batch_no'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>FBE Powder batch no</Label>
                            <Input type='number'  {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>
                        </div>
                    )}
                />



                <Controller
                    name='repair_material_manufacturer'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Repair Material Manufacturer</Label>
                            <Input {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>

                        </div>
                    )}
                />


                <Controller
                    name='exp_date'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <div className="flex flex-col space-y-1.5">
                            <Label>Exp Date</Label>
                            <Input type='date' {...field} className="uppercase" />
                            <Label className='text-red-500'>{error?.message}</Label>

                        </div>
                    )}
                />



                <Button type='submit'>Next</Button>


            </form>

        </>
    )
}