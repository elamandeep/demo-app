import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center">
                <div className="w-[300px]  py-4">

                    <Outlet />
                </div>
            </section>
        </>
    )
}