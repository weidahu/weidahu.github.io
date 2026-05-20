import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Telescope, Zap } from "lucide-react";

export default function Research() {
  const researchAreas = [
    {
      title: "Using Lyman-α Emitters to Constrain Epoch of Reionization",
      description:
        "Investigating how Lyman-α emitting galaxies can be used as probes to understand the timeline and progress of cosmic reionization.",
      icon: <Telescope className="h-6 w-6" />,
    },
    {
      title: "Interstellar Medium Condition in Early Galaxies",
      description:
        "Studying the physical conditions of gas and dust in galaxies during the early universe to understand star formation processes.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Extended Enriched Gas in a Multi-Galaxy Merger at z=6.7",
      description:
        "Analyzing the distribution and composition of metal-enriched gas in a galaxy merger system at redshift 6.7.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Lyman-α Emission and DLA Absorption",
      description:
        "Examining the relationship between Lyman-α emission from galaxies and damped Lyman-α absorption systems in the intergalactic medium.",
      icon: <Star className="h-6 w-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Research</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My research focuses on galaxies in the epoch of reionization,
            including their formation and evolution and their contribution to cosmic
            reionization.
          </p>
        </div>

        <div className="mb-12">
          <Badge variant="secondary" className="text-sm">
            Epoch of Reionization
          </Badge>
          <Badge variant="secondary" className="ml-2 text-sm">
            Galaxy Formation
          </Badge>
          <Badge variant="secondary" className="ml-2 text-sm">
            High-Redshift Galaxies
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {researchAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <div className="text-primary">{area.icon}</div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card>
            <CardHeader>
              <CardTitle>ADS Library</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                For a complete list of my publications and citations, please visit my
                ADS library.
              </p>
              <a
                href="https://ui.adsabs.harvard.edu/public-libraries/YHbRs6uYTeaDb0djNd9GlA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                View ADS Library →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
