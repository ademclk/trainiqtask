import React from 'react';  
import { Bar } from 'react-chartjs-2';  
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
import { useTheme } from 'next-themes';  
  
const generateChartData = (skills, theme) => {  
  const labels = skills.map(skill => skill.skill);  
  const data = skills.map(skill => skill.employees);  
  
  const backgroundColor = theme === 'dark' ? 'rgba(50, 150, 150, 0.2)' : 'rgba(75, 192, 192, 0.2)';  
  const borderColor = theme === 'dark' ? 'rgba(50, 150, 150, 1)' : 'rgba(75, 192, 192, 1)';  
  
  return {  
    labels,  
    datasets: [  
      {  
        label: 'Number of Employees',  
        data,  
        backgroundColor,  
        borderColor,  
        borderWidth: 1,  
      },  
    ],  
  };  
};  
  
const SkillsInDevelopment = ({ skills }) => {  
  const { theme } = useTheme();  
  const chartData = generateChartData(skills, theme);  
  
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
