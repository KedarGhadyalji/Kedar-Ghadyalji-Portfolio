/**
 * What: certifications shown in the Experience page's "Certifications"
 * section, rendered one CertificationCard per entry.
 * Data from: hardcoded placeholder entries below — PLACEHOLDER DATA, replace
 * each with a real certification (image, title, issuer, month, year, and a
 * credential link if public). Set `image` or `credentialUrl` to null to
 * render the card without that piece (a fallback "No Image" tile, or no
 * "View credential" link).
 * Used by: src/pages/Experience.jsx, via src/components/CertificationCard.jsx.
 */

import { certificateImages } from "./certificateImages";

export const certifications = {
  eyebrow: "Credentials",
  heading: "Certifications",
  items: [
    {
      id: "cert-sql-ai-workshop",
      image: certificateImages.sqlAiWorkshop,
      title: "SQL Using AI Workshop",
      issuer: "AI for Techies",
      month: "October",
      year: "2025",
      credentialUrl: null,
    },
    {
      id: "cert-hackathon-2025",
      image: certificateImages.hackathon2025,
      title: "KJSIT Campus Hackathon 2025 Winner",
      issuer: "KJ Somaiya Institute of Technology (KJSIT)",
      month: "September",
      year: "2025",
      credentialUrl: null,
    },
    {
      id: "cert-zeros-arena",
      image: certificateImages.zerosArena,
      title: "Zero's Arena Participation Certificate",
      issuer: "Code Geass powered by OpennmindAI",
      month: "September",
      year: "2025",
      credentialUrl: null,
    },
    {
      id: "cert-fullstack-udemy",
      image: certificateImages.fullstackUdemy,
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy (Dr. Angela Yu)",
      month: "July",
      year: "2025",
      credentialUrl: "https://ude.my/UC-96ee4bae-6006-4ffb-b38c-c6a2ea37fa55",
    },
    {
      id: "cert-python-100days",
      image: certificateImages.python100Days,
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      issuer: "Udemy (Dr. Angela Yu)",
      month: "July",
      year: "2025",
      credentialUrl: "https://ude.my/UC-0311a7c9-53d3-4737-86e8-fd0f0ec1353f",
    },
    {
      id: "cert-csharp-udemy",
      image: certificateImages.csharpUdemy,
      title: "Complete C# Masterclass",
      issuer: "Udemy (Denis Panjuta)",
      month: "May",
      year: "2025",
      credentialUrl: "https://ude.my/UC-90cf434f-fc42-48ab-ad3a-75a3ff4b1710",
    },
    {
      id: "cert-mysql-udemy",
      image: certificateImages.mysqlUdemy,
      title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
      issuer: "Udemy (Colt Steele)",
      month: "January",
      year: "2025",
      credentialUrl: "https://ude.my/UC-324748b4-18d2-49be-af7a-9abf3f6b9a57",
    },
    {
      id: "cert-java-udemy",
      image: certificateImages.javaUdemy,
      title: "Learn JAVA Programming - Beginner to Master",
      issuer: "Udemy (Abdul Bari)",
      month: "November",
      year: "2024",
      credentialUrl: "https://ude.my/UC-0ab860c1-8bed-437f-b271-07cd22cda6ff",
    },
    {
      id: "cert-dsa-udemy",
      image: certificateImages.dsaUdemy,
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Udemy (Abdul Bari)",
      month: "October",
      year: "2024",
      credentialUrl: "https://ude.my/UC-40a72bf3-5180-4443-a227-7cd347637ad5",
    },
    {
      id: "cert-c-iitb",
      image: certificateImages.cSpokenTutorial,
      title: "C Training Certification",
      issuer: "Spoken Tutorial, IIT Bombay",
      month: "June",
      year: "2024",
      credentialUrl: null,
    },
    {
      id: "cert-cpp-udemy",
      image: certificateImages.cppUdemy,
      title: "Learn C++ Programming - Beginner to Advance",
      issuer: "Udemy (Abdul Bari)",
      month: "June",
      year: "2024",
      credentialUrl: "https://ude.my/UC-2646b3d4-983b-489e-a12c-20aa227a895f",
    },
    {
      id: "cert-c-lang-udemy",
      image: certificateImages.cLangBootcamp,
      title: "C Programming Bootcamp - The Complete C Language Course",
      issuer: "Udemy (Vlad Budnitski)",
      month: "May",
      year: "2024",
      credentialUrl: "https://ude.my/UC-06cb4167-97e5-4dfd-8a0f-df1c5d36c14c",
    },
  ],
};
