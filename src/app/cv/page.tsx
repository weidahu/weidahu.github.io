import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, GraduationCap, Briefcase, Award } from "lucide-react";

export default function CV() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Curriculum Vitae</h1>
          <p className="text-lg text-muted-foreground">
            Professional summary and academic history
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Download CV
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Download my complete CV in PDF format.
            </p>
            <a
              href="/files/cv.pdf"
              download
              className="inline-flex"
            >
              <Button size="lg" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV (PDF)
              </Button>
            </a>
          </CardContent>
        </Card>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Employment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Professor</h3>
                <p className="text-lg text-muted-foreground">
                  Shanghai Astronomical Observatory
                </p>
                <p className="text-sm text-muted-foreground">April 2026 — Present</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">
                  Postdoctoral Researcher
                </h3>
                <p className="text-lg text-muted-foreground">
                  Texas A&M University
                </p>
                <p className="text-sm text-muted-foreground">June 2023 — March 2026</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">
                  Postdoctoral Researcher
                </h3>
                <p className="text-lg text-muted-foreground">
                  University of California, Santa Barbara
                </p>
                <p className="text-sm text-muted-foreground">
                  February 2022 — June 2023
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Mozi Fellow</h3>
                <p className="text-lg text-muted-foreground">
                  University of Science and Technology of China
                </p>
                <p className="text-sm text-muted-foreground">
                  July 2021 — February 2022
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">Ph.D.</h3>
                <p className="text-lg text-muted-foreground">
                  University of Science and Technology of China
                </p>
                <p className="text-sm text-muted-foreground">June 2021</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">B.S.</h3>
                <p className="text-lg text-muted-foreground">
                  University of Science and Technology of China
                </p>
                <p className="text-sm text-muted-foreground">June 2016</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Mozi Fellow (2021-2022) — University of Science and
              Technology of China
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
