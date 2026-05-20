import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Waves, TreePine, Trophy } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Snowboarding",
      description: "Enjoying the slopes and winter outdoor activities.",
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Surfing",
      description: "Catching waves and enjoying ocean activities.",
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Hiking",
      description: "Exploring trails and nature.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Badminton",
      description: "Playing competitive and recreational badminton.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Activities</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Outside of research, I enjoy various outdoor activities and sports.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="text-primary">{activity.icon}</div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {activity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Work-Life Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Maintaining a healthy work-life balance is essential for
                productivity and well-being. These activities help me stay active
                and refreshed for my research.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
