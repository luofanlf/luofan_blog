export const seo = {
  title: 'LuoFan | Developer, Student, Tech Enthusiast',
  description:
    "I'm LuoFan, a student studying in Singapore, passionate about programming and technology innovation. I like to explore new technologies, build interesting projects, and share my learning experiences through blogs.",
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://luofanlf.com'  // 您可以改为您的实际域名
      : 'http://localhost:3000'
  ),
} as const
