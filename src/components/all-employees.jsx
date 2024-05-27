import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AllEmployees = ({ teams }) => {
    const allEmployees = teams.flatMap(team => team.employees);

    return (
        <Card>
            <CardHeader>
                <CardTitle>All Employees</CardTitle>
                <CardDescription>List of all employees with their details</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    {allEmployees.map(employee => (
                        <div key={employee.email} className="p-4 border rounded-lg">
                            <h2 className="font-semibold">{employee.name}</h2>
                            <p><strong>Title:</strong> {employee.title}</p>
                            <p><strong>Email:</strong> {employee.email}</p>
                            <p><strong>Current Score:</strong> {employee.current_score}</p>
                            <p><strong>Lessons Taken:</strong> {employee.lessons_taken}</p>
                            <p><strong>Skills Being Developed:</strong> {employee.skills_being_developed.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default AllEmployees;  
