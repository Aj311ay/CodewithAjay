'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GithubIcon, MailIcon, PhoneIcon, LinkedinIcon, SendIcon, BookOpenIcon } from 'lucide-react'

export function PortfolioWithResumeView() {
  const [showResume, setShowResume] = useState(false)

  const projects = [
    { id: 1, title: 'Pupil.com (StackOverflow clone)', description: 'This project is a question and answering website for students and others, where the users can create there own account and they can post there questions and get the answers from other users.', techStack: 'Technology: MERN (MongoDB, Express.js, React, Node.js)', color: 'from-pink-600 to-rose-600' },
    { id: 2, title: 'Web Chat App', description: ' I built a simple chat application that enables users to exchange messages and share files in real-time. The app provides a user-friendly interface and ensures smooth communication between users, with reliable file-sharing features.',techStack:'Technology: React.js,Node.js,ChatEngine.io', color: 'from-purple-600 to-indigo-600' },
    { id: 3, title: 'Modern Portfolio', description: 'I created a personal portfolio website using Next.js and Tailwind CSS to showcase my projects and skills. The site is responsive, visually clean, and optimized for performance.',techStack:'Technology: Next.js,Tailwind CSS', color: 'from-blue-600 to-cyan-600' },
  ]

  const certificates = [
    { id: 1, title: 'Python Basics', issuer: 'Hackerrank',link:'https://www.hackerrank.com/certificates/4ea600d21165', color: 'from-green-600 to-emerald-600' },
    { id: 2, title: 'Javascript zero to hero', issuer: 'Guvi', color: 'from-yellow-600 to-amber-600' },
  ]

  const skills = {
    languages: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['VS Code', 'Android Studio','CodeBlocks', 'Git', 'GitHub'],
    interfaces: ['HTML','CSS'],
    framework: ['Node.js','React.js','Next.js(basics)'],
    soft:['Communication','Leadership','Problem solving','Innovative','Creative']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-gray-100">
      <div className="container mx-auto p-4">
        <header className="text-center mb-12 py-8 bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
          <div className="relative z-10">
          <Avatar className="w-40 h-40 mx-auto mb-6 border-4 shadow-lg animated-border">
  <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240717_203652_747-ab1zpXnXgx8Q0yc34RxwknOaCLVyPG.jpg" alt="Your Name" />
  <AvatarFallback>YN</AvatarFallback>
</Avatar>
            <h1 className="text-5xl font-bold text-white mb-2">Ajay</h1>
            <p className="text-2xl text-purple-300 mb-6">MCA</p>
            <p className="text-2xl text-purple-300 mb-6">NMAM INSTITUTE OF TECHNOLOGY, NITTE</p>
            <p className="text-2xl text-green-300 mb-6 typing-effect">Full Stack Developer</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:ajayajju3112001@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-blue-900"
                aria-label="Email"
              >
                <MailIcon className="w-6 h-6" />
              </a>
              <a 
                href="tel:+91-9110214933" 
                className="text-green-400 hover:text-green-300 transition-colors p-2 rounded-full hover:bg-green-900"
                aria-label="Phone"
              >
                <PhoneIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Aj311ay" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-700"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ajay-75284a238" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-blue-900"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </header>
  
  
{/* Summary Section */}
<section className="mb-16">
  <h2 className="text-4xl font-bold mb-8 text-center text-white">Summary</h2>
  <div className="relative p-8 bg-gray-900 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-40 blur-lg"></div>
    <div className="relative z-10 space-y-6">
      <p className="text-2xl text-cyan-300 font-semibold mb-4 tracking-wide">Hi, I'm Ajay!</p>
      <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
        I am a passionate and enthusiastic developer with a strong interest in both web and mobile technologies. I love working with programming languages like <span className="text-cyan-300 font-bold">C</span>, <span className="text-cyan-300 font-bold">Java</span>, <span className="text-cyan-300 font-bold">Python</span>, and <span className="text-cyan-300 font-bold">JavaScript</span>. My enthusiasm extends to frameworks such as <span className="text-cyan-300 font-bold">Node.js</span>, <span className="text-cyan-300 font-bold">React.js</span>, and <span className="text-cyan-300 font-bold">Next.js</span>. I have hands-on experience with databases like <span className="text-cyan-300 font-bold">MySQL</span> and <span className="text-cyan-300 font-bold">MongoDB</span> and am always eager to learn and explore new technologies.
      </p>
      {/* Infinite Moving and Glowing Quote */}
      <div className="relative overflow-hidden">
        <p className="text-lg text-cyan-400 animate-glow-and-scroll">
          "My goal is to leverage technology to build impactful solutions that solve <span className="whitespace-nowrap">real-world problems</span>."
        </p>
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  @keyframes slide-left-continuous {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 10px #00e6e6, 0 0 20px #00e6e6, 0 0 30px #00e6e6, 0 0 40px #00e6e6, 0 0 50px #00e6e6;
    }
    50% {
      text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff;
    }
  }

  .animate-glow-and-scroll {
    animation: slide-left-continuous 10s linear infinite, glow 2s ease-in-out infinite;
    white-space: nowrap;
    display: inline-block;
    color: #00ffff; /* Bright cyan for a strong contrast */
  }

  .whitespace-nowrap {
    white-space: nowrap;
  }
`}</style>


        {/* Resume Section */}
        <section className="mb-16 text-center">
  <h2 className="text-4xl font-bold mb-8 text-white">Resume</h2>
  <div className="flex justify-center"> {/* Centering wrapper */}
    <Button 
      onClick={() => setShowResume(!showResume)} 
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
    >
      <BookOpenIcon className="mr-2 h-5 w-5" />
      {showResume ? 'Hide Resume' : 'View Resume'}
    </Button>
  </div>
  {showResume && (
    <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-xl">
      <iframe
        src="/ResumeIBM.pdf" // Adjust this path if the PDF is located elsewhere
        className="w-full h-[800px] border-none"
        title="Resume PDF"
      />
    </div>
  )}
</section>


        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {skills.languages.map((lang, index) => (
                    <li key={index} className="text-gray-300">{lang}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-green-600 to-emerald-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {skills.databases.map((db, index) => (
                    <li key={index} className="text-gray-300">{db}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-yellow-600 to-amber-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {skills.tools.map((tool, index) => (
                    <li key={index} className="text-gray-300">{tool}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-red-600 to-amber-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {skills.interfaces.map((inter, index) => (
                    <li key={index} className="text-gray-300">{inter}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-emerald-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Libraries & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {skills.framework.map((fr, index) => (
                    <li key={index} className="text-gray-300">{fr}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-pink-600 to-emerald-600"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Other Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {skills.soft.map((sf, index) => (
                    <li key={index} className="text-gray-300">{sf}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-gray-800 text-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{project.description}</p>
                  <p className="text-gray-300">{project.techStack}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-16">
  <h2 className="text-4xl font-bold mb-8 text-center text-white">Certificates</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {certificates.map((cert) => (
      <a 
        key={cert.id} 
        href={cert.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transform transition-all hover:scale-105 hover:shadow-2xl"
      >
        <Card className="bg-gray-800 text-white overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{cert.title}</CardTitle>
            <CardDescription className="text-lg text-gray-300">{cert.issuer}</CardDescription>
          </CardHeader>
        </Card>
      </a>
    ))}
  </div>
</section>

      </div>

      {/* Contact Section with Formspree */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Let's Connect</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 max-w-md">
              <form action="https://formspree.io/f/mvgpnqld" method="POST" className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" className="mt-1 bg-purple-700 border-purple-600 text-white placeholder-purple-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" className="mt-1 bg-purple-700 border-purple-600 text-white placeholder-purple-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." className="mt-1 bg-purple-700 border-purple-600 text-white placeholder-purple-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                  <SendIcon className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
            <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <p className="text-purple-200 mb-2">Feel free to reach out to me directly:</p>
              <div className="flex items-center justify-center md:justify-start text-purple-200 mb-2">
                <MailIcon className="mr-2 h-5 w-5" />
                <span>ajayajju3112001@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-purple-200 mb-4">
                <PhoneIcon className="mr-2 h-5 w-5" />
                <span>+91 9110214933</span>
              </div>
              <p className="text-purple-200 mb-4">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/Aj311ay" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300 transition-colors">
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/ajay-75284a238" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300 transition-colors">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 