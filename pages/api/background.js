const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Walchand Institute Of Technology',
                degree: 'Bachelor of Technology, Electronics and Tele-communication Engineering',
                detail: "Bachelor's Degree in Electronics and Tele-communication Engineering.",
                year: '2018-2022'
            },
            {
                id: 1,
                title: 'Narayana Junio College, Hyderabad',
                degree: 'HSC, Pre Engineering',
                detail: "Completed intermediate in Physics, Chemistry and Maths",
                year: '2015-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Persistent Systems',
                role: 'Software Engineer',
                url: 'https://www.persistent.com/',
                desc: 'At Persistent Systems, I developed Java automation scripts to streamline feature integration, implemented SSO for improved login efficiency, optimized JSON data structures and Maven dependencies for better application performance, resolved critical production issues, and collaborated with cross-functional teams to successfully resolve complex development configuration tickets, ensuring timely project completion and enhanced web services availability.',
                year: '06/2022 - 10/2023',
                location: 'Pune, India'
            },
            {
                id: 2,
                title: 'Vedam Labs',
                role: 'Intern',
                url: 'https://www.vedamlab.com/',
                desc: 'During my internship at Vedam Labs, I gained hands-on experience with various AWS services, hosted a static website using S3, and explored IoT applications in industries such as smart homes and healthcare. Additionally, I learned about the ESP8266 Wi-Fi module for connecting IoT devices to the internet.',
                year: '09/2020 - 10/2020',
                location: 'Remote, India'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
