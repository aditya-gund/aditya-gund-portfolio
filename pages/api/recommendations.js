// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Madhuri Kalani',
    image: "images/madhuri_kalani.jpg",
    designation: 'Senior Software Engineer at Persistent Systems',
    view: "I had the pleasure of working with Aditya at Persistent Systems as a Software Engineer. He consistently delivered effective solutions through his excellent understanding of complex systems and innovative problem-solving. As a result of his expertise in designing features using various patterns, the robustness of the system was significantly enhanced. Aditya's commitment to excellence and proactive collaboration made him invaluable. In addition to meeting deadlines precisely, he also fostered a collaborative learning environment. I highly recommend Aditya to any organization seeking a skilled and reliable software engineer. The combination of his technical abilities and his adaptability make him a highly regarded professional. Best wishes, Aditya!",
    linkednURL: "https://in.linkedin.com/in/madhurikalani1407"
  },
  {
    id: 1,
    name: 'Nagesh Shitole',
    image: "images/nagesh-shitole.jpg",
    designation: 'Junior Data Engineer at e-Zest Solutions',
    view: "Aditya and I collaborated on daily LeetCode problem-solving sessions during our time in college. His commitment to improving his problem solving skills was impressive.Aditya's consistent dedication and collaborative approach made our study sessions both enjoyable and productive. His strong problem-solving abilities and eagerness to learn set him apart. I wholeheartedly recommend Aditya for any project requiring a dedicated problem solver. It was a pleasure working alongside him, and I am confident he will excel in any endeavor.Best wishes, Aditya!",
    linkednURL: "https://www.linkedin.com/in/nagesh-shitole/"
  },
  {
    id: 2,
    name: 'Vraj Patel',
    image: "images/vraj-patel.jpg",
    designation: 'Electrical and Computer Engineering Masters candidate',
    view: "Aditya was a major contributor to our final year project Cold Chain - A Supply Unit. His creative problem solving and critical thinking were evident throughout. Aditya’s personal intelligence and ease of teamwork played an important role in the success of our project. His unique ideas led to creative development, which set our work apart. I highly recommend Aditya for any party or business. His ability to blend innovation with teamwork makes him a valuable asset. Good luck Aditya!",
    linkednURL: "https://www.linkedin.com/in/vrajpatel23/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
