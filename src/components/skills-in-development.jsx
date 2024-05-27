import React from 'react';  
import { Bar } from 'react-chartjs-2';  
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
  
// Helper function to generate chart data  
const generateChartData = (skills) => {  
  const labels = skills.map(skill => skill.skill);  
  const data = skills.map(skill => skill.employees);  
  
  return {  
    labels,  
    datasets: [  
      {  
        label: 'Number of Employees',  
        data,  
        backgroundColor: 'rgba(75, 192, 192, 0.2)',  
        borderColor: 'rgba(75, 192, 192, 1)',  
        borderWidth: 1,  
      },  
    ],  
  };  
};  
  
const SkillsInDevelopment = ({ skills }) => {  
  const chartData = generateChartData(skills);  
  
  return (  
    <Card>  
      <CardHeader>  
        <CardTitle>Skills in Development</CardTitle>  
      </CardHeader>  
      <CardContent>  
        <Bar data={chartData} />  
        
      </CardContent>  
    </Card>  
  );  
};  
  
export default SkillsInDevelopment;  
