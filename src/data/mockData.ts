import { EventType, TestimonialType, GalleryItemType, SocialLinkType } from '../types';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import ScholarshipImage from '../assets/education-scholarship/2021/scholatship/E-Aug-26.jpg';
import hostelimage from '../assets/education-scholarship/2021/hostel-for-poor/K-Nov-22.jpg';
import hostelimagetwo from '../assets/education-scholarship/2021/hostel-for-poor/K1-Nov-22.jpg';
import hostelimagethree from '../assets/education-scholarship/2021/hostel-for-poor/NS-Nov-23.jpg';

export const events: EventType[] = [
  {
    id: '1',
    title: 'Scholarship for Underprivileged Students',
    date: 'November 2021',
    shortDescription: 'Scholarship provided for various higher education courses.',
    description: 'Shree Sai Education Trust has organized a special scholarship program aimed at supporting economically weaker students who aspire to pursue higher education. This initiative is designed to offer a golden opportunity to deserving students who are currently studying in the 10th or 11th grade and have secured at least 75% marks. The scholarship will be applicable for students seeking admission to various professional and higher education courses such as Engineering, LLM, ME, M.Phil., BAMS, BHMS, Architecture, MBA, MBBS, and Pharmacy. The aim is to ease the financial burden of education for students with potential and dedication. Special preference will be given to students who have lost their parents due to COVID-19, orphans, girls from families with single or working mothers, and children from farmer families. These students will be given priority consideration during the selection process. Interested candidates can collect the scholarship application forms from the office located at Rahul Complex, 6th Floor, Office No. 41, Paud Road, Kothrud, Pune – 38. The forms will be available until 23rd August. For more information or assistance, you can contact Mr. Nitin Majhi at 9665565434, Mr. Sunil Shirose at 9049865434, or Mr. Sunil Shinde at 9663879992. The number of forms is limited, so students are encouraged to apply as soon as possible to take advantage of this valuable opportunity.',
    coverImage: ScholarshipImage,
    gallery: [
      ScholarshipImage
    ],
    location: 'Pune, India',
    category: 'education'
  },
  {
    id: '2',
    title: 'Student hostels and accommodation',
    date: 'November 2021',
    shortDescription: 'A new hostel for underprivileged students has been inaugurated in Panshet, Pune by Shri Sai Education Trust.',
    description: 'In a significant initiative to support underprivileged students, a new hostel has been inaugurated in Panshet, Pune by Shri Sai Education Trust. Named after Chandrakant Maharaj Wanjale, this hostel is meant to offer accommodation and support to students from rural areas. With schools resuming after a prolonged closure due to the pandemic, the hostel aims to provide a conducive living environment for students to continue their education smoothly. The inauguration ceremony was conducted by Additional Superintendent of Police of Pune Rural, Mitesh Ghatte. The event also saw the presence of Chandrakant Wanjale, Vishwas Sathe, and Sagar Shedge, among others.',
    coverImage: hostelimage,
    gallery: [
      hostelimage,
      hostelimagetwo,
      hostelimagethree
    ],
    location: 'Community Learning Center, East District',
    category: 'education'
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Volunteer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    quote: 'Working with this organization has been transformative. The impact we make in communities is real and meaningful.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Community Partner',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    quote: 'The dedication and passion of the team is inspiring. Their programs have made a significant difference in our neighborhood.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Beneficiary',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    quote: 'The support I received changed my life. I now have opportunities I never thought possible before.'
  }
];

export const galleryItems: GalleryItemType[] = [
  {
    id: '1',
    title: 'Clean-up Volunteers in Action',
    description: 'Our amazing volunteers working together at the beach clean-up.',
    type: 'image',
    url: 'https://images.pexels.com/photos/6647109/pexels-photo-6647109.jpeg',
    eventId: '1'
  },
  {
    id: '2',
    title: 'Educational Workshop',
    description: 'Children engaged in learning at our educational workshop.',
    type: 'image',
    url: 'https://images.pexels.com/photos/8422277/pexels-photo-8422277.jpeg',
    eventId: '2'
  },
  {
    id: '3',
    title: 'Our Mission in Action',
    description: 'A short video highlighting our various initiatives.',
    type: 'video',
    url: 'https://player.vimeo.com/external/517090081.hd.mp4?s=efdb0500657091849ae95877c73cbaf8f2076c7b&profile_id=174',
    eventId: '1'
  },
  {
    id: '4',
    title: 'Community Gathering',
    description: 'Community members coming together at our annual event.',
    type: 'image',
    url: 'https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg',
    eventId: '1'
  },
  {
    id: '5',
    title: 'Educational Impact',
    description: 'See the impact of our educational initiatives.',
    type: 'video',
    url: 'https://player.vimeo.com/external/478197659.hd.mp4?s=1138466ec0cdd3c8e9a8c58e1679b15d1b8b91b6&profile_id=174',
    eventId: '2'
  }
];

export const socialLinks: SocialLinkType[] = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'Facebook'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: 'Youtube'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin'
  }
];