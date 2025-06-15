import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Users, GraduationCap } from 'lucide-react';
import ourStory from '../../assets/jeevan-hyana-kalel-ho 2019/pustak-prakashan/Speech March-17.jpg'

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const cards = [
    {
      icon: <Heart className="h-10 w-10 text-accent-500" />,
      title: 'Our Mission',
      description:
        'To serve humanity by delivering accessible, inclusive, and high-impact initiatives in health, education, and community welfare. We strive to empower underserved populations through compassionate service, collaboration, and sustainable support systems.',
    },
    {
      icon: <Target className="h-10 w-10 text-accent-500" />,
      title: 'Our Vision',
      description:
        'To build a healthier, educated, and self-reliant society where no one is left behind—irrespective of their economic or social background. We envision a future where every individual has the opportunity to lead a dignified life supported by timely healthcare, quality education, and essential resources.',
    },
    {
      icon: <Users className="h-10 w-10 text-accent-500" />,
      title: 'Our Team',
      description:
        'At the heart of our mission is a dedicated team of passionate individuals—community leaders, educators, healthcare professionals, and volunteers—united by a shared vision for equitable progress. Each member brings unique expertise and a deep commitment to service, working tirelessly to plan, execute, and scale impactful grassroots initiatives',
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-accent-500" />,
      title: 'Our Impact',
      description:
        'Through a range of on-ground initiatives—like free health check-ups, vaccination drives, educational support, and food distribution—we’ve positively impacted thousands across Pune and surrounding areas. Our efforts have provided timely healthcare, sustained learning, and essential nourishment to those in need, driving meaningful grassroots change.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy-700 mb-3">
            About Shri Sai Education Trust
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="font-lato text-lg text-gray-700 max-w-3xl mx-auto">
            Dedicated to making a positive impact in communities around the world through sustainable 
            initiatives, education, and compassionate action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="font-montserrat font-semibold text-xl text-navy-700 mb-3">
                {card.title}
              </h3>
              <p className="font-lato text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-2xl text-navy-700 mb-4">
              Our Story
            </h3>
            <p className="font-lato text-gray-700 mb-4">
              The Shree Sai Trust was founded with the vision of creating a positive impact on society through compassion and selfless service. Initially focused on providing healthcare, the Trust has since expanded its reach to include education, social welfare, and holistic community development. By offering essential medical care, running health camps, and supporting patients with chronic conditions, we aim to ensure access to healthcare for underserved populations. Beyond health, our educational initiatives empower individuals with scholarships, skills training, and support for rural schools, helping break the cycle of poverty. Our social welfare programs, including disaster relief and orphanage support, further our mission of community development and sustainability. With a commitment to mental, emotional, and spiritual well-being, we provide counseling and resilience-building services, recognizing that true well-being encompasses more than just physical health. As we continue to grow, we strive to build a compassionate society where every individual has the resources to lead a healthy, fulfilling life, and we invite others to join us in this mission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={ourStory}
              alt="Volunteers working together"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;