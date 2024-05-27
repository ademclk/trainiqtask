import React from 'react';  
import { Bar } from 'react-chartjs-2';  
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';  
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";  
  
// Register required components  
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);  
  
// Helper function to generate chart data  
const generateChartData = (courses) => {  
  const employeeCourseCount = courses.reduce((acc, course) => {  
    acc[course.assigned_to] = (acc[course.assigned_to] || 0) + 1;  
    return acc;  
  }, {});  
  
  const labels = Object.keys(employeeCourseCount);  
  const data = Object.values(employeeCourseCount);  
  
  return {  
    labels,  
    datasets: [  
      {  
        label: 'Courses Assigned',  
        data,  
        backgroundColor: '#36A2EB',  
        hoverBackgroundColor: '#FF6384'  
      }  
    ]  
  };  
};  
  
const UpcomingCourses = ({ courses }) => {  
  const chartData = generateChartData(courses);  
  
  return (  
    <Card>  
      <CardHeader>  
        <CardTitle>Upcoming Courses</CardTitle>  
        <CardDescription>Courses assigned to employees</CardDescription>  
      </CardHeader>  
      <CardContent>  
        <Bar data={chartData} options={{ responsive: true, scales: { x: { beginAtZero: true } } }} />  
        <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>  
          {courses.map((course, index) => (  
            <li key={index} style={{ marginBottom: '10px' }}>  
              <strong>{course.title}</strong> assigned to <em>{course.assigned_to}</em>, due by <strong>{course.due_date}</strong>  
            </li>  
          ))}  
        </ul>  
      </CardContent>  
    </Card>  
  );  
};  
  
export default UpcomingCourses;  
