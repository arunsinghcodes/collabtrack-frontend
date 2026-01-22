import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function ProjectGrid() {
  const projects = [
    { name: "CollabTrack", progress: 70 },
    { name: "Landing Page", progress: 40 },
    { name: "Admin Panel", progress: 90 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.name}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted h-2 rounded">
              <div
                className="bg-primary h-2 rounded"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              {project.progress}% completed
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
