export interface ProjectDetail {
  slug: string;
  title: string;
  client: string;
  location: string;
  category: "retail" | "corporate" | "commercial" | "residential";
  categoryLabel: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  featuredVideo?: string;
  scopeOfWork: string;
  area: string;
  completionYear: string;
  timeline: string;
  productsUsed: string[];
  challenge: string;
  solution: string;
  results: string[];
  clientFeedback?: {
    quote: string;
    author: string;
    designation: string;
  };
  metaTitle: string;
  metaDescription: string;
}

export const ALL_PROJECTS: ProjectDetail[] = [
  {
    slug: "jio-stores-retail-facade",
    title: "Jio Commercial Retail Stores",
    client: "Reliance Jio Infocomm",
    location: "Multiple Outlets Across Hyderabad & Telangana",
    category: "retail",
    categoryLabel: "Retail Chain Storefronts",
    tagline: "Turnkey architectural frameless toughened glass retail storefronts and heavy-traffic entrance doors for Jio Stores.",
    heroImage: "/images/storefront_real.jpg",
    galleryImages: [
      "/images/storefront_real.jpg",
      "/images/storefront_real_hd.jpg",
      "/images/project_double_doors.jpg"
    ],
    scopeOfWork: "Turnkey supply, CNC diamond polishing, and precision installation of 12mm Saint-Gobain toughened safety glass shopfronts, frameless swing doors, and heavy-duty architectural hardware across multiple commercial retail outlets.",
    area: "Over 18,500 Sq.Ft across multiple stores",
    completionYear: "2023 - 2025",
    timeline: "Rolled out on rapid 4-day fitout schedules per outlet",
    productsUsed: [
      "12mm Saint-Gobain Toughened Safety Glass",
      "Dorma BTS 75V Heavy-Duty Hydraulic Floor Springs",
      "SS 304 Grade Commercial Patch Fittings",
      "Custom 1200mm Long Stainless Steel Push/Pull Handles",
      "Perimeter Clear Polycarbonate Dust & Acoustic Seals"
    ],
    challenge: "Executing rapid, high-precision retail shopfront installations in live commercial high-street zones with strict mall and brand compliance guidelines, tight overnight working windows, and zero tolerance for measurement errors.",
    solution: "World Art Glass deployed dedicated mobile digital laser measurement teams to conduct millimeter-accurate site surveys. Panels were prefabricated at our Goshamahal facility with automated CNC edge polishing and pre-drilled hardware cutouts, allowing complete on-site assembly and handover within 48 to 72 hours per retail outlet.",
    results: [
      "100% compliant with corporate brand architectural standards",
      "Zero customer downtime during store handovers",
      "High impact resistance withstanding heavy daily commercial foot traffic",
      "Unobstructed transparency maximizing product visibility from street corners"
    ],
    clientFeedback: {
      quote: "World Art Glass has consistently delivered flawless toughened glass shopfronts on extremely demanding timelines. Their precision and professional installation teams make them our first choice for commercial retail fitouts in Hyderabad.",
      author: "Retail Project Infrastructure Team",
      designation: "Commercial Operations, Hyderabad"
    },
    metaTitle: "Jio Retail Store Glass Facades & Doors | World Art Glass Hyderabad",
    metaDescription: "Case Study: Reliance Jio Stores architectural retail glass storefronts executed with 12mm Saint-Gobain toughened glass and Dorma fittings by World Art Glass Hyderabad."
  },
  {
    slug: "peter-england-retail-front",
    title: "Peter England Flagship Showroom",
    client: "Peter England (Aditya Birla Fashion & Retail)",
    location: "Hyderabad, Telangana",
    category: "retail",
    categoryLabel: "Retail Chain Storefronts",
    tagline: "Full-height panoramic frameless glass entrance elevation with brushed stainless steel hardware and ultra-clear visibility.",
    heroImage: "/images/project_double_doors.jpg",
    galleryImages: [
      "/images/project_double_doors.jpg",
      "/images/storefront_real.jpg",
      "/images/project_grid_doors_v2.jpg"
    ],
    scopeOfWork: "Complete 12mm Saint-Gobain Extra-Clear Toughened Glass showroom entrance front, double-leaf hydraulic swing entrance doors, and interior merchandise glass display dividers.",
    area: "3,400 Sq.Ft Showroom Entrance & Interior",
    completionYear: "2024",
    timeline: "Completed in 6 Working Days",
    productsUsed: [
      "12mm Saint-Gobain Extra-Clear Toughened Glass",
      "Heavy-Duty Ozone Architectural Top & Bottom Patch Fittings",
      "Ozone Hydraulic Concealed Floor Closers (90° Hold-Open)",
      "Brushed Matte Finish Stainless Steel Architectural Handles",
      "Concealed Bottom Deadbolt Security Locks"
    ],
    challenge: "The showroom required maximum front-facing transparency to highlight apparel collections from the shopping corridor, while demanding structural durability for continuous pedestrian entry throughout 12-hour retail cycles.",
    solution: "We engineered a clean frameless facade with 12mm Saint-Gobain low-iron glass, minimizing optical distortion and green edge tint. Heavy-duty Dorma/Ozone floor springs were countersunk into the granite threshold, delivering balanced, effortless door swings.",
    results: [
      "Dramatic increase in retail store walk-ins due to crystal-clear visual appeal",
      "Tested for over 500,000 smooth opening cycles with zero sagging",
      "Pristine handover executed ahead of grand opening launch"
    ],
    clientFeedback: {
      quote: "The glass facade transformed the store entrance completely. World Art Glass delivered exceptional craftsmanship with zero hassle and immaculate cleanliness.",
      author: "Store Operations Manager",
      designation: "Aditya Birla Fashion & Retail, Hyderabad"
    },
    metaTitle: "Peter England Showroom Glass Entrance | World Art Glass Hyderabad",
    metaDescription: "Case Study: Peter England showroom 12mm Saint-Gobain extra-clear frameless glass entrance and double doors installed in Hyderabad by World Art Glass."
  },
  {
    slug: "being-human-clothing-store",
    title: "Being Human Fashion Store",
    client: "Being Human Clothing Retail",
    location: "Prominent Shopping Mall, Hyderabad",
    category: "retail",
    categoryLabel: "Retail Chain Storefronts",
    tagline: "Contemporary retail shopfront with tall 12mm toughened glass panels and custom architectural pull handles.",
    heroImage: "/images/storefront_real_hd.jpg",
    galleryImages: [
      "/images/storefront_real_hd.jpg",
      "/images/project_double_doors.jpg",
      "/images/cat_frameless_sliding_doors.jpg"
    ],
    scopeOfWork: "Design, CNC fabrication, and installation of a 10.5-foot high frameless toughened glass entrance, double swing glass doors with concealed overhead pivots, and dressing room mirrors.",
    area: "2,800 Sq.Ft Retail Elevation & Mirrors",
    completionYear: "2024",
    timeline: "Completed in 5 Working Days",
    productsUsed: [
      "12mm Saint-Gobain High-Strength Toughened Glass",
      "Dorma Hydraulic BTS Floor Springs",
      "Grade 304 Polished Stainless Steel Heavy Handles",
      "Saint-Gobain Mirox Copper-Free Dressing Mirrors",
      "Acoustic Gaskets & Dust Strips"
    ],
    challenge: "The shopping mall prohibited any loud cutting or drilling during retail hours and mandated strict adherence to structural safety standards for mall patrons.",
    solution: "World Art Glass pre-fabricated every single panel at our Hyderabad CNC factory. All holes, countersinks, and edge polishes were completed before tempering. On-site installation was completed overnight within quiet non-operating mall hours.",
    results: [
      "100% compliant with commercial shopping mall safety regulations",
      "Flawless 10.5-foot tall single-span glass panels with zero deflection",
      "Completed and certified on schedule for retail grand opening"
    ],
    clientFeedback: {
      quote: "World Art Glass worked through the night to ensure our store was completely ready for launch. The quality of the Saint-Gobain glass and Dorma fittings is world-class.",
      author: "Retail Project Head",
      designation: "Being Human Clothing, Hyderabad"
    },
    metaTitle: "Being Human Storefront Glass Solution | World Art Glass Hyderabad",
    metaDescription: "Case Study: Being Human Clothing retail store glass entrance and fitting room mirrors installed by World Art Glass Hyderabad."
  },
  {
    slug: "hindware-experience-centre",
    title: "Hindware Experience Centre",
    client: "Hindware Commercial Showroom",
    location: "Hyderabad, Telangana",
    category: "commercial",
    categoryLabel: "Commercial Exterior Elevation",
    tagline: "Complete architectural exterior elevation featuring point-fixed spider structural glazing and premium metallic ACP cladding.",
    heroImage: "/images/project_hindware_glazing_v2.jpg",
    galleryImages: [
      "/images/project_hindware_glazing_v2.jpg",
      "/images/cat_acp_structural_glazing.jpg",
      "/images/hero_glazing_profiles.jpg"
    ],
    featuredVideo: "/videos/gallery_spider_glazing_site.mp4",
    scopeOfWork: "Complete exterior facade engineering: 12mm Saint-Gobain Solar Control Toughened Glass, Grade 316 Stainless Steel point-fixed spider glass fittings, and Aludecor metallic Aluminium Composite Panel (ACP) exterior cladding.",
    area: "3,200 Sq.Ft Exterior Elevation",
    completionYear: "2023",
    timeline: "Completed in 12 Working Days",
    productsUsed: [
      "12mm Saint-Gobain Solar Control Toughened Glass",
      "Investment-Cast SS 316 Heavy 4-Way & 2-Way Spider Brackets",
      "Articulated Countersunk Swivel Routels",
      "Aludecor 4mm PVDF Metallic Cladding Sheets",
      "Dow Corning 789 Weatherproofing Neutral Silicone"
    ],
    challenge: "Constructing a striking two-story exterior facade exposed to high Hyderabad solar heat, intense monsoon rain, and heavy roadside dust, while providing panoramic visibility into the interior showroom.",
    solution: "We integrated Saint-Gobain Solar Control glass to reject solar heat ingress, paired with marine-grade SS 316 spider brackets anchored into reinforced structural steel columns. Precision silicone weather-sealing ensured 100% leak-proof long-term performance.",
    results: [
      "Significant reduction in showroom air conditioning energy load",
      "Award-winning exterior curb appeal recognized by architectural community",
      "Zero water or air infiltration verified through water-spray testing"
    ],
    clientFeedback: {
      quote: "The facade built by World Art Glass made our experience centre a true landmark on the road. The spider glazing and ACP detailing is executed to perfection.",
      author: "Regional Project Director",
      designation: "Hindware Commercial Properties"
    },
    metaTitle: "Hindware Experience Centre Spider Glazing | World Art Glass Hyderabad",
    metaDescription: "Case Study: Complete structural spider glazing and ACP exterior elevation executed for the Hindware Experience Centre in Hyderabad by World Art Glass."
  },
  {
    slug: "it-corporate-boardroom-hitec-city",
    title: "Global IT Software Corporate Cabins",
    client: "Multinational IT & Cloud Services Provider",
    location: "Hitec City / Madhapur, Hyderabad",
    category: "corporate",
    categoryLabel: "Corporate & IT Partitions",
    tagline: "Acoustic 12mm Saint-Gobain glass partitions and boardroom cabins with 38dB noise attenuation and minimalist black frames.",
    heroImage: "/images/project_office_cabin.jpg",
    galleryImages: [
      "/images/project_office_cabin.jpg",
      "/images/cat_office_partitions.jpg",
      "/images/cat_black_slim_partitions_v2.jpg"
    ],
    featuredVideo: "/videos/gallery_black_profile_office_cabins.mp4",
    scopeOfWork: "Fabrication and installation of full-height acoustic glass conference rooms, director private suites, collaboration pods, and double-leaf glass swing doors with Dorma floor closers.",
    area: "4,500 Sq.Ft Office Glazing",
    completionYear: "2025",
    timeline: "Completed in 7 Working Days",
    productsUsed: [
      "12mm Saint-Gobain Acoustic Toughened Glass",
      "45mm Matte Black High-Tensile Aluminium Profiles",
      "Dorma Hydraulic Floor Closers & Heavy SS 304 D-Handles",
      "EPDM Acoustic Perimeter Compression Gaskets",
      "Custom Privacy Frosted Geometric Film Bands"
    ],
    challenge: "The client required strict sound privacy (minimum 38dB sound reduction) for confidential client video calls and board meetings, while maintaining an open, luminous modern office feel.",
    solution: "We installed 12mm Saint-Gobain toughened glass seated in vibration-isolated aluminium channels with dual EPDM acoustic gaskets. Doors were fitted with automatic drop-down bottom acoustic seals that engage when closed, preventing sound leakage.",
    results: [
      "Verified acoustic sound privacy of 38dB across all conference rooms",
      "Abundant natural daylight penetration across deep interior office zones",
      "Seamless corporate design aesthetic praised by global executive leadership"
    ],
    clientFeedback: {
      quote: "World Art Glass delivered our Hitec City office fitout on a very tight schedule with unmatched professionalism. The acoustic privacy in our conference rooms is superb.",
      author: "Director of Facilities",
      designation: "Global Cloud Services, Hitec City"
    },
    metaTitle: "IT Corporate Glass Partitions Hitec City | World Art Glass Hyderabad",
    metaDescription: "Case Study: Acoustic 12mm Saint-Gobain glass partitions for IT corporate cabins and boardrooms in Hitec City, Hyderabad by World Art Glass."
  },
  {
    slug: "financial-district-grid-partitions",
    title: "FinTech Enterprise 45mm Grid Doors",
    client: "FinTech Enterprise Innovation Hub",
    location: "Financial District, Gachibowli, Hyderabad",
    category: "corporate",
    categoryLabel: "Corporate & IT Partitions",
    tagline: "Industrial loft-style black slim 45mm aluminium grid partitions and synchronized sliding glass systems.",
    heroImage: "/images/project_grid_doors_v2.jpg",
    galleryImages: [
      "/images/project_grid_doors_v2.jpg",
      "/images/cat_black_slim_partitions_v2.jpg",
      "/images/project_double_doors.jpg"
    ],
    featuredVideo: "/videos/gallery_black_slim_double_doors_demo.mp4",
    scopeOfWork: "Supply and installation of 45mm matte black architectural aluminium grid walls, acoustic double-leaf pivot doors, and breakout glass cubicles across a 5,800 sq.ft floor plate.",
    area: "5,800 Sq.Ft Interior Partitions",
    completionYear: "2024",
    timeline: "Completed in 10 Working Days",
    productsUsed: [
      "10mm Saint-Gobain Toughened Safety Glass",
      "45mm Minimalist Matte Black Extruded Aluminium Frames",
      "Ozone Hydraulic Concealed Floor Pivots",
      "Architectural Matte Black Rectangular Pull Handles (1200mm)",
      "VHB Bonded Industrial Grid Mullions"
    ],
    challenge: "The interior architect specified an authentic Manhattan industrial loft grid design with razor-thin profiles, but required heavy acoustic isolation and durability for daily tech enterprise operations.",
    solution: "We engineered custom 45mm profiles with internal steel stiffeners and high-bond structural VHB grid mullions, giving the appearance of authentic divided glass with the structural integrity of single monolithic 10mm toughened sheets.",
    results: [
      "Award-winning contemporary workplace design featured in interior design journals",
      "Heavy acoustic sound containment across all private interview suites",
      "Silky smooth hydraulic door closures tested to 500,000 cycles"
    ],
    clientFeedback: {
      quote: "The black grid glass partitions created an inspiring, modern environment for our software engineers. World Art Glass executed the architect's vision to the millimeter.",
      author: "Chief Technology Officer",
      designation: "FinTech Innovation Hub, Gachibowli"
    },
    metaTitle: "Black Slim Grid Partitions Financial District | World Art Glass Hyderabad",
    metaDescription: "Case Study: Industrial black slim 45mm grid glass partitions and doors installed for a FinTech corporate hub in Gachibowli, Hyderabad."
  },
  {
    slug: "jubilee-hills-villa-balustrades",
    title: "Jubilee Hills Luxury Villa Balustrades",
    client: "Private Luxury Residence",
    location: "Road No. 36, Jubilee Hills, Hyderabad",
    category: "residential",
    categoryLabel: "Luxury Residential Glazing",
    tagline: "Seamless panoramic 12mm toughened and laminated glass balustrades with marine-grade SS 316 spigots and continuous base channels.",
    heroImage: "/images/cat_glass_railings.jpg",
    galleryImages: [
      "/images/cat_glass_railings.jpg",
      "/images/hero_luxury_terrace_v2.jpg",
      "/images/architectural_glass_craftsmanship.jpg"
    ],
    scopeOfWork: "Frameless panoramic glass balustrades installed on outdoor multi-tier balconies, infinity pool deck, and internal cantilevered floating marble staircase.",
    area: "1,800 Sq.Ft Glass Balustrades",
    completionYear: "2025",
    timeline: "Completed in 5 Working Days",
    productsUsed: [
      "12mm Saint-Gobain Extra-Clear Toughened Glass",
      "13.52mm SGP Laminated Glass for high-elevation balconies",
      "Solid Investment Cast SS 316 Square Mirror Spigots",
      "Hilti Chemical Epoxy High-Tensile Anchor Studs",
      "Micro-Slotted Stainless Steel Top Handrail"
    ],
    challenge: "Providing absolute structural fall protection on high-elevation terrace balconies overlooking the city while maintaining 100% unobstructed views with zero visual clutter.",
    solution: "We utilized 13.52mm laminated toughened glass for elevated parapets, anchored with solid SS 316 square spigots chemically bonded into structural concrete using Hilti epoxy resin. Top edges were diamond-polished to a high gloss.",
    results: [
      "Unbroken 360-degree panoramic view of Jubilee Hills hillsides",
      "Compliant with international balustrade impact safety standards",
      "Corrosion-free performance through intense monsoon weather"
    ],
    clientFeedback: {
      quote: "The glass railing installation is rock solid and completely transparent. It has completely elevated the luxury aesthetic of our home.",
      author: "Villa Owner",
      designation: "Jubilee Hills, Hyderabad"
    },
    metaTitle: "Jubilee Hills Villa Glass Balustrades | World Art Glass Hyderabad",
    metaDescription: "Case Study: Luxury frameless glass railings and balustrades with SS 316 spigots for a private residence in Jubilee Hills, Hyderabad."
  },
  {
    slug: "nanakramguda-executive-cabins",
    title: "Executive Suites & Curved Glass Cabins",
    client: "Corporate Venture Capital Group",
    location: "Nanakramguda, Hyderabad",
    category: "corporate",
    categoryLabel: "Corporate & IT Partitions",
    tagline: "Luxury curved toughened glass partitions with rose-gold slim aluminium profiles and acoustic sealing.",
    heroImage: "/images/office_partition_hd.jpg",
    galleryImages: [
      "/images/office_partition_hd.jpg",
      "/images/cat_black_slim_partitions_v2.jpg",
      "/images/project_office_cabin.jpg"
    ],
    featuredVideo: "/videos/luxury_office_curved_glass_showcase.mp4",
    scopeOfWork: "Turnkey fabrication and installation of custom 12mm curved Saint-Gobain toughened glass partitions, custom rose-gold anodized slim aluminium frames, and concealed acoustic swing doors.",
    area: "2,600 Sq.Ft Executive Glass Suite",
    completionYear: "2025",
    timeline: "Completed in 8 Working Days",
    productsUsed: [
      "12mm Custom Curved Saint-Gobain Toughened Glass",
      "Anodized Brushed Rose-Gold Slim Aluminium Profiles",
      "Dorma Soft-Closing Concealed Hydraulic Hinges",
      "Integrated LED Base Lighting Channels",
      "38dB Acoustic Interlayer Seals"
    ],
    challenge: "Fabricating custom cylindrical curved toughened glass panels to exact radii with zero optical distortion, and ensuring seamless integration with straight glass corridor walls.",
    solution: "World Art Glass utilized 3D digital laser scanning to map the exact curved floor radius on site. The glass was thermally curved and toughened with automated precision, delivering seamless joints and flawless rose-gold profiles.",
    results: [
      "Stunning fluid curved architectural lines in executive corridors",
      "Superior 38dB acoustic privacy for sensitive financial negotiations",
      "Praised by client as their flagship corporate interior feature"
    ],
    clientFeedback: {
      quote: "The curved rose-gold glass cabins are pure art. Every visitor to our Nanakramguda office is mesmerized by the precision and craftsmanship.",
      author: "Managing Partner",
      designation: "Venture Capital Partners, Nanakramguda"
    },
    metaTitle: "Curved Glass Cabins Nanakramguda | World Art Glass Hyderabad",
    metaDescription: "Case Study: 12mm curved Saint-Gobain toughened glass partitions with rose-gold slim profiles for executive suites in Nanakramguda, Hyderabad."
  },
  {
    slug: "banjara-hills-fluted-telescopic",
    title: "Fluted Telescopic Kitchen Partition",
    client: "High-Rise Luxury Penthouse",
    location: "Banjara Hills, Hyderabad",
    category: "residential",
    categoryLabel: "Luxury Residential Glazing",
    tagline: "4-track synchronized fluted glass telescopic sliding system dividing open modular kitchen from living lounge.",
    heroImage: "/images/architectural_glass_craftsmanship.jpg",
    galleryImages: [
      "/images/architectural_glass_craftsmanship.jpg",
      "/images/cat_custom_glass_interiors.jpg",
      "/images/project_double_doors.jpg"
    ],
    featuredVideo: "/videos/gallery_rosegold_telescopic_kitchen_partition.mp4",
    scopeOfWork: "4-panel synchronized top-hung telescopic sliding partition using 10mm toughened fluted (reeded) glass and rose-gold anodized aluminium track framework.",
    area: "14 Feet Span x 9.5 Feet Height",
    completionYear: "2024",
    timeline: "Completed in 4 Working Days",
    productsUsed: [
      "10mm Saint-Gobain Toughened Reeded (Fluted) Glass",
      "Top-Hung Telescopic Synchronized Sliding Track Kit",
      "Brushed Rose-Gold Minimalist Frame System",
      "Dual-Direction Hydraulic Soft-Close Dampeners",
      "Concealed Bottom Floor Guide Pins (Zero Floor Track)"
    ],
    challenge: "Isolating Indian cooking aromas and kitchen noise while preserving an expansive open-concept feel and allowing Italian marble flooring to flow uninterrupted without floor tracks.",
    solution: "We engineered a 100% top-hung 4-panel telescopic system. Moving the lead door smoothly glides all 4 panels into a discreet parking pocket against the dining wall, opening 75% of the total span in one motion.",
    results: [
      "Complete aroma and noise isolation during active cooking",
      "Zero floor tracks to trip on or trap kitchen debris",
      "Fluted glass provides elegant diffused light and textured luxury"
    ],
    clientFeedback: {
      quote: "The telescopic fluted partition is the best investment we made in our penthouse. It glides with a single touch and looks like a five-star hotel installation.",
      author: "Penthouse Owner",
      designation: "Banjara Hills, Hyderabad"
    },
    metaTitle: "Fluted Telescopic Glass Partition Banjara Hills | World Art Glass",
    metaDescription: "Case Study: Synchronized 4-track fluted glass telescopic partition installed in a luxury penthouse in Banjara Hills, Hyderabad by World Art Glass."
  }
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}
