
import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. ",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
  },
];

export const Faq5 = ({
  badge = "FAQ",
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className="py-16">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="text-xs font-medium bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4">{badge}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-6 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-mono text-sm font-bold text-white">
                {index + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-white text-lg mb-3 leading-tight">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
