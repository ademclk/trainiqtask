import React from 'react';  
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";  
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";  
  
const TopEmployees = ({ employees }) => (  
  <Card>  
    <CardHeader>  
      <CardTitle>Top Employees</CardTitle>  
      <CardDescription>Top performing employees</CardDescription>  
    </CardHeader>  
    <CardContent>  
      <Table>  
        <TableHeader>  
          <TableRow>  
            <TableHead>Name</TableHead>  
            <TableHead>Title</TableHead>  
            <TableHead>Score</TableHead>  
          </TableRow>  
        </TableHeader>  
        <TableBody>  
          {employees.map((employee, index) => (  
            <TableRow key={index}>  
              <TableCell>{employee.name}</TableCell>  
              <TableCell>{employee.title}</TableCell>  
              <TableCell>{employee.current_score}</TableCell>  
            </TableRow>  
          ))}  
        </TableBody>  
      </Table>  
    </CardContent>  
  </Card>  
);  
  
export default TopEmployees;  
