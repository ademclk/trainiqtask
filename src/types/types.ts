export interface ActivityHour {
    date: string;
    exams_completed: number;
    hours: number;
    lessons_taken: number;
}

export interface InProgressCourse {
    assigned_to: string;
    description: string;
    due_date: string;
    status: string;
    title: string;
}

export interface SkillInDevelopment {
    employees: number;
    skill: string;
}

export interface Employee {
    current_score: number;
    email: string;
    lessons_taken: number;
    name: string;
    skills_being_developed: string[];
    title: string;
}

export interface Team {
    description: string;
    employees: Employee[];
    overall_score: string;
    title: string;
    total_employee_count: number;
}

export interface TopEmployee {
    current_score: number;
    email: string;
    name: string;
    title: string;
}

export interface TopSkill {
    employees: number;
    skill: string;
}

export interface UpcomingCourse {
    assigned_to: string;
    description: string;
    due_date: string;
    status: string;
    title: string;
}

export interface DashboardData {
    activity_hours: ActivityHour[];
    average_employee_score: string;
    in_progress_courses: InProgressCourse[];
    skills_in_development: SkillInDevelopment[];
    teams: Team[];
    top_employees: TopEmployee[];
    top_skills: TopSkill[];
    total_completed_courses: number;
    total_employees: number;
    upcoming_courses: UpcomingCourse[];
}

export interface ApiResponse {
    data: DashboardData;
}
