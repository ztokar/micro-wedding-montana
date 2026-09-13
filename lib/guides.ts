export type GuideResource = {
  name: string;
  note: string;
  phone?: string;
  price?: string;
  url?: string;
};

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  resources?: GuideResource[];
  image?: { src: string; alt: string; caption?: string };
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
  category?: "planning" | "local";
  social?: string;
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
          "Explore the private Montana micro wedding setting at [North Star Ranch](/#contact), then ask for the current package details before comparing it with other options. To see what couples usually spend, read the [Montana micro wedding cost guide](/guides/montana-micro-wedding-cost)."
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
    title: "How to Get Married in Glacier National Park: A Wedding and Elopement Guide",
    seoTitle: "Glacier National Park Wedding Guide: How to Get Married in Glacier, Montana, With Permits and Locations | North Star Ranch",
    description: "Getting married in Glacier Park, Montana, as a park wedding or elopement: the $125 permit, the two-hour limit, guest caps at each wedding location like Lake McDonald and Many Glacier, and where to hold the reception.",
    hero: "/images/glacier-spring.jpg",
    heroAlt: "Glacier National Park mountain landscape near Whitefish Montana",
    readTime: "8 minute read",
    updated: "September 13, 2026",
    quickAnswer: "Every ceremony in Glacier needs a Special Use Permit, even an elopement for two. The application costs $125, the ceremony gets two hours, and each of the park's 32 approved spots has its own guest limit. That runs from 10 people at Big Bend to 250 at Apgar Amphitheater.",
    sections: [
      {
        id: "permit",
        heading: "How the Glacier National Park Wedding Permit Works",
        paragraphs: [
          "Getting married in the park starts with a permit from the Special Park Uses office. You fill out the application, pay the $125 fee, and email the form to glac_sup@nps.gov. The fee is not refundable, and it covers the review, not a promise of a permit.",
          "Timing is where couples get caught. The park takes applications up to one year before the date and recommends applying at least four weeks ahead. It confirms receipt in three to five business days, but the review can take a few months in a busy season. Once the permit arrives, you have 14 days to sign and return it.",
          "Put a second location and date on the form. Each spot allows two permits a day, or four at the amphitheaters, and popular summer dates go early."
        ]
      },
      {
        id: "locations",
        heading: "Wedding Locations in the Park and Their Guest Limits",
        paragraphs: [
          "The limit counts everyone, including the couple, officiant, and photographer. A park staff monitor may be required for groups over 20. These are 14 of the 32 approved locations, from the park's list updated in August 2026."
        ],
        table: {
          headers: ["Area", "Location", "Max people", "Vehicle access"],
          rows: [
            ["Going-to-the-Sun Road west", "Big Bend", "10", "Early July to mid October"],
            ["Lake McDonald", "Apgar Picnic Area Shoreline", "20", "Year-round"],
            ["Lake McDonald", "Lake McDonald Lodge Beach", "30", "Year-round"],
            ["Lake McDonald", "Fish Creek Picnic Area Shoreline", "30", "Late April to late December"],
            ["Lake McDonald", "Apgar Amphitheater", "250", "Year-round"],
            ["Lake McDonald", "Avalanche Amphitheater", "100", "Early May to mid October"],
            ["North Fork", "Bowman Lake Day Use Area", "20", "Mid May to mid October"],
            ["Many Glacier Valley", "Many Glacier Hotel Beach", "20", "Late May to mid October"],
            ["Many Glacier Valley", "Lake Josephine Shoreline", "15", "No vehicle access; 1-mile hike"],
            ["Many Glacier Valley", "Many Glacier Amphitheater", "100", "Late May to mid October"],
            ["St. Mary", "Sun Point", "20", "Early June to mid October"],
            ["St. Mary", "Rising Sun Amphitheater", "100", "Early May to late October"],
            ["St. Mary", "St. Mary Amphitheater", "75", "Year-round"],
            ["Two Medicine", "Two Medicine Amphitheater", "75", "Closed for construction into May 2027"]
          ]
        }
      },
      {
        id: "size",
        heading: "How to Elope in Glacier National Park vs. Planning a Bigger Wedding",
        paragraphs: [
          "Small groups get the most choice. Most shoreline and picnic sites cap at 10 to 30 people, which suits a Glacier National Park elopement with a photographer and an officiant.",
          "A larger wedding has far fewer options. Only the amphitheaters take more than 30 people, and the largest are Apgar at 250 and Fish Creek at 200. Neither is available after 6 pm in June through August or after 5 pm in September, so a summer sunset ceremony there will not work.",
          "Construction also closes sites. The Two Medicine locations are closed into May 2027, and Running Eagle Falls closes after September 7, 2026. Check the park's list before you settle on a date."
        ]
      },
      {
        id: "rules",
        heading: "What You Can Bring to a Park Wedding or Elopement",
        paragraphs: [
          "Think of it as a ceremony you can carry in your hands. The park allows handheld flowers, one carpet up to 6 by 4 feet for the couple to stand on, and chairs only for older guests or accessibility needs. Music is limited to two acoustic instruments or a small approved Bluetooth speaker at 60 decibels or less.",
          "Anything that decorates the site stays home. That means arches, tables, signs, and catered food, plus tossed rice, petals, or confetti. Drones are banned on all National Park Service land, so your elopement photographer will shoot from the ground.",
          "The ceremony is also not private. Other visitors can stay nearby, parking cannot be reserved, and every guest pays the park entrance fee."
        ]
      },
      {
        id: "timeline",
        heading: "A Two-Hour Wedding Day Timeline at a Park Ceremony Location",
        paragraphs: [
          "Your two hours start the moment you arrive, and they end when everyone has left the site. Plan the day backward from the end of the permit, in short blocks.",
          "Give the photographer the location name and guest limit early. A location in the park is fixed by the permit, so portraits happen at that site, on trail, inside the same window."
        ],
        table: {
          headers: ["Part of the permit window", "What happens", "Easy to forget"],
          rows: [
            ["First 20 minutes", "Park, walk in, set out flowers and the small carpet", "Parking cannot be reserved"],
            ["Next 30 minutes", "Ceremony and vows", "Two acoustic instruments at most"],
            ["Next 45 minutes", "Family photos and portraits at the site", "Stay on trail; no drones"],
            ["Last 25 minutes", "Pack up and leave together", "Leave nothing behind, including petals"]
          ]
        }
      },
      {
        id: "cost",
        heading: "What a Glacier National Park Micro Wedding Costs",
        paragraphs: [
          "The park's own charge is small. The permit application is $125, and every guest pays the park entrance fee on top of that.",
          "The rest depends on who you bring and where you stay. One couple on [Reddit](https://www.reddit.com/r/GlacierNationalPark/comments/1gjkd19/wedding_advice/) married at Bowman Lake with a dozen people for $722 total, by staying at a hostel and cooking their own wedding food. Photographers, officiants, lodging, and dinner move that number fast.",
          "For local vendor prices, see the [Montana micro wedding cost guide](/guides/montana-micro-wedding-cost). For published elopement photographer and package prices, see the [Montana elopement guide](/guides/montana-elopement)."
        ]
      },
      {
        id: "timing",
        heading: "Going-to-the-Sun Road, Crowds, Wildlife and Weather",
        paragraphs: [
          "Glacier had 3,136,557 recreation visits in 2025, according to the National Park Service. The park calls June through September peak season and warns that most wedding locations are extremely busy, with little parking during the day.",
          "The two hours include arriving, setting up, the ceremony, photos, and leaving. The permit does not open closed roads, and construction can affect a site without a refund. At Rising Sun, the park warns that the area is often restricted for wildlife activity, and a permit does not allow access during those closures.",
          "Weather is the other wild card, and the park says plainly that no indoor alternatives are provided. One couple who married within the park also warned on [Reddit](https://www.reddit.com/r/GlacierNationalPark/comments/1gjkd19/wedding_advice/) that guests may need a vehicle reservation depending on the area and date, so check current entry rules for your week."
        ]
      },
      {
        id: "rest-of-day",
        heading: "Where the Reception and Destination Wedding Guests Stay in Montana",
        paragraphs: [
          "Because catered food and tables are not allowed at park sites, the dinner, toasts, and guest rooms happen outside Glacier. Most couples pick that place before they pick a ceremony spot, so the drive and the timing work.",
          "The guide to [wedding venues near Glacier National Park](/guides/wedding-venues-near-glacier-national-park) compares options in West Glacier, Coram, East Glacier, and Whitefish. Couples keeping it small should read the license steps in [how to elope in Montana](/guides/montana-elopement).",
          "North Star Ranch is less than 45 minutes from the park entrance, 25 minutes from Glacier Park International Airport, and 8 miles from downtown Whitefish. It is private land with a lawn that looks toward the Glacier mountains, so couples planning a destination wedding can hold the full day there and plan a Glacier day trip for another day. [Ask about dates at North Star Ranch](/#contact)."
        ]
      }
    ],
    faqs: [
      { question: "Do you need a permit for a wedding in Glacier National Park?", answer: "Yes. The park requires a Special Use Permit for every wedding ceremony, elopement, and vow exchange, no matter how small the group." },
      { question: "How much does it cost to get married in Glacier National Park?", answer: "The permit application fee is $125 and is not refundable. Park entrance fees are separate, and every guest pays them." },
      { question: "How far ahead should we apply for a permit?", answer: "The park accepts applications up to one year ahead and recommends at least four weeks. Review can take a few months in busy periods, so apply early for summer dates." },
      { question: "Can we have a reception inside Glacier National Park?", answer: "Not at a permitted ceremony site. Catered food service, tables, and arches are not allowed, so plan the meal at a lodge, restaurant, or private venue outside the park." },
      { question: "Does Glacier National Park check our marriage license?", answer: "No. The park says its office does not verify marriage licenses. A Montana marriage license is valid in any county in the state of Montana." }
    ],
    related: ["wedding-venues-near-glacier-national-park", "montana-elopement", "best-time-of-year-for-montana-micro-wedding"]
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
    updated: "September 13, 2026",
    quickAnswer: "The right small wedding venue in Montana looks full with your real guest count and has a clear answer for where people sleep. Pick the region first. Then ask each venue how it sets up for 20 or 40 people, what happens in bad weather, and how many guests can stay on the property.",
    sections: [
      {
        id: "criteria",
        heading: "Compare Small Wedding Venues in Montana by What Guests Will Feel",
        paragraphs: [
          "Photos get a venue onto the list. What guests feel on the day decides whether it was the right call: the drive in, where they wait between the vows and dinner, and whether there is a warm room when the wind picks up.",
          "Ask every venue the same five things. Where do guests sleep? What exactly is the rain plan? Who else is on the property that day? What does the price leave out? How do people get there from the airport?",
          "Listen for specifics. \"We move dinner into the heated pavilion\" is a plan. A shrug and \"the weather is usually fine\" is not."
        ]
      },
      {
        id: "small-fit",
        heading: "Choose a Montana Wedding Venue That Fits a Small Group",
        paragraphs: [
          "A room set for two hundred can make twenty guests look like they wandered away from a bigger party. Ask for photos of the space set for your number, or have the venue walk you through the ceremony, dinner, and toasts at that size.",
          "Private ranches, lodges, inns, and small outdoor sites usually keep a group closer. They also put more on you. Confirm which vendors can come on site, what the property allows after dark, and where everyone goes if a storm rolls in. Indoor and outdoor space on the same property is the safest setup for a Montana wedding day."
        ]
      },
      {
        id: "venue-types",
        heading: "Compare the Main Types of Small Montana Wedding Venues",
        paragraphs: [
          "Each type trades something away. A ranch gives you privacy and room, a lodge puts beds next to the reception, and a resort handles service but shares its grounds. A public park ceremony gives you the view and very little else."
        ],
        table: {
          headers: ["Venue type", "Often works well for", "Confirm before booking"],
          rows: [
            ["Private ranch", "Privacy, a rustic setting, and a group stay", "Lodging, vendor access, and weather plan"],
            ["Lodge or inn", "Guest rooms close to the reception", "Event spaces, meal rules, and other guests onsite"],
            ["Hotel or resort", "Traditional services and easy guest booking", "Minimums, privacy, and small-group setup"],
            ["Public park ceremony", "A specific outdoor ceremony location", "Permits, time limits, access, and reception plan"]
          ]
        }
      },
      {
        id: "best-places",
        heading: "The Best Places for a Small Wedding in Montana",
        paragraphs: [
          "Settle the region before the venue, because it decides the airport and the drive. Northwest Montana around Whitefish, Kalispell, and Flathead Lake puts Glacier National Park and an airport close together. Southwest Montana around Bozeman and Paradise Valley draws couples who want Yellowstone. Ranch country elsewhere in the state trades convenience for space.",
          "In the northwest, start with the [side-by-side list of Whitefish venues](/guides/whitefish-wedding-venues) or the options for [wedding venues near Glacier National Park](/guides/wedding-venues-near-glacier-national-park). If having everyone under one roof matters most, a private ranch with lodging like [North Star Ranch](/#contact) keeps the wedding and the stay in one place."
        ],
        table: {
          headers: ["Montana region", "Draws couples for", "Good to confirm"],
          rows: [
            ["Whitefish and Flathead Valley", "Glacier National Park, a close airport, lake and mountain settings", "Private venue with onsite lodging"],
            ["Bozeman and Paradise Valley", "Yellowstone access and mountain views", "Guest travel time and lodging"],
            ["Missoula and western valleys", "River settings and easier road access", "Weather backup and privacy"],
            ["Central and eastern ranch country", "Wide-open privacy and lower demand", "Distance from airports and services"]
          ]
        }
      },
      {
        id: "budget",
        heading: "Small Montana Wedding Venues on a Budget",
        paragraphs: [
          "Cutting the guest list is the biggest budget lever you have. Every person you do not invite is one less meal, chair, and place setting.",
          "Watch the starting price, though. A venue that includes lodging, or lets you pick your own caterer, can end up cheaper than a lower rental with a required menu. The [Montana micro wedding cost guide](/guides/montana-micro-wedding-cost) has real local numbers."
        ]
      },
      {
        id: "destination",
        heading: "For a Montana Destination Wedding, Lodging Is a Venue Feature",
        paragraphs: [
          "When guests fly in, the venue shapes the whole trip. Lodging on the property cuts out the nightly drive back to a hotel, makes breakfast easy, and gives you more hours with people you rarely see.",
          "North Star Ranch offers a private 40-acre setting where guests can stay on-site in a five-bedroom chalet, four cabins, and an eight-room lodge. It is eight miles from downtown Whitefish and twenty-five minutes from Glacier Park International Airport. See how other properties handle rooms and buyouts in the guide to [Montana wedding venues with lodging](/guides/montana-wedding-venues-with-lodging)."
        ]
      },
      {
        id: "shortlist",
        heading: "Build a Better Venue Shortlist",
        paragraphs: [
          "Lock your real guest count before you tour anything, and decide early whether keeping guests together matters to you. Those two choices remove half the list.",
          "Then get current inclusions in writing, check the bad-weather plan before you fall for the ceremony view, and map the weekend from the airport to the next morning's breakfast. A video tour set up for your group size tells you more than a gallery.",
          "Put [North Star Ranch](/#contact) on that list if you want a private Montana micro wedding venue with room for your people to stay."
        ]
      }
    ],
    faqs: [
      { question: "What is considered a small wedding?", answer: "There is no legal cutoff. Venues often call anything under about fifty guests a small or micro wedding, and each one draws its own line." },
      { question: "Are small wedding venues cheaper?", answer: "Not always. Lodging, food, rentals, minimums, vendor rules, and rental hours move the final number more than the size of the room." },
      { question: "Should a destination venue include lodging?", answer: "It does not have to. Lodging on the property does make transportation simpler and gives guests more time together, so ask for the room count and booking terms." },
      { question: "Where can we have an intimate wedding or elopement in Montana?", answer: "For two to ten people, a permitted Glacier National Park site, national forest land, or a private venue can all work. For an intimate wedding with your closest friends and family, a ranch or lodge where guests can stay keeps the group together." }
    ],
    related: ["montana-wedding-venues-with-lodging", "whitefish-wedding-venues", "wedding-venues-near-glacier-national-park"]
  },
  {
    slug: "whitefish-montana-micro-wedding",
    eyebrow: "Whitefish Destination Guide",
    title: "Planning a Whitefish, Montana Wedding Weekend: Venue, Lodging and Reception",
    seoTitle: "Whitefish Montana Wedding Weekend: Plan a Micro Wedding Venue and Lodging Your Guests Stay For | North Star Ranch",
    description: "Plan a Whitefish, Montana wedding weekend: choose a wedding venue with lodging, set up the reception and rehearsal dinner, add a day trip to the park, and keep guests in one place.",
    hero: "/images/ranch-hero.jpg",
    heroAlt: "North Star Ranch landscape near Whitefish Montana",
    readTime: "6 minute read",
    updated: "September 13, 2026",
    quickAnswer: "Whitefish turns a small wedding into a trip guests look forward to. The plan that works best is simple. Sleep and celebrate in one place, give the park its own day, and keep the drives short.",
    sections: [
      {
        id: "why-whitefish",
        heading: "Why Whitefish Works for a Montana Micro Wedding",
        paragraphs: [
          "Whitefish gives guests their own reasons to fly to northwest Montana. There are restaurants downtown, [things to do](/guides/things-to-do-in-whitefish-mt-wedding-guests) on the lake and the mountain, and Glacier close by, all with a mountain backdrop for the photos.",
          "It feels remote once you arrive, but the trip in is short. Glacier Park International Airport near Kalispell is twenty-five minutes from North Star Ranch, which sits eight miles outside town. The [travel and lodging guide](/guides/getting-to-whitefish-montana-wedding) covers flights, cars, and hotels."
        ]
      },
      {
        id: "choose-venue",
        heading: "Pick the Type of Whitefish Venue First",
        paragraphs: [
          "Venues here come in a few types, and each one changes the weekend. The Lodge at Whitefish Lake caters the meal and offers rooms, suites, a ballroom, and a lakeside pavilion. Whitefish Mountain Resort adds ski-town views and a weather backup room. Rustic ranches give up that service in exchange for forest, privacy, and space.",
          "Get the package in writing before you compare prices. Around here, a package can mean an empty rental, a rental with a few services, or a rental with beds included. The [Whitefish wedding venues comparison](/guides/whitefish-wedding-venues) lists guest limits, beds, and published prices for ten of them.",
          "If the ceremony, dinner, and sleeping should all happen in one spot, a private ranch is the easiest fit. [North Star Ranch](/#contact) is eight miles from downtown, with on-site lodging for the core group."
        ],
        table: {
          headers: ["Whitefish venue type", "Works well for", "Confirm before booking"],
          rows: [
            ["Downtown event space", "A short walk to restaurants and hotels", "Noise rules, parking, and rental hours"],
            ["Lakeside or resort", "Traditional services and guest rooms onsite", "Minimums, privacy, and small-group setup"],
            ["Mountain resort", "Ski-town views and lift-served photos", "Seasonal access and event minimums"],
            ["Private ranch", "Privacy and a destination group stay", "Lodging, vendor access, and weather plan"]
          ]
        }
      },
      {
        id: "weekend",
        heading: "Plan the Weekend Around One Home Base",
        paragraphs: [
          "Think of it as three days. Friday is arrivals and something easy, like a cookout or a [rehearsal dinner in town](/guides/rehearsal-dinner-whitefish-mt). Saturday is the wedding, with the ceremony and reception in the same place so nobody gets shuttled around in their good clothes. Sunday is a slow breakfast and the airport.",
          "Every extra drive takes time away from people who flew in to see you. When the group sleeps where it celebrates, the late conversations around the fire pit happen without anyone planning them. For hour-by-hour ideas, see these [three-day wedding weekend itineraries](/guides/montana-micro-wedding-itinerary)."
        ]
      },
      {
        id: "glacier",
        heading: "Keep the Park Day Separate From the Wedding Day",
        paragraphs: [
          "Glacier can hold your vows, your portraits, or a group hike. Each one comes with its own permits and driving, and stacking all of them onto the wedding day is how schedules fall apart.",
          "Couples who want a longer celebration can host the wedding at a private venue near Whitefish and plan a separate park outing. Read the [Glacier wedding permit guide](/guides/glacier-national-park-micro-wedding) before deciding, and if it is just the two of you, see [how to elope in Montana](/guides/montana-elopement)."
        ]
      },
      {
        id: "venue",
        heading: "Choose a Whitefish Montana Wedding Venue for the Way You Want to Gather",
        paragraphs: [
          "A hotel or resort suits couples who want a staff running the event. A private ranch suits couples who would rather have the place to themselves and more unscheduled time with guests.",
          "[North Star Ranch](/#contact) sits on forty private acres bordering national forest, with a five-bedroom chalet, four cabins, and an eight-room lodge. Ask about current availability, ceremony options, and wedding details."
        ]
      }
    ],
    faqs: [
      { question: "Which airport serves Whitefish, Montana?", answer: "Glacier Park International Airport, also called FCA, serves the Whitefish and Kalispell area. North Star Ranch is about twenty-five minutes from the airport." },
      { question: "How far is Whitefish from Glacier National Park?", answer: "It depends on where in the park you are headed and the traffic that day. North Star Ranch is less than forty-five minutes from the park entrance." },
      { question: "Can wedding guests stay together near Whitefish?", answer: "Yes, at venues and retreats with lodging on the property. Before inviting anyone, confirm the number of rooms, beds, nights, and booking terms." }
    ],
    related: ["whitefish-wedding-venues", "montana-wedding-venues-with-lodging", "rehearsal-dinner-whitefish-mt"]
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
          "[North Star Ranch](/#contact) gives destination couples a private Whitefish base with onsite lodging near the airport and Glacier National Park. Ask about availability early if keeping the group together is central to the plan, then map the days with a [wedding weekend itinerary](/guides/montana-micro-wedding-itinerary)."
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
          "Onsite lodging becomes especially useful in winter because guests do not need to drive after every gathering. [North Star Ranch](/#contact) has a chalet, cabins, and a lodge on its private Whitefish property. Fill the days between events with [things to do around Whitefish](/guides/things-to-do-in-whitefish-mt-wedding-guests)."
        ]
      },
      {
        id: "decision",
        heading: "Make the Montana Wedding Venue Work in Your Second-Choice Weather",
        paragraphs: [
          "Do not choose a season only from its best photos. Ask what the venue and guest plan look like in rain, smoke, cold, snow, or an unexpected closure.",
          "Once you choose the season, use the [Montana micro wedding planning timeline](/guides/montana-micro-wedding-planning-timeline) to book the decisions that depend on it, then map the days with a [wedding weekend itinerary](/guides/montana-micro-wedding-itinerary)."
        ]
      }
    ],
    faqs: [
      { question: "What is the best month for a Montana wedding?", answer: "There is no single best month. July through early September usually gives the easiest outdoor access near Whitefish and Glacier, while other seasons suit couples who value snow, fall color, or fewer visitors." },
      { question: "Can you have a winter micro wedding in Montana?", answer: "Yes. Choose a venue and lodging plan that can handle snow, cold, and travel delays, then keep outdoor portions short and flexible." },
      { question: "When is Going-to-the-Sun Road open?", answer: "Opening and closing dates change with snow, weather, construction, and road conditions. Check Glacier National Park's current conditions rather than planning around a fixed date." }
    ],
    related: ["glacier-national-park-micro-wedding", "montana-micro-wedding-planning-timeline", "whitefish-montana-micro-wedding"]
  },
  {
    slug: "things-to-do-in-whitefish-mt-wedding-guests",
    eyebrow: "Whitefish Local Guide",
    title: "Things to Do in Whitefish, MT for Wedding Guests",
    seoTitle: "Things to Do in Whitefish, MT That Keep Wedding Guests Happy Between Events | North Star Ranch",
    description: "What wedding guests can do around Whitefish, Montana between the welcome night and the ceremony, from fly fishing and the mountain resort to golf, trails, and winter dog sledding.",
    hero: "/images/glacier-spring.jpg",
    heroAlt: "Mountain landscape near Whitefish Montana",
    readTime: "7 minute read",
    updated: "July 15, 2026",
    social: "/social/guides.jpg",
    category: "local",
    quickAnswer: "Whitefish gives wedding guests plenty to do between events. In summer they can fly fish, ride the lift and alpine slide at Whitefish Mountain Resort, hike the Whitefish Trail, golf, or ride horses. In winter the draw is snow, dog sledding, and slower days at the ranch.",
    sections: [
      {
        id: "summer",
        heading: "Summer Activities for Wedding Guests Near Whitefish",
        paragraphs: [
          "Summer is the busiest season for guest activities. Most trips run in the morning, so a guest can be back at the ranch before an afternoon ceremony.",
          "Book anything guided a few weeks ahead in July and August. These are the most-requested weeks of the year, and prices change with the season."
        ],
        resources: [
          { name: "Lakestream Fly Shop", note: "Guided fly fishing on the Flathead River and nearby waters. Half and full-day trips.", phone: "(406) 862-1298", price: "Half day from $495 (summer 2026)", url: "https://www.lakestreamflyshop.com/guided-trips" },
          { name: "Whitefish Mountain Resort", note: "Scenic lift rides, the alpine slide, a zip line tour, and an aerial adventure park at the summit.", phone: "(406) 862-2900", price: "Alpine slide from $14, lift from $34 (summer 2026)", url: "https://skiwhitefish.com/" },
          { name: "The Whitefish Trail", note: "A free non-motorized trail network for hiking, running, and biking around town. Managed by Whitefish Legacy Partners.", phone: "(406) 862-3880", price: "Free", url: "https://www.whitefishlegacy.org/maps-conditions" },
          { name: "Whitefish Lake Golf Club", note: "A 36-hole public golf club minutes from downtown.", phone: "Tee times (406) 862-4000", price: "18 holes from $100 (2026 rates)", url: "https://golfwhitefish.com/rates/" },
          { name: "The Bar W Guest Ranch", note: "Two-hour guided horseback trail rides west of Whitefish.", phone: "(406) 863-9099", price: "$130 per guest plus fees (summer 2026)", url: "https://thebarw.com/public-rides/2-hour-trail-rides" },
          { name: "Sea Me Paddle", note: "Kayak and paddleboard rentals at Whitefish Lake State Park.", phone: "(406) 885-7882", price: "Call for current rates", url: "https://tourglacier.com/whitefish-lake-state-park-rentals/" }
        ]
      },
      {
        id: "non-hikers",
        heading: "Options for Guests Who Do Not Want to Hike",
        paragraphs: [
          "Not every guest wants a long trail. The Danny On Trail runs 3.8 miles from the resort base to the summit, but guests can ride the lift one way and walk the other, or ride both ways for the view alone.",
          "Golf, a fly-fishing float, a lake paddle, or a slow morning in downtown Whitefish all work for guests who would rather skip the climb. Plan one low-effort option so no one feels left out."
        ]
      },
      {
        id: "winter",
        heading: "Winter Activities for a Cold-Season Wedding",
        paragraphs: [
          "A winter wedding changes the activity list. Snow, skiing at the resort, and quiet time indoors become the draw.",
          "Dog sledding is the standout winter trip near Whitefish. It runs only in the cold months, so it fits a December-through-March wedding, not a summer one."
        ],
        resources: [
          { name: "Dog Sled Adventures", note: "Dog sled tours behind a team of Alaskan huskies, about 20 minutes north in Olney. Winter season only, December through March.", phone: "(406) 881-2275", price: "Adults $200, children $100 (winter 2026)", url: "https://dogsledadventuresmontana.com/" }
        ]
      },
      {
        id: "hot-springs",
        heading: "An Honest Note on Hot Springs",
        paragraphs: [
          "There is no hot springs close to Whitefish. The nearest developed hot springs sit about 80 miles away, roughly an hour and a half by car.",
          "If a soak matters to your group, plan it as its own day trip rather than a quick add-on between wedding events."
        ]
      },
      {
        id: "fit",
        heading: "Build the Activities Around One Home Base",
        paragraphs: [
          "The easier the base, the more guests actually do. When lodging, meals, and the ceremony sit in one place, a morning trip does not turn into an all-day event.",
          "[North Star Ranch](/#contact) gives a destination group that base, eight miles from downtown Whitefish. Fit the trips into a [wedding weekend itinerary](/guides/montana-micro-wedding-itinerary), and plan a [rehearsal dinner in Whitefish](/guides/rehearsal-dinner-whitefish-mt) for the group. Guests still deciding where to marry can read the [Whitefish micro wedding venue guide](/guides/whitefish-montana-micro-wedding)."
        ]
      }
    ],
    faqs: [
      { question: "What can wedding guests do in Whitefish, Montana?", answer: "In summer, guests can fly fish, ride the lift and alpine slide at Whitefish Mountain Resort, hike the Whitefish Trail, golf, paddle Whitefish Lake, or ride horses. In winter, the draw is skiing and dog sledding." },
      { question: "Are there activities for guests who cannot hike?", answer: "Yes. Golf, a fly-fishing float, a lake paddle, a scenic lift ride, and downtown Whitefish all work without a long trail. Plan at least one low-effort option for the group." },
      { question: "Is there a hot springs near Whitefish?", answer: "No hot springs is close to Whitefish. The nearest developed hot springs are about 80 miles away, roughly an hour and a half by car, so treat it as a separate day trip." }
    ],
    related: ["montana-micro-wedding-itinerary", "rehearsal-dinner-whitefish-mt", "getting-to-whitefish-montana-wedding"]
  },
  {
    slug: "rehearsal-dinner-whitefish-mt",
    eyebrow: "Whitefish Local Guide",
    title: "Where to Host a Rehearsal Dinner in Whitefish, MT",
    seoTitle: "Where to Host a Rehearsal Dinner in Whitefish, MT Without the Whole Group Scattering | North Star Ranch",
    description: "Restaurants, breweries, and caterers for a rehearsal dinner or group meal in Whitefish, Montana, plus how to bring the dinner to a private ranch.",
    hero: "/images/ranch-portrait.jpg",
    heroAlt: "North Star Ranch grounds near Whitefish Montana",
    readTime: "6 minute read",
    updated: "July 15, 2026",
    social: "/social/guides.jpg",
    category: "local",
    quickAnswer: "Whitefish has several restaurants that can seat a wedding group for a rehearsal dinner, plus caterers who will bring the meal to a private venue. Call ahead, because most places do not publish private-room details and the best dates book early.",
    sections: [
      {
        id: "restaurants",
        heading: "Restaurants for a Rehearsal Dinner or Group Meal",
        paragraphs: [
          "A few downtown Whitefish restaurants regularly host wedding groups. Most do not list private-room sizes online, so call and ask about a private area, a set menu, and a deposit.",
          "The places below sit within a short walk of each other in downtown Whitefish, which makes them easy for guests staying nearby."
        ],
        resources: [
          { name: "Herb & Omni", note: "Farm-to-table restaurant at 101 Central that hosts private events, from small groups to large parties. Ask about the event spaces in the building.", phone: "(406) 862-8150", url: "https://www.herbandomni.com/host-an-event/" },
          { name: "Abruzzo Italian Kitchen", note: "Handmade pasta and wood-fired pizza. The kitchen takes reservations for parties larger than six by phone.", phone: "(406) 730-8767", url: "https://www.abruzzoitaliankitchen.com/dining-room" },
          { name: "Tupelo Grille", note: "Southern-inspired dining on Central Avenue with a full wine and bourbon list. Call to confirm group seating.", phone: "(406) 862-6136", url: "https://www.tupelogrille.com/dining-room" },
          { name: "Whitefish Lake Restaurant", note: "A historic clubhouse steakhouse north of downtown. Call to confirm group and private dining.", phone: "(406) 862-5285", url: "https://www.whitefishlakerestaurant.com/" },
          { name: "Ciao Mambo (Mambo Whitefish)", note: "Italian-American with house-made pasta. The restaurant group hosts events, so ask the Whitefish location about a group booking.", phone: "(406) 863-9600", url: "https://mambowhitefish.com/" },
          { name: "Craggy Range Bar & Grill", note: "An American gastropub on Central Avenue that works for a casual group night. Call to confirm seating for the party.", phone: "(406) 862-7550", url: "https://www.thecraggyrange.com/contact/" }
        ]
      },
      {
        id: "welcome-night",
        heading: "A Welcome Night at a Brewery or Distillery",
        paragraphs: [
          "A brewery makes an easy first night when guests arrive at different times. There is no set menu to run, and people can come and go.",
          "Whitefish has a small cluster of taprooms and a distillery within a few blocks of downtown."
        ],
        resources: [
          { name: "Bonsai Brewing Project", note: "Craft brewery with a kitchen, taproom, and outdoor beer garden. Call to ask about hosting a group.", phone: "(406) 730-1717", url: "https://bonsaibrewery.com/" },
          { name: "Blackstar Restaurant & Brewery", note: "Downtown brewery and restaurant that takes private-event requests through its site.", url: "https://www.blackstarmt.com/private-events" },
          { name: "Great Northern Bar & Grill", note: "A downtown bar and grill at 27 Central Avenue for a relaxed welcome night.", phone: "(406) 862-2816", url: "https://greatnorthernbar.com/contact/" },
          { name: "Spotted Bear Spirits", note: "A craft distillery and tasting room near the railway. Call to ask about a group tasting.", phone: "(406) 730-2436", url: "https://www.spottedbearspirits.com/" }
        ]
      },
      {
        id: "morning-after",
        heading: "Breakfast and Coffee the Morning After",
        paragraphs: [
          "Give guests one easy breakfast plan before they head to the airport. A named cafe keeps everyone from wandering."
        ],
        resources: [
          { name: "Loula's Cafe", note: "Downtown breakfast and brunch spot known for pie. Call ahead for a large party.", phone: "(406) 862-5614", url: "https://loulaswhitefish.com/" },
          { name: "Buffalo Cafe & Nightly Grill", note: "A longtime Whitefish breakfast diner. Call to confirm large-party seating.", phone: "(406) 862-2833", url: "https://www.buffalocafewhitefish.com/" },
          { name: "Montana Coffee Traders", note: "A downtown coffee roastery and cafe for a quick morning coffee run.", phone: "(406) 862-7667", url: "https://coffeetraders.com/pages/downtown-whitefish" }
        ]
      },
      {
        id: "at-the-ranch",
        heading: "Bring the Dinner to the Ranch",
        paragraphs: [
          "A private venue lets you skip the restaurant entirely. Local caterers will set up and serve at an outside property, which keeps the whole group in one place.",
          "This works well the night before the wedding, when guests are already staying onsite and no one wants to drive."
        ],
        resources: [
          { name: "Great Northwest Catering", note: "Full-service Whitefish caterer that serves weddings and private events at outside venues.", phone: "(406) 407-4263", url: "https://www.greatnorthwestcatering.com/" },
          { name: "Hellroaring Saloon & Eatery", note: "Offers off-site bar and food catering most of the year, except ski season from December through March.", phone: "(406) 862-6364", url: "https://hellroaringwhitefish.com/catering/" }
        ]
      },
      {
        id: "fit",
        heading: "Keep the Group Together for the Meals That Matter",
        paragraphs: [
          "The rehearsal dinner and welcome night set the tone for the weekend. They are easier when guests are not spread across town.",
          "[North Star Ranch](/#contact) keeps a destination group on one private property near downtown Whitefish, so a catered dinner or a short drive into town both work. Pair the meals with a [wedding weekend itinerary](/guides/montana-micro-wedding-itinerary) and a list of [local wedding vendors](/guides/whitefish-montana-wedding-vendors) for the cake and the rest."
        ]
      }
    ],
    faqs: [
      { question: "Where can you host a rehearsal dinner in Whitefish, MT?", answer: "Several downtown Whitefish restaurants seat wedding groups, including Herb & Omni, Abruzzo Italian Kitchen, and Tupelo Grille. Most do not publish private-room details, so call ahead to confirm a private area and a set menu." },
      { question: "Can we cater a dinner at a private venue near Whitefish?", answer: "Yes. Local caterers such as Great Northwest Catering serve weddings and private events at outside venues, so you can host the dinner at the ranch instead of a restaurant." },
      { question: "What is a good welcome-night spot for wedding guests?", answer: "A brewery or taproom works well when guests arrive at different times. Whitefish has several downtown, including Bonsai Brewing Project and Spotted Bear Spirits, within a few blocks of each other." }
    ],
    related: ["montana-micro-wedding-itinerary", "whitefish-montana-wedding-vendors", "things-to-do-in-whitefish-mt-wedding-guests"]
  },
  {
    slug: "whitefish-montana-wedding-vendors",
    eyebrow: "Whitefish Local Guide",
    title: "Whitefish, Montana Wedding Vendors",
    seoTitle: "Whitefish, Montana Wedding Vendors: Who to Call for a Micro Wedding | North Star Ranch",
    description: "A practical starting point for finding Whitefish wedding vendors, from catering and photography to bridal shops, florals, beauty, officiants, and cake.",
    hero: "/images/ranch-wedding.jpg",
    heroAlt: "Outdoor wedding gathering at North Star Ranch near Whitefish Montana",
    readTime: "6 minute read",
    updated: "August 3, 2026",
    social: "/social/guides.jpg",
    category: "local",
    quickAnswer: "Couples at North Star Ranch choose and contract their own vendors. Start with catering, photography and film, and attire because those decisions affect the schedule and budget. Whitefish and nearby Kalispell also have florists, beauty artists, officiants, and cake bakers who work across the Flathead Valley.",
    sections: [
      {
        id: "start",
        heading: "Start With the Vendors That Shape the Weekend",
        paragraphs: [
          "A destination micro wedding has fewer vendors than a large reception, but the first calls still matter. Use the [Whitefish catering guide](/guides/whitefish-mt-wedding-catering) to compare off-site service, staffing, rentals, and cleanup before comparing menus.",
          "Then decide whether you want one photo-and-film team or separate specialists. The [Whitefish photographers and videographers guide](/guides/whitefish-montana-wedding-photographers-videographers) explains the tradeoff and the deliverables to put in writing.",
          "If a planning trip includes attire, the [wedding dress shops near Whitefish guide](/guides/wedding-dress-shops-whitefish-mt) covers the two full-service Kalispell boutiques we could verify."
        ],
        bullets: [
          "Confirm that each vendor travels to the venue address.",
          "Put arrival, setup, service, and departure times in the contract.",
          "Name the person responsible for rentals, cleanup, and weather changes."
        ]
      },
      {
        id: "florals",
        heading: "Florists and Bridal Beauty",
        paragraphs: [
          "Whitefish and Kalispell florists and beauty artists serve weddings across the Flathead Valley. Ask whether the quote includes travel, onsite setup, touch-ups, bouquet delivery, and removal of floral installations."
        ],
        resources: [
          { name: "Flathead Farmworks", note: "Wedding floral design using seasonal, locally grown flowers. Based in Kalispell.", url: "https://www.flatheadfarmworks.com/weddings-and-events" },
          { name: "The Bloomist", note: "Bouquets and wearable florals serving the Flathead Valley, Whitefish, and Glacier National Park.", url: "https://www.thebloomistmt.com/" },
          { name: "Majestic Mountain Beauty", note: "Wedding hair and makeup team that travels to you, based in Whitefish.", phone: "(406) 926-0190", url: "https://www.majesticmountainbeauty.com/" },
          { name: "Project Lex", note: "Bridal hair and makeup serving Whitefish and Glacier National Park, based in Kalispell.", phone: "(406) 471-7444", url: "https://www.projectlexmua.com/" }
        ]
      },
      {
        id: "officiants",
        heading: "Officiants and the Marriage License",
        paragraphs: [
          "Montana requires a marriage license. Confirm the current application steps, fee, identification rules, and office hours with the Flathead County Clerk of District Court before the trip.",
          "An officiant is a separate booking. Ask how the ceremony is written, how many planning calls are included, and whether rehearsal attendance costs extra."
        ],
        resources: [
          { name: "Bespoke Ceremonies Montana", note: "Custom wedding ceremonies across Whitefish, Bigfork, Flathead Lake, and Glacier National Park.", url: "https://bespokeceremoniesmontana.com/details" },
          { name: "406 Officiant", note: "Custom ceremonies from a Flathead Valley officiant who grew up in the area.", url: "https://www.406officiant.com/about-me" }
        ]
      },
      {
        id: "cake",
        heading: "Wedding Cake in Whitefish and Kalispell",
        paragraphs: [
          "Whitefish has custom cake bakers, with more options in Kalispell. Ask about tasting dates, delivery, setup, dietary needs, display-time limits, and whether the bakery supplies a stand or cutting instructions."
        ],
        resources: [
          { name: "Montana Wildflour", note: "Custom wedding cakes made to order in Whitefish.", url: "https://www.montanawildflour.com/about-us" },
          { name: "The Cake Girl", note: "Whitefish wedding cakes with gluten-free, dairy-free, and vegan options.", url: "https://www.thecakegirlwhitefish.com/about" },
          { name: "Cakes By Debi", note: "Custom wedding cake design in Kalispell.", phone: "(406) 250-0129", url: "https://cakesbydebi.com/about-us/" }
        ]
      },
      {
        id: "fit",
        heading: "How Vendors Work With a Private Ranch",
        paragraphs: [
          "North Star Ranch is a private 40-acre venue eight miles from downtown Whitefish. Lodging across a chalet, four cabins, and an eight-room lodge lets the couple and close guests use one home base, while each vendor remains a separate contract.",
          "Send vendors the ranch address before requesting a quote. Ask [North Star Ranch](/#contact) about the property and your dates, compare a [rehearsal dinner in Whitefish](/guides/rehearsal-dinner-whitefish-mt), and build a working budget with the [Montana micro wedding cost guide](/guides/montana-micro-wedding-cost)."
        ]
      }
    ],
    faqs: [
      { question: "Does North Star Ranch provide wedding vendors?", answer: "No. North Star Ranch is the private venue and lodging base. Couples choose and contract their own caterer, photographer, videographer, florist, beauty team, officiant, and baker." },
      { question: "Should destination couples hire Whitefish or Kalispell vendors?", answer: "Either can work. The practical test is whether the vendor serves the ranch address, includes travel in the quote, and can meet the arrival and setup schedule." },
      { question: "Which wedding vendors should we book first?", answer: "Start with the vendors that control the largest parts of the day: catering, photography or film, and any attire appointment tied to a planning trip. Florals, beauty, cake, and ceremony details can follow once the date and schedule are firm." }
    ],
    related: ["wedding-dress-shops-whitefish-mt", "whitefish-mt-wedding-catering", "whitefish-montana-wedding-photographers-videographers"]
  },
  {
    slug: "wedding-dress-shops-whitefish-mt",
    eyebrow: "Whitefish Bridal Guide",
    title: "Wedding Dress Shops Near Whitefish, MT",
    seoTitle: "Wedding Dress Shops Near Whitefish, MT: Two Verified Bridal Boutiques | North Star Ranch",
    description: "Two verified bridal boutiques near Whitefish, what each offers, and how to plan a Kalispell dress appointment during a Montana wedding trip.",
    hero: "/images/whitefish-wedding-dress-shops.jpg",
    heroAlt: "Wedding dress displayed in a quiet Montana bridal atelier",
    readTime: "5 minute read",
    updated: "August 3, 2026",
    category: "local",
    quickAnswer: "The nearest full-service dress shops we could confirm are in Kalispell, not Whitefish. Mimi's Bridal and Hannah Jane Couture both use appointments. Call before traveling and ask which gowns and sample sizes will be available for your visit.",
    sections: [
      {
        id: "options",
        heading: "Two Bridal Shops Near Whitefish",
        paragraphs: [
          "We checked current local listings on August 3, 2026 and couldn't confirm a full-service bridal shop in Whitefish itself. The two nearby shops below are in Kalispell, so allow for that drive when planning the day.",
          "Mimi's Bridal is at 217 South Main Street. Its current designer list includes Morilee, Stella York, All Who Wander, La Perle, and several Mon Cheri lines. The store also carries mother-of-the-bride attire and men's suits.",
          "Hannah Jane Couture offers private one-on-one appointments, designer gowns, and custom work. If you want changes to a gown, find out what the shop handles and whether another alteration specialist will be involved."
        ],
        resources: [
          { name: "Mimi's Bridal", note: "Designer wedding dresses at 217 South Main Street in Kalispell, plus mother-of-the-bride attire and men's suits.", phone: "(406) 257-4684", url: "https://www.mimisbridalmontana.com/" },
          { name: "Hannah Jane Couture", note: "A Kalispell boutique offering designer gowns, custom options, and private one-on-one bridal appointments.", phone: "(406) 250-2697", url: "https://www.hannahjanecouture.com/" }
        ]
      },
      {
        id: "appointment",
        heading: "Check the Samples and the Calendar Before You Go",
        paragraphs: [
          "A shop can carry a designer without having every dress or size on the floor. Send two or three silhouettes you like and ask the stylist which samples can be tried during your appointment.",
          "Give the shop your wedding month and Montana travel dates. Ask when the dress would arrive, how many fittings it may need, and when it must be picked up. If the timing doesn't work, ask what can be bought off the rack.",
          "Get the deposit, cancellation, shipping, pickup, and alteration terms in writing. When another specialist will alter the gown, call that person before paying the dress deposit."
        ]
      },
      {
        id: "venue-fit",
        heading: "Bring the Ranch Into the Fitting Room",
        paragraphs: [
          "Keep a few ranch photos on your phone. A skirt that feels easy on a salon platform can drag on grass or catch on gravel. A long train also has to move between lodging, the ceremony, and dinner.",
          "Bring shoes close to the heel height you'll wear. Take a short video when the stylist shows how the bustle works, and share it with the person helping on the wedding day. Time an overskirt or second-look change before placing it between photos and dinner."
        ]
      },
      {
        id: "planning-trip",
        heading: "Fit One Dress Appointment Into the Planning Trip",
        paragraphs: [
          "North Star Ranch is eight miles from downtown Whitefish and about 25 minutes from Glacier Park International Airport. A ranch visit and one Kalispell salon appointment can fit on the same day.",
          "Confirm the ranch visit first, then place the salon around it. Leave time for the drive, a meal, and notes before another vendor call. The [Whitefish wedding vendor guide](/guides/whitefish-montana-wedding-vendors) covers those calls, while the [wedding weekend itinerary](/guides/montana-micro-wedding-itinerary) handles guest plans. [Ask North Star Ranch about available dates](/#contact) before booking flights."
        ]
      }
    ],
    faqs: [
      { question: "Are there wedding dress shops in Whitefish, Montana?", answer: "We couldn't confirm a full-service bridal boutique in Whitefish during our August 2026 review. The nearby shops we could verify are Mimi's Bridal and Hannah Jane Couture in Kalispell." },
      { question: "Do I need an appointment at a Kalispell bridal shop?", answer: "Yes. Booking ahead also gives the stylist time to check the sample sizes, silhouettes, and designers you want to see." },
      { question: "How early should I shop for a wedding dress?", answer: "Ask the boutique to work backward from your wedding month and travel dates. Order and alteration times depend on the gown. If time is short, ask about off-the-rack choices before the appointment." },
      { question: "Can I combine dress shopping with a North Star Ranch visit?", answer: "Yes. Confirm the ranch visit first and book one salon appointment. Leaving real driving time between Kalispell and Whitefish makes the day much easier to use." }
    ],
    related: ["whitefish-montana-wedding-vendors", "montana-micro-wedding-itinerary", "whitefish-montana-micro-wedding"]
  },
  {
    slug: "whitefish-mt-wedding-catering",
    eyebrow: "Whitefish Catering Guide",
    title: "Whitefish, MT Wedding Catering for a Private Venue",
    seoTitle: "Whitefish, MT Wedding Catering: Four Off-Site Options and What to Ask | North Star Ranch",
    description: "Compare four Whitefish and Flathead Valley wedding caterers by service style, then use the quote checklist for a private ranch wedding.",
    hero: "/images/whitefish-wedding-catering.jpg",
    heroAlt: "Intimate catered wedding table in a Western Montana ranch setting",
    readTime: "6 minute read",
    updated: "August 3, 2026",
    category: "local",
    quickAnswer: "Before you compare menus, decide who is still working after dinner lands on the table. A caterer may cook the food without supplying servers, dishes, bar staff, cleanup, or trash removal. Get those jobs into the quote. Otherwise the cheaper menu can leave the couple or their guests running dinner.",
    sections: [
      {
        id: "service",
        heading: "The Meal Is More Than the Food",
        paragraphs: [
          "Drop-off can work well for a casual micro wedding, but it is exactly what it sounds like: food arrives and the staff may leave. Someone still has to keep it warm, set out serving pieces, clear dishes, pack leftovers, and deal with trash.",
          "A staffed buffet keeps those jobs with the caterer. A plated dinner adds more labor and timing. A private chef may be a good fit for a very small group, though the chef will need to know what kitchen space and equipment are available.",
          "Menu style doesn't settle the question. A plated quote can leave out rentals, and a BBQ team can provide full event service. Read the labor line before the entrée list."
        ]
      },
      {
        id: "options",
        heading: "Four Caterers to Contact Near Whitefish",
        paragraphs: [
          "These four businesses publicly advertise weddings or off-site events in Whitefish and the Flathead Valley. The list isn't a ranking. It gives you four different service styles to call about for the ranch address."
        ],
        resources: [
          { name: "Great Northwest Catering", note: "Whitefish caterer for weddings, private events, and custom menus, including private-chef service.", phone: "(406) 407-4263", url: "https://www.greatnorthwestcatering.com/" },
          { name: "Piggyback BBQ", note: "Full-service wedding and event BBQ with tastings at its Whitefish storefront.", phone: "(406) 863-9895", url: "https://piggybackbbq.com/full-service-catering" },
          { name: "Hellroaring Saloon & Eatery", note: "Off-site food and bar catering outside its December through March ski-season pause.", phone: "(406) 862-6364", url: "https://hellroaringwhitefish.com/catering/" },
          { name: "Farmer Meets Foodie", note: "Flathead Valley full-service plated, family-style, and buffet meals, plus a separate drop-off service.", url: "https://www.farmermeetsfoodiemt.com/wedding-event-catering" }
        ]
      },
      {
        id: "quote",
        heading: "Send the Same Short Email to Every Caterer",
        paragraphs: [
          "Start the email with the date, estimated guest count, meal time, and 355 Beaver Lake Road address. Say whether you picture plated food, family-style dishes, a buffet, BBQ, or simple delivery. Add dietary needs and whether alcohol will be served.",
          "Then ask who arrives onsite and when. You need to know about cooks, servers, bartenders, dishes, linens, tables, water, power, cleanup, trash, and leftovers. Travel, gratuity, and service charges should appear as numbers, not surprises after the menu price.",
          "Send that same note to each company. When the replies come back, mark the jobs that are missing instead of trying to compare four different sales proposals from memory."
        ]
      },
      {
        id: "ranch-fit",
        heading: "How Catering Fits a North Star Ranch Weekend",
        paragraphs: [
          "North Star Ranch is the private venue and lodging base, not the catering company. It sits eight miles from downtown Whitefish, so close family and friends can stay together while the food team works under its own contract.",
          "Share the setup plan with the ranch before paying the catering deposit. For the rest of the weekend, compare a [rehearsal dinner in Whitefish](/guides/rehearsal-dinner-whitefish-mt), review the wider [Whitefish vendor guide](/guides/whitefish-montana-wedding-vendors), and [check ranch availability](/#contact)."
        ]
      }
    ],
    faqs: [
      { question: "Does North Star Ranch include wedding catering?", answer: "No. Couples hire the food team directly. North Star Ranch is the private venue and onsite lodging base." },
      { question: "Which Whitefish caterers work at outside venues?", answer: "Great Northwest Catering, Piggyback BBQ, Hellroaring, and Farmer Meets Foodie all advertise weddings or off-site events. Availability and travel rules can change, so send the ranch address with the first message." },
      { question: "Is drop-off catering enough for a micro wedding?", answer: "It can be, but give the remaining jobs to named people before the day begins. If no friend or family member should warm food, clear dishes, and handle trash, pay for staff to stay." }
    ],
    related: ["whitefish-montana-wedding-vendors", "rehearsal-dinner-whitefish-mt", "montana-micro-wedding-cost"]
  },
  {
    slug: "whitefish-montana-wedding-photographers-videographers",
    eyebrow: "Whitefish Photo and Film Guide",
    title: "Whitefish, Montana Wedding Photographers and Videographers",
    seoTitle: "Whitefish, Montana Wedding Photographers and Videographers: How to Choose | North Star Ranch",
    description: "Decide between one combined photo-and-film team and separate specialists, then compare four verified Whitefish and Montana options.",
    hero: "/images/whitefish-wedding-photo-video.jpg",
    heroAlt: "Wedding photography and film cameras prepared for a Montana ranch ceremony",
    readTime: "6 minute read",
    updated: "August 3, 2026",
    category: "local",
    quickAnswer: "Start with what you want to keep. Photos preserve single frames. Film keeps voices and movement. A short highlight won't replace a full ceremony if hearing the vows matters to you. Write down the files you want, then decide whether one team or two specialists should make them.",
    sections: [
      {
        id: "team",
        heading: "Choose the Files Before the Camera Team",
        paragraphs: [
          "Make two plain lists. On the photo side, note the family groups, portraits, candid moments, film images, and print rights you care about. On the video side, decide whether you want clean vows, full speeches, the complete ceremony, a short wedding film, raw footage, or Super 8.",
          "A combined team gives you one timeline and people who already know how to share the aisle. Separate companies give you more freedom to pair a still-photo style with a different kind of film. If you hire two companies, introduce them before the day so they can sort out ceremony positions."
        ]
      },
      {
        id: "options",
        heading: "Whitefish Wedding Photography and Videography Options",
        paragraphs: [
          "The four businesses below serve Whitefish, Glacier, or the surrounding Montana market. They cover a combined team, two photo approaches, and a film specialist. This isn't a quality ranking. Open a full gallery or complete wedding film before judging anyone by a social clip."
        ],
        resources: [
          { name: "Something Bleuu", note: "A Kalispell-based photography and cinematography duo offering digital, film, Polaroid, Super 8, and content creation.", url: "https://www.brookestonely.com/" },
          { name: "Sarai Ester Photography", note: "A Whitefish-based wedding and elopement photographer working with digital and medium-format film.", url: "https://www.saraiesterphoto.com/" },
          { name: "Mountain Life Photography", note: "Whitefish and Glacier wedding photography, with local destination and outdoor experience.", url: "https://www.mountainlifephotography.com/weddings" },
          { name: "Hyline Media", note: "A Montana wedding videographer serving Whitefish and other destinations across the state.", url: "https://hylinemedia.com/" }
        ]
      },
      {
        id: "scope",
        heading: "Read the Contract With the Final Files in Mind",
        paragraphs: [
          "A photographer's full gallery tells you more than the home page. Look for family groups, midday sun, a dim dinner, and bad weather. The contract should state the hours, number of photographers, film costs, print rights, delivery window, and what happens if a camera fails.",
          "For video, read the audio plan. Vows and speeches need microphones, not only music laid over pretty clips. Check whether the final package includes the full ceremony, how long the highlight runs, and whether raw footage costs extra.",
          "Drone footage is a bonus. Weather, airspace, and property rules can stop a flight, so don't let the drone be the only plan for an important view."
        ]
      },
      {
        id: "ranch",
        heading: "Keep Most of the Wedding Day on One Property",
        paragraphs: [
          "North Star Ranch has 40 private acres and lodging across a chalet, four cabins, and an eight-room lodge. When close guests stay there, the camera team can move from getting ready to the ceremony and dinner without sending everyone across town.",
          "Photography and videography are still separate bookings. Send the team the ranch address and put travel in the contract. You can [ask North Star Ranch about the property and dates](/#contact), then use the [Whitefish vendor guide](/guides/whitefish-montana-wedding-vendors), [Glacier micro wedding guide](/guides/glacier-national-park-micro-wedding), and [Montana micro wedding cost guide](/guides/montana-micro-wedding-cost) for the connected decisions."
        ]
      }
    ],
    faqs: [
      { question: "Should we hire one team for wedding photography and videography?", answer: "One team reduces coordination. Two companies give you more choice. Decide from the final files and working style, not the number of contracts." },
      { question: "What should a wedding video contract include?", answer: "Look for hours, shooters, microphones, delivered films, editing rounds, music licensing, travel, delivery timing, backup equipment, cancellation terms, and any raw-footage fee." },
      { question: "Do Whitefish photographers also work in Glacier National Park?", answer: "Some do, but don't assume it. Name the exact portrait or ceremony location, ask about current permission rules, and review work made in similar light and weather." },
      { question: "Does North Star Ranch include a photographer or videographer?", answer: "No. Couples hire the camera team directly. The ranch is the private venue and lodging base." }
    ],
    related: ["whitefish-montana-wedding-vendors", "glacier-national-park-micro-wedding", "montana-micro-wedding-cost"]
  },
  {
    slug: "montana-micro-wedding-cost",
    eyebrow: "Whitefish Local Guide",
    title: "What a Montana Micro Wedding Really Costs",
    seoTitle: "What a Montana Micro Wedding Really Costs Before You Book, With Real Local Numbers | North Star Ranch",
    description: "Real cost ranges for a Montana micro wedding near Whitefish, with named local caterer and photographer prices, the fixed fees, and how couples keep the total under $10,000.",
    hero: "/images/montana-scenic-wedding.jpg",
    heroAlt: "Small outdoor wedding setting in Montana",
    readTime: "8 minute read",
    updated: "July 15, 2026",
    social: "/social/guides.jpg",
    category: "local",
    quickAnswer: "A Montana micro wedding costs far less than a full wedding. Nationally, weddings with 1 to 50 guests average about $17,100, and a two-person elopement costs much less. Many couples near Whitefish keep the whole trip under $10,000 to $12,000 by trimming the guest list and hiring their own vendors.",
    sections: [
      {
        id: "benchmarks",
        heading: "What Couples Actually Spend",
        paragraphs: [
          "A smaller guest count is the single biggest lever on cost. Food, rentals, and space all shrink with the list.",
          "The national numbers show the gap. The Knot's 2026 study puts the average wedding at $34,200, but weddings with 1 to 50 guests average $17,100. A micro wedding or elopement can sit well below that."
        ],
        table: {
          headers: ["Benchmark", "Amount", "Source"],
          rows: [
            ["Average US wedding (all sizes)", "$34,200", "The Knot 2026 study"],
            ["Average wedding, 1 to 50 guests", "$17,100", "The Knot 2026 study"],
            ["Typical per-guest budget", "$150 to $300", "Zola 2026"]
          ]
        }
      },
      {
        id: "fixed-fees",
        heading: "The Fixed Fees You Cannot Skip",
        paragraphs: [
          "Two costs are set by the government, not a vendor. They are small, but plan for them early.",
          "You need a Montana marriage license before the ceremony. If you also want to marry inside Glacier National Park, that needs its own permit, whatever the group size."
        ],
        resources: [
          { name: "Montana marriage license", note: "Apply in person at the Flathead County Clerk of District Court in Kalispell. There is no waiting period, and the license is valid for 180 days.", price: "$53 (Montana, summer 2026)" },
          { name: "Glacier National Park wedding permit", note: "Required for any ceremony inside the park, whatever the group size. Apply at least 20 business days ahead, and no more than one year out.", price: "$125, non-refundable (2026)", url: "https://www.nps.gov/glac/planyourvisit/weddings.htm" }
        ]
      },
      {
        id: "catering",
        heading: "Catering Is Usually the Biggest Line",
        paragraphs: [
          "Once guests are added, food is often the largest single cost. Local caterers price it a few ways, from a simple drop-off to full service.",
          "The ranges below come from named Flathead Valley caterers as of summer 2026. Ask each one for a quote at your real guest count and date."
        ],
        resources: [
          { name: "Farmer Meets Foodie", note: "Wedding catering from drop-off to full service, serving Whitefish, Kalispell, and the wider Flathead Valley. Prices are package totals, not per person.", price: "Drop-off from $3,300; full service from $6,500 (summer 2026)", url: "https://www.farmermeetsfoodiemt.com/wedding-event-catering" },
          { name: "Great Northwest Catering", note: "Full-service Whitefish caterer that serves weddings at outside venues.", phone: "(406) 407-4263", price: "Call for current rates", url: "https://www.greatnorthwestcatering.com/" }
        ]
      },
      {
        id: "photography",
        heading: "Photography and the Other Vendors",
        paragraphs: [
          "Photography is the next big line for most couples. Local shooters publish starting prices, so it is easy to plan around.",
          "Flowers, cake, hair, and rentals vary widely by choice. Get named quotes rather than guessing, and see the full list in the [Whitefish wedding vendors guide](/guides/whitefish-montana-wedding-vendors)."
        ],
        resources: [
          { name: "Rachel Jobst Photography", note: "Kalispell-based photographer serving Glacier National Park weddings and elopements.", price: "Elopements from $2,700, weddings from $3,200 (summer 2026)", url: "https://racheljobstphotography.com/" },
          { name: "Stacy Edwards Photography", note: "Serves Whitefish, Kalispell, Columbia Falls, and Glacier National Park.", price: "Packages from $3,750 (summer 2026)", url: "https://stacyedwardsphotography.com/flathead-valley-montana-wedding-photographer" }
        ]
      },
      {
        id: "sample",
        heading: "Sample Budget: Elopement vs. a 30-Guest Micro Wedding",
        paragraphs: [
          "Here is how the pieces stack up two ways. These are example ranges from named local vendors as of summer 2026, not quotes."
        ],
        table: {
          headers: ["Cost", "Just the two of you", "About 30 guests"],
          rows: [
            ["Montana marriage license", "$53", "$53"],
            ["Glacier park permit (only if you marry in the park)", "$125", "$125"],
            ["Photography", "From $2,700", "From $3,200 to about $5,500"],
            ["Catering", "Little to none", "Drop-off from $3,300, full service from $6,500"],
            ["Venue and lodging", "Inquire", "Inquire"],
            ["Flowers, cake, and extras", "Varies", "Varies"]
          ]
        }
      },
      {
        id: "under-10k",
        heading: "How Couples Keep It Under $10,000",
        paragraphs: [
          "Many couples set a hard cap and protect it. A common goal is to spend no more than $10,000 to $12,000 total, and to put the honeymoon ahead of the wedding.",
          "Couples on Reddit's [r/Weddingsunder10k](https://www.reddit.com/r/Weddingsunder10k/comments/1jmtqcd/venues_for_micro_weddings_615_people_max_under_5k/) trade venue and catering tips for the same goal, with some aiming for about $8,000 between the venue and catering."
        ],
        bullets: [
          "Cut the guest list first. It lowers food, rentals, and space at once.",
          "Choose a venue that lets you bring your own vendors instead of a required list.",
          "Ask about a weekday or off-season date for lower rates.",
          "Use drop-off catering instead of full service when the setting is casual.",
          "Skip the park permit if you marry at a private venue instead of inside Glacier."
        ]
      },
      {
        id: "fit",
        heading: "Where North Star Ranch Fits the Budget",
        paragraphs: [
          "North Star Ranch does not publish prices, so ask for a current quote for your dates. What it does offer is the venue and onsite lodging in one place, which keeps the group together and cuts guest hotel and driving costs.",
          "Compare the full picture, not the starting rental. Read the [all-inclusive package guide](/guides/all-inclusive-micro-wedding-packages-montana) for what to confirm in writing, the [small wedding venue guide](/guides/small-wedding-venues-in-montana) for venue types, and ask [North Star Ranch](/#contact) about availability."
        ]
      }
    ],
    faqs: [
      { question: "How much does a micro wedding in Montana cost?", answer: "It varies with the guest count and the vendors you choose. Nationally, weddings with 1 to 50 guests average about $17,100, and many couples near Whitefish keep the full trip under $10,000 to $12,000 by trimming the list and hiring their own vendors." },
      { question: "Is a micro wedding cheaper than a full wedding?", answer: "Usually, yes. A smaller guest count lowers food, rentals, and space all at once, which is why weddings with 1 to 50 guests average about half the cost of the overall US average." },
      { question: "How much is a marriage license in Montana?", answer: "A Montana marriage license is $53 as of summer 2026. There is no waiting period, and the license is valid for 180 days from the date it is issued." },
      { question: "How much is a wedding permit in Glacier National Park?", answer: "Glacier National Park charges a $125 non-refundable application fee for a wedding Special Use Permit, and the application must arrive at least 20 business days before the date." }
    ],
    related: ["all-inclusive-micro-wedding-packages-montana", "small-wedding-venues-in-montana", "whitefish-montana-wedding-vendors"]
  },
  {
    slug: "getting-to-whitefish-montana-wedding",
    eyebrow: "Whitefish Local Guide",
    title: "Getting to Whitefish, Montana for a Wedding",
    seoTitle: "Getting to Whitefish, Montana for a Wedding, and Where the Guests Stay | North Star Ranch",
    description: "How wedding guests get to Whitefish, Montana by plane, the Amtrak Empire Builder, or car, plus where the group stays near North Star Ranch and downtown Whitefish.",
    hero: "/images/ranch-hero.jpg",
    heroAlt: "North Star Ranch landscape near Whitefish Montana",
    readTime: "7 minute read",
    updated: "July 15, 2026",
    social: "/social/guides.jpg",
    category: "local",
    quickAnswer: "Most wedding guests reach Whitefish by flying into Glacier Park International Airport, about 25 minutes from North Star Ranch. Some ride the Amtrak Empire Builder straight into downtown, and drivers come from Calgary, Missoula, or Spokane. Guests either stay onsite at the ranch or in downtown Whitefish hotels.",
    sections: [
      {
        id: "fly",
        heading: "Flying Into Glacier Park International Airport",
        paragraphs: [
          "Most out-of-town guests fly into Glacier Park International Airport, code FCA, near Kalispell. It is about 25 minutes from the ranch, which keeps arrival simple.",
          "Six airlines serve the airport. Routes and days change by season, so send guests to the airport site to check current flights before they book."
        ],
        table: {
          headers: ["Airline", "Nonstop hubs"],
          rows: [
            ["Alaska Airlines", "Seattle daily; Portland, Los Angeles, San Diego seasonal"],
            ["Delta", "Salt Lake City and Minneapolis daily"],
            ["United", "Denver daily; Chicago, San Francisco, Los Angeles, Houston seasonal"],
            ["Allegiant", "Las Vegas and Phoenix; Oakland seasonal"],
            ["American", "Dallas, Chicago, New York seasonal"],
            ["Sun Country", "Minneapolis seasonal"]
          ]
        }
      },
      {
        id: "train",
        heading: "The Amtrak Empire Builder Into Downtown Whitefish",
        paragraphs: [
          "Whitefish is one of the few mountain towns where a train stops right downtown. The Amtrak Empire Builder runs between Chicago and Seattle or Portland, and it stops at the historic Whitefish Depot on Depot Street.",
          "This is a real option for guests who dislike flying or want a slower trip. They step off the train and can walk to a downtown hotel, then meet the group from there. Check current times and fares at Amtrak before planning around it."
        ]
      },
      {
        id: "drive",
        heading: "Driving to Whitefish",
        paragraphs: [
          "Some guests drive in from nearby cities or from across the border. Times below are for a non-stop drive in good weather, so add time for winter roads, especially from Calgary."
        ],
        table: {
          headers: ["From", "Distance", "Drive time"],
          rows: [
            ["Kalispell, MT", "15 miles", "About 25 minutes"],
            ["Missoula, MT", "137 miles", "About 2 hours 45 minutes"],
            ["Spokane, WA", "261 miles", "About 5 hours 15 minutes"],
            ["Calgary, AB", "291 miles", "About 5 hours 45 minutes"],
            ["Bozeman, MT", "324 miles", "About 6 hours"]
          ]
        }
      },
      {
        id: "car",
        heading: "Renting a Car at the Airport",
        paragraphs: [
          "A car is useful here. Guests will want one for the drive to the ranch, a trip into Glacier National Park, or a run into town.",
          "Four rental companies have counters inside the airport terminal, next to baggage claim: Avis, Budget, Hertz, and National or Alamo. Not every guest needs a car, so a couple of shared rentals often covers the group."
        ]
      },
      {
        id: "stay",
        heading: "Where the Group Stays",
        paragraphs: [
          "Guests usually split between two options. Some stay onsite at the ranch, and the rest take a downtown Whitefish hotel about eight miles away.",
          "North Star Ranch has onsite lodging across a five-bedroom chalet, four cabins, and an eight-room lodge, so much of the group can stay together. The downtown hotels below handle the overflow. Call each one for current rates."
        ],
        resources: [
          { name: "The Firebrand Hotel", note: "A modern hotel in the center of downtown Whitefish, steps from dining.", phone: "(406) 863-1900", url: "https://www.firebrandhotel.com/" },
          { name: "Grouse Mountain Lodge", note: "A larger lodge near the golf course, just steps from downtown.", phone: "(406) 862-3000", url: "https://www.glacierparkcollection.com/lodging/grouse-mountain-lodge/" },
          { name: "Whitefish Riverfront Hotel", note: "A riverside hotel steps from downtown, formerly the Pine Lodge.", phone: "(406) 862-7600", url: "https://whitefishriverfronthotel.com/" },
          { name: "Downtowner Inn", note: "A simple inn on Spokane Avenue, a short stroll from the train depot.", phone: "(406) 862-5731", url: "https://www.glacier-national-park-travel-guide.com/downtowner-inn-in-whitefish.html" },
          { name: "Good Medicine Lodge", note: "A bed and breakfast just past downtown on the way to the mountain.", phone: "(406) 862-5488", url: "https://www.goodmedicinelodge.com/" }
        ]
      },
      {
        id: "fit",
        heading: "Keep Arrival Simple With One Base",
        paragraphs: [
          "The fewer moving parts, the easier the arrival. When most of the group lands at one airport and gathers at one property, the weekend starts calm.",
          "[North Star Ranch](/#contact) gives that base near the airport, downtown Whitefish, and Glacier National Park. Map the days with a [wedding weekend itinerary](/guides/montana-micro-wedding-itinerary), plan [things for guests to do](/guides/things-to-do-in-whitefish-mt-wedding-guests), and read the [Whitefish micro wedding venue guide](/guides/whitefish-montana-micro-wedding) if you are still choosing a venue."
        ]
      }
    ],
    faqs: [
      { question: "What airport do you fly into for a Whitefish wedding?", answer: "Glacier Park International Airport, code FCA, near Kalispell. It is about 25 minutes from North Star Ranch and is served by Alaska, Delta, United, Allegiant, American, and Sun Country, though routes change by season." },
      { question: "Can you take a train to Whitefish, Montana?", answer: "Yes. The Amtrak Empire Builder runs between Chicago and Seattle or Portland and stops at the depot in downtown Whitefish, so guests can arrive by train and walk to a downtown hotel." },
      { question: "Where do wedding guests stay in Whitefish?", answer: "Some stay onsite at the ranch, which has a chalet, four cabins, and an eight-room lodge. Others take a downtown Whitefish hotel about eight miles away, such as The Firebrand Hotel or Grouse Mountain Lodge." }
    ],
    related: ["montana-micro-wedding-itinerary", "things-to-do-in-whitefish-mt-wedding-guests", "whitefish-montana-micro-wedding"]
  },
  {
    slug: "montana-micro-wedding-itinerary",
    eyebrow: "Whitefish Local Guide",
    title: "A Montana Micro Wedding Weekend Itinerary",
    seoTitle: "A Montana Micro Wedding Weekend Itinerary Guests Will Not Rush Through | North Star Ranch",
    description: "A three-day Montana micro wedding weekend itinerary near Whitefish, for summer or winter, with a Glacier National Park day trip that respects real drive times.",
    hero: "/images/wedding-canopy.jpg",
    heroAlt: "Wedding canopy at North Star Ranch in Montana",
    readTime: "7 minute read",
    updated: "July 15, 2026",
    social: "/social/guides.jpg",
    category: "local",
    quickAnswer: "A three-day wedding weekend works best when guests arrive Friday, marry Saturday, and leave Sunday, all from one home base. It gives everyone real time together without racing between locations. The plans below fit a summer or a winter Whitefish micro wedding.",
    sections: [
      {
        id: "one-base",
        heading: "Why One Home Base Changes the Weekend",
        paragraphs: [
          "Start with the people you want there, where they will stay, and how much time you want together. The rest of the plan follows from that.",
          "A single base keeps the weekend from turning into a series of drives. It also helps guests who cannot hike or move quickly, since the ceremony, meals, and beds sit in one place.",
          "Match the plan to your guest count. A two-person elopement needs less structure than a small reception dinner for 30, but both run smoother when the ceremony, dinner, and lodging share one property. Keep a weather backup plan, since mountain conditions change fast."
        ]
      },
      {
        id: "summer",
        heading: "A 3-Day Summer Wedding Weekend",
        paragraphs: [
          "This plan uses long summer days and easy access to trails, the lake, and town. Slot a [morning guest activity](/guides/things-to-do-in-whitefish-mt-wedding-guests) into Friday or the wedding morning, and book a [rehearsal dinner in Whitefish](/guides/rehearsal-dinner-whitefish-mt) or a caterer at the ranch."
        ],
        table: {
          headers: ["When", "Plan"],
          rows: [
            ["Friday afternoon", "Guests arrive, check in, and settle at the ranch or a downtown hotel"],
            ["Friday evening", "Casual welcome dinner or a brewery night in town"],
            ["Saturday morning", "Optional trip: fly fishing, a lake paddle, or a lift ride at the resort"],
            ["Saturday afternoon", "Ceremony at the ranch, then photos on the property"],
            ["Saturday evening", "Dinner, toasts, and time around a fire"],
            ["Sunday morning", "Group breakfast in town, then airport departures"]
          ]
        }
      },
      {
        id: "winter",
        heading: "A 3-Day Winter Version",
        paragraphs: [
          "A winter weekend trades trails for snow and more indoor time. Keep outdoor parts short and leave room for travel delays."
        ],
        table: {
          headers: ["When", "Plan"],
          rows: [
            ["Friday afternoon", "Guests arrive early to beat winter road delays and settle in"],
            ["Friday evening", "Warm welcome dinner at the ranch or a cozy restaurant in town"],
            ["Saturday morning", "Optional skiing at the resort or a dog sled tour"],
            ["Saturday afternoon", "Indoor or covered ceremony, then photos in the snow"],
            ["Saturday evening", "Dinner and a slow night indoors"],
            ["Sunday morning", "Breakfast, then an unhurried departure"]
          ]
        }
      },
      {
        id: "glacier",
        heading: "Adding a Glacier National Park Day Trip",
        paragraphs: [
          "Many out-of-state guests assume Whitefish sits next to the park. It does not. The drive to West Glacier takes about an hour in summer traffic, so a park visit is a day trip, not a quick stop.",
          "Plan the park for the day before or after the wedding, never the morning of. The ranch is less than 45 minutes from the park entrance, which still makes a real visit easy without rushing the group."
        ]
      },
      {
        id: "fit",
        heading: "Anchor the Weekend at the Ranch",
        paragraphs: [
          "The plan holds together when the base does. Onsite lodging means guests are not driving back to scattered hotels after every event.",
          "[North Star Ranch](/#contact) gives a destination group that base near Whitefish and Glacier. Sort out [how guests get here and where they stay](/guides/getting-to-whitefish-montana-wedding), then compare seasons in the [best time of year guide](/guides/best-time-of-year-for-montana-micro-wedding)."
        ]
      }
    ],
    faqs: [
      { question: "How many days should a micro wedding weekend be?", answer: "Three days is the common plan: guests arrive Friday, the wedding is Saturday, and everyone leaves Sunday. It gives a destination group real time together without adding another formal event." },
      { question: "Can wedding guests visit Glacier National Park during the weekend?", answer: "Yes, but treat it as a full day trip. The drive from Whitefish to West Glacier takes about an hour in summer traffic, so plan the park for the day before or after the wedding, not the morning of." },
      { question: "What should guests do the day before the wedding?", answer: "Keep it easy. A morning trip like fly fishing or a lift ride, followed by a welcome dinner or a brewery night in Whitefish, gives guests time together without a full schedule." }
    ],
    related: ["things-to-do-in-whitefish-mt-wedding-guests", "rehearsal-dinner-whitefish-mt", "getting-to-whitefish-montana-wedding"]
  },
  {
    slug: "whitefish-wedding-venues",
    eyebrow: "Whitefish Venue Guide",
    title: "Whitefish, Montana Wedding Venues for Small and Destination Weddings",
    seoTitle: "Whitefish, Montana Wedding Venues Compared by Guest Count, Lodging and Price | North Star Ranch",
    description: "Compare ten wedding venues in Whitefish and the Flathead Valley of northwest Montana by guest count, reception space, lodging and suites, and published prices.",
    hero: "/images/north-star-ranch-deck-view.jpg",
    heroAlt: "Deck overlooking forested hills at North Star Ranch near Whitefish, Montana",
    readTime: "7 minute read",
    updated: "September 13, 2026",
    category: "local",
    quickAnswer: "Most wedding venues around Whitefish are built for 150 to 300 guests. If you are inviting 40 people or fewer, start with the few that sell a small-wedding package, then ask each one a second question: how many of your guests can sleep on the property?",
    sections: [
      {
        id: "compare",
        heading: "Ten Montana Wedding Venues In and Around Whitefish",
        paragraphs: [
          "The table uses each venue's own website, checked in September 2026. Few wedding venues with prices post them online, so blank spots say \"ask.\"",
          "Read the two middle columns together. A ranch that seats 250 people but sleeps 24 still sends most of your guests to hotels in town or in Kalispell at the end of the night."
        ],
        table: {
          headers: ["Venue", "Guests the venue lists", "Sleeps on the property", "Weather backup"],
          rows: [
            ["The Hitchin' Post", "Seating for up to 30", "Two nights at The Stalls in two packages", "Ceremony-only package is outdoor only"],
            ["Grouse Mountain Lodge", "Small-wedding option for 30 or less", "144 hotel rooms", "Indoor and outdoor ceremony sites"],
            ["Whitefish Peaks", "Up to 150; small package up to 40", "None; nearby lodging", "Heated reception room"],
            ["The Lodge at Whitefish Lake", "Ballroom up to 300; micro-wedding package", "Hotel rooms, suites, condos, cabins", "8,000+ sq ft of banquet space"],
            ["Whitefish Mountain Resort", "Base Lodge up to 200", "Discounted on-mountain lodging", "Weather backup room in package"],
            ["Mountainside Weddings", "Seating for about 250", "Sleeps up to 16", "Roofed open-air pavilion"],
            ["Clydesdale Outpost", "Max capacity 250", "Lodging for 24 with a full rental", "Ask"],
            ["Star Meadows Ranch", "Up to 300", "Up to 85 in cabins, A-frames, tents", "6,000 sq ft heated pavilion"],
            ["Triple B Ranch", "Up to 300 in summer tiers", "One apartment, day before and day of", "Heated 12,000 sq ft arena"],
            ["North Star Ranch", "Ask for your date", "5-bedroom chalet, 4 cabins, 8 lodge rooms", "Great Room"]
          ]
        }
      },
      {
        id: "small",
        heading: "Whitefish Venues With a Small-Wedding Package",
        paragraphs: [
          "These four sell a package made for a small group. That matters because a 30-person dinner can feel lost in a ballroom set up for 300."
        ],
        resources: [
          { name: "The Hitchin' Post", note: "A Western elopement venue on Rusty Spur Trail. Every package seats up to 30. The two higher packages add two nights at The Stalls, a converted barn stay.", price: "$1,400 ceremony only; $3,500 venue and stay; $3,950 elopement", url: "https://www.hitchinpostmt.com/" },
          { name: "Grouse Mountain Lodge", note: "A Whitefish hotel with a separate plan for wedding groups of 30 or less, using its wine room for the reception. A new event pavilion is listed as opening in October 2026.", url: "https://www.glacierparkcollection.com/lodging/grouse-mountain-lodge/weddings/" },
          { name: "Whitefish Peaks", note: "A venue on Highway 93 South. Its Intimate Peak package covers a ceremony site and reception layout for up to 40 guests. It has no guest rooms onsite.", url: "https://whitefishpeaks.com/packages" },
          { name: "The Lodge at Whitefish Lake", note: "A lakeside resort on Wisconsin Avenue with a Micro-Wedding Package, an Elopement Package, and the fireside Regatta Room, which looks out on Whitefish Lake. Its Lakeside Pavilion hosts ceremonies for up to 200.", url: "https://lodgeatwhitefishlake.com/weddings" }
        ]
      },
      {
        id: "ranches",
        heading: "Flathead Valley Ranch Venues With Lodging on the Property",
        paragraphs: [
          "The ranch venues give you the most outdoor space, and several bundle lodging into the rental. The catch is scale. Most are sized for a big wedding, and the beds cover only part of the guest list.",
          "Catering is also on you at most of them. Mountainside, Star Meadows, and Triple B all expect an outside caterer, so budget for food on top of the venue price. See the [catering guide](/guides/whitefish-mt-wedding-catering) before you compare quotes, and the [bridal shop guide](/guides/wedding-dress-shops-whitefish-mt) if the dress is still on the list."
        ],
        resources: [
          { name: "Clydesdale Outpost", note: "A full rental covers the property along the Stillwater River, with lodging for 24 guests in 2-bedroom cabins with cedar hot tubs. A smaller elopement option allows up to 20 people with a two-night stay.", price: "$20,000 for two nights; $25,000 for three", url: "https://www.clydesdaleoutpost.com/weddings-and-events" },
          { name: "Star Meadows Ranch", note: "Cabins, A-frames, and glamping tents sleep up to 85 people, the most beds of the ranches here. Packages run from one day to three nights. Pricing is by inquiry.", url: "https://www.starmeadowsranch.com/weddings/" },
          { name: "Mountainside Weddings", note: "On Star Meadow Road. Packages include two nights for up to 16 people. The homepage lists packages from 20K, while the FAQ says pricing starts at $25,000 for 50 guests, so ask which applies to your date.", url: "https://mountainsideweddings.com/frequently-asked-questions/" },
          { name: "Triple B Ranch", note: "About 10 minutes from downtown Whitefish, with a heated indoor arena and backup generator. One apartment is included for the day before and the day of.", price: "$6,495 winter up to 100; $8,895 summer up to 200", url: "https://triplebbbranchvenue.com/packages-pricing" }
        ]
      },
      {
        id: "resort",
        heading: "A Resort Reception on Whitefish Mountain",
        paragraphs: [
          "Whitefish Mountain Resort runs a different kind of wedding day. Its package includes catering and bar staff, a weather backup room, and a Base Lodge reception for up to 200, plus a summer summit ceremony. Guests book discounted rooms at the resort.",
          "It is the simplest choice if you want one company handling food and space, with views toward Glacier National Park. You will share the mountain with other resort guests, and its wedding page listed only one open summer 2026 date, so ask about next year early."
        ]
      },
      {
        id: "north-star",
        heading: "Where North Star Ranch Fits for a Montana Wedding Weekend",
        paragraphs: [
          "North Star Ranch is a private 40-acre property 8 miles from town, bordering national forest on two sides. The wedding lawn looks toward the Glacier National Park mountains, and the Great Room gives the group a place to eat and dance when the weather turns.",
          "The lodging is what sets it apart for a small group. There is a five-bedroom chalet, four cabins with kitchenettes and private decks, and eight lodge rooms with private baths, each sleeping up to four depending on setup. Your closest people can stay together, and you book the caterer and photographer yourself.",
          "To see how that compares with other Montana properties, read the guide to [Montana wedding venues with lodging](/guides/montana-wedding-venues-with-lodging). When you are ready, [check dates at North Star Ranch](/#contact)."
        ],
        image: { src: "/images/north-star-ranch-great-room.jpg", alt: "Long dinner tables set in the Great Room at North Star Ranch", caption: "The Great Room at North Star Ranch, set for a group dinner." }
      }
    ],
    faqs: [
      { question: "Which Whitefish wedding venues work for 30 guests or fewer?", answer: "The Hitchin' Post seats up to 30, Grouse Mountain Lodge has a plan for groups of 30 or less, Whitefish Peaks has a package for up to 40, and the Lodge on Whitefish Lake sells a micro-wedding package." },
      { question: "Can all of our wedding guests stay at the venue?", answer: "Rarely at a large ranch. Clydesdale Outpost sleeps 24 and Mountainside sleeps 16, and the biggest ranch count here is 85 beds. Hotel venues like Grouse Mountain Lodge have rooms guests book themselves." },
      { question: "Do Whitefish venues include catering?", answer: "Some do. The mountain resort includes catering and bar staff, and Grouse Mountain Lodge cooks on site. Mountainside Weddings, Star Meadows, and Triple B Ranch expect you to hire an outside caterer." },
      { question: "How far are these venues from downtown?", answer: "Triple B Ranch lists about 10 minutes, and North Star Ranch is 8 miles out. The two lodges are in town. Ask any ranch for the drive time from your guests' hotels in Whitefish or Kalispell." }
    ],
    related: ["montana-wedding-venues-with-lodging", "whitefish-montana-micro-wedding", "whitefish-mt-wedding-catering"],
    social: "/social/whitefish-wedding-venues.jpg"
  },
  {
    slug: "montana-wedding-venues-with-lodging",
    eyebrow: "Venue and Lodging Guide",
    title: "Montana Wedding Venues With Lodging: How Many Guests Can Stay On-Site",
    seoTitle: "Montana Wedding Venues With Lodging: Guest Ranches, Lodges and Resorts by Beds and Price | North Star Ranch",
    description: "Montana wedding planning: compare venues with on-site accommodation, from guest ranches to lodges, by how many guests can sleep there, event capacity, stay rules, and published prices.",
    hero: "/images/north-star-ranch-lodge.jpg",
    heroAlt: "The eight-room lodge at North Star Ranch near Whitefish, Montana",
    readTime: "7 minute read",
    updated: "September 13, 2026",
    quickAnswer: "Almost every Montana venue with lodging seats far more guests than it can sleep. Clydesdale Outpost near Whitefish allows 250 guests and sleeps 24. Green Valley Ranch near West Glacier hosts up to 300 and sleeps 27. So ask for the bed count, the number of nights, and where the other guests go.",
    sections: [
      {
        id: "gap",
        heading: "Beds vs. Guests at Wedding Venues in Montana With Accommodation",
        paragraphs: [
          "The numbers below come from each venue's own site in September 2026. Look at how far apart the first two columns are. That gap is the part of your guest list that drives in from a hotel on the wedding day.",
          "That is normal. A wedding celebration for 150 with the closest 25 people staying on the property can work well. You just need a plan before the invitations go out."
        ],
        table: {
          headers: ["Venue and region", "Sleeps on the property", "Wedding guests", "Stay terms"],
          rows: [
            ["Clydesdale Outpost, Whitefish", "24", "Up to 250", "2 nights $20,000; 3 nights $25,000"],
            ["Green Valley Ranch, Coram", "Up to 27", "Up to 300", "4 nights exclusive, $36,800 to $40,000 in 2026"],
            ["Star Meadows Ranch, Whitefish", "Up to 85", "Up to 300", "One day to three nights; 6,000 sq ft pavilion"],
            ["Glacier Homestead, Coram", "Up to 68", "200", "2-night package $12,500 plus 8% fee"],
            ["Homestake Lodge, near Butte", "40", "50 to 250", "Two nights, $7,100 for summer"],
            ["Lone Mountain Ranch, Big Sky", "25 cabin guest rooms", "Up to 120 on full buyout", "Full-ranch weddings offered"],
            ["Triple Creek Ranch, Darby", "33 king bedrooms", "Up to 66 on buyout", "Nightly rate includes meals and drinks"],
            ["Flathead Lake Lodge, Bigfork", "Lodges, cabins, suites", "Ask", "Three nights, all-inclusive"],
            ["Sage Lodge, Paradise Valley", "Rooms plus four 4-room Ranch Houses", "Ask", "Full buyout optional"]
          ]
        }
      },
      {
        id: "models",
        heading: "Four Ways Montana Lodges and Ranches Sell the Rooms",
        paragraphs: [
          "The first is renting the whole property for a set number of nights, usually two to four. Clydesdale Outpost, Green Valley Ranch, and Flathead Lake Lodge work this way, and The Ranch at Rock Creek requires a three-night buyout for a large wedding.",
          "The second is a package that includes the nights but not the menu. Green Valley Ranch says its price does not cover catering, rentals, or vendors. Homestake Lodge includes two nights, the venue, and tables and chairs, then lets you bring your own food.",
          "The third is all-inclusive. Triple Creek Ranch and Flathead Lake Lodge fold rooms, meals, and drinks into one rate. The fourth is a resort with event spaces where guests reserve their own rooms at a group rate, like Grouse Mountain Lodge with 144 rooms."
        ]
      },
      {
        id: "northwest",
        heading: "Northwest Montana Venues With Lodging Near Glacier and Kalispell",
        paragraphs: [
          "If your guests fly into Glacier Park International Airport near Kalispell, these are the properties to call first. Each one publishes a real lodging number."
        ],
        resources: [
          { name: "Green Valley Ranch, Coram", note: "A 480-acre ranch 15 minutes from the west entrance of Glacier National Park. Its two guest buildings sleep 27 on a four-night exclusive stay. A full-service planner and event insurance are required.", price: "$36,800 June and October; $40,000 July to September", url: "https://www.greenvalleyranchmontana.com/faq" },
          { name: "Glacier Homestead, Coram", note: "Space for 200 guests and lodging for up to 68, including a bunkhouse and hostel rooms. Available May through September.", price: "$12,500 two-night package plus 8%", url: "https://glacierhomestead.com/weddings-and-events/" },
          { name: "Clydesdale Outpost, Whitefish", note: "Six 2-bedroom cabins with cedar hot tubs along the Stillwater River. Renting the property includes lodging for 24.", price: "$20,000 to $25,000 for two or three nights", url: "https://www.clydesdaleoutpost.com/weddings-and-events" },
          { name: "Flathead Lake Lodge, Bigfork", note: "An all-inclusive guest ranch on Flathead Lake. Weddings book the whole ranch for three nights in May and June or September and October.", url: "https://www.flatheadlakelodge.com/weddings/" }
        ]
      },
      {
        id: "overflow",
        heading: "Plan a Destination Wedding for the Guests Who Do Not Get a Room",
        paragraphs: [
          "Decide who stays on the property first. A common first list is the couple, the wedding party, parents, and anyone needed early or late. Everyone else gets a hotel list, a shared ride plan, and one clear arrival time.",
          "The payoff is easy to see in how couples describe it afterward. One bride in a [Reddit thread on venues with onsite lodging](https://www.reddit.com/r/NewEnglandWedding/comments/1o9bf04/wedding_venue_with_onsite_lodging/) wrote that with the welcome party, wedding, and brunch in one place, \"no one had to drive anywhere.\"",
          "For a wedding weekend in the Flathead Valley, the overflow usually stays in town, and the rehearsal dinner can happen there too. The guide to [getting here and where guests stay](/guides/getting-to-whitefish-montana-wedding) covers the airport, rental cars, and hotels. For the night before, see [rehearsal dinner options](/guides/rehearsal-dinner-whitefish-mt)."
        ]
      },
      {
        id: "north-star",
        heading: "How Lodging Works at North Star Ranch",
        paragraphs: [
          "North Star Ranch has three kinds of lodging on one rustic 40-acre property, 8 miles from town. There is a five-bedroom chalet with five full baths, four new cabins with kitchenettes and 450-square-foot decks, and an eight-room lodge.",
          "Each of those eight rooms is 450 square feet with its own tiled bathroom, and each can sleep up to four people depending on the bed setup. The ranch rents the whole property on request, so a small group can have the place to itself for the wedding ceremony and reception.",
          "The ranch is 25 minutes from Glacier Park International Airport and less than 45 minutes from Glacier National Park. Catering and photography are hired separately. Compare it with other [venues in and around Whitefish](/guides/whitefish-wedding-venues), then [ask North Star Ranch about your dates](/#contact)."
        ],
        image: { src: "/images/north-star-ranch-cabin.jpg", alt: "One of the four cabins at North Star Ranch, with a wraparound deck among pine trees", caption: "One of four cabins at North Star Ranch. Each has a private deck and a kitchenette." }
      }
    ],
    faqs: [
      { question: "Do Montana wedding venues with lodging require a buyout?", answer: "Many ranches do. Clydesdale Outpost rents the property for two or three nights, and The Ranch at Rock Creek requires a three-night buyout for a large wedding. Some resorts make it optional." },
      { question: "Is lodging included in the venue price?", answer: "Sometimes. Clydesdale Outpost, Green Valley Ranch, and Glacier Homestead include a set number of nights. All-inclusive ranches bundle accommodation with meals. Resort venues usually leave rooms for guests to book." },
      { question: "How many wedding guests should stay onsite?", answer: "Enough to keep the key people close. The couple, wedding party, parents, and anyone helping with setup are the usual first group. Guests who only attend the ceremony and dinner can stay in town." },
      { question: "Can we rent all of North Star Ranch for our wedding group?", answer: "The ranch invites couples to contact it about renting the entire property. Ask about your dates, the rooms available, and how lodging fits the wedding plan." }
    ],
    related: ["whitefish-wedding-venues", "getting-to-whitefish-montana-wedding", "all-inclusive-micro-wedding-packages-montana"],
    social: "/social/montana-wedding-venues-with-lodging.jpg"
  },
  {
    slug: "wedding-venues-near-glacier-national-park",
    eyebrow: "Glacier Venue Guide",
    title: "Montana Wedding Venues Near Glacier National Park, From West Glacier to Whitefish",
    seoTitle: "Wedding Venues Near Glacier National Park, Montana: West Glacier, Coram and Whitefish Options With Prices | North Star Ranch",
    description: "Compare Montana wedding venues near Glacier National Park in West Glacier, Coram, East Glacier and Whitefish by distance to the park, guest count, lodging, and price.",
    hero: "/images/glacier-spring.jpg",
    heroAlt: "Mountain peak and wildflowers in Glacier National Park, Montana",
    readTime: "7 minute read",
    updated: "September 13, 2026",
    quickAnswer: "The reception has to happen outside the park. Glacier bans catered food and tables at its ceremony sites and caps every wedding at two hours. The closest venues sit in West Glacier and Coram, within about 15 minutes of the west entrance, with more choices in Whitefish.",
    sections: [
      {
        id: "why-outside",
        heading: "Why a Glacier National Park Wedding Needs a Venue Outside the Park",
        paragraphs: [
          "The park's rules decide this for you. The National Park Service limits every wedding ceremony to two hours, including setup and photos. Arches, tables, and catered food are not allowed, other visitors can stand nearby, and the park provides no indoor option if a storm rolls in.",
          "So couples who want Glacier in the story usually split the wedding day. They hold a short ceremony or elopement at a permitted wedding location inside the park, then drive to a venue for dinner, toasts, and a place to sleep. Others skip the permit and marry at a private, rustic venue with mountain views.",
          "Read the full permit rules in the guide to [getting married in Glacier National Park](/guides/glacier-national-park-micro-wedding). This page covers the venues."
        ]
      },
      {
        id: "compare",
        heading: "Wedding Venues in West Glacier, Coram and Whitefish Compared",
        paragraphs: [
          "Distances and numbers come from each venue's own site in September 2026. Where a venue does not publish a figure, the table says ask."
        ],
        table: {
          headers: ["Venue", "Town", "To the park", "Guests", "Sleeps onsite"],
          rows: [
            ["Paddle Ridge", "West Glacier", "Less than a mile", "Up to 160", "Cabins and lodge rooms"],
            ["Great Northern Resort", "West Glacier", "Just outside the park", "Tent fits about 200", "14-room lodge plus chalets"],
            ["Green Valley Ranch", "Coram", "15 minutes to the park entrance", "Up to 300", "Up to 27"],
            ["Glacier Homestead", "Coram", "A short drive", "200", "Up to 68"],
            ["Summit Mountain Lodge", "East Glacier Park", "Southeastern edge of the park", "Ask", "Nine cabins"],
            ["Ashley Lake Estates", "Kila", "Within an hour", "Ask", "26"],
            ["Grouse Mountain Lodge", "Whitefish", "Ask", "Plan for 30 or less; 9 banquet rooms", "144 hotel rooms"],
            ["North Star Ranch", "Whitefish", "Less than 45 minutes to the entrance", "Ask", "5-bedroom chalet, 4 cabins, 8 lodge rooms"]
          ]
        }
      },
      {
        id: "west-glacier",
        heading: "West Glacier and Coram: Closest to Glacier Park",
        paragraphs: [
          "These four are the quickest drive from Apgar, Lake McDonald, and the west side of Going-to-the-Sun Road. That helps with an intimate wedding in the park when you want guests at dinner within the hour."
        ],
        resources: [
          { name: "Paddle Ridge, West Glacier", note: "A Glacier Park Collection property less than a mile from the park, with cabins and lodge rooms onsite. It hosts up to 160 guests, and a riverside option with Glacier Raft Company is capped at 45.", url: "https://www.glacierparkcollection.com/lodging/paddle-ridge/weddings/" },
          { name: "Great Northern Resort, West Glacier", note: "Runs Glacier Park Weddings just outside the park. Its 40 by 75 foot reception tent fits groups of about 200, and guests can stay in a 14-room lodge and chalets.", url: "https://glacierparkweddings.com/lodging-amenities/" },
          { name: "Green Valley Ranch, Coram", note: "A 480-acre ranch 15 minutes from the west entrance. A four-night exclusive rental includes a lodge and cabin that sleep 27. A full-service planner and event insurance are required.", price: "$36,800 June and October; $40,000 July to September (2026)", url: "https://www.greenvalleyranchmontana.com/faq" },
          { name: "Glacier Homestead, Coram", note: "Space for 200 guests and lodging for up to 68 across a lodge, cabins, a bunkhouse, and hostel rooms. Available May through September.", price: "$12,500 two-night package plus an 8% fee", url: "https://glacierhomestead.com/weddings-and-events/" }
        ]
      },
      {
        id: "farther",
        heading: "East Glacier, Kalispell and Flathead Valley Options",
        paragraphs: [
          "[Summit Mountain Lodge](https://summitmtnlodge.com/montana-wedding/glacier-national-park-wedding/) sits on Marias Pass at the southeastern edge of the park, with nine cabins on 32 acres. It suits couples planning a ceremony near Two Medicine or the east side, though Two Medicine sites are closed for construction into May 2027.",
          "[Ashley Lake Estates](https://www.truenorthmanagementmt.com/wedding-venue) is a private 50-acre estate on Ashley Lake near Kila, within an hour of the park, with sleeping space for 26.",
          "Whitefish, in the Flathead Valley, adds the most choice. [Grouse Mountain Lodge](https://www.glacierparkcollection.com/lodging/grouse-mountain-lodge/weddings/) has a plan for groups of 30 or less and 144 rooms. This [side-by-side venue guide](/guides/whitefish-wedding-venues) compares ten options in and around town."
        ]
      },
      {
        id: "seasons",
        heading: "When Glacier Wedding Locations Are Open",
        paragraphs: [
          "Season changes which parts of the park you can use. The park writes permits for dates with expected vehicle access, and a permit does not get you past a closed road. Big Bend, on Going-to-the-Sun Road, is open to cars from early July to mid October.",
          "Several sites near Apgar stay reachable all year, including Apgar Picnic Area Shoreline and Lake McDonald Lodge Beach. Couples who want a winter ski or snowshoe-in ceremony can ask for one on the application. June through September is the busy stretch, with little parking near most locations.",
          "Venue seasons matter too. Glacier Homestead books weddings May through September, while an indoor room, like the Great Room at North Star Ranch or the banquet rooms at Grouse Mountain Lodge, keeps a fall or winter date on track."
        ]
      },
      {
        id: "pair",
        heading: "Pairing a Park Wedding Ceremony or Elopement With a Venue Dinner",
        paragraphs: [
          "Pick the venue first, then choose a wedding location that fits your guest count. A group of 25 cannot use Big Bend, which allows 10. Lake McDonald Lodge Beach and Fish Creek Picnic Area Shoreline allow 30, the Many Glacier Hotel sites allow 15 to 20, and Apgar Amphitheater allows 250.",
          "Build the day around the two-hour window. Guests need time to pay the entrance fee, find parking that cannot be reserved, and drive to dinner. If rain is likely, have the venue ready to host the vows too, since the park offers no indoor backup."
        ],
        table: {
          headers: ["Guest count", "Park locations that fit", "Good venue base"],
          rows: [
            ["2 to 10", "Big Bend, Kintla Lake, most shoreline sites", "A cabin or small lodge near Whitefish or West Glacier"],
            ["11 to 30", "Lake McDonald Lodge Beach, Fish Creek shoreline, 1913 Ranger Station", "A ranch or lodge that sleeps the close family"],
            ["31 to 100", "Avalanche, Many Glacier, or Rising Sun amphitheaters", "A venue with a tent or indoor room for dinner"],
            ["Over 100", "Fish Creek (200) or Apgar (250) amphitheaters", "A large venue in Coram, West Glacier, or Whitefish"]
          ]
        }
      },
      {
        id: "north-star",
        heading: "North Star Ranch as a Montana Wedding Base Near Glacier",
        paragraphs: [
          "North Star Ranch is a private, secluded 40-acre property less than 45 minutes from the Glacier entrance and 8 miles from downtown Whitefish. It borders national forest on two sides, and its wedding lawn looks toward the Glacier mountains.",
          "Close family can stay in the five-bedroom chalet, four cabins, and eight lodge rooms, then gather in the Great Room for dinner. Because it is private land, you can hold the whole wedding there with no park permit and save Glacier for a day trip with your guests.",
          "Eloping with only a few people? Read [how to elope in Montana](/guides/montana-elopement). Planning a destination wedding for a bigger group? [Check dates at North Star Ranch](/#contact)."
        ],
        image: { src: "/images/north-star-ranch-deck-view.jpg", alt: "View over pine forest from a deck at North Star Ranch near Whitefish", caption: "Looking out from the deck at North Star Ranch, 8 miles from downtown Whitefish." }
      }
    ],
    faqs: [
      { question: "Can you have a wedding reception inside Glacier National Park?", answer: "Not at a permitted ceremony site. The park does not allow catered food service, tables, or arches there, so couples hold the reception at a venue outside the park." },
      { question: "What is the closest wedding venue to Glacier National Park?", answer: "Paddle Ridge in West Glacier lists itself as less than a mile from the park, and Great Northern Resort sits just outside the west entrance. Green Valley Ranch in Coram is 15 minutes away." },
      { question: "How much does a wedding venue near Glacier cost?", answer: "Few venues publish prices. Glacier Homestead lists $12,500 for two nights plus an 8% fee, and Green Valley Ranch lists $36,800 to $40,000 for a four-night buyout in 2026. Most others quote by inquiry." },
      { question: "Do wedding guests pay the Glacier entrance fee?", answer: "Yes. The park says the wedding party and guests pay entrance fees, and the permit does not reserve parking." },
      { question: "Can we elope in Glacier National Park instead?", answer: "Yes, with the same Special Use Permit every ceremony needs. Big Bend and Kintla Lake allow 10 people, which fits a Glacier National Park elopement with a photographer and officiant." }
    ],
    related: ["glacier-national-park-micro-wedding", "montana-wedding-venues-with-lodging", "montana-elopement"],
    social: "/social/wedding-venues-near-glacier-national-park.jpg"
  },
  {
    slug: "montana-elopement",
    eyebrow: "Elopement Guide",
    title: "Montana Elopement Guide: How to Elope in Montana Near Glacier",
    seoTitle: "Montana Elopement Guide: How to Elope in Glacier National Park, License Steps and Package Prices | North Star Ranch",
    description: "How to elope in Montana: current license rules, Glacier National Park permits, places with no permit, all-inclusive elopement package and elopement photographer prices, and a private base.",
    hero: "/images/montana-scenic-wedding.jpg",
    heroAlt: "Couple standing in a mountain meadow in Montana after an elopement ceremony",
    readTime: "8 minute read",
    updated: "September 13, 2026",
    quickAnswer: "Get a $53 marriage license in person from a county Clerk of District Court, choose where to say your vows, and return the signed license afterward. Montana has no waiting period, and the license is good in any county for 180 days. In Flathead County, you both need to show up together.",
    sections: [
      {
        id: "license",
        heading: "Montana Elopement Laws: Getting Your Marriage License",
        paragraphs: [
          "For an elopement in Montana's northwest corner, the license office is the Flathead County Clerk of District Court. You start the application online, then both of you appear in person to sign it and pay. The license is ready the same visit.",
          "Some elopement guides still list a rubella blood test. Montana repealed those sections of its marriage law, so there is nothing to take or waive."
        ],
        table: {
          headers: ["Step", "What the county and state law say"],
          rows: [
            ["Apply", "Submit the application online, then appear together in person to sign"],
            ["Bring", "Proof of age, such as a driver's license or birth certificate"],
            ["Pay", "$53 by cash, check, money order, or card (card adds $2.31)"],
            ["Wait", "No waiting period; the license takes effect when issued"],
            ["Use", "Valid in any Montana county for 180 days"],
            ["Afterward", "Return the signed license to the clerk; certified copies are $7 each"]
          ]
        },
        bullets: [
          "Flathead County marriage questions: (406) 758-5659.",
          "Office hours for applications: every business day, 8:00 am to 4:30 pm."
        ]
      },
      {
        id: "officiant",
        heading: "Do You Need an Officiant or Witnesses to Elope in Montana?",
        paragraphs: [
          "Montana law lists who can solemnize a marriage. That includes judges, justices of the peace, mayors, authorized notaries public, tribal judges, and any form of ceremony recognized by a religious group. The same law says that when no one person led the ceremony, one of the couple fills out the certificate.",
          "The state also has a separate route with no ceremony at all, called a declaration of marriage. It needs two witnesses and a visit to the clerk to sign it, and the filing fee is $53.",
          "Online advice on this gets loose. People in a [Reddit thread on a Glacier elopement](https://www.reddit.com/r/Montana/comments/1aks67q/august_elopement/) gave conflicting answers on witnesses. Call the county clerk before your trip and ask how they want the certificate completed for your plan."
        ]
      },
      {
        id: "where",
        heading: "Montana Elopement Locations and Permit Rules",
        paragraphs: [
          "Picking a place to elope comes down to who owns the land. Glacier is the strictest, Forest Service land is the loosest for a small group, and private land only needs the owner's yes."
        ],
        table: {
          headers: ["Place", "Permit rule", "Good to know"],
          rows: [
            ["Glacier National Park", "Special Use Permit for every ceremony, any size; $125 application fee", "Two-hour limit; guest caps by site; no drones"],
            ["National forest land", "Forest Service permit needed for noncommercial groups of 75 or more", "Most elopements fall far below that number"],
            ["Montana state parks", "State Parks lists wedding parties among events needing a Special Use Permit", "Groups over 30 also need a group use permit"],
            ["Private land or a venue", "Owner or venue permission", "Lodging, shelter, and dinner can be on the same property"]
          ]
        }
      },
      {
        id: "glacier",
        heading: "How to Elope in Glacier National Park",
        paragraphs: [
          "Apply up to a year ahead, and at least four weeks before the date. The park counts your elopement photographer and officiant toward each site's limit. Big Bend and Kintla Lake allow 10 people, and Lake Josephine, reached by a one-mile hike, allows 15.",
          "Bring handheld flowers and a small carpet if you want one. Leave the arch, petals, drone, and champagne spray behind. A highly upvoted comment in one [Glacier wedding thread](https://www.reddit.com/r/GlacierNationalPark/comments/1ulq9ww/get_married_at_glacier/) says it well: make sure you have a permit and do not go off trail for photos.",
          "The full list of sites and rules is in the guide to [getting married in Glacier National Park](/guides/glacier-national-park-micro-wedding)."
        ]
      },
      {
        id: "seasons",
        heading: "Winter and Shoulder-Season Elopements",
        paragraphs: [
          "Summer is not the only option. Several park sites stay reachable year-round, including Lake McDonald Lodge Beach, Apgar Picnic Area Shoreline, and the 1913 Ranger Station. If you want a ski or snowshoe-in ceremony, the park asks you to note it on the application.",
          "Plan around the roads. Big Bend on Going-to-the-Sun Road is reachable by car only from early July to mid October, and a permit does not get you past a closure. June through September brings the biggest crowds, so a spring or fall elopement day can feel quieter, though the weather is harder to predict.",
          "Winter elopement packages exist elsewhere in the state too. Lone Mountain Ranch in Big Sky lists a winter version with a private indoor ceremony, a snowshoe tour, and a sleigh ride to dinner."
        ]
      },
      {
        id: "cost",
        heading: "What Montana Elopement Packages and Elopement Photographers Cost",
        paragraphs: [
          "Real couples report a wide range. One pair married at Bowman Lake with a dozen people for $722 by staying at a hostel and cooking their own food. Another couple's Glacier elopement, with a photographer, officiant, permit, and flowers, came to $6,561 before the honeymoon.",
          "In one couple's itemized Glacier elopement, the photographer was the largest cost at $3,100. Here is what a few elopement photographers and planners publish on their own sites."
        ],
        resources: [
          { name: "Lovelight Montana", note: "Photographer serving Glacier, Kalispell, Whitefish, and Bigfork. Classic packages start with two hours of coverage.", price: "From $2,800; packages with planning from $9,800", url: "https://www.lovelightmontana.com/couples-photography/elopement-packages" },
          { name: "Carrie Ann Photography", note: "Glacier National Park and Whitefish elopement and wedding photography.", price: "Elopements and micro weddings from $3,900", url: "https://www.carrieann-photography.net/" },
          { name: "Elope Montana", note: "Glacier and Flathead Valley planning with photography. Its Alpine Lake collection adds an officiant, flowers, and cake at the same starting price.", price: "Collections from $5,000", url: "https://www.elopemontana.com/pricing" },
          { name: "Lone Mountain Ranch, Big Sky", note: "A ranch package with an officiant, flowers, cake, and meals. It is in Big Sky in southwest Montana, not near Glacier, and rooms are extra.", price: "$5,000 for 3 people; $10,000 for 4 to 10", url: "https://lonemountainranch.com/big-sky-big-love-elopement-package/" },
          { name: "The Ranch at Rock Creek, Philipsburg", note: "An all-inclusive resort elopement with cake, flowers, a day-of lunch, and a celebration dinner. It is in southwest Montana, and nightly rates are extra.", price: "$15,000 for 4 to 8 people", url: "https://theranchatrockcreek.com/weddings/elopements/" }
        ]
      },
      {
        id: "base",
        heading: "Give Your Elopement Day a Home Base Near Whitefish",
        paragraphs: [
          "An elopement near Glacier often means a long wedding day. One couple on Reddit got ready at a rental and then drove an hour and a half to their ceremony spot. Having your room, your meal, and a warm place to wait out rain in one location takes pressure off the whole trip.",
          "North Star Ranch works well for this. It is private land 8 miles from downtown Whitefish and less than 45 minutes from the Glacier entrance, bordering forest land on two sides. You can hold the ceremony on the lawn with no park permit, stay in a cabin or the five-bedroom chalet, and bring a few family members who get their own rooms in the lodge.",
          "[Ask North Star Ranch about elopement dates](/#contact), or compare other [venues near the park](/guides/wedding-venues-near-glacier-national-park)."
        ],
        image: { src: "/images/north-star-ranch-cabin.jpg", alt: "Private cabin with a wraparound deck in the pines at North Star Ranch", caption: "A private cabin at North Star Ranch, a short drive from Whitefish and Glacier." }
      }
    ],
    faqs: [
      { question: "Can you marry yourself in Montana?", answer: "Montana law has the couple fill out the marriage certificate themselves when no one person led the ceremony. The state also has a declaration of marriage with no ceremony, which needs two witnesses and a clerk visit. Confirm your plan with the county clerk." },
      { question: "Is there a waiting period to get married in Montana?", answer: "No. A Montana marriage license takes effect when it is issued and expires after 180 days." },
      { question: "Do you need a blood test to get married in Montana?", answer: "No. Montana repealed its old blood test sections, even though some elopement guides still mention a rubella test." },
      { question: "Do you need a permit to elope in Glacier National Park?", answer: "Yes. Every elopement and vow exchange in the park needs a Special Use Permit, and the application fee is $125." },
      { question: "Are there all-inclusive elopement packages in Montana?", answer: "Yes. Elope Montana lists Glacier-area collections from $5,000 with photography, and its Alpine Lake collection adds an officiant, flowers, and cake. Lone Mountain Ranch and The Ranch at Rock Creek sell ranch packages, with rooms billed separately." },
      { question: "Do you need a permit to elope in a national forest in Montana?", answer: "Usually not for a small group. The Forest Service requires a permit for noncommercial group use when 75 or more people take part." }
    ],
    related: ["glacier-national-park-micro-wedding", "wedding-venues-near-glacier-national-park", "montana-micro-wedding-cost"],
    social: "/social/montana-elopement.jpg"
  }
];

export const guideMap = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
