import shikhoCover from "@/assets/blog-covers/shikho.png";
import shomvobCover from "@/assets/blog-covers/shomvob.png";
import shondhibazarCover from "@/assets/blog-covers/shondhibazar.png";
import aqualinkCover from "@/assets/blog-covers/aqualink.png";
import eudikaCover from "@/assets/blog-covers/eudika.png";

// Prefer the uploaded Shondhibazar photo; retain the original cover until it exists.
const coverPhotos = import.meta.glob("/src/assets/blog/shondhibazar-cover.jpg", {
  eager: true, query: "?url", import: "default",
}) as Record<string, string>;

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  image?: string;
  caption?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  cover: string;
  // Set to false to show this post's cover photo without the maroon wash.
  coverTint?: boolean;
  sections: BlogSection[];
}

// To add a post, add one entry here. The Insights blog grid, the post page
// at /insights/{slug} and the "More posts" row all read from this list.
export const blogPosts: BlogPost[] = [
  {
    slug: "shikho",
    title: "Shikho: Opening Doors to Learning",
    summary:
      "Shikho brings quality learning to every student in Bangladesh, using technology to turn barriers into opportunities.",
    tag: "Portfolio Blog",
    cover: shikhoCover,
    sections: [
      {
        paragraphs: [
          "In Bangladesh, where you grow up can quietly decide how far your education takes you. Outside Dhaka and Chattogram, coaching centres are hard to find, and qualified teachers even harder. For many students, that's the end of the story, a door that closes before they ever get the chance to knock on it.",
          "Take Bedkashi, a tidal village in the Sundarbans. In its school's entire history, not a single student had ever made it into Notre Dame College, one of the country's most competitive schools. The nearest coaching centre lay hours away, and a qualified tutor was out of reach.",
          "That kind of ceiling starts to feel permanent after a while. Then Mushfiq, a Class 9 student from Bedkashi, downloaded an app called Shikho. Two years later, he scored GPA-5 in his SSC exam and became the first student from Bedkashi Collegiate School to get into Notre Dame College. His journey gets at the heart of what Shikho has been trying to do all along: loosen the grip that birthplace has on opportunity.",
        ],
      },
      {
        heading: "The Idea Behind Shikho",
        paragraphs: [
          "It started with a question. Shahir Chowdhury had spent sixteen years in London's financial industry. Over that time, he watched banking change. What once required a branch, a queue, and piles of paperwork was suddenly available to anyone with a phone. Fintech had quietly pulled financial services out from behind locked doors. He wondered: if technology could do that for banking, why not education?",
          "Bangladesh had all the right ingredients for the same shift: millions of young students, smartphones everywhere, a tutoring market worth billions of taka. But the best teachers were still concentrated in big cities. For students outside Dhaka or Chattogram, decent supplementary education came down to luck, and how much a family could afford. That gap is what Shikho set out to close. In 2019, it started with a simple idea: make quality learning available to any student, anywhere. Since then, more than four million learners across all 64 districts have joined the platform, and over 65 lakh log in every month.",
        ],
      },
      {
        heading: "A Difficult Reset",
        paragraphs: [
          "The journey wasn't smooth. By late 2022, Shikho had built a big library of animated lessons, but something wasn't working. Revenue had stalled, and it was becoming clear that students wanted more than videos to watch on their own. They wanted a live teacher, real structure, something that actually matched the way they studied for their exams.",
          "So the team made a hard call. In December 2022, they stopped selling for an entire month and rebuilt the product from scratch. Nearly fifty courses were cut down to three. The reset led to the Academic Program, live classes tied to the exam calendar, complete with practice tests and progress tracking. It wasn't a small adjustment; it was a bold risk. But that risk paid off, and the Academic Program has since become the backbone of Shikho's exam prep.",
        ],
      },
      {
        heading: "Mushfiq's Story, Continued",
        paragraphs: [
          "For Mushfiq, the change was life-altering. His smartphone became his classroom. He could rewatch lessons, join live classes from home, and take practice tests that pointed out exactly where he needed to improve. When his SSC results came out, he hadn't just passed. He'd earned a GPA-5, and become the first student in his school's history to walk through the gates of Notre Dame College. His story is proof of something Shikho has believed from day one: give a student real access, and the limits placed on them start turning into possibilities.",
        ],
      },
      {
        heading: "Where OCBIF Comes In",
        paragraphs: [
          "Support from the Orange Corners Bangladesh Innovation Fund (OCBIF), an initiative of the Kingdom of the Netherlands led by SAJIDA Foundation in partnership with YY Ventures, is helping Shikho scale further. Each year, nearly 1.2 million students finish their SSC exams and step into HSC preparation, a short but critical window that shapes the next two years of their education. With OCBIF's backing, Shikho can step in right then, ensuring those in semi-urban and rural areas have the same opportunities as their peers in the big cities.",
          "This isn't really about counting more students. It's about giving structure and steady support to young people who've always had fewer options, so they can prepare with real confidence instead of just hoping for the best.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "By 2029, Shikho hopes to reach 1.5 million students every month, with most of them living outside Dhaka and Chattogram. And the vision goes beyond exam preparation; the goal is to help at least 10,000 learners build real skills and move toward jobs, not just better grades.",
          "Through it all, the idea hasn't changed since 2019: a student's future should never be limited by the place they happen to be born.",
        ],
      },
    ],
  },
  {
    slug: "shomvob",
    title: "Connecting People to Opportunity with Shomvob",
    summary:
      "Shomvob connects Bangladesh's blue-collar workers with verified jobs, formal employment, and financial services through a single platform.",
    tag: "Portfolio Blog",
    cover: shomvobCover,
    sections: [
      {
        paragraphs: [
          "In Bangladesh, millions of people wake up each day ready to work, with no clear way to find it. In one semi-rural district, a young woman's search for employment meant relying on local brokers. With only a secondary school education and no formal work experience, her choices were limited. Weeks could pass before she found work, broker fees drained her family's savings, and even after she landed a job, there was nothing on paper to show for it, no formal record she could carry into the next one.",
          "This is a reality shared by much of Bangladesh's blue-collar workforce. More than 77 million people are part of the country's labour force, and roughly 85% work informally. For many, there are no formal contracts or employment records to prove their experience to the next employer.",
          "Then, a local job fair at a vocational training centre introduced the young woman to Shomvob. A field representative helped her create a digital profile with her education, skills, and availability. It took less than 30 minutes and cost her nothing. Within two weeks, she was shortlisted and placed in a formal job, without paying a broker a single taka. For the first time, she had a record of her work. Her employment history and payroll information began to build a financial identity, giving her a foundation for future opportunities.",
        ],
      },
      {
        heading: "The Beginning of Shomvob",
        paragraphs: [
          "Shomvob was founded in Dhaka in 2022, after three people saw the same broken system from different sides. Together, they realized the issue wasn't just about financing or unstable businesses, it began much earlier, at the very first step: how people find work. When workers can connect directly with employers, brokers lose their grip. When employment is properly recorded, experience becomes proof that can open doors to future opportunities. That idea became Shomvob: a digital job platform where verified worker profiles link people with employers while quietly building a record of their work.",
        ],
      },
      {
        heading: "The Test of Resilience",
        paragraphs: [
          "It wasn't an easy idea to sell. Experts doubted whether blue-collar workers were ready for a platform, and many felt combining employment technology with financial services was too ambitious for one company. The founders listened, but pressed ahead carefully, proving the job platform first, before building anything else on top of it.",
          "Early growth tested that patience. Revenue was coming in, but payments lagged. Costs kept rising, field staff onboarding workers, technology that needed constant upkeep, one-by-one support for job seekers. Cash began to run short. The founders deferred their own salaries, and when that wasn't enough, they took on personal debt to keep the team afloat. What kept them moving wasn't blind optimism, but what they saw on the ground: workers placed in real jobs, businesses supported, lives changing. The model was working; the money simply hadn't caught up yet. That near-collapse left a permanent mark. Today, Shomvob builds payment terms and advances into contracts to ensure the same cash-flow crunch never sneaks up again.",
        ],
      },
      {
        heading: "From Jobs to Financial Access",
        paragraphs: [
          "Shomvob has since grown beyond its beginnings as a job platform. Today, more than 2.5 million job seekers are registered on Shomvob, with over 32,000 formal job placements completed. Workers can create digital profiles, apply for verified jobs, and connect with employers without paying broker fees. Employers can access screened candidates and use Shomvob's staffing services for employment, payroll, and compliance support.",
          "Along the way, the team saw a second opportunity in the information being created: a worker's employment history and payroll record could do more than help them land their next job. It could also become the basis of a financial profile. That insight led Shomvob into payroll financing and SME financing, using employment and transaction records to help eligible businesses access working capital. For workers, it means turning years of experience into proof that can be documented and recognised. For businesses, it means a more structured way to hire, manage employees, and access financing.",
          "The work hasn't gone unnoticed. In 2025, Forbes Asia named Shomvob one of its 100 startups to watch, and the company has built partnerships with organisations including UNICEF, the World Bank, and Swisscontact.",
        ],
      },
      {
        heading: "A Record That Follows You",
        paragraphs: [
          "For someone who has spent years working informally, having a record of employment can make a meaningful difference. A worker may have years of experience, but without documentation, proving that experience can be difficult. A digital profile, employment history, and payroll record begin to change that. Instead of starting from zero every time they look for work, workers can begin to carry their work history with them. This is what makes Shomvob's approach broader than recruitment. It connects different parts of working life, from finding a job and getting paid to building a record and accessing financial services, within one system.",
        ],
      },
      {
        heading: "Building the Next Million Workers with OCBIF",
        paragraphs: [
          "With support from the Orange Corners Bangladesh Innovation Fund (OCBIF), an initiative of the Kingdom of the Netherlands, led by SAJIDA Foundation in partnership with YY Ventures, Shomvob is taking its next step toward growth and expansion.",
          "The support is helping Shomvob strengthen the systems behind its growing platform, including technology improvements and AI-based job matching. Shomvob is also expanding its outreach to women and young people in semi-urban areas, where access to formal employment can be more limited. Another focus is helping more workers move into formal payroll through its staffing operations. By working more closely with employers, Shomvob aims to turn existing demand for workers into formal job opportunities for people who may otherwise depend on informal networks.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "By 2028, Shomvob aims to reach more than 10 million registered workers across Bangladesh and expand into at least two additional markets. Financing services will grow, and more workers will gain access to formal employment and financial opportunities. The journey from finding a job to building a financial identity doesn't happen overnight. It begins with a verified profile. A formal job adds a record. Regular payroll builds history. Over time, each step makes the next opportunity easier to reach. For someone who has always relied on informal networks, that shift can be life-changing.",
          "A more direct path to work can give people more than a job. It can give them a foundation to build from.",
        ],
      },
    ],
  },
  {
    slug: "shondhibazar",
    title: "From Farm to Table: Shondhibazar's Journey with Safer Food",
    summary:
      "Shondhibazar connects farmers and families through a safer, more transparent food system built on traceability, fair markets, and better opportunities for farmers.",
    tag: "Portfolio Blog",
    cover: coverPhotos["/src/assets/blog/shondhibazar-cover.jpg"] ?? shondhibazarCover,
    coverTint: false,
    sections: [
      {
        paragraphs: [
          "Most families in Bangladesh buy their groceries without knowing where it really comes from. The journey from a farm to a kitchen can pass through many hands, leaving consumers with little idea of where their food was grown or how it was handled. Farmers live with another kind of uncertainty. Markets can be unpredictable, prices change quickly, and years of hard work do not always translate into a stable income. Women farmers often face even more barriers to entering formal markets and earning steady incomes.",
          "This gap is where Shondhibazar saw an opportunity. Founded in Dhaka in 2026, the company set out to build a clearer path from farm to table, one where families could better understand where their food comes from and farmers could reach markets more fairly. At the heart of the idea was a focus on traceability, safer food, sustainable practices, and greater opportunities for women farmers.",
        ],
      },
      {
        heading: "Building Trust in Food",
        // Shelf photo removed. To bring it back, add:
        // image: "src/assets/blog/shondhibazar-products.jpg",
        paragraphs: [
          "Shondhibazar began with a vision of a food system families could trust. Consumers wanted confidence in what they were bringing home, while farmers needed a fairer, steadier way to reach the market. The answer was to build a bridge between them, a connection that worked for both sides. Today, Shondhibazar's network includes more than 1,200 farmers, with over 400 women leading the way. For many, life feels steadier now. They know their harvests will reach the market, each season carries less uncertainty, and access to quality seeds, financial support, and training has changed the way they farm. Planning ahead no longer feels out of reach.",
          "That trust extends to families as well. Over 5,000 households and 15 businesses now buy directly from Shondhibazar farmers. Every product carries a story of safety and care, from the field to the table. Even the packaging reflects that promise, using jute, biodegradable materials, and recycled glass to reduce waste and protect the environment.",
        ],
      },
      {
        heading: "Finding the Vision",
        paragraphs: [
          "The idea behind Shondhibazar did not emerge overnight. Before launching, the founder had already explored other entrepreneurial paths, but food safety kept rising as the issue that mattered most. From that concern, the vision of a farm-to-table system began to take shape. As the business grew, the vision became clearer: it was never just about groceries, but about building a bridge between farmers and families. That bridge gave women farmers a stronger role in the supply chain, while families gained access to food they could trust and trace back to its source.",
          "Over time, the team also faced challenges that made them stronger. To move forward, the team needed new skills and guidance. Learning at Stanford University, joining the Impact-Linked Finance Readiness Bootcamp, and participating in Orange Corners Bangladesh Cohort 4 gave them new ways to grow. These experiences shaped Shondhibazar's path toward impact, business growth, and sustainability.",
        ],
      },
      {
        heading: "Growing the Connection",
        paragraphs: [
          "Shondhibazar has grown into a network that reaches thousands of people. More than 5,000 families and 15 businesses now buy directly from its farmers, while over 1,200 farmers and managers are part of the journey. Together, they have earned over BDT 62 million, showing how safe food and fair trade can grow side by side.",
          "Farmers have found more security through Shondhibazar. They sell directly, receive fair prices, and get support with seeds, finance, and training. They have also taken its food safety work beyond the farm. Its Safe Food Experience Centers have served more than 228,000 meals, creating another point of connection between consumers and the food they eat. The environmental side of the work has grown too. More than 200,000 eco-friendly packaging units have been produced to replace less sustainable alternatives, while over 22,000 glass jars have been collected for reuse. These efforts are part of a larger goal: building a food system where safety, fair market access, and sustainability can grow together.",
        ],
      },
      {
        heading: "Building the Next Chapter with OCBIF",
        image: "src/assets/blog/shondhibazar-facility.jpg",
        paragraphs: [
          "With support from the Orange Corners Bangladesh Innovation Fund (OCBIF), an initiative of the Kingdom of the Netherlands, led by SAJIDA Foundation in partnership with YY Ventures, Shondhibazar is working toward establishing a 5,000 sq ft processing facility in Diabari, Uttara. The facility will meet HACCP and ISO certification standards, ensuring food safety and quality at every step.",
          "This support strengthens Shondhibazar's capacity to process food, maintain safety systems, and track impact, especially for women farmers across its network.",
          "Shondhibazar is now moving into markets beyond Bangladesh. 47 product samples have already been approved by Masala Bazar (Euro Foods) for distribution in the United Kingdom and the United Arab Emirates.",
          "The next stage of Shondhibazar's growth will depend on stronger infrastructure, better compliance, and greater processing capacity. OCBIF support is already helping to build that base, making sure farmer livelihoods, food safety, and sustainability remain central to the work.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "Over the next three years, Shondhibazar aims to build a contract farming network of more than 2,000 farmers and expand its products into the United Kingdom, United Arab Emirates, and United States. But growth is only one part of the journey. At its core, Shondhibazar is working to make the path between a farmer and a family more transparent. For farmers, that means more reliable market access and opportunities to build their livelihoods. For consumers, it means greater confidence in the food that reaches their tables.",
          "From the farm to the table, Shondhibazar is building a food system where people can know where their food comes from, farmers can participate more fairly, and safer food can become part of everyday life.",
        ],
      },
    ],
  },
  {
    slug: "aqualink",
    title: "Making Everyday Operations Smarter with Aqualink",
    summary:
      "Aqualink Bangladesh Limited helps businesses, farms, and industries use real-time data and smart automation to cut energy waste, lower costs, and work more efficiently.",
    tag: "Portfolio Blog",
    cover: aqualinkCover,
    sections: [
      {
        paragraphs: [
          "In many workplaces across Bangladesh, energy is used even when it is not needed. Empty rooms stay cooled by air conditioners, pumps continue running, and farms lose resources when decisions are made without proper information. These may seem like small inefficiencies at first, but they end up costing families, farms, and businesses far more than they realize.",
          "Aqualink's story began when three professionals, Sayed Rizban Hussain, Masnur Rahman, and Abdul Ghafur Bashir, kept encountering the same problems in their work. Factories, farms, and shops were spending more than they should because energy was wasted and decisions were made without reliable information. They wanted to change this pattern. Their vision was to bring technology closer to everyday life in Bangladesh, simple, affordable, and practical for the people who needed it most.",
        ],
      },
      {
        heading: "The Beginning of Sensometer",
        paragraphs: [
          "The idea took shape in 2019 with Sensometer, an IoT- and AI-powered platform designed to collect information in real time and turn it into practical actions. In a retail store, Sensometer could automate air conditioning based on actual needs, helping reduce unnecessary electricity use. On a farm, it could monitor water quality and provide information to support decisions about fish or crops. In cold storage facilities, it could track temperature to help protect stored goods. The same system could be adapted to different settings, allowing businesses and farmers to use data to manage everyday operations more efficiently.",
        ],
      },
      {
        heading: "Making Smart Technology Work Locally",
        paragraphs: [
          "Getting people to adopt new technology was not easy. Aqualink entered a market where smart automation was still unfamiliar to many businesses. Technology costs were high, technical knowledge was limited, and infrastructure could make implementation difficult.",
          "Instead of building a solution that required customers to change everything at once, the team focused on making Sensometer easier to adopt. Local manufacturing helped bring down costs, while combining hardware and software allowed customers to start with what they needed and expand over time. A Bangla-friendly interface and local support also made the technology more accessible. That approach gradually helped Aqualink move from an idea to a solution used across different parts of the country. Today, Aqualink serves more than 1,150 customers across 16 districts, with its solutions being used in shops, farms, greenhouses, irrigation projects, and cold storage facilities.",
        ],
      },
      {
        heading: "Growth Through Partnership",
        paragraphs: [
          "As Aqualink's work expanded, one of the first places to see its impact was Shwapno, Bangladesh's largest retail chain. Before Sensometer, air conditioning in stores was managed manually, and across hundreds of outlets, electricity was wasted every day. Aqualink first tested Sensometer at a single Shwapno outlet in Banani. The system monitored electricity use and automated the air conditioners based on actual requirements.",
          "The results were significant. Electricity consumption fell by 148,670 kWh, a 20.93% reduction, while monthly electricity costs were reduced by nearly half. The results helped turn an initial test into a wider partnership. Sensometer is now being used across 30 Shwapno outlets, with the partnership expanding into areas such as cold rooms, delivery vans, and franchise stores.",
        ],
      },
      {
        heading: "Impact Across Communities",
        paragraphs: [
          "The Shwapno partnership was one example of what Aqualink's technology could do. The company also began working with farms, greenhouses, and irrigation projects, where real-time information could help people make decisions about their operations. Its water-quality monitoring systems have helped farmers better manage fish farming, while growers have used monitoring tools to maintain more consistent conditions in fields and greenhouses. Across its customer base, Aqualink's solutions now help save more than 80,000 kWh of electricity every month. The company has also trained more than 1,000 farmers and technicians in digital energy management and smart farming, with women making up more than 20% of participants.",
          "For Aqualink, these numbers represent more than technology adoption. They show how access to better information can help people reduce waste, manage costs, and make everyday decisions with greater confidence.",
        ],
      },
      {
        heading: "Staying the Course",
        paragraphs: [
          "Building this kind of technology came with its own challenges. Early funding was difficult to secure. Hardware development, product testing, and field implementation required significant investment, while customers needed time to understand the value of smart automation. The period from 2019 to 2021 was particularly difficult. Customer adoption was slow, the COVID-19 pandemic disrupted operations, and delays in imported hardware parts made it harder to keep projects moving. At one point, the company was close to running out of options.",
          "The team chose to keep going. Rather than expanding too quickly, Aqualink focused on improving Sensometer and demonstrating its value through real customer results. It also developed a business model that combined hardware sales with recurring software revenue, giving the company a more sustainable path as it grew. Those early customer trials eventually became partnerships, helping Aqualink build the confidence and experience to take its technology into more industries and communities.",
        ],
      },
      {
        heading: "OCBIF Support on the Path Forward",
        paragraphs: [
          "With support from the Orange Corners Bangladesh Innovation Fund (OCBIF), an initiative of the Kingdom of the Netherlands, led by SAJIDA Foundation in partnership with YY Ventures, Aqualink moved closer to its next stage of growth.",
          "The support is helping Aqualink strengthen its technology, expand automation in retail, reach more farmers, improve AI tools, and grow its team. As more businesses and farmers use its solutions, Aqualink can build a stronger base of real-time data. This, in turn, can help businesses make better decisions, reduce costs, and use energy more efficiently.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "With these foundations in place, Aqualink is preparing to scale across Bangladesh and expand into South and Southeast Asia. Over the next three years, the company plans to reach 3,000 automated retail outlets, onboard 2,000 farmers, and enter at least two international markets. The vision goes beyond these numbers. At its core, Aqualink is working to make everyday operations simpler and more efficient. By reducing energy waste and helping farmers and industries make better-informed decisions, its impact can reach both people and the environment.",
          "As Aqualink grows, its journey shows how technology can be designed around real-world needs. By bringing together automation, AI, and data, the company is working towards a future where smarter operations are not just possible, but accessible to the businesses and communities that need them most.",
        ],
      },
    ],
  },
  {
    slug: "eudika",
    title: "Finding the Right Tutor: Eudika's Journey to Better Learning",
    summary:
      "Eudika connects students with verified tutors while helping educators find more reliable teaching opportunities through technology.",
    tag: "Portfolio Blog",
    cover: eudikaCover,
    sections: [
      {
        paragraphs: [
          "Finding the right tutor can be harder than it sounds. Parents often ask friends, search Facebook groups, or rely on personal recommendations. Even after finding someone, there is no guarantee that the tutor will have the right subject knowledge, understand the student's curriculum, or be able to provide consistent support.",
          "For Mezabin's family, the search went on for months. They were looking for a science tutor who understood the Cambridge curriculum, but one option after another fell short. Some tutors lacked subject knowledge, while others couldn't provide the consistency she needed. Over time, the experience began to affect Mezabin's confidence in her studies. Just when the search felt endless, her family learned about Eudika. After understanding what Mezabin needed, the Eudika team matched her with a tutor experienced in Cambridge science and arranged a trial class. This time, the match worked. Over the following months, Mezabin's performance improved, and so did her confidence. For the tutor, it created a reliable opportunity to reach a student whose needs matched their expertise.",
        ],
      },
      {
        heading: "Finding the Right Connection",
        paragraphs: [
          "Mezabin's story reflects a wider problem Eudika set out to address. In 2023, the team saw that families were spending significant time searching for tutors, while skilled educators often depended on personal networks or scattered online groups to find students. Both sides were looking for opportunities, but there was no simple and reliable way to connect them. Eudika set out to make that process easier through technology. Parents could share their requirements, tutors could find opportunities that matched their skills and experience, and the platform could bring both sides together. But matching students with tutors was only part of the challenge. Families also needed to feel confident about the people they were inviting into their children's learning journey.",
        ],
      },
      {
        heading: "Building Trust Along the Way",
        paragraphs: [
          "In Bangladesh, personal recommendations have long played an important role in tutoring. A tutor suggested by a friend or relative can feel safer than someone found online. For Eudika, building a digital platform meant finding a way to create that same sense of confidence. The company began building trust into the process through tutor verification, customer support, quality monitoring, and professional development for educators. These efforts helped families make more informed choices while giving tutors the support to improve their teaching. As more families and educators joined, Eudika began to see that their needs extended beyond the initial tutor match. Students needed support beyond individual lessons, educators wanted opportunities to strengthen their skills, and families were looking for more consistent learning support.",
          "The business gradually expanded its services to include tutor training, educational content, student support, and technology-based learning tools. Today, more than 2,000 tutors have found opportunities through Eudika. The platform has reached 2,900 customers and beneficiaries and generated around BDT 1.5 crore in revenue.",
        ],
      },
      {
        heading: "Growing Beyond Tutor Matching",
        paragraphs: [
          "Working closely with students, parents, and educators showed Eudika that the need went beyond finding a tutor. Students need ongoing academic support. Tutors need opportunities to develop their skills and build sustainable careers. Parents need a service they can trust when making decisions about their children's education. Eudika is now building a broader education platform around these needs. Tutor training, educational content, student support, and AI-powered learning tools are part of its growing vision. An upcoming mobile app and AI-based matching system are designed to make finding a suitable tutor faster and more personalised. For educators, the platform is also becoming a place to access training and professional development alongside teaching opportunities. The aim is to bring these services together in one place, making it easier for families to find the right support and for educators to build meaningful teaching opportunities.",
        ],
      },
      {
        heading: "Opening New Doors for Eudika through OCBIF",
        paragraphs: [
          "With support from the Orange Corners Bangladesh Innovation Fund (OCBIF), an initiative of the Kingdom of the Netherlands, led by SAJIDA Foundation in partnership with YY Ventures, Eudika is strengthening the technology and services beyond its platform.",
          "The funding is supporting the development of its mobile app, AI-powered tutor matching, tutor training, and educational content. It is also helping the team expand its reach and serve more families across Bangladesh. For Eudika, this support is about more than building new technology. It is about making the entire experience easier for students, parents, and educators. A better matching system can reduce the time parents spend searching. Better training can help educators grow professionally. More accessible learning support can give students the guidance they need to keep progressing.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "Eudika now has around 17,000 monthly active users and aims to reach more than 100,000 students across Bangladesh within the next three years. It also plans to create income opportunities for more than 20,000 educators and establish itself as a leading technology-enabled education marketplace. The journey began with a simple gap: parents were searching for the right tutors, while educators were searching for the right students. Eudika is now building on that connection to create a wider learning ecosystem where families can find trusted support, educators can access more reliable opportunities, and students can get the guidance they need to learn with confidence.",
          "Sometimes, finding the right tutor is about more than improving a grade. It is about finding someone who helps a student believe in their ability to learn.",
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string | undefined) =>
  blogPosts.find((post) => post.slug === slug);
