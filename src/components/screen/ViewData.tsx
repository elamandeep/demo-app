import {
    Table,
    TableBody,
    
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { createClient } from "@supabase/supabase-js"
import { Database } from "database.types"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

export const ViewData = () => {
    const [fetchData, setFetchData] = useState<Array<Record<string, any>>>([])
    const navigation = useNavigate()

    const supabase = createClient<Database>(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_PROJECT_KEY)

    const getData = async () => {
        const { data, error } = await supabase.from('custom_coating_report_data').select("*")

        if(error){
            console.log(error)
        
        }

        console.log(data)
        //@ts-ignore
        setFetchData(data)
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>

        <h1 className="text-center font-bold text-xl mb-4">Data in Table Format</h1>
            <Table >
                
                <TableHeader>
                    <TableRow>
                        <TableHead>Format No</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Page</TableHead>
                        <TableHead>Shift</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {fetchData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.format_no}</TableCell>
                            <TableCell>{item.project}</TableCell>
                            <TableCell>{item.page}</TableCell>
                            <TableCell>{item.shift}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


            <Button onClick={() => navigation('/')}>Go to Home</Button>

        </>
    )
}