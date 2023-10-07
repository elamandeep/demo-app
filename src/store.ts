import { create } from "zustand"
import { persist } from 'zustand/middleware'


interface AppStoreType {
    step: number
    nextStep: () => void
    prevStep: () => void
    id: number
    setId: (id: number) => void
    resetId: () => void

}


export const useAppStore = create<AppStoreType>()(
    persist(
        (set, get) => ({
            step: 0,
            id:0,
            nextStep: () => set({ step: get().step + 1 }),
            prevStep: () => set({ step: get().step - 1 }),
            setId: (id:number) => set({ id: id }),
            resetId: () => set({ id: 0 })


        }),
        {
            name: "app",
        }
    )
)


