"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function StatsCards() {
  const stats = [
    { title: "Projects", value: 4 },
    { title: "My Tasks", value: 12 },
    { title: "Due Soon", value: 3 },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch(
        "https://collabtrack-api.onrender.com/api/v1/projects",
        {
          credentials: "include",
        },
      );
      const result = await response.json();
      setProjects(result?.data);
    };

    getProjects();
  }, []);

  console.log(projects);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader>
            <CardTitle>{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{projects.length}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
