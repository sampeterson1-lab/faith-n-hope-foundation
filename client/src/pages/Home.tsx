import { Button } from "@/components/ui/button";
import { Heart, Users, Home as HomeIcon, BookOpen } from "lucide-react";

/**
 * Design Philosophy: Warm Minimalism
 * - Spacious layouts with generous whitespace
 * - Authentic imagery and community focus
 * - Warm earth tones (sage green, terracotta) for trust and compassion
 * - Clear visual hierarchy guiding to donation CTAs
 * - Serif headings (Merriweather) for permanence and care
 * - Sans-serif body (Inter) for readability
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Faith-N-Hope Neighbors</h1>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-secondary font-medium">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-secondary font-medium">
              About Us
            </a>
            <Button variant="secondary">Donate</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Bringing Faith and Hope to Our Neighbors
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Faith-N-Hope Neighbors serves newly resettled families, single mothers and their children, and families experiencing poverty or high need. We provide essential household items, transportation assistance, educational support, and home repairs through skilled volunteers.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" size="lg">
                  Donate Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="/images/hero-idaho-mountains.png"
                alt="Community in Eastern Idaho with Grand Tetons sunrise"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Faith-N-Hope Neighbors is dedicated to sharing Christ's love by serving newly resettled families and single mothers in need. We provide essential household items, financial assistance, auto and home repairs, and basic financial guidance to help build stability and resilience. Our mission is to offer faith, hope, and practical support as we work together to create a brighter, more secure future.
            </p>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            How We Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Essential Household Items</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Beds, bedding, and kitchen supplies for newly arrived families to establish stable homes.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Transportation & Auto Assistance</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Vehicle purchases, auto repairs, and transportation assistance for medical appointments and employment.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Educational & Financial Support</h3>
                <p className="text-foreground/70 leading-relaxed">
                  College funding, learning resources, emergency financial assistance for utilities and rent, plus financial guidance.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Home Repairs & Crisis Support</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Skilled volunteer labor for home repairs, emergency assistance for medical bills, and community resource connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Make a Difference Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your donation directly supports families in need. Every contribution helps us provide essential services and build pathways to long-term stability.
          </p>
          <Button className="bg-white text-primary hover:bg-accent" size="lg">
            Donate Now
          </Button>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Faith-N-Hope Neighbors</h3>
              <p className="text-primary-foreground/80">
                Serving families in need with faith, hope, and practical support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <p className="text-primary-foreground/80 text-sm">
                Faith-N-Hope Neighbors is a registered 501(c)(3) nonprofit organization (EIN: 33-1982328) recognized by the IRS, making all donations tax-deductible.
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
            <p>&copy; 2025 Faith-N-Hope Neighbors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
