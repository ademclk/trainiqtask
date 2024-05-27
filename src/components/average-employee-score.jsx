import React from 'react';  
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
  
const AverageEmployeeScore = ({ score }) => (  
  <Card>  
    <CardHeader>  
      <CardTitle>Average Employee Score</CardTitle>  
    </CardHeader>  
    <CardContent>  
      <p>{score}</p>  
    </CardContent>  
  </Card>  
);  
  
export default AverageEmployeeScore;  
