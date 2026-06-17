import { Tv, Download, Smartphone, Users } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Tv className="w-12 h-12" />,
    title: "Enjoy on your TV",
    description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
  },
  {
    icon: <Download className="w-12 h-12" />,
    title: "Download your series to watch offline",
    description: "Save your favourites easily and always have something to watch.",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Watch everywhere",
    description: "Stream unlimited films and series on your phone, tablet, laptop and TV.",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Create profiles for children",
    description:
      "Send children on adventures with their favourite characters in a space made just for them — free with your membership.",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          More reasons to join
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300"
            >
              <div className="text-red-600 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
