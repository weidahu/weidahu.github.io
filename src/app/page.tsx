import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Building2, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <section className="mb-16 text-center md:text-left md:flex md:items-center md:gap-12">
          <div className="mb-8 md:mb-0">
            <div className="relative mb-6 inline-block h-48 w-48 overflow-hidden rounded-full border-4 border-background shadow-lg">
              <Image
                src="/photo.jpg"
                alt="Weida Hu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Weida Hu (胡维达)
            </h1>
            <p className="mb-6 text-xl text-muted-foreground">
              Professor at Shanghai Astronomical Observatory
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              <Badge variant="secondary">Reionization</Badge>
              <Badge variant="secondary">Galaxy Evolution</Badge>
              <Badge variant="secondary">Lyman-α Emitters</Badge>
              <Badge variant="secondary">Early Universe</Badge>
            </div>
            <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Shanghai, China
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Shanghai Astronomical Observatory
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:weidahu@shao.ac.cn" className="hover:underline">
                  weidahu at shao.ac.cn
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/research">
                <Button size="lg">View Research</Button>
              </Link>
              <Link href="/cv">
                <Button variant="outline" size="lg">CV</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>
                I am a professor at Shanghai Astronomical Observatory since April 2026.
                Previously, I was a postdoctoral researcher at Texas A&M
                University, University of California, Santa Barbara, and University
                of Science and Technology of China.
              </p>
              <p>
                I received my B.S. and Ph.D. from University of Science and
                Technology of China in 2016 and 2021.
              </p>
              <p>
                My research interest focuses on galaxies in the epoch of
                reionization, including their formation and evolution and their
                contribution to reionization.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Education</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-muted-foreground" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Ph.D. in Astrophysics</h3>
                    <p className="text-muted-foreground">
                      University of Science and Technology of China
                    </p>
                    <p className="text-sm text-muted-foreground">2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-muted-foreground" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">B.S. in Physics</h3>
                    <p className="text-muted-foreground">
                      University of Science and Technology of China
                    </p>
                    <p className="text-sm text-muted-foreground">2016</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Positions Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Positions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">Professor</h3>
                <p className="text-muted-foreground">
                  Shanghai Astronomical Observatory
                </p>
                <p className="text-sm text-muted-foreground">April 2026 — Present</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">
                  Postdoctoral Researcher
                </h3>
                <p className="text-muted-foreground">
                  Texas A&M University
                </p>
                <p className="text-sm text-muted-foreground">June 2023 — March 2026</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">
                  Postdoctoral Researcher
                </h3>
                <p className="text-muted-foreground">
                  University of California, Santa Barbara
                </p>
                <p className="text-sm text-muted-foreground">
                  February 2022 — June 2023
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">Mozi Fellow</h3>
                <p className="text-muted-foreground">
                  University of Science and Technology of China
                </p>
                <p className="text-sm text-muted-foreground">
                  July 2021 — February 2022
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
