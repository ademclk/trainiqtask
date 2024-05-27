import React from 'react';  
import {  
  Chart as ChartJS,  
  CategoryScale,  
  LinearScale,  
  BarElement,  
  Title,  
  Tooltip,  
  Legend,  
} from 'chart.js';  
import { Bar } from 'react-chartjs-2';  
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";  
  
// Register the required components  
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);  
  
const ActivityHours = ({ data }) => {  
  // Debugging: Log the data being passed  
  console.log("ActivityHours data:", data);  
  
  const chartData = {  
    labels: data.map(activity => activity.date),  
    datasets: [  
      {  
        label: 'Hours',  
        data: data.map(activity => activity.hours),  
        backgroundColor: 'rgba(75,192,192,1)',  
      },  
      {  
        label: 'Lessons Taken',  
        data: data.map(activity => activity.lessons_taken),  
        backgroundColor: 'rgba(153,102,255,1)',  
      },  
      {  
        label: 'Exams Completed',  
        data: data.map(activity => activity.exams_completed),  
        backgroundColor: 'rgba(255,159,64,1)',  
      }  
    ],  
  };  
  
  return (  
    <Card>  
      <CardHeader>  
        <CardTitle>Activity Hours</CardTitle>  
        <CardDescription>Overview of activity hours</CardDescription>  
      </CardHeader>  
      <CardContent>  
        <Bar data={chartData} />  
      </CardContent>  
    </Card>  
  );  
};  
  
export default ActivityHours;  
