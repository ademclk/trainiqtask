"use client"

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {
  Home,
  Package2,
  PanelLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchDashboardData } from '../services/api';
import { DashboardData } from '../types/types';

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchDashboardData();
      setData(result);
    };

    getData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Dashboard
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                {data.total_completed_courses} completed courses
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Create New Team
                </Button>
                <Button size="sm">Add New Employee to a Team</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Activity Hours</CardTitle>
                    <CardDescription>
                      Overview of activity hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Example of how to map and display data */}
                    <ul>
                      {data.activity_hours.map((activity, index) => (
                        <li key={index}>
                          {activity.date}: {activity.hours} hours, {activity.lessons_taken} lessons taken, {activity.exams_completed} exams completed
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Top Employees</CardTitle>
                    <CardDescription>
                      Top performing employees
                    </CardDescription>
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
                        {data.top_employees.map((employee, index) => (
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
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Skills in Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      {data.skills_in_development.map((skill, index) => (
                        <li key={index}>
                          {skill.skill}: {skill.employees} employees
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Upcoming Courses</CardTitle>
                    <CardDescription>
                      Courses assigned to employees
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      {data.upcoming_courses.map((course, index) => (
                        <li key={index}>
                          {course.title} assigned to {course.assigned_to}, due by {course.due_date}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-4">
                  <CardHeader>
                    <CardTitle>Average Employee Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{data.average_employee_score}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Create New Team
              </Button>
              <Button size="sm">Add New Employee to a Team</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}  
