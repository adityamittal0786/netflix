import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from $15.98 to $29.98/month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite programmes with the iOS or Android app.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, series, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.",
  },
  {
    question: "Is Netflix good for children?",
    answer:
      "The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space. Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don't want children to see.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors duration-300"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-white text-left">{item.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-700">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white/20 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:border-red-600 focus:bg-white/30 transition-all"
            />
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
              Get Started
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
