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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchDashboardData } from '../services/api';
import { DashboardData } from '../types/types';
import ActivityHours from '@/components/activity-hours';
import TopEmployees from '@/components/top-employees';
import SkillsInDevelopment from '@/components/skills-in-development';
import UpcomingCourses from '@/components/upcoming-courses';
import AverageEmployeeScore from '@/components/average-employee-score';
import AllEmployees from '@/components/all-employees';

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
          <Link href="#" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Test LTD</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
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
                <Link href="#" className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Test LTD</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-7xl flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Dashboard
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                {data.total_completed_courses} completed courses
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">Create New Team</Button>
                <Button size="sm">Add New Employee to a Team</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <ActivityHours data={data.activity_hours} />
                <TopEmployees employees={data.top_employees} />
                <AllEmployees teams={data.teams} />
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <UpcomingCourses courses={data.upcoming_courses} />
                <SkillsInDevelopment skills={data.skills_in_development} />
                <AverageEmployeeScore score={data.average_employee_score} />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">Create New Team</Button>
              <Button size="sm">Add New Employee to a Team</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}  