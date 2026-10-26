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
  sections: BlogSection[];
}

// To add a post, add one entry here. The Insights blog grid, the post page
// at /insights/{slug} and the "More posts" row all read from this list.
export const blogPosts: BlogPost[] = [
  {
    slug: "shondhibazar",
    title: "From Farm to Table: Shondhibazar's Journey with Safer Food",
    summary:
      "Shondhibazar connects farmers and families through a safer, more transparent food system built on traceability, fair markets, and better opportunities for farmers.",
    tag: "Portfolio Blog",
    cover: "src/assets/blog/shondhibazar-cover.jpg",
    sections: [
      {
        paragraphs: [
          "Most families in Bangladesh buy their groceries without knowing where it really comes from. The journey from a farm to a kitchen can pass through many hands, leaving consumers with little idea of where their food was grown or how it was handled. Farmers live with another kind of uncertainty. Markets can be unpredictable, prices change quickly, and years of hard work do not always translate into a stable income. Women farmers often face even more barriers to entering formal markets and earning steady incomes.",
          "This gap is where Shondhibazar saw an opportunity. Founded in Dhaka in 2026, the company set out to build a clearer path from farm to table, one where families could better understand where their food comes from and farmers could reach markets more fairly. At the heart of the idea was a focus on traceability, safer food, sustainable practices, and greater opportunities for women farmers.",
        ],
      },
      {
        heading: "Building Trust in Food",
        image: "src/assets/blog/shondhibazar-products.jpg",
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
];

export const getBlogPost = (slug: string | undefined) =>
  blogPosts.find((post) => post.slug === slug);
