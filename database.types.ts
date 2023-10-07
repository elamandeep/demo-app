export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      custom_coating_quad: {
        Row: {
          adhesion_test: string | null
          application_name: string | null
          avg_dft: number | null
          houday: number | null
          id: number | null
          qid: number
          remarks: string | null
          repair_type: string | null
          supervisior_name: string | null
          visual_inspection: string | null
        }
        Insert: {
          adhesion_test?: string | null
          application_name?: string | null
          avg_dft?: number | null
          houday?: number | null
          id?: number | null
          qid?: number
          remarks?: string | null
          repair_type?: string | null
          supervisior_name?: string | null
          visual_inspection?: string | null
        }
        Update: {
          adhesion_test?: string | null
          application_name?: string | null
          avg_dft?: number | null
          houday?: number | null
          id?: number | null
          qid?: number
          remarks?: string | null
          repair_type?: string | null
          supervisior_name?: string | null
          visual_inspection?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "custom_coating_quad_id_fkey"
            columns: ["id"]
            referencedRelation: "custom_coating_report_data"
            referencedColumns: ["id"]
          }
        ]
      }
      custom_coating_report_data: {
        Row: {
          client: string | null
          coating_type: string | null
          date: string
          docs_no: string | null
          exp_date: string | null
          fbe_powder_batch_no: number | null
          fbe_powder_grade: string | null
          fbe_powder_manufacturer: string | null
          format_no: string | null
          id: number
          location: string | null
          page: string | null
          po_number: string | null
          project: string | null
          repair_material_grade: string | null
          repair_material_manufacturer: string | null
          revision: number | null
          shift: string | null
          won_or_item_no: string | null
        }
        Insert: {
          client?: string | null
          coating_type?: string | null
          date?: string
          docs_no?: string | null
          exp_date?: string | null
          fbe_powder_batch_no?: number | null
          fbe_powder_grade?: string | null
          fbe_powder_manufacturer?: string | null
          format_no?: string | null
          id?: number
          location?: string | null
          page?: string | null
          po_number?: string | null
          project?: string | null
          repair_material_grade?: string | null
          repair_material_manufacturer?: string | null
          revision?: number | null
          shift?: string | null
          won_or_item_no?: string | null
        }
        Update: {
          client?: string | null
          coating_type?: string | null
          date?: string
          docs_no?: string | null
          exp_date?: string | null
          fbe_powder_batch_no?: number | null
          fbe_powder_grade?: string | null
          fbe_powder_manufacturer?: string | null
          format_no?: string | null
          id?: number
          location?: string | null
          page?: string | null
          po_number?: string | null
          project?: string | null
          repair_material_grade?: string | null
          repair_material_manufacturer?: string | null
          revision?: number | null
          shift?: string | null
          won_or_item_no?: string | null
        }
        Relationships: []
      }
      custom_coating_secondary: {
        Row: {
          amb_temp: number | null
          coating_app_temp: string | null
          curing_temp: string | null
          dew_point_temp: number | null
          dft: string | null
          id: number | null
          rh: number | null
          sid: number
          time: string | null
        }
        Insert: {
          amb_temp?: number | null
          coating_app_temp?: string | null
          curing_temp?: string | null
          dew_point_temp?: number | null
          dft?: string | null
          id?: number | null
          rh?: number | null
          sid?: number
          time?: string | null
        }
        Update: {
          amb_temp?: number | null
          coating_app_temp?: string | null
          curing_temp?: string | null
          dew_point_temp?: number | null
          dft?: string | null
          id?: number | null
          rh?: number | null
          sid?: number
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "custom_coating_secondary_id_fkey"
            columns: ["id"]
            referencedRelation: "custom_coating_report_data"
            referencedColumns: ["id"]
          }
        ]
      }
      custom_coating_tertiary: {
        Row: {
          accept_criteria_a: number | null
          accept_criteria_b: number | null
          accept_criteria_c: number | null
          accept_criteria_d: number | null
          accept_criteria_e: number | null
          accept_criteria_high: string | null
          accept_criteria_low: string | null
          curing_time: number | null
          cut_back_length: boolean | null
          id: number | null
          imos_no: string | null
          spool_bend_size: string | null
          sr_no: string | null
          tid: number
        }
        Insert: {
          accept_criteria_a?: number | null
          accept_criteria_b?: number | null
          accept_criteria_c?: number | null
          accept_criteria_d?: number | null
          accept_criteria_e?: number | null
          accept_criteria_high?: string | null
          accept_criteria_low?: string | null
          curing_time?: number | null
          cut_back_length?: boolean | null
          id?: number | null
          imos_no?: string | null
          spool_bend_size?: string | null
          sr_no?: string | null
          tid?: number
        }
        Update: {
          accept_criteria_a?: number | null
          accept_criteria_b?: number | null
          accept_criteria_c?: number | null
          accept_criteria_d?: number | null
          accept_criteria_e?: number | null
          accept_criteria_high?: string | null
          accept_criteria_low?: string | null
          curing_time?: number | null
          cut_back_length?: boolean | null
          id?: number | null
          imos_no?: string | null
          spool_bend_size?: string | null
          sr_no?: string | null
          tid?: number
        }
        Relationships: [
          {
            foreignKeyName: "custom_coating_tertiary_id_fkey"
            columns: ["id"]
            referencedRelation: "custom_coating_report_data"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
