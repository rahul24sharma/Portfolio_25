export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Fintech banking app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Voice Agent Interview Platform",
    des: "A real-time AI-driven interview simulation platform built with Next.js and Vapi, enabling voice-based candidate evaluations with dynamic routing and role-based interfaces.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/rahul24sharma/Full-Stack-Real-Time-AI-Voice-Agent-Interview-Platform",
  },
  {
    id: 2,
    title: "Cloud Native Health Tracker",
    des: "A cloud-native full-stack web app for health tracking using React, Node.js, and MySQL, deployed on AWS with CI/CD, auto-scaling, and load balancing.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/rahul24sharma/webapp",
  },
  {
    id: 3,
    title: "NuMoves",
    des: "A real-time move-out sales platform built for buyers and sellers to list, browse, and negotiate items during relocations. Features include live chat, 3D previews, and instant updates.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/rahul24sharma/final-project-numoves",
  },
  {
    id: 4,
    title: "Fintech Banking App",
    des: "A fintech banking app that offers a seamless user experience with real-time transaction tracking, personalized budgeting tools, and advanced security features.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://ui.apple.com",
  },
];


export const testimonials = [
  {
    quote:
      "I’ve worked closely with Rahul on infrastructure automation. His Terraform and Packer scripts are some of the most organized and reusable I've seen. He has a clear understanding of cloud architecture and ensures that our deployments are smooth and secure.",
    name: "Arihant Jain",
    title: "DevOps Engineer of Webcraft IT",
  },
  {
    quote:
      "Rahul has been a key contributor to our backend systems at WebCraft IT. His deep understanding of APIs, databases, and cloud infrastructure helped us scale several services efficiently. His ability to debug complex issues and deliver clean, well-documented code consistently sets a high bar for the team.",
    name: "Abhishek Sharma",
    title: "Team Lead of Webcraft IT",
  },
  {
    quote:
      "Working with Rahul has always been a smooth and productive experience. He's not only technically sound, especially in Node.js and SQL, but also a great collaborator. He’s quick to help others, open to feedback, and excellent at breaking down problems into manageable pieces.",
    name: "Rishi Jain",
    title: "Peer Developer of Webcraft IT",
  },
  {
    quote:
      "Even though he's on the backend team, Rahul has a strong appreciation for the front-end experience. He always makes sure APIs are efficient, consistent, and well-documented, which makes our job integrating with them much easier.",
    name: "Balwan Rajput",
    title: "Project Manager of Webcraft IT",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Sumit Kumar",
    title: "Software Engineer of Webcraft IT",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Assisted in the development of a web-based platform using full stack technologies, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    desc: "Designed and developed applications healthcare and school ERP platforms using full stack technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rahul24sharma",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/rahul24sharma", // change if your handle is different
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rsharma84",
  },
];

