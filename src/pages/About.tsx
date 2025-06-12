
import React from 'react';
import { Layout } from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About GameSeeders</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted source for game downloads, built by gamers, for gamers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                GameSeeders was created to provide gamers with fast, reliable access to their favorite games. 
                We believe that gaming should be accessible to everyone, and our platform makes it easy to 
                discover and download the latest titles with confidence.
              </p>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Why Choose Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We curate our game library to ensure quality and safety. Every download is verified, 
                and we provide detailed system requirements so you know exactly what you're getting. 
                Plus, our modern interface makes browsing and downloading a breeze.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🚀</div>
                <CardTitle>Fast Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-speed torrent downloads with verified seeders for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🛡️</div>
                <CardTitle>Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All files are scanned and verified to ensure your system stays clean and secure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📱</div>
                <CardTitle>Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse and download games from any device - desktop, tablet, or mobile.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🔍</div>
                <CardTitle>Easy Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find games quickly with our powerful search and filtering system.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">📊</div>
                <CardTitle>System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed specifications help you know if your system can run the game.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🔄</div>
                <CardTitle>Regular Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our library is constantly updated with the latest games and patches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl">Meet the Team</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              GameSeeders is maintained by a passionate team of developers and gaming enthusiasts. 
              We're dedicated to improving the platform and ensuring the best possible experience 
              for our users. Got feedback or suggestions? We'd love to hear from you!
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
