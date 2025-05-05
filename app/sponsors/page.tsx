import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a database or API
// For now, we'll use static data as an example
const sponsors = [
  {
    tier: 'Educational Benefactor',
    sponsors: [
      { name: 'Example Sponsor 1', image: '/placeholder.svg', url: 'https://example.com' },
      // More sponsors...
    ]
  },
  {
    tier: 'Curriculum Collaborator',
    sponsors: [
      { name: 'Example Sponsor 2', image: '/placeholder.svg', url: 'https://example.com' },
      // More sponsors...
    ]
  },
  // More tiers...
];

export default function SponsorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Sponsors</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">
        We're grateful to these amazing sponsors who make our open source work possible.
        Their support allows us to continue developing educational resources and community programs.
      </p>
      
      <div className="space-y-16">
        {sponsors.map((tier) => (
          <div key={tier.tier} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">{tier.tier}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tier.sponsors.map((sponsor) => (
                <Link 
                  href={sponsor.url} 
                  key={sponsor.name}
                  className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={sponsor.image || "/placeholder.svg"} 
                    alt={sponsor.name} 
                    width={100} 
                    height={100} 
                    className="rounded-full mb-3"
                  />
                  <span className="text-center font-medium">{sponsor.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Become a Sponsor</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Support our open source work and help us create more educational resources for the community.
        </p>
        <Link 
          href="https://github.com/sponsors/MJ-AHMAD" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsor on GitHub
        </Link>
      </div>
    </div>
  );
}
