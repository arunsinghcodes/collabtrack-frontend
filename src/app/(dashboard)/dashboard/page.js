import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">CollabTrack Dashboard</h1>

          <Button>Shadcn is working 🚀</Button>
        </CardContent>
      </Card>
    </div>
  );
}
