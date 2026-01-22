import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function AssignedTasks() {
  const tasks = [
    {
      title: "Fix login bug",
      project: "CollabTrack",
      status: "In Progress"
    },
    {
      title: "Update UI",
      project: "Website",
      status: "Todo"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assigned to me</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-muted-foreground">
                  {task.project}
                </p>
              </div>

              <Badge>{task.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
