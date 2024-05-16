import { Student } from "../../Models/student";

export interface StudentsStateInterface {
    isLoading: boolean,
    students: Student[],
    error: string|null
}