import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

/**
 * Design Philosophy: Warm Minimalism
 * - Authentic storytelling with genuine, humble tone
 * - Family imagery to build personal connection
 * - Spacious layout with breathing room
 * - Warm earth tones maintaining brand consistency
 * - Clear call-to-action to donation
 */

export default function About() {
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
            <a href="/" className="text-foreground hover:text-secondary font-medium">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-secondary font-medium">
              About Us
            </a>
            <a href="https://donate.stripe.com/8x2cMXblt3pb2ta1qp8Zq00" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">Donate</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              About Us
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              We believe in the power of community, compassion, and faith to transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Faith-N-Hope Neighbors is dedicated to sharing Christ's love by serving newly resettled families and single mothers in need. We provide essential household items, financial assistance, auto and home repairs, and basic financial guidance to help build stability and resilience.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our mission is to offer faith, hope, and practical support as we work together to create a brighter, more secure future in the spirit of Jesus Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/30 to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Story Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Our Story
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Faith-N-Hope Neighbors was born from personal experience and a deep calling to serve. Our founders understand the struggles families face—not from a distance, but from lived experience.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Sam's family has walked through poverty, single parenthood, and the challenges that come with providing stability when carrying the weight alone. These experiences instilled a fierce compassion for families facing hardship and a commitment to practical, dignified support.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                From 1998-2000, Sam served a mission in Honduras, one of the world's poorest countries. Living alongside families in extreme poverty deepened his appreciation for basic needs and his conviction that everyone deserves a chance at stability and hope.
              </p>
            </div>

            {/* Right: Family Photo */}
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="/images/family-photo.jpg"
                alt="Faith-N-Hope Neighbors family"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Compassion</h3>
              <p className="text-foreground/70 leading-relaxed">
                We see the dignity in every person and respond with genuine care and respect.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Community</h3>
              <p className="text-foreground/70 leading-relaxed">
                We believe in the power of people coming together to support one another.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Action</h3>
              <p className="text-foreground/70 leading-relaxed">
                We move beyond empathy to provide real, practical support that creates lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every contribution helps us provide essential services and build pathways to long-term stability for families in need.
          </p>
          <a href="https://donate.stripe.com/8x2cMXblt3pb2ta1qp8Zq00" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-primary-foreground"
            >
              Donate Now
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Faith-N-Hope Neighbors</h3>
              <p className="text-primary-foreground/80 text-sm">
                Serving families in need with faith, hope, and practical support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
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
