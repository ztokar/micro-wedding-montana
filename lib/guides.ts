export type GuideSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type Guide = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  hero: string;
  heroAlt: string;
  readTime: string;
  updated: string;
  quickAnswer: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const guides: Guide[] = [
  {
    slug: "all-inclusive-micro-wedding-packages-montana",
    eyebrow: "Package Planning",
    title: "What Is Included in All-Inclusive Micro Wedding Packages in Montana?",
    seoTitle: "Compare All-Inclusive Micro Wedding Packages in Montana Without Hidden Costs | North Star Ranch",
    description: "A practical way to compare Montana micro wedding packages without being surprised by missing lodging, meals, vendors, or event costs.",
    hero: "/images/ranch-wedding.jpg",
    heroAlt: "Outdoor wedding gathering at North Star Ranch in Whitefish Montana",
    readTime: "6 minute read",
    updated: "June 14, 2026",
    quickAnswer: "An all-inclusive Montana micro wedding package should clearly state what happens at the venue, where guests sleep, who handles each vendor, and which costs still sit outside the package. The word all-inclusive is not a standard promise, so compare the written details instead of the label.",
    sections: [
      {
        id: "meaning",
        heading: "What an All-Inclusive Montana Wedding Venue May Include",
        paragraphs: [
          "Some Montana wedding packages cover the venue, ceremony, reception, and a short list of wedding-day services. Others include lodging, meals, planning, flowers, photography, and several days of activities. Both may use the same all-inclusive label.",
          "Ask for one written list that separates included items, optional upgrades, and outside vendors. That list matters more than the package name."
        ],
        table: {
          headers: ["Area", "What to confirm", "Why it matters"],
          rows: [
            ["Venue", "Ceremony, reception, setup, cleanup, hours", "A short rental window can change the whole day"],
            ["Lodging", "Rooms, nights, guest capacity, check-in", "Destination guests need a clear place to land"],
            ["Food", "Meals, drinks, service staff, gratuity", "Food is often the largest unclear add-on"],
            ["Vendors", "Planner, officiant, photographer, florist", "Included may mean referred, not paid for"],
            ["Weather", "Indoor backup, tent rules, heaters", "Montana weather can change quickly"]
          ]
        }
      },
      {
        id: "lodging",
        heading: "Treat Lodging as Part of the Wedding Plan",
        paragraphs: [
          "For a destination micro wedding, lodging changes more than the sleeping arrangements. It affects transportation, meals, time with guests, and whether the celebration feels relaxed.",
          "North Star Ranch is a private 40-acre retreat near Whitefish with a five-bedroom chalet, four cabins, and an eight-room lodge. Couples considering the ranch should ask which accommodations are available for their dates and how lodging connects to the wedding plan."
        ],
        bullets: [
          "Confirm how many guests can stay onsite.",
          "Ask whether lodging is included or booked separately.",
          "Check arrival and departure times before planning group meals.",
          "Find out where guests who stay elsewhere should meet."
        ]
      },
      {
        id: "questions",
        heading: "Questions to Ask Every Montana Wedding Venue Before Comparing Prices",
        paragraphs: [
          "A lower starting price is not automatically the lower final cost. Ask every venue the same questions, then compare the full experience you are buying."
        ],
        bullets: [
          "What does the package remove from our planning list?",
          "Which vendors must we hire and pay separately?",
          "Are taxes, service fees, gratuities, and cleanup included?",
          "What happens if weather changes the ceremony plan?",
          "Can guests stay onsite, and for how many nights?",
          "Is the package built for a wedding day or a wedding weekend?"
        ]
      },
      {
        id: "fit",
        heading: "When a Private Ranch and Lodge Make Sense",
        paragraphs: [
          "A private ranch is a strong fit when the couple wants a small guest list, onsite lodging, and easy access to Whitefish and Glacier National Park. It is less about adding every possible service and more about keeping the important parts in one place.",
          "Explore the private Montana micro wedding setting at North Star Ranch, then ask for the current package details before comparing it with other options."
        ]
      }
    ],
    faqs: [
      { question: "Does all-inclusive always include lodging?", answer: "No. Some packages include lodging, while others only make it available. Ask for the room count, number of nights, and separate lodging cost in writing." },
      { question: "Does all-inclusive include every wedding vendor?", answer: "Not always. A package may include selected vendors, vendor coordination, or only a preferred-vendor list. Confirm who is hired and who pays each invoice." },
      { question: "Should we compare packages by starting price?", answer: "Compare the likely final cost and the work left on your planning list. A package with a higher starting price may include lodging or services that another package leaves out." }
    ],
    related: ["montana-micro-wedding-planning-timeline", "whitefish-montana-micro-wedding", "small-wedding-venues-in-montana"]
  },
  {
    slug: "glacier-national-park-micro-wedding",
    eyebrow: "Glacier Wedding Guide",
    title: "Glacier National Park Micro Wedding: Park Ceremony or Private Venue?",
    seoTitle: "Plan a Glacier National Park Micro Wedding Without Permit or Guest-Day Surprises | North Star Ranch",
    description: "Compare a ceremony inside Glacier National Park with a private micro wedding venue near the park, including permits, time limits, guests, and lodging.",
    hero: "/images/glacier-spring.jpg",
    heroAlt: "Glacier National Park mountain landscape near Whitefish Montana",
    readTime: "7 minute read",
    updated: "June 14, 2026",
    quickAnswer: "Choose a Glacier National Park ceremony when the park location itself is the priority and your group can work within permit, access, and setup limits. Choose a private venue near Glacier when you want more control over guests, lodging, dinner, and the pace of the day.",
    sections: [
      {
        id: "rules",
        heading: "Compare a Glacier National Park Wedding With a Private Venue",
        paragraphs: [
          "Glacier National Park requires a Special Use Permit for every vow exchange, elopement, ceremony, or wedding, regardless of group size. The park says applications and the non-refundable $125 fee must arrive at least 20 business days before the requested date.",
          "Approved wedding locations have their own guest limits and setup rules. Park wedding locations are limited to two hours, road closures can block access, and many sites do not allow tables, decorations, or more than four chairs."
        ],
        table: {
          headers: ["Decision", "Inside Glacier National Park", "Private venue near Glacier"],
          rows: [
            ["Ceremony setting", "Named permitted park location", "Private property"],
            ["Time", "Two-hour location limit", "Set by venue agreement"],
            ["Setup", "Strict location rules", "Confirm with venue"],
            ["Guests", "Varies by park location", "Confirm venue capacity"],
            ["Lodging and dinner", "Planned separately", "May be available onsite"]
          ]
        }
      },
      {
        id: "private-base",
        heading: "Use a Private Wedding Venue Near Glacier as the Guest Base",
        paragraphs: [
          "A private venue near Glacier can hold the parts the park is not designed to handle: guest lodging, a meal, longer conversations, and a weather backup. Couples can still plan park photos or approved activities without asking every guest to move through the park on a strict schedule.",
          "North Star Ranch is less than forty-five minutes from Glacier National Park, twenty-five minutes from Glacier Park International Airport, and eight miles from downtown Whitefish. Its onsite chalet, cabins, and lodge make it practical for a destination group to stay together."
        ]
      },
      {
        id: "choose",
        heading: "Which Option Fits Your Micro Wedding?",
        bullets: [
          "Choose the park when the ceremony location matters more than setup, privacy, or a long guest experience.",
          "Choose a private venue when you want the ceremony, dinner, and guest time to happen at one base.",
          "Combine both when you want a private celebration plus park portraits or another approved Glacier experience.",
          "Build extra travel time into any plan that depends on seasonal roads or busy park entrances."
        ],
        paragraphs: [
          "Recent couples discussing Glacier weddings repeatedly mention crowds, permits, driving, and finding a place for dinner after the ceremony. Solve those questions before choosing a scenic location."
        ]
      },
      {
        id: "next-step",
        heading: "Plan the Guest Experience Before the Photo Route",
        paragraphs: [
          "Start with where guests sleep, eat, park, and wait. Then plan the park portion around that base. This order protects the day from feeling like a series of transfers.",
          "If a private micro wedding venue near Glacier National Park fits your group, review North Star Ranch and ask about current availability."
        ]
      }
    ],
    faqs: [
      { question: "Do you need a permit to get married in Glacier National Park?", answer: "Yes. Glacier National Park says every vow exchange, ceremony, elopement, or wedding requires a Special Use Permit, regardless of group size." },
      { question: "How long can a Glacier National Park wedding ceremony last?", answer: "The park lists a two-hour time limit for its wedding locations. Each location also has its own access, guest, chair, and setup rules." },
      { question: "Can we hold the reception inside Glacier National Park?", answer: "Park wedding locations have strict setup and use limits. Most couples should plan the meal and longer celebration at a private venue, lodge, restaurant, or other approved space outside the ceremony location." }
    ],
    related: ["whitefish-montana-micro-wedding", "best-time-of-year-for-montana-micro-wedding", "montana-micro-wedding-planning-timeline"]
  },
  {
    slug: "small-wedding-venues-in-montana",
    eyebrow: "Venue Decision Guide",
    title: "Small Wedding Venues in Montana: What to Look for Before Booking",
    seoTitle: "Find a Small Wedding Venue in Montana That Keeps Guests Together | North Star Ranch",
    description: "Compare small Montana wedding venues by privacy, lodging, guest comfort, weather plans, travel, and what the venue actually includes.",
    hero: "/images/montana-scenic-wedding.jpg",
    heroAlt: "Small outdoor wedding setup in Montana",
    readTime: "6 minute read",
    updated: "June 14, 2026",
    quickAnswer: "A strong small wedding venue in Montana makes the celebration feel full at your real guest count and keeps the guest experience simple. Look for clear lodging, weather, reception, privacy, and travel plans.",
    sections: [
      {
        id: "criteria",
        heading: "Compare Small Wedding Venues in Montana by What Guests Will Feel",
        paragraphs: [
          "Mountain views may get a venue onto your shortlist. Guest comfort and clear logistics decide whether the weekend feels easy once everyone arrives.",
          "For a destination wedding, compare the full stay rather than only the ceremony space."
        ],
        table: {
          headers: ["Venue question", "What a useful answer sounds like"],
          rows: [
            ["Where will guests stay?", "A clear room plan onsite or nearby"],
            ["What if weather changes?", "A specific backup, not a vague promise"],
            ["How private is the event?", "Who else can use the property that day"],
            ["What is included?", "Written inclusions and outside costs"],
            ["How do guests arrive?", "Real airport, road, and parking details"]
          ]
        }
      },
      {
        id: "small-fit",
        heading: "Choose a Montana Wedding Venue That Fits a Small Group",
        paragraphs: [
          "A room built for two hundred people can make twenty guests feel lost. Ask to see how the Montana wedding venue sets up for your actual guest count, including the ceremony, dinner, toasts, and time between each part of the celebration.",
          "Private ranches, lodges, inns, and smaller outdoor venues often make it easier to keep everyone together. The tradeoff is that couples must confirm weather plans, vendor access, and exactly what the property allows."
        ]
      },
      {
        id: "venue-types",
        heading: "Compare the Main Types of Small Montana Wedding Venues",
        paragraphs: [
          "The right venue type depends on how much privacy, lodging, event service, and outdoor access the group needs. Compare the tradeoff before comparing photos."
        ],
        table: {
          headers: ["Venue type", "Often works well for", "Confirm before booking"],
          rows: [
            ["Private ranch", "Privacy and a destination group stay", "Lodging, vendor access, and weather plan"],
            ["Lodge or inn", "Guest rooms close to the reception", "Event spaces, meal rules, and other guests onsite"],
            ["Hotel or resort", "Traditional services and easy guest booking", "Minimums, privacy, and small-group setup"],
            ["Public park ceremony", "A specific outdoor ceremony location", "Permits, time limits, access, and reception plan"]
          ]
        }
      },
      {
        id: "destination",
        heading: "For a Montana Destination Wedding, Lodging Is a Venue Feature",
        paragraphs: [
          "If guests travel to Montana, the venue choice affects the whole trip. Onsite lodging can reduce driving, make group meals easier, and give the wedding more time without adding another formal event.",
          "North Star Ranch offers a private 40-acre setting near Whitefish with a chalet, four cabins, and an eight-room lodge. It is eight miles from downtown Whitefish and twenty-five minutes from Glacier Park International Airport."
        ]
      },
      {
        id: "shortlist",
        heading: "Build a Better Venue Shortlist",
        bullets: [
          "Choose your real guest count before touring.",
          "Decide whether guests staying together is a priority.",
          "Ask for current package inclusions and property rules.",
          "Check the bad-weather plan before falling for the outdoor ceremony view.",
          "Map the airport, lodging, ceremony, meal, and next-day plans.",
          "Visit or video-tour the venue using the setup for your group size."
        ],
        paragraphs: [
          "Couples looking for a private Montana micro wedding venue can use North Star Ranch as one option on that shortlist."
        ]
      }
    ],
    faqs: [
      { question: "What is considered a small wedding?", answer: "There is no legal definition. Many venues use small wedding or micro wedding for celebrations with fewer than about fifty guests, but each venue sets its own limit." },
      { question: "Are small wedding venues cheaper?", answer: "Sometimes, but not automatically. The final cost depends on lodging, food, rentals, minimums, vendor rules, and how long you use the property." },
      { question: "Should a destination venue include lodging?", answer: "It does not have to, but onsite lodging can simplify transportation and give guests more time together. Confirm the number of rooms and booking terms." }
    ],
    related: ["all-inclusive-micro-wedding-packages-montana", "whitefish-montana-micro-wedding", "glacier-national-park-micro-wedding"]
  },
  {
    slug: "whitefish-montana-micro-wedding",
    eyebrow: "Whitefish Destination Guide",
    title: "Whitefish Montana Micro Wedding Venue Guide",
    seoTitle: "Plan a Whitefish Montana Micro Wedding Guests Can Enjoy as a Getaway | North Star Ranch",
    description: "Plan a Whitefish Montana micro wedding venue around guest travel, onsite lodging, Glacier National Park, seasonal access, and a private place to gather.",
    hero: "/images/ranch-hero.jpg",
    heroAlt: "North Star Ranch landscape near Whitefish Montana",
    readTime: "6 minute read",
    updated: "June 14, 2026",
    quickAnswer: "Whitefish works well for a destination micro wedding because couples can pair a private Northwest Montana wedding venue with a mountain-town stay and Glacier National Park. The best plan keeps lodging, transportation, and group time simple.",
    sections: [
      {
        id: "why-whitefish",
        heading: "Why Whitefish Works for a Montana Micro Wedding",
        paragraphs: [
          "Whitefish gives guests more than one reason to make the trip. Downtown restaurants, outdoor activities, Whitefish Lake, and Glacier National Park can turn a wedding into a shared Flathead Valley stay.",
          "The practical advantage is Glacier Park International Airport near Kalispell. North Star Ranch is twenty-five minutes from the airport and eight miles from downtown Whitefish, which keeps the destination feeling remote without making arrival difficult."
        ]
      },
      {
        id: "weekend",
        heading: "Plan the Weekend Around One Home Base",
        table: {
          headers: ["Part of the trip", "Simple Whitefish plan"],
          rows: [
            ["Arrival", "Give guests one clear check-in and meeting plan"],
            ["Welcome time", "Keep the first evening informal"],
            ["Wedding day", "Limit unnecessary driving between locations"],
            ["Glacier visit", "Treat it as a planned outing, not a quick stop"],
            ["Departure", "Leave time for breakfast and airport travel"]
          ]
        },
        paragraphs: [
          "Destination groups lose time when every meal, activity, and photo stop requires another drive. A private base with onsite lodging lets couples spend more of the weekend with the people they invited."
        ]
      },
      {
        id: "glacier",
        heading: "Keep Glacier National Park in the Plan, Not in Every Plan",
        paragraphs: [
          "Glacier can be the ceremony location, a portrait destination, or a group outing. Each choice creates different permit, access, and transportation needs.",
          "Couples who want a longer celebration can host the wedding at a private venue near Whitefish and plan a separate park experience. Read the Glacier National Park micro wedding guide before deciding."
        ]
      },
      {
        id: "venue",
        heading: "Choose a Whitefish Montana Wedding Venue for the Way You Want to Gather",
        paragraphs: [
          "A hotel or resort may suit couples who want traditional event services. A private ranch wedding venue may suit couples who want more privacy, a quieter group stay, and more time together.",
          "North Star Ranch sits on forty private acres with a five-bedroom chalet, four cabins, and an eight-room lodge. Ask about current availability, ceremony options, and wedding details before planning the rest of the Whitefish trip."
        ]
      }
    ],
    faqs: [
      { question: "Which airport serves Whitefish, Montana?", answer: "Glacier Park International Airport, also called FCA, serves the Whitefish and Kalispell area. North Star Ranch is about twenty-five minutes from the airport." },
      { question: "How far is Whitefish from Glacier National Park?", answer: "Drive time depends on the destination inside the park and current conditions. North Star Ranch is less than forty-five minutes from the park entrance." },
      { question: "Can wedding guests stay together near Whitefish?", answer: "Some venues and retreats offer onsite lodging. Confirm the exact number of rooms, beds, nights, and booking terms before inviting guests." }
    ],
    related: ["glacier-national-park-micro-wedding", "best-time-of-year-for-montana-micro-wedding", "all-inclusive-micro-wedding-packages-montana"]
  },
  {
    slug: "montana-micro-wedding-planning-timeline",
    eyebrow: "Planning Timeline",
    title: "Montana Micro Wedding Planning Timeline",
    seoTitle: "Plan a Montana Micro Wedding Without Missing the Decisions That Control the Trip | North Star Ranch",
    description: "A practical month-by-month timeline for planning a Montana destination micro wedding, from choosing the venue to confirming guest travel.",
    hero: "/images/wedding-canopy.jpg",
    heroAlt: "Wedding canopy at North Star Ranch in Montana",
    readTime: "7 minute read",
    updated: "June 14, 2026",
    quickAnswer: "Start a Montana destination micro wedding about nine to twelve months ahead when guests need travel and lodging. A shorter timeline can work, but book the venue, lodging, and any Glacier National Park permit needs first.",
    sections: [
      {
        id: "timeline",
        heading: "The Planning Timeline at a Glance",
        table: {
          headers: ["When", "Main decisions"],
          rows: [
            ["9 to 12 months", "Guest count, season, venue, lodging, rough budget"],
            ["6 to 9 months", "Photographer, food, reception, ceremony plan, guest travel"],
            ["3 to 6 months", "Invitations, attire, timeline, rentals, activities"],
            ["1 to 3 months", "Final counts, license plan, vendor details, weather backup"],
            ["Final week", "Arrival plan, contacts, payments, printed documents"]
          ]
        }
      },
      {
        id: "first",
        heading: "Book the Montana Wedding Venue and Lodging First",
        paragraphs: [
          "Choose the guest count, season, venue, and lodging before building the smaller details. Those decisions control travel, food, rentals, and how much time guests can spend together.",
          "If Glacier National Park is part of the ceremony, review the current Special Use Permit process early. The park requires exact locations and times, and applications must arrive at least twenty business days before the requested date."
        ],
        bullets: [
          "Decide whether the event is a wedding day or a wedding weekend.",
          "Confirm where guests will sleep before sending invitations.",
          "Ask the venue for current inclusions and outside-vendor rules.",
          "Choose a bad-weather plan while comparing venues."
        ]
      },
      {
        id: "middle",
        heading: "Use the Middle Months to Book Vendors and Protect the Guest Experience",
        paragraphs: [
          "Destination guests need clear travel information sooner than local guests. Give them the airport, lodging plan, arrival window, transportation expectations, and any outdoor clothing needs.",
          "Use this part of the wedding timeline to confirm the photographer, food, reception plan, ceremony details, and any outside vendors. Keep the day-of schedule loose enough for a small group because travel and mountain weather still create delays."
        ]
      },
      {
        id: "final",
        heading: "Confirm the Real Logistics in the Final Month",
        bullets: [
          "Final guest count and sleeping arrangements",
          "Marriage-license appointment and documents",
          "Vendor arrival and property access",
          "Ceremony and dinner timing",
          "Weather backup and guest communication",
          "Who answers questions on the wedding day"
        ],
        paragraphs: [
          "North Star Ranch gives destination couples a private Whitefish base with onsite lodging near the airport and Glacier National Park. Ask about availability early if keeping the group together is central to the plan."
        ]
      }
    ],
    faqs: [
      { question: "How long does it take to plan a micro wedding?", answer: "A local micro wedding can come together quickly. For a Montana destination wedding with guest travel and lodging, nine to twelve months gives the group more options." },
      { question: "When should we book a Montana wedding venue?", answer: "Book after setting the guest count and season. If the venue also controls lodging, reserve it before asking guests to make travel plans." },
      { question: "When should we apply for a Glacier National Park wedding permit?", answer: "Glacier National Park says the application packet and fee must arrive at least twenty business days before the requested date, but applying earlier gives more planning room." }
    ],
    related: ["all-inclusive-micro-wedding-packages-montana", "best-time-of-year-for-montana-micro-wedding", "glacier-national-park-micro-wedding"]
  },
  {
    slug: "best-time-of-year-for-montana-micro-wedding",
    eyebrow: "Seasonal Planning",
    title: "Best Time of Year for a Montana Micro Wedding",
    seoTitle: "Choose the Best Time for a Montana Micro Wedding Without Betting on Perfect Weather | North Star Ranch",
    description: "Compare summer, fall, winter, and spring for a Montana micro wedding near Whitefish and Glacier National Park.",
    hero: "/images/ranch-portrait.jpg",
    heroAlt: "North Star Ranch grounds in Montana",
    readTime: "6 minute read",
    updated: "June 14, 2026",
    quickAnswer: "For the easiest outdoor access near Whitefish and Glacier National Park, choose July through early September. Choose another season when snow, fall color, fewer visitors, or a quieter wedding matters more than predictable road and trail access.",
    sections: [
      {
        id: "compare",
        heading: "Choose a Montana Wedding Season by Its Tradeoff",
        table: {
          headers: ["Season", "Best for", "Plan around"],
          rows: [
            ["Summer", "Outdoor access and long days", "Crowds, heat, smoke, busy roads"],
            ["Early fall", "Cooler days and changing color", "Shorter daylight and early cold"],
            ["Winter", "Snow and a quiet group stay", "Roads, footwear, travel delays"],
            ["Spring", "Privacy and fresh scenery", "Mud, rain, snow, limited park access"]
          ]
        }
      },
      {
        id: "summer",
        heading: "Summer Gives an Outdoor Montana Wedding the Most Options",
        paragraphs: [
          "July through early September is the simplest window for couples who want broad access to Glacier National Park and outdoor wedding plans. Longer daylight also gives more room for a ceremony, dinner, and portraits.",
          "The tradeoff is demand. Guests should book travel and lodging early, and any park plan needs time for traffic, crowds, changing conditions, and possible construction."
        ]
      },
      {
        id: "shoulder",
        heading: "Fall and Spring Reward Flexible Couples",
        paragraphs: [
          "Early fall can bring cooler air, changing color, and fewer summer visitors. It can also bring a sudden cold front or snow, so the indoor or covered backup matters.",
          "Spring feels quiet and green at lower elevations, but mountain access may still be limited. Do not plan a spring wedding around a road or trail that may remain closed."
        ]
      },
      {
        id: "winter",
        heading: "A Winter Wedding Turns the Weekend Into a Group Retreat",
        paragraphs: [
          "A winter wedding in Montana can work well when the group wants snow, warm indoor time, and a slower weekend. Keep the schedule simple and leave room for travel delays.",
          "Onsite lodging becomes especially useful in winter because guests do not need to drive after every gathering. North Star Ranch has a chalet, cabins, and a lodge on its private Whitefish property."
        ]
      },
      {
        id: "decision",
        heading: "Make the Montana Wedding Venue Work in Your Second-Choice Weather",
        paragraphs: [
          "Do not choose a season only from its best photos. Ask what the venue and guest plan look like in rain, smoke, cold, snow, or an unexpected closure.",
          "Once you choose the season, use the Montana micro wedding planning timeline to book the decisions that depend on it."
        ]
      }
    ],
    faqs: [
      { question: "What is the best month for a Montana wedding?", answer: "There is no single best month. July through early September usually gives the easiest outdoor access near Whitefish and Glacier, while other seasons suit couples who value snow, fall color, or fewer visitors." },
      { question: "Can you have a winter micro wedding in Montana?", answer: "Yes. Choose a venue and lodging plan that can handle snow, cold, and travel delays, then keep outdoor portions short and flexible." },
      { question: "When is Going-to-the-Sun Road open?", answer: "Opening and closing dates change with snow, weather, construction, and road conditions. Check Glacier National Park's current conditions rather than planning around a fixed date." }
    ],
    related: ["glacier-national-park-micro-wedding", "montana-micro-wedding-planning-timeline", "whitefish-montana-micro-wedding"]
  }
];

export const guideMap = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
