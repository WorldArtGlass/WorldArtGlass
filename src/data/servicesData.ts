export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: "commercial" | "doors-facades" | "residential-decorative";
  categoryLabel: string;
  tagline: string;
  badge: string;
  heroImage: string;
  featuredVideo?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string[];
  specifications: { label: string; value: string }[];
  applications: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  hardwareOptions: string[];
  glassTypes: string[];
  faqs: { q: string; a: string }[];
}

export const ALL_SERVICES: ServiceDetail[] = [
  {
    slug: "toughened-glass",
    title: "Toughened Glass",
    shortTitle: "Toughened Glass",
    category: "commercial",
    categoryLabel: "Core Glass Solutions",
    tagline: "High-strength thermal toughened safety glass with CNC diamond-polished edges and official Saint-Gobain certification.",
    badge: "Saint-Gobain Certified",
    heroImage: "/images/cat_toughened_glass.jpg",
    metaTitle: "Toughened Glass Supplier & Dealer in Hyderabad | 8mm, 10mm, 12mm Saint-Gobain",
    metaDescription: "Leading Toughened Glass Supplier in Hyderabad. Direct factory wholesale & custom supply of 5mm to 19mm genuine Saint-Gobain toughened safety glass with CNC polishing.",
    keywords: [
      "Toughened Glass Supplier in Hyderabad",
      "Saint-Gobain Glass Dealer in Hyderabad",
      "12mm Toughened Glass Hyderabad",
      "10mm Toughened Glass Price Hyderabad",
      "Glass Company in Hyderabad"
    ],
    overview: [
      "World Art Glass is a premier supplier, fabricator, and installation specialist for genuine Saint-Gobain Toughened Safety Glass across Hyderabad and Telangana. Our toughened glass undergoes rigorous horizontal thermal tempering at temperatures exceeding 650°C followed by high-pressure air quenching, yielding glass that is 4 to 5 times stronger than standard annealed glass.",
      "Every glass panel is fabricated with computer-controlled CNC edge polishing, custom water-jet hole drilling, and precision cutouts tailored to Dorma, Ozone, and Geze architectural hardware fittings. When broken under extreme impact, our toughened glass fractures into harmless blunt cubic granules, eliminating the risk of sharp injury.",
      "As an established glass company in Hyderabad since 2007 with 19+ years of mastery, we provide complete transparency: 100% genuine Saint-Gobain glass with permanent laser-etched logos, official GST invoices, and free laser site measurement across Hitec City, Gachibowli, Banjara Hills, Jubilee Hills, and Secunderabad."
    ],
    specifications: [
      { label: "Available Thicknesses", value: "5mm, 6mm, 8mm, 10mm, 12mm, 15mm, 19mm" },
      { label: "Primary Glass Brand", value: "100% Genuine Saint-Gobain (Clear, Extra-Clear Diamant, Tinted)" },
      { label: "Tempering Standard", value: "Conforms to IS 2553 (Part 1) and EN 12150-1" },
      { label: "Edge Treatment", value: "CNC Flat Diamond Polish, Beveled Polish, Pencil Polish" },
      { label: "Impact Strength", value: "4 to 5 times greater than annealed glass" },
      { label: "Thermal Resistance", value: "Withstands thermal shock differentials up to 250°C" },
      { label: "Custom Processing", value: "Water-jet cutouts, countersunk hole drilling, notch profiling" },
      { label: "Billing & Compliance", value: "100% Official GST Invoicing with batch authenticity" }
    ],
    applications: [
      { title: "Corporate Office Partitions", desc: "Acoustic room dividers, boardrooms, and director suites in 10mm & 12mm." },
      { title: "Commercial Showrooms & Facades", desc: "Heavy-traffic retail entrances, spider glazing, and curtain elevations." },
      { title: "Frameless Shower Cubicles", desc: "Safety-tested 10mm toughened glass with water-repellent nano-coatings." },
      { title: "Balustrades & Staircase Railings", desc: "Heavy impact resistant 12mm or laminated toughened glass for elevated safety." },
      { title: "Industrial & Canopy Glazing", desc: "Laminated SGP toughened glass for skylights, terrace pergolas, and canopies." }
    ],
    benefits: [
      { title: "Maximum Safety (Class A)", desc: "Crumples into small blunt fragments upon catastrophic impact to prevent injuries." },
      { title: "Authentic Laser Engraving", desc: "Permanent Saint-Gobain logo etched on every panel to ensure 100% authenticity." },
      { title: "Millimetric Precision", desc: "Computerized cutting and CNC edge profiling ensure zero gap installations." },
      { title: "Fast Turnaround Time", desc: "Direct factory processing ensures delivery within 4 to 6 working days." }
    ],
    hardwareOptions: ["Dorma", "Ozone", "Geze", "Hafele", "Hardwyn SS 304/316"],
    glassTypes: ["Saint-Gobain Clear Float", "Saint-Gobain Diamant Extra-Clear", "Euro Grey Tinted", "Dark Bronze Tinted", "Frosted Acid Etched"],
    faqs: [
      {
        q: "How can I verify that the toughened glass is 100% genuine Saint-Gobain?",
        a: "Every piece of toughened glass processed by World Art Glass features a permanent, indelible laser-engraved Saint-Gobain brand logo and quality certification code at the corner. Additionally, we provide official GST invoices specifying Saint-Gobain batch details."
      },
      {
        q: "What is the recommended glass thickness for office partitions?",
        a: "For standard office partitions up to 8.5 feet in height, 10mm Saint-Gobain toughened glass is the industry benchmark. For floor-to-ceiling heights between 9 and 12 feet, 12mm toughened glass is strictly recommended to prevent deflection and provide superior acoustic insulation."
      },
      {
        q: "Can toughened glass be cut or drilled after it has been tempered?",
        a: "No. Toughened glass cannot be cut, drilled, or edge-polished after tempering because internal mechanical stresses will cause immediate fragmentation. All measurements, cutouts for handles, and hinge holes must be executed prior to tempering using our digital laser site survey."
      },
      {
        q: "What is your typical turnaround time for custom toughened glass in Hyderabad?",
        a: "Following the free digital laser site survey and approval of drawings, custom glass cutting, CNC edge polishing, and thermal tempering takes approximately 4 to 6 working days. Installation is executed in 1 to 2 days."
      }
    ]
  },
  {
    slug: "office-glass-partitions",
    title: "Office Glass Partitions",
    shortTitle: "Office Partitions",
    category: "commercial",
    categoryLabel: "Commercial Partitions",
    tagline: "Modern acoustic glass partitions for IT corporate cabins, conference rooms, executive suites, and collaborative workspaces across Hyderabad.",
    badge: "Most Popular Corporate Solution",
    heroImage: "/images/cat_office_partitions.jpg",
    featuredVideo: "/videos/gallery_black_profile_office_cabins.mp4",
    metaTitle: "Office Glass Partition in Hyderabad | Office Glass Partition Contractor",
    metaDescription: "Top Office Glass Partition Contractor in Hyderabad. Acoustic 10mm & 12mm Saint-Gobain glass partitions, frameless and aluminium framed cabins for IT companies and offices.",
    keywords: [
      "Office Glass Partition in Hyderabad",
      "Office Glass Partition Contractor",
      "Glass Partition in Hyderabad",
      "Luxury Office Glass Partition",
      "Glass Company in Hyderabad"
    ],
    overview: [
      "World Art Glass is Hyderabad's most trusted contractor for turnkey Office Glass Partitions, having executed over 800,000 square feet of corporate glass installations across Hitec City, Gachibowli, Madhapur, Financial District, and Nanakramguda. We create pristine, sound-insulated workspaces that balance transparency with executive privacy.",
      "Our office partition systems are engineered with 10mm or 12mm Saint-Gobain toughened safety glass, paired with premium slim anodized aluminium track channels or solid stainless steel hardware. We integrate high-performance acoustic perimeter seals delivering sound attenuation ratings up to 38dB to 42dB for confidential boardrooms.",
      "Whether your architectural plan calls for full-height frameless glass, frosted privacy films, switchable smart PDLC glass, or integrated swing/sliding doors with soft-closing Dorma mechanisms, our in-house technicians ensure spotless execution on tight corporate fitout schedules."
    ],
    specifications: [
      { label: "Glass Options", value: "10mm / 12mm Saint-Gobain Toughened Safety Glass" },
      { label: "Acoustic Rating", value: "34dB to 42dB Sound Attenuation with EPDM Acoustic Gaskets" },
      { label: "Partition Height", value: "Custom fabricated up to 12.5 feet single-span" },
      { label: "Profile Channels", value: "25mm / 45mm Architectural Anodized Aluminium (Matte Black, Silver, Rose-Gold)" },
      { label: "Door Configurations", value: "Frameless Swing, Sliding Track, Floor-Spring Pivots, Soft-Close Sliding" },
      { label: "Privacy Treatments", value: "Frosted Vinyl Bands, Full Acid-Etch, Switchable PDLC Smart Glass" },
      { label: "Hardware Standards", value: "Heavy-Duty SS 304 Fittings tested to 500,000 cycles" },
      { label: "Turnaround Time", value: "5 to 8 working days from laser survey to turnkey handover" }
    ],
    applications: [
      { title: "Executive Director Cabins", desc: "Private, acoustic luxury cabins with custom frosted motifs and rose-gold or matte black frames." },
      { title: "Conference & Boardrooms", desc: "High-acoustic attenuation glass partitions with integrated presentation screens and privacy blinds." },
      { title: "Collaborative Meeting Pods", desc: "Transparent huddle spaces that foster team interaction while containing office noise." },
      { title: "IT Company Open Floors", desc: "Segmented departmental zones maintaining natural light penetration across deep floor plates." }
    ],
    benefits: [
      { title: "Superior Acoustic Privacy", desc: "Engineered acoustic perimeter gaskets keep confidential conversations inside the meeting room." },
      { title: "Maximized Daylight Distribution", desc: "Allows natural sunlight to reach interior office desks, reducing corporate lighting bills." },
      { title: "Fast Modular Assembly", desc: "Pre-fabricated channels ensure clean, rapid installation with minimal disruption to ongoing operations." },
      { title: "Modern International Aesthetic", desc: "Transforms ordinary office interiors into sleek, Silicon Valley style corporate environments." }
    ],
    hardwareOptions: ["Dorma Hydraulic Floor Closers", "Ozone Architectural Hardware", "Geze Germany", "SS 304 D-Handles & Locks"],
    glassTypes: ["10mm / 12mm Saint-Gobain Clear", "Saint-Gobain Diamant Low-Iron", "Acoustic PVB Laminated Glass", "Switchable PDLC Smart Glass"],
    faqs: [
      {
        q: "What acoustic noise reduction can we expect from an office glass partition?",
        a: "Standard 10mm toughened glass partitions provide approximately 32dB to 34dB sound reduction. With 12mm toughened glass or 11.52mm acoustic PVB laminated glass combined with EPDM perimeter gaskets and drop-down acoustic door bottom seals, sound reduction reaches 38dB to 42dB, sufficient for confidential boardroom discussions."
      },
      {
        q: "Do you supply and install custom frosted privacy films with company logos?",
        a: "Yes. We offer computer-plotted frosted graphic films, gradient privacy patterns, and precision-cut corporate logos directly installed on site without bubbles or peeling."
      },
      {
        q: "Can office partitions be disassembled and relocated if we move office premises?",
        a: "Yes. Our slim profile aluminium partition systems are modular. The aluminium channels and hardware can be disassembled and re-installed, provided the ceiling heights and panel dimensions match the new layout."
      }
    ]
  },
  {
    slug: "black-slim-profile-glass-partitions",
    title: "Black Slim Profile Aluminium Glass Partitions",
    shortTitle: "Black Slim Partitions",
    category: "commercial",
    categoryLabel: "Commercial Partitions",
    tagline: "Ultra-slim 25mm and 45mm matte black architectural aluminium partitions for Manhattan loft and contemporary luxury interiors.",
    badge: "#1 Architect & Designer Choice",
    heroImage: "/images/cat_black_slim_partitions_v2.jpg",
    featuredVideo: "/videos/gallery_black_slim_double_doors_demo.mp4",
    metaTitle: "Black Slim Profile Glass Partition in Hyderabad | 25mm & 45mm Minimalist",
    metaDescription: "Leading contractor for Black Slim Profile Glass Partition in Hyderabad. Minimalist 25mm & 45mm matte black aluminium frames, industrial loft grid doors, and luxury cabins.",
    keywords: [
      "Black Slim Profile Glass Partition",
      "Office Glass Partition Contractor",
      "Glass Partition in Hyderabad",
      "Luxury Office Glass Partition",
      "Glass Company in Hyderabad"
    ],
    overview: [
      "Black Slim Profile Aluminium Glass Partitions are the premier design trend in contemporary architectural interiors. World Art Glass Hyderabad leads the market in precision fabrication of ultra-minimalist 25mm and 45mm profile systems that deliver crisp geometric lines without visual clutter.",
      "Manufactured from high-tensile 6063-T6 architectural aluminium alloy with a durable 25-micron matte black powder-coated or anodized finish, our profiles resist scratches, oxidation, and fingerprint smudges. We pair these slim frames with 10mm or 12mm Saint-Gobain toughened safety glass or acoustic laminated glass.",
      "From bespoke industrial-style grid mullions for chic co-working spaces to sleek continuous black-framed executive cabins in Hitec City and Jubilee Hills, our black slim profile systems provide unmatched structural rigidity and sophisticated European styling."
    ],
    specifications: [
      { label: "Profile Face Width", value: "Ultra-slim 25mm or 45mm visible sightline" },
      { label: "Material Grade", value: "High-Tensile 6063-T6 Extruded Architectural Aluminium" },
      { label: "Surface Finish", value: "25-Micron Matte Black Anodized or Qualicoat Powder-Coated" },
      { label: "Glass Compatibility", value: "8mm, 10mm, 12mm Toughened or Laminated Glass" },
      { label: "Grid Options", value: "True divided light grids or adhesive minimalist surface mullions" },
      { label: "Door Integration", value: "Matching slim-frame pivot doors, sliding barn doors, or double swing" },
      { label: "Gasket System", value: "UV-stabilized black EPDM acoustic compression seals" },
      { label: "Max System Height", value: "Up to 3,600mm (11.8 feet) without intermediate transoms" }
    ],
    applications: [
      { title: "Tech Startups & Creative Agencies", desc: "Industrial loft-inspired grid walls that reflect innovation and design-forward culture." },
      { title: "Law Firms & Financial Consultancies", desc: "Formal, authoritative matte black framed executive suites with superior soundproofing." },
      { title: "Luxury Residences & Penthouse Suites", desc: "Living-dining room dividers and walk-in wardrobe partitions with smoked glass." },
      { title: "High-End Retail Boutiques", desc: "Minimalist storefront windows with clear sightlines into retail merchandise." }
    ],
    benefits: [
      { title: "Ultra-Slim Sightlines", desc: "Maximum glass surface with razor-thin 25mm/45mm borders for uninterrupted daylight." },
      { title: "Scratch-Resistant Finish", desc: "Industrial-grade anodizing prevents scuffing, chipping, and fading over decades." },
      { title: "Custom Grid Geometries", desc: "Horizontal and vertical muntin grids custom spaced to match your interior drawings." },
      { title: "Integrated Concealed Pivots", desc: "Self-closing hydraulic floor pivots integrated cleanly without bulky exposed hinges." }
    ],
    hardwareOptions: ["Concealed Hydraulic Bottom Pivots", "Matte Black H-Pulls (600mm to 1800mm)", "Magnetic Lock Cases", "Soft-Close Sliding Dampers"],
    glassTypes: ["10mm / 12mm Saint-Gobain Clear", "Saint-Gobain Fluted Glass", "Smoked Grey Tinted", "Matte Acid-Etched"],
    faqs: [
      {
        q: "What is the difference between 25mm and 45mm black slim profiles?",
        a: "The 25mm profile is our most minimalist sightline, primarily used for internal fixed divider screens and lightweight doors up to 8.5 feet. The 45mm profile provides additional structural depth and cavity space for heavier acoustic glass (12mm), drop-down bottom door seals, and taller installations up to 12 feet."
      },
      {
        q: "Do the grid bars collect dust or peel off?",
        a: "We offer two types of grid systems: structural divided-light mullions with continuous aluminium sections, and CNC-machined surface applied aluminium bars secured with high-bond structural VHB tape. Both are designed to resist peeling and are easily cleaned."
      },
      {
        q: "Can you provide matching black slim double doors?",
        a: "Yes. We fabricate matching double-leaf pivot doors and sliding bypass doors with continuous top tracks and concealed soft-closing mechanisms."
      }
    ]
  },
  {
    slug: "telescopic-glass-partitions",
    title: "Telescopic Glass Partitions",
    shortTitle: "Telescopic Partitions",
    category: "commercial",
    categoryLabel: "Commercial Partitions",
    tagline: "Synchronized multi-panel sliding glass systems that stack neatly to maximize opening width for flexible commercial and residential spaces.",
    badge: "Space Optimization",
    heroImage: "/images/project_double_doors.jpg",
    featuredVideo: "/videos/gallery_fluted_telescopic_partition.mp4",
    metaTitle: "Telescopic Glass Partitions in Hyderabad | Synchronized Multi-Slide Glass",
    metaDescription: "Leading installer of Telescopic Glass Partitions in Hyderabad. Synchronized multi-panel sliding glass doors and walls for conference rooms, banquet halls, and luxury villas.",
    keywords: [
      "Telescopic Glass Partitions",
      "Office Glass Partition Contractor",
      "Glass Partition in Hyderabad",
      "Glass Company in Hyderabad"
    ],
    overview: [
      "When standard swing or simple sliding doors restrict access or demand too much clearance, Telescopic Glass Partitions provide the ultimate engineering solution. World Art Glass Hyderabad fabricates and installs synchronized multi-track sliding glass systems that open up to 75% of your total room width.",
      "Equipped with high-precision geared pulleys and stainless steel synchronization cables, moving the lead panel automatically guides all trailing glass panels at proportional speeds. When opened, the panels nest compactly into a designated parking pocket or against a side wall, instantly converting two separate rooms into one expansive hall.",
      "Our telescopic systems feature top-hung heavy-duty aluminium tracks with zero floor tracks, ensuring seamless floor finishes without tripping hazards or dust accumulation traps. Ideal for corporate boardrooms, hotel banquet halls, kitchen-living transitions, and luxury residences."
    ],
    specifications: [
      { label: "Configuration", value: "2-Panel, 3-Panel, 4-Panel, or 6-Panel Bi-Parting Synchronized Sliding" },
      { label: "Floor Guidance", value: "100% Top-Hung System with zero bottom floor track (Smooth flush floors)" },
      { label: "Glass Specification", value: "10mm or 12mm Saint-Gobain Toughened Safety Glass" },
      { label: "Opening Ratio", value: "Expands opening clearance up to 75% of total width" },
      { label: "Roller Mechanism", value: "Precision sealed ball-bearing nylon rollers tested for 200,000 cycles" },
      { label: "Track Finishes", value: "Architectural Anodized Silver, Matte Black, Rose-Gold, Brushed Champagne" },
      { label: "Soft-Close Integration", value: "Integrated dual-direction hydraulic dampeners prevent door slam" },
      { label: "Max Weight Capacity", value: "Up to 150 kg per individual glass leaf" }
    ],
    applications: [
      { title: "Conference Rooms & Training Centers", desc: "Easily merge two seminar rooms into a grand conference hall in seconds." },
      { title: "Modern Open-Concept Kitchens", desc: "Isolate cooking vapors and noise without sacrificing visual openness to the living lounge." },
      { title: "Luxury Living to Balcony Transitions", desc: "Open wide panoramic vistas onto verandas and landscaped pool terraces." },
      { title: "Hospitality & Restaurant Private Dining", desc: "Create flexible VIP dining cabins that can be joined for large banquets." }
    ],
    benefits: [
      { title: "No Tripping Hazards", desc: "Completely top-hung tracking keeps continuous marble, tile, or wooden flooring intact." },
      { title: "Effortless Synchronized Motion", desc: "A gentle push on the lead door effortlessly pulls all connected panels along." },
      { title: "Whisper-Quiet Operation", desc: "Polymer-coated heavy-duty roller carriages glide in total silence." },
      { title: "Versatile Glass Aesthetic", desc: "Available with clear, tinted, reeded/fluted, or frosted privacy glass." }
    ],
    hardwareOptions: ["Geared Synchronized Telescopic Drive Kits", "Top-Mounted Anodized Track", "Concealed Soft-Close Pistons", "Flush Finger Pulls"],
    glassTypes: ["10mm Saint-Gobain Clear", "10mm Reeded/Fluted Glass", "12mm ExtraClear Diamant", "Smoked Grey Toughened"],
    faqs: [
      {
        q: "Is a bottom track required on the floor for telescopic glass doors?",
        a: "No. Our systems are 100% top-hung, meaning all weight is supported by the ceiling or structural lintel track. Only miniature concealed floor guide pins hidden beneath the panel edges keep the glass perfectly aligned without any floor channel."
      },
      {
        q: "What ceiling structural support is necessary for top-hung telescopic glass?",
        a: "Because multiple glass panels hang from the top track (often totaling 250kg to 400kg across an opening), the top track must be anchored directly into concrete slabs or reinforced structural steel channel framework above false ceilings. Our technical team surveys and validates structural lintels during site measurement."
      },
      {
        q: "How many panels can be synchronized together?",
        a: "We commonly install 2-track (2 panels), 3-track (3 panels), and 4-track (4 panels single side or 8 panels bi-parting) telescopic systems for widths ranging from 8 feet up to 32 feet."
      }
    ]
  },
  {
    slug: "frameless-glass-doors",
    title: "Frameless Glass Doors",
    shortTitle: "Frameless Doors",
    category: "doors-facades",
    categoryLabel: "Architectural Doors & Facades",
    tagline: "Sleek, transparent 10mm & 12mm toughened glass swing and sliding doors equipped with heavy-duty Dorma and Ozone hardware.",
    badge: "Clean Architecture",
    heroImage: "/images/cat_frameless_sliding_doors.jpg",
    metaTitle: "Frameless Glass Doors in Hyderabad | Swing, Sliding & Commercial Entry Doors",
    metaDescription: "Expert Frameless Glass Doors Contractor in Hyderabad. 10mm & 12mm Saint-Gobain toughened glass swing, sliding, and automated doors with Dorma/Ozone floor springs.",
    keywords: [
      "Frameless Glass Doors",
      "Office Glass Partition Contractor",
      "Glass Company in Hyderabad",
      "Toughened Glass Supplier in Hyderabad"
    ],
    overview: [
      "Frameless Glass Doors represent the gold standard for clean, uncluttered architectural entrances. World Art Glass Hyderabad fabricates and installs custom frameless swing doors, sliding doors, and automated entrance systems for commercial office suites, retail showrooms, luxury villas, and banks.",
      "Engineered from 10mm or 12mm Saint-Gobain toughened safety glass with CNC diamond-beveled edges, our frameless doors provide maximum visible light with structural strength. Every panel is paired with heavy-duty Grade 304 or 316 stainless steel patch fittings and adjustable hydraulic floor springs engineered for over 500,000 opening cycles.",
      "We provide bespoke options including stainless steel tubular H-pulls, matte black architectural pull handles, keyless electronic access control integration, and overhead concealed transom pivots for spotless, uninterrupted glass aesthetics."
    ],
    specifications: [
      { label: "Glass Specification", value: "10mm or 12mm Saint-Gobain High-Strength Toughened Glass" },
      { label: "Hardware Grade", value: "Grade 304 / 316 Architectural Stainless Steel & Solid Forged Brass" },
      { label: "Hinges & Springs", value: "Dorma BTS 75V / Ozone Hydraulic Floor Springs with 90° Hold-Open" },
      { label: "Cycle Durability", value: "Certified for over 500,000 continuous opening cycles" },
      { label: "Door Types", value: "Single Swing, Double Action Swing, Sliding, Stacking, Sensor Sliding" },
      { label: "Handle Selections", value: "SS 304 H-Type Pulls (450mm to 1800mm), Matte Black, Rose-Gold, D-Handles" },
      { label: "Locking Mechanism", value: "Euro-profile corner patch locks, central patch locks, electric strike locks" },
      { label: "Weather Sealing", value: "Clear polycarbonate snap-on weather strips and acoustic brush seals" }
    ],
    applications: [
      { title: "Commercial Showroom Entrances", desc: "Inviting, crystal-clear transparent entrances that highlight interior displays." },
      { title: "Corporate Office Main Entries", desc: "Secure frameless double doors integrated with RFID and biometric access controls." },
      { title: "Conference Room Doors", desc: "Seamless swing doors maintaining acoustic isolation and visual connectivity." },
      { title: "Residential Villa Entrances", desc: "Contemporary oversized pivot glass doors with luxury architectural pull handles." }
    ],
    benefits: [
      { title: "Uninterrupted Transparency", desc: "No bulky frames around perimeter edges ensures maximum modern appeal." },
      { title: "Adjustable Closing Speed", desc: "Dual-valve hydraulic floor springs provide silky smooth, controlled closure without slamming." },
      { title: "Zero Maintenance Hardware", desc: "Heavy-duty stainless steel patch fittings resist corrosion and wear." },
      { title: "Access Control Ready", desc: "Easily integrates with electric strikes, magnetic locks, and biometric readers." }
    ],
    hardwareOptions: ["Dorma BTS 75V", "Ozone OPF Series Patch Fittings", "Geze Floor Spring", "SS 304 Architectural Handles"],
    glassTypes: ["10mm Saint-Gobain Clear", "12mm Saint-Gobain Toughened", "12mm ExtraClear Low-Iron", "Frosted Acid Etched"],
    faqs: [
      {
        q: "Can frameless glass doors swing in both directions?",
        a: "Yes. Our double-action hydraulic floor springs allow the door to open smoothly 90 degrees in both inward and outward directions, with an automatic hold-open feature at 90 degrees."
      },
      {
        q: "Are frameless glass doors secure against break-ins?",
        a: "Our frameless doors utilize 12mm high-tensile Saint-Gobain toughened safety glass which is highly impact-resistant. They are secured with heavy-duty corner patch locks with hardened steel deadbolts anchoring directly into floor strike plates."
      },
      {
        q: "Can biometric and RFID access control systems be installed on frameless glass doors?",
        a: "Yes. We regularly install frameless glass doors with electric shear locks, electromagnetic drop-bolts, and access control keypad integrations for IT firms in Hitec City and Gachibowli."
      }
    ]
  },
  {
    slug: "structural-glazing",
    title: "Structural Glazing",
    shortTitle: "Structural Glazing",
    category: "doors-facades",
    categoryLabel: "Architectural Doors & Facades",
    tagline: "High-performance curtain wall structural glazing and ACP exterior facades engineered for commercial towers and corporate landmarks.",
    badge: "Commercial Landmarks",
    heroImage: "/images/cat_acp_structural_glazing.jpg",
    metaTitle: "Structural Glazing Contractor in Hyderabad | Curtain Wall & Commercial Facades",
    metaDescription: "Premier Structural Glazing Contractor in Hyderabad. High-performance curtain wall glazing, Saint-Gobain solar control glass, and ACP cladding for commercial buildings.",
    keywords: [
      "Structural Glazing Contractor in Hyderabad",
      "Glass Facades",
      "Glass Company in Hyderabad",
      "Saint-Gobain Glass Dealer in Hyderabad"
    ],
    overview: [
      "Structural Glazing is the cornerstone of modern commercial architecture, transforming multistory buildings into iconic, energy-efficient corporate landmarks. World Art Glass Hyderabad is a certified contractor specializing in unitized and semi-unitized structural glazing systems across Telangana.",
      "We engineer structural curtain walls utilizing heavy-gauge architectural aluminium mullions (Alom / Jindal alloy 6063-T6) combined with Saint-Gobain Solar Control High-Performance Glass (Antelio, Cool-Lite, and Nano). Glass panels are structurally bonded using structural silicone sealants (Dow Corning / GE Silicones) capable of withstanding intense wind loads and seismic movements.",
      "Having successfully executed high-profile commercial facades including the Hindware Experience Centre and prime commercial hubs in Hyderabad, our engineering team manages complete structural wind load analysis, thermal modeling, fabrication, scaffolding, and precision on-site erection."
    ],
    specifications: [
      { label: "Glazing System", value: "Semi-Unitized, Stick Curtain Wall, or Unitized Facade Systems" },
      { label: "Primary Glass", value: "Saint-Gobain Solar Control, DGU (Double Glazed Units), Laminated Safety Glass" },
      { label: "Insulating Air Gap", value: "12mm / 16mm Argon Gas filled spacer in Double Glazed Units (DGU)" },
      { label: "Structural Sealant", value: "Dow Corning 983 / 895 Two-Part Structural Silicone Sealant" },
      { label: "Aluminium Framework", value: "Heavy-gauge extruded aluminium box mullions (Jindal / Alom 6063-T6)" },
      { label: "Wind Load Rating", value: "Engineered to withstand Hyderabad wind pressure up to 1.8 kPa to 2.5 kPa" },
      { label: "Acoustic Insulation", value: "Noise attenuation up to 45dB with insulated glass units" },
      { label: "Energy Efficiency", value: "Reduces building HVAC power consumption by up to 30%" }
    ],
    applications: [
      { title: "Corporate IT Towers & Tech Parks", desc: "Energy-efficient glass facades that reduce solar heat ingress and HVAC operating expenses." },
      { title: "Commercial Retail Showrooms", desc: "High-transparency exterior glass elevations that maximize street-side product visibility." },
      { title: "Hospitality & Luxury Hotels", desc: "Acoustically insulated structural curtain walls protecting guest suites from street traffic noise." },
      { title: "Hospital & Healthcare Facilities", desc: "Solar-controlled, hygienic insulated facades that optimize natural daylight and patient well-being." }
    ],
    benefits: [
      { title: "Drastic Energy Cost Reduction", desc: "Saint-Gobain solar control coatings reflect infrared heat, lowering air conditioning bills." },
      { title: "Monolithic Glass Appearance", desc: "Concealed structural silicone joints create a continuous, frameless mirror-like building envelope." },
      { title: "100% Weatherproof & Leak-Proof", desc: "Dual EPDM pressure gaskets and structural silicone joints guarantee zero water ingress." },
      { title: "Engineered Wind Resistance", desc: "Structural calculations verify wind deflection safety compliant with NBC (National Building Code)." }
    ],
    hardwareOptions: ["Dow Corning Structural Silicone", "Jindal Structural Box Mullions", "Heavy MS Anchor Cleats", "EPDM Compression Gaskets"],
    glassTypes: ["Saint-Gobain Antelio Solar Control", "Saint-Gobain Cool-Lite ST", "Double Glazed Units (6mm-12A-6mm)", "Laminated Low-E Glass"],
    faqs: [
      {
        q: "What is the difference between stick glazing and unitized structural glazing?",
        a: "Stick glazing involves erecting aluminium mullions on the building site piece by piece and then inserting glass panels. Unitized glazing involves fabricating complete prefabricated glass and frame cassettes in our factory under controlled quality conditions and hanging them rapidly on the building framework. Unitized systems ensure superior sealant quality and faster construction schedules."
      },
      {
        q: "How does structural glazing reduce building electricity costs?",
        a: "By utilizing Saint-Gobain high-performance Solar Control Double Glazed Units (DGU) with Low-E coatings, up to 70% of infrared solar heat radiation is blocked while transmitting clear visible light. This dramatically lowers the heat load on HVAC air conditioning systems, cutting power bills."
      },
      {
        q: "What structural warranties do you provide on facade silicones?",
        a: "We exclusively use certified structural silicones from Dow Corning (Dowsil) and GE Silicones, which carry a 10 to 20 year performance warranty against degradation, UV breakdown, and adhesion failure."
      }
    ]
  },
  {
    slug: "spider-glass-fittings",
    title: "Spider Glass Fittings",
    shortTitle: "Spider Glazing",
    category: "doors-facades",
    categoryLabel: "Architectural Doors & Facades",
    tagline: "Point-fixed stainless steel spider bracket assemblies and glass fin facades for grand, unobstructed architectural entry atriums.",
    badge: "Architectural Grandeur",
    heroImage: "/images/project_hindware_glazing_v2.jpg",
    featuredVideo: "/videos/gallery_spider_glazing_site.mp4",
    metaTitle: "Spider Glass Fitting in Hyderabad | Point-Fixed Spider Glazing Contractor",
    metaDescription: "Expert Spider Glass Fitting in Hyderabad. Point-fixed spider glazing, SS 304/316 2-way and 4-way spider brackets, glass fin facades, and commercial elevation.",
    keywords: [
      "Spider Glass Fitting in Hyderabad",
      "Structural Glazing Contractor in Hyderabad",
      "Glass Facades",
      "Glass Company in Hyderabad"
    ],
    overview: [
      "Spider Glazing is the ultimate expression of architectural transparency, eliminating bulky frame perimeters entirely through point-fixed stainless steel articulation. World Art Glass Hyderabad is a leading specialist in spider glass fitting and glass fin structural assemblies across commercial buildings, automobile showrooms, and hotel atriums.",
      "The system utilizes heavy-duty investment cast Grade 304 or Grade 316 stainless steel spider brackets (available in 1-way, 2-way, 3-way, and 4-way arms) connected to counter-sunk articulated stainless steel routels. These routels absorb wind deflection, thermal expansion, and mechanical vibration, distributing loads evenly to the supporting structural steel columns or structural glass fins.",
      "We pair our precision spider fittings with 12mm, 15mm, or multi-layer laminated Saint-Gobain toughened safety glass, delivering grand panoramic facades with maximum daylight transmission and jaw-dropping curb appeal."
    ],
    specifications: [
      { label: "Bracket Grade", value: "Investment Cast SS 304 / SS 316 Architectural Stainless Steel" },
      { label: "Arm Configurations", value: "1-Way (Edge), 2-Way (Perimeter), 3-Way (Corner), 4-Way (Central Cross)" },
      { label: "Routel Type", value: "Articulated Ball-Joint Countersunk Routels (Swivel +/- 10 degrees)" },
      { label: "Glass Thickness", value: "12mm, 15mm, or 19mm Toughened / 13.52mm to 21.52mm SGP Laminated" },
      { label: "Backing Structure", value: "Mild Steel Box Columns, Stainless Steel Truss Cables, or Toughened Glass Fins" },
      { label: "Joint Sealing", value: "Non-staining neutral weather-proof structural silicone sealant" },
      { label: "Corrosion Resistance", value: "Tested for 1000+ hours in salt spray testing without oxidation" },
      { label: "Wind Load Tolerance", value: "Custom engineered to withstand storm gust pressures up to 2.2 kPa" }
    ],
    applications: [
      { title: "Automobile Showrooms", desc: "Floor-to-ceiling panoramic glass facades showcasing luxury vehicles without visual obstruction." },
      { title: "Corporate Headquarters Atriums", desc: "Grand multi-story lobby elevations that convey scale, transparency, and prestige." },
      { title: "Shopping Mall Entrances", desc: "High-traffic commercial entrances capable of withstanding severe crowds and atmospheric exposure." },
      { title: "Airport & Transit Terminals", desc: "Expansive point-fixed glass envelopes delivering abundant natural daylight." }
    ],
    benefits: [
      { title: "Maximum Visual Transparency", desc: "Point-supported fixing eliminates intermediate vertical mullions for sheer glass expanses." },
      { title: "Articulated Flexibility", desc: "Ball-joint routels accommodate building thermal expansion and wind sway without stressing the glass." },
      { title: "Marine-Grade Durability", desc: "SS 316 cast stainless steel brackets guarantee lifelong rust-free outdoor performance." },
      { title: "Custom Structural Glass Fins", desc: "Can be supported entirely by transparent vertical glass fins for 100% frameless elevations." }
    ],
    hardwareOptions: ["Ozone / Hardwyn Heavy SS 316 Spider Arms", "Ball-Joint Countersunk Routels", "Structural Glass Fin Clamps", "Tension Rod Systems"],
    glassTypes: ["12mm Saint-Gobain Toughened", "15mm High-Tensile Toughened", "17.52mm SGP Laminated Glass", "Saint-Gobain Diamant Low-Iron"],
    faqs: [
      {
        q: "What is the difference between SS 304 and SS 316 spider fittings?",
        a: "SS 304 is suitable for sheltered or standard outdoor urban installations. SS 316 contains molybdenum which provides superior resistance to chloride corrosion, harsh weather elements, and industrial atmospheric pollution, ensuring the brackets remain pristine without pitting."
      },
      {
        q: "What are glass fins in spider glazing?",
        a: "Glass fins are vertical structural glass ribs (usually 15mm or 19mm laminated toughened glass) set perpendicular to the facade. Instead of using steel columns, the spider brackets bolt directly into these glass fins, creating a facade that is 100% made of glass without any metal columns."
      },
      {
        q: "How are the holes in the glass sealed to prevent water leakage?",
        a: "Each hole in the glass is countersunk with CNC diamond waterjets. The routel includes vulcanized EPDM compression washers and silicone isolators that sandwich the glass, preventing metal-to-glass contact and forming a permanent waterproof seal."
      }
    ]
  },
  {
    slug: "saint-gobain-lacquered-glass",
    title: "Saint-Gobain Lacquered Glass",
    shortTitle: "Lacquered Glass",
    category: "residential-decorative",
    categoryLabel: "Residential & Decorative",
    tagline: "Vibrant, durable, and moisture-resistant Saint-Gobain Planilaque Evolution lacquered glass for luxury kitchens, wardrobes, and corporate accent walls.",
    badge: "Planilaque Evolution",
    heroImage: "/images/cat_stained_designer_glass.jpg",
    metaTitle: "Lacquered Glass Supplier in Hyderabad | Saint-Gobain Planilaque Glass",
    metaDescription: "Authorized Lacquered Glass Supplier in Hyderabad. Genuine Saint-Gobain Planilaque Evolution colored glass in 26+ shades for kitchen splashbacks, wardrobes, and wall cladding.",
    keywords: [
      "Lacquered Glass Supplier in Hyderabad",
      "Saint-Gobain Glass Dealer in Hyderabad",
      "Glass Company in Hyderabad",
      "Decorative & Fluted Glass"
    ],
    overview: [
      "Saint-Gobain Planilaque Evolution is the industry benchmark for high-gloss, ultra-durable decorative lacquered glass. World Art Glass Hyderabad supplies and installs authentic Saint-Gobain lacquered glass across high-end residences, corporate reception areas, and retail flagships throughout Hyderabad.",
      "Planilaque Evolution is manufactured by applying a high-durability, lead-free colored lacquer coating onto the back surface of premium Saint-Gobain float glass, which is then cured in high-temperature ovens. The result is a non-porous, perfectly smooth glass surface with deep chromatic richness that never fades, peels, or stains.",
      "Certified resistant to moisture, steam, and everyday household chemicals, Saint-Gobain lacquered glass is the premier hygienic choice for kitchen splashbacks, luxury wardrobe door cladding, elevator lobbies, writing boards in corporate boardrooms, and boutique retail displays."
    ],
    specifications: [
      { label: "Product Brand", value: "Saint-Gobain Planilaque Evolution" },
      { label: "Available Thicknesses", value: "4mm, 5mm, 6mm, 8mm" },
      { label: "Color Palette", value: "26+ Contemporary Shades (Extra White, Ultra Black, Champagne, Mint, Coral)" },
      { label: "Coating Type", value: "Lead-free, VOC-compliant industrial baked lacquer" },
      { label: "Moisture Resistance", value: "100% Waterproof - suitable for kitchens and bathroom dry areas" },
      { label: "Safety Backing", value: "Optional safety vinyl film backing (SGG Safe) prevents shattering" },
      { label: "Maintenance", value: "Non-porous, stain-resistant, effortlessly cleaned with standard glass spray" },
      { label: "Writing Surface", value: "Can be used as magnetic or dry-erase marker boards in corporate offices" }
    ],
    applications: [
      { title: "Modular Kitchen Splashbacks", desc: "Seamless, grout-free wall cladding behind stoves and counters that wipes clean of oil in one stroke." },
      { title: "Luxury Wardrobe Sliding Shutters", desc: "High-gloss lacquered panels paired with slim aluminium profiles for designer bedroom suites." },
      { title: "Corporate Boardroom Marker Boards", desc: "Sophisticated dry-erase writing walls that never ghost or stain like conventional whiteboards." },
      { title: "Hotel & Hospital Elevator Lobbies", desc: "Hygienic, scratch-resistant wall paneling that elevates public corridor aesthetics." }
    ],
    benefits: [
      { title: "Timeless Gloss & Color Depth", desc: "High-temperature baked lacquer never discolors, fades, or yellows over decades." },
      { title: "Hygienic & Grout-Free", desc: "Non-porous glass surface prevents bacterial growth and wipes clean instantly without scrubbing." },
      { title: "Eco-Friendly & Safe", desc: "Manufactured without lead and with low volatile organic compound (VOC) emissions." },
      { title: "Authentic Saint-Gobain Guarantee", desc: "Direct distribution ensures authentic Planilaque Evolution stock with batch verification." }
    ],
    hardwareOptions: ["Neutral Cure Mirror Adhesives", "Slim Aluminium Edge Profiles", "Countersunk Wall Fasteners", "Magnetic Backing Plates"],
    glassTypes: ["Extra White (Pure White)", "Ultra Black (Deep Noir)", "Champagne Beige", "Titanium Grey", "Mint Green", "Opera Red"],
    faqs: [
      {
        q: "Can Saint-Gobain lacquered glass be used directly behind a gas stove in the kitchen?",
        a: "Yes. Saint-Gobain Planilaque Evolution can be used as a kitchen backsplash behind stoves, provided a minimum clearance of 50mm (2 inches) is maintained from the open flame. For gas hobs with flames immediately adjacent to the wall, we recommend heat-toughened lacquered glass variants."
      },
      {
        q: "How is lacquered glass installed onto the wall?",
        a: "Lacquered glass is installed using non-acidic neutral-cure silicones and structural double-sided VHB mounting tapes directly onto smooth plastered walls, marine plywood substrates, or existing tiles. It requires zero tile demolition."
      },
      {
        q: "Does the color scratch off over time?",
        a: "No. The colored lacquer layer is baked onto the reverse side of the glass panel, shielded permanently behind the crystal-clear glass face. The front surface is pure glass, rendering it impervious to scratches from daily use."
      }
    ]
  },
  {
    slug: "decorative-fluted-glass",
    title: "Decorative & Fluted Glass",
    shortTitle: "Fluted & Decorative Glass",
    category: "residential-decorative",
    categoryLabel: "Residential & Decorative",
    tagline: "Sophisticated reeded, ribbed, fluted, and etched glass patterns that diffuse light gracefully while preserving interior privacy.",
    badge: "Interior Designer Benchmark",
    heroImage: "/images/architectural_glass_craftsmanship.jpg",
    featuredVideo: "/videos/gallery_fluted_telescopic_partition.mp4",
    metaTitle: "Decorative & Fluted Glass in Hyderabad | Reeded, Ribbed & Textured Glass",
    metaDescription: "Premier Decorative & Fluted Glass Supplier in Hyderabad. Reeded, ribbed, Moru glass, fluted partitions, and custom etched decorative glass panels for luxury interiors.",
    keywords: [
      "Decorative & Fluted Glass",
      "Office Glass Partition Contractor",
      "Glass Company in Hyderabad",
      "Saint-Gobain Glass Dealer in Hyderabad"
    ],
    overview: [
      "Fluted and textured architectural glass has emerged as the definitive signature of luxury contemporary interior design. World Art Glass Hyderabad provides an extensive range of reeded, ribbed, fluted (Moru), etched, and tinted decorative glass panels that transform partitions, doors, and furniture into bespoke artistic statements.",
      "Characterized by linear parallel convex grooves, fluted glass catches and bends ambient light in captivating optical refractions. It obscures direct sightlines to maintain privacy while allowing up to 85% of natural daylight to pass through unobstructed, creating an ethereal sense of openness.",
      "We process our decorative and fluted glass into fully heat-toughened safety glass (available in 8mm, 10mm, and 12mm thicknesses), enabling safe installation in high-traffic office cabins, shower enclosures, telescopic partition doors, and luxury kitchen cabinet shutters."
    ],
    specifications: [
      { label: "Glass Patterns", value: "Narrow Fluted (6mm pitch), Broad Reeded (12mm pitch), Moru, Cross-Reed, Frosted Fluted" },
      { label: "Available Thicknesses", value: "8mm, 10mm, 12mm Toughened Safety Glass" },
      { label: "Color Tints", value: "Ultra-Clear Low-Iron, Clear, Smoked Grey, Champagne Bronze, Rose-Gold Tint" },
      { label: "Tempering Capability", value: "100% Fully Thermal Toughened compliant with IS 2553 standards" },
      { label: "Light Transmission", value: "Transmits 80% to 88% ambient light while diffusing direct vision" },
      { label: "Edge Finishing", value: "CNC Flat Diamond Polish with rounded arrises" },
      { label: "Custom Processing", value: "Precision waterjet handle cutouts and hinge notches" },
      { label: "Lamination Options", value: "Can be laminated with mirror or colored interlayer for wardrobe cladding" }
    ],
    applications: [
      { title: "Executive Office Partition Panels", desc: "Diffuses visual distractions while creating luminous, texture-rich cabin corridors." },
      { title: "Luxury Shower Cubicles", desc: "Adds hotel-style spa ambiance with complete personal bathing privacy." },
      { title: "Designer Sliding & Telescopic Doors", desc: "Stunning room dividers between dining areas, formal lounges, and home offices." },
      { title: "Bar Cabinets & Kitchen Shutters", desc: "Elegant glass cabinet fronts that subtly silhouette interior glassware and bottles." }
    ],
    benefits: [
      { title: "Optimal Privacy Without Darkness", desc: "Distorts direct view while flooding interior rooms with warm diffused natural daylight." },
      { title: "Tactile Three-Dimensional Texture", desc: "Linear vertical fluting enhances perceived ceiling height and architectural volume." },
      { title: "100% Toughened Safety Glass", desc: "Unlike brittle un-tempered craft glass, our fluted glass is fully heat-toughened for safety." },
      { title: "Fingerprint & Smudge Resistant", desc: "Textured surface hides fingerprints, water droplets, and minor dust much better than plain glass." }
    ],
    hardwareOptions: ["Matte Black Slim 25mm Profiles", "Rose-Gold Anodized Aluminium Trims", "Brass Minimalist Pivot Hinges", "Overhead Sliding Tracks"],
    glassTypes: ["Narrow Reeded Fluted Glass", "Broad Fluted Moru Glass", "Ultra-Clear Diamant Fluted", "Smoked Grey Reeded Glass"],
    faqs: [
      {
        q: "Can fluted glass be toughened for safety?",
        a: "Yes! At World Art Glass Hyderabad, we specifically supply and install fully heat-toughened 8mm, 10mm, and 12mm fluted glass. Many suppliers provide untempered fluted glass which can easily crack; our toughened process ensures maximum impact resistance."
      },
      {
        q: "Which side of the glass has the fluted texture?",
        a: "One side of the glass is completely flat and smooth, while the other side features the raised three-dimensional fluted ridges. In shower cubicles, the flat side faces inward toward the water spray for effortless squeegee cleaning, while the fluted side faces outward."
      },
      {
        q: "Is fluted glass suitable for sound insulation?",
        a: "Yes. When installed in our 10mm or 12mm thicknesses with perimeter acoustic gaskets, fluted glass provides sound attenuation comparable to standard toughened glass (32dB to 35dB)."
      }
    ]
  },
  {
    slug: "digital-printing-on-glass",
    title: "Digital Printing on Glass",
    shortTitle: "Digital Printed Glass",
    category: "residential-decorative",
    categoryLabel: "Residential & Decorative",
    tagline: "High-resolution ceramic ink digital printing fused directly into toughened glass for custom facades, artistic murals, and corporate branding.",
    badge: "High-Definition Art",
    heroImage: "/images/cat_stained_designer_glass.jpg",
    metaTitle: "Digital Printing on Glass in Hyderabad | Ceramic Frit Printed Glass Murals",
    metaDescription: "Top Digital Printing on Glass Contractor in Hyderabad. High-resolution UV & ceramic ink printing on toughened glass for corporate branding, murals, and architectural facades.",
    keywords: [
      "Digital Printing on Glass",
      "Decorative & Fluted Glass",
      "Glass Company in Hyderabad",
      "Office Glass Partition Contractor"
    ],
    overview: [
      "Digital Printing on Glass bridges the gap between high-precision architectural engineering and visual fine art. World Art Glass Hyderabad utilizes cutting-edge flatbed ceramic and UV digital printing technology to fuse photorealistic imagery, geometric graphics, and corporate branding directly onto glass panels.",
      "Unlike conventional stickers or vinyl decals that peel, fade, or bubble over time, our ceramic ink digital printing uses inorganic ceramic frits that are fired into the glass surface during the 650°C thermal tempering process. Once fused, the printed image becomes an inseparable component of the glass itself.",
      "Our printed glass is completely scratch-proof, UV-stable, weatherproof, and resistant to acid rain and cleaning chemicals. From grand exterior building facades displaying customized architectural motifs to corporate timeline murals in Hitec City headquarters and devotional pooja room panels, we bring your vision to life."
    ],
    specifications: [
      { label: "Printing Technology", value: "Industrial Flatbed Ceramic Digital Glass Printing & UV Cure Printing" },
      { label: "Ink Composition", value: "Inorganic ceramic frit micro-pigments fused during thermal tempering" },
      { label: "Resolution Capability", value: "Up to 1440 DPI photorealistic high-definition clarity" },
      { label: "Color Gamut", value: "Full-spectrum CMYK + White + Metallic Gold/Silver spot inks" },
      { label: "Transparency Control", value: "Variable opacity from 0% (fully opaque) to 100% (translucent stained-glass effect)" },
      { label: "UV & Weather Resistance", value: "100% Fade-Proof under direct sun exposure; 20+ year outdoor warranty" },
      { label: "Compatible Glass", value: "5mm to 19mm Saint-Gobain Toughened & Laminated Safety Glass" },
      { label: "Max Single Panel Size", value: "Up to 2,400mm x 3,600mm (8 feet x 12 feet)" }
    ],
    applications: [
      { title: "Corporate Lobbies & Boardroom Murals", desc: "Display corporate vision graphics, world maps, and architectural brand storytelling." },
      { title: "Building Facades & Balcony Glass", desc: "Custom ceramic frit solar-shading patterns that lower building glare while displaying bold designs." },
      { title: "Pooja Room & Religious Feature Walls", desc: "Illuminated spiritual glass artwork, mandir backdrops, and traditional Indian motifs." },
      { title: "Kitchen Splashbacks & Feature Panels", desc: "Bespoke marble patterns, onyx stone replications, and abstract art for kitchen counters." }
    ],
    benefits: [
      { title: "Permanent Ceramic Fusion", desc: "Inks are melted into the glass at 650°C; cannot be scratched, peeled, or scraped off." },
      { title: "Zero Color Degradation", desc: "Resists intense ultraviolet sunlight without discoloration, fading, or yellowing." },
      { title: "Custom Variable Opacity", desc: "Print selective frosted zones or stained-glass jewel tones that interact with backlight." },
      { title: "Effortless Cleaning", desc: "Cleans just like normal glass with standard glass cleaners, detergents, or water." }
    ],
    hardwareOptions: ["Stainless Steel Standoff Spigots", "Concealed LED Light Frame Boxes", "Structural Adhesive Mounting", "Anodized Aluminium U-Channels"],
    glassTypes: ["Saint-Gobain Diamant Low-Iron Glass", "Saint-Gobain Clear Toughened", "Laminated Acoustic Glass", "Translucent Satin Glass"],
    faqs: [
      {
        q: "What is the difference between ceramic frit printing and standard UV flatbed printing?",
        a: "Standard UV printing deposits ink on top of cured glass and is suitable for interior use. Ceramic frit printing deposits liquid ceramic enamels onto the glass which are subsequently fired inside the tempering furnace at 650°C. The ink melts directly into the glass matrix, making ceramic printed glass completely impervious to weather, UV radiation, and heavy scratching."
      },
      {
        q: "Can I provide my own high-resolution image or photograph for printing?",
        a: "Yes. You can provide any high-resolution digital image (TIFF, Vector PDF, AI, or PSD with minimum 300 DPI at actual print scale). Our in-house graphics team will prepare a calibrated test proof for your approval prior to full production."
      },
      {
        q: "Can printed glass panels be backlit with LED panels?",
        a: "Yes! Backlit printed glass is one of our most popular executions for corporate reception walls and luxury pooja rooms. We use specialized translucent white ink diffusion layers that distribute backlighting evenly across the entire surface."
      }
    ]
  },
  {
    slug: "shower-cubicles",
    title: "Shower Cubicles",
    shortTitle: "Shower Cubicles",
    category: "residential-decorative",
    categoryLabel: "Residential & Decorative",
    tagline: "Custom frameless 10mm toughened glass shower enclosures, corner cubicles, and sliding bath screens with anti-rust brass hardware.",
    badge: "5-Star Hotel Luxury",
    heroImage: "/images/cat_shower_cubicles.jpg",
    featuredVideo: "/videos/gallery_shower_cubicle_site.mp4",
    metaTitle: "Shower Cubicles in Hyderabad | 10mm Toughened Frameless Enclosures",
    metaDescription: "Best Shower Cubicles in Hyderabad. Custom frameless 10mm Saint-Gobain toughened glass shower enclosures, sliding cubicles, and nano-coated bath partitions.",
    keywords: [
      "Shower Cubicles",
      "Toughened Glass Supplier in Hyderabad",
      "Glass Company in Hyderabad",
      "Saint-Gobain Glass Dealer in Hyderabad"
    ],
    overview: [
      "Transform everyday bathrooms into private five-star luxury sanctuaries with custom frameless Shower Cubicles by World Art Glass Hyderabad. We design, fabricate, and install bespoke glass shower enclosures tailored to exact bathroom layout dimensions across villas and luxury apartments in Hyderabad.",
      "Every shower enclosure is manufactured exclusively from 10mm Saint-Gobain Extra-Clear Toughened Safety Glass, treated with an optional hydrophobic anti-limescale nano-coating that causes water and soap scum to slide off effortlessly without leaving water droplet stains.",
      "Our enclosures are equipped with solid forged brass and Grade 304 stainless steel hardware (hinges, header reinforcement bars, magnetic water-seal PVC strips, and bottom threshold water deflectors) available in mirror chrome, matte black, brushed gold, and rose-gold finishes."
    ],
    specifications: [
      { label: "Glass Specification", value: "10mm Saint-Gobain Extra-Clear Toughened Safety Glass" },
      { label: "Hardware Metal", value: "Solid Forged Brass & Heavy SS 304 (100% Rust-Proof Guarantee)" },
      { label: "Hardware Finishes", value: "Mirror Chrome, Matte Black, Brushed Brass, Rose-Gold, Gunmetal" },
      { label: "Enclosure Styles", value: "Frameless Swing, Corner L-Shape (90°), Diamond Pentagon (135°), Sliding Bypass" },
      { label: "Water Sealing", value: "UV-resistant translucent magnetic PVC door seals and bottom sweep fins" },
      { label: "Surface Treatment", value: "Optional hydrophobic nano-coating prevents hard water scale and soap scum" },
      { label: "Reinforcement Bar", value: "Solid SS 304 top header stabilizer bar anchored securely into masonry" },
      { label: "Tested Longevity", value: "Hinges tested for over 150,000 opening/closing cycles" }
    ],
    applications: [
      { title: "Master Bathroom Enclosures", desc: "Spacious walk-in glass shower enclosures with frameless swing doors and designer hardware." },
      { title: "Compact Apartment Bathrooms", desc: "Space-saving 2-panel or 3-panel sliding glass shower partitions with soft-dampeners." },
      { title: "Corner L-Shape Enclosures", desc: "90-degree corner cubicles that separate wet and dry bathroom zones with crystal clarity." },
      { title: "Bathtub Screen Enclosures", desc: "Hinged or fixed frameless glass splashguards installed over built-in soaking bathtubs." }
    ],
    benefits: [
      { title: "100% Dry Bathroom Zone", desc: "Magnetic seals and bottom water barriers prevent bathroom flooding and slipping hazards." },
      { title: "Easy-Clean Nano Coating", desc: "Water beads and rolls away, reducing bathroom cleaning frequency by up to 80%." },
      { title: "Zero Corrosion Guarantee", desc: "Solid brass and SS 304 hardware will never corrode or rust in high-humidity shower steam." },
      { title: "Expanded Perceived Space", desc: "Frameless glass removes heavy shower curtains, making compact bathrooms feel twice as large." }
    ],
    hardwareOptions: ["Ozone Brass Glass-to-Wall Hinges", "Heavy-Duty Top Stabilizer Bars", "Magnetic PVC Gaskets", "Towel Bar with Integrated Handle"],
    glassTypes: ["10mm Saint-Gobain Clear", "10mm Diamant Extra-Clear Low Iron", "10mm Frosted Acid Etched", "10mm Fluted Reeded Glass"],
    faqs: [
      {
        q: "Why is 10mm toughened glass recommended for shower cubicles over 8mm?",
        a: "10mm toughened glass provides the critical structural rigidity and weight required for frameless glass shower doors. It eliminates wobbling when opening and closing, holds heavy brass hinges securely, and complies with international safety standards for wet residential zones."
      },
      {
        q: "How do you prevent water from leaking outside the shower cubicle?",
        a: "We utilize multi-tier water containment engineering: magnetic PVC seals along the vertical door edges that snap shut tightly, bottom drip sweeps that deflect water back into the shower tray, and a low-profile acrylic or stone threshold water dam."
      },
      {
        q: "What is anti-limescale nano-coating?",
        a: "Hyderabad groundwater frequently contains high mineral levels (calcium and magnesium) that leave white chalky water spots on glass. Our hydrophobic nano-coating fills microscopic pores on the glass surface, repelling water and mineral deposits so the glass stays crystal clear with minimal cleaning."
      }
    ]
  },
  {
    slug: "glass-railings-balustrades",
    title: "Glass Railings & Balustrades",
    shortTitle: "Glass Railings",
    category: "residential-decorative",
    categoryLabel: "Residential & Decorative",
    tagline: "Panoramic frameless glass railings and balustrades for balconies, staircases, and terrace decks with solid SS 316 spigots and base channels.",
    badge: "Engineered Safety",
    heroImage: "/images/cat_glass_railings.jpg",
    metaTitle: "Glass Railings & Balustrades in Hyderabad | Balcony & Staircase Glass Railing",
    metaDescription: "Leading Glass Railings Contractor in Hyderabad. Frameless 12mm & laminated glass balustrades for balconies, staircases, and terrace decks with SS 316 spigots and aluminium channels.",
    keywords: [
      "Glass Railings & Balustrades",
      "Glass Company in Hyderabad",
      "Toughened Glass Supplier in Hyderabad",
      "Saint-Gobain Glass Dealer in Hyderabad"
    ],
    overview: [
      "Glass Railings & Balustrades offer the ultimate combination of structural fall-protection safety and sweeping panoramic views. World Art Glass Hyderabad is the preferred contractor for architects and luxury villa owners seeking engineered glass balustrade systems for balconies, internal staircases, and rooftop decks.",
      "We fabricate our balustrades using heavy 12mm Saint-Gobain Toughened Safety Glass or 13.52mm / 17.52mm PVB/SGP Laminated Toughened Glass. Every installation conforms strictly to Indian National Building Code (NBC) safety regulations, with structural anchorages engineered to withstand rigorous horizontal point loads and outdoor wind pressures.",
      "Mounting options range from solid investment-cast Grade 316 stainless steel spigots (round or square) to continuous heavy-duty architectural aluminium base-shoe channels concealed inside flooring. Top handrails are available in ultra-slim stainless steel slotted profiles or completely frameless with polished touchable glass top edges."
    ],
    specifications: [
      { label: "Glass Specification", value: "12mm Toughened Glass or 13.52mm / 17.52mm PVB/SGP Laminated Glass" },
      { label: "Base Mounting Types", value: "Solid SS 316 Spigots, Continuous Concealed Aluminium Base Shoe, Side-Mount Standoff Pins" },
      { label: "Hardware Grade", value: "Marine-Grade SS 316 Stainless Steel (Corrosion and rust resistant)" },
      { label: "Handrail Selections", value: "Top-Slotted SS 304 Slim Rail (25mm x 25mm), Round Tube (38mm), or 100% Frameless Edge" },
      { label: "Load Resistance", value: "Engineered to withstand line loads of 1.5 kN/m compliant with NBC safety norms" },
      { label: "Fastener Anchoring", value: "Heavy-duty Hilti chemical anchors drilled into reinforced concrete slab" },
      { label: "Glass Heights", value: "1,050mm (Balconies) and 900mm (Internal Staircases) or custom heights" },
      { label: "Edge Finishing", value: "CNC High-Gloss Polished Flat Edge with 2mm chamfered arrises" }
    ],
    applications: [
      { title: "Luxury Villa Balconies", desc: "Enjoy unobstructed garden, city skyline, or golf-course views without cage-like metal bars." },
      { title: "Cantilevered Floating Staircases", desc: "Minimalist side-pinned frameless glass panels that accentuate architectural stair design." },
      { title: "Rooftop Terrace Lounges", desc: "High wind-load rated laminated glass parapet balustrades for safe rooftop entertaining." },
      { title: "Commercial Mall Atriums", desc: "Heavy-traffic public balustrades tested for crowd impact and safety compliance." }
    ],
    benefits: [
      { title: "Unbroken Panoramic Sightlines", desc: "Preserves natural views and outdoor landscaping without unsightly metal grilles." },
      { title: "Rigorous Structural Fall Protection", desc: "Tested to withstand high human impact and heavy wind pressures without deflection." },
      { title: "Marine-Grade SS 316 Spigots", desc: "Will never develop rust, pit, or stain even under decades of outdoor monsoon rains." },
      { title: "Child & Pet Safety", desc: "Solid smooth vertical glass panels eliminate horizontal footholds for climbing." }
    ],
    hardwareOptions: ["Solid SS 316 Cast Spigots", "Continuous Aluminium Base Channel", "Side-Mounted SS Standoff Adapters", "Slotted Micro-Handrail"],
    glassTypes: ["12mm Saint-Gobain Toughened", "13.52mm Extra-Clear PVB Laminated", "17.52mm SGP Structural Interlayer Glass", "Smoked Grey Toughened"],
    faqs: [
      {
        q: "Are glass railings safe for high-floor balconies?",
        a: "Yes. For high-rise residential balconies (above the 3rd floor), we strongly recommend 13.52mm or 17.52mm Laminated Toughened Glass. Laminated glass consists of two toughened glass sheets bonded together with a heavy structural interlayer. In the extremely rare event of glass fracture, the interlayer holds all glass fragments securely in place, maintaining an unbroken safety barrier."
      },
      {
        q: "What is the benefit of SS 316 spigots over SS 304 for outdoor balconies?",
        a: "SS 304 stainless steel can develop surface rust stains when exposed to outdoor rainwater and pollutants. Grade 316 stainless steel contains molybdenum, which prevents corrosion and ensures the spigots retain their mirror or satin finish indefinitely."
      },
      {
        q: "How are the spigots anchored into the balcony floor?",
        a: "Each spigot is secured into the concrete balcony slab using high-tensile stainless steel anchor bolts and Hilti structural epoxy chemical resin. This chemical anchor bond creates an unbreakable foundation that easily surpasses structural building code requirements."
      }
    ]
  },
  {
    slug: "aluminium-glass-partitions",
    title: "Aluminium Glass Partitions",
    shortTitle: "Aluminium Partitions",
    category: "commercial",
    categoryLabel: "Commercial Partitions",
    tagline: "Heavy-duty commercial aluminium profile glass partitions for corporate offices, factories, educational institutes, and healthcare facilities.",
    badge: "Durable & Cost-Effective",
    heroImage: "/images/office_partition_hd.jpg",
    metaTitle: "Aluminium Glass Partitions in Hyderabad | Commercial Aluminium Office Cabins",
    metaDescription: "Reliable Aluminium Glass Partitions Contractor in Hyderabad. High-grade Jindal aluminium frame partitions, full-height glass cabins, and commercial room dividers.",
    keywords: [
      "Aluminium Glass Partitions",
      "Office Glass Partition Contractor",
      "Glass Partition in Hyderabad",
      "Glass Company in Hyderabad"
    ],
    overview: [
      "Aluminium Glass Partitions remain one of the most durable, versatile, and economical structural partition systems for commercial workplaces, banks, educational institutions, hospitals, and industrial facilities. World Art Glass Hyderabad manufactures and installs heavy-duty aluminium framed glass partition systems across Hyderabad and Telangana.",
      "Fabricated from premium architectural-grade extruded aluminium sections (Jindal / Hindalco 6063-T6 alloy), our aluminium partitions are available in anodized natural silver, bronze, matte black, and custom powder-coated shades matching your interior corporate palette.",
      "We offer flexible designs including full-height glass, half-board/half-glass partitions with integrated sound-dampening acoustic panels, double-glazed acoustic partitions with motorized Venetian blinds, and integrated aluminium swing doors with heavy-duty mortise locks."
    ],
    specifications: [
      { label: "Aluminium Section", value: "Jindal / Hindalco 6063-T6 Architectural Extruded Aluminium (1.5mm - 2.0mm wall thickness)" },
      { label: "Frame Dimensions", value: "50mm x 25mm, 63mm x 38mm, 100mm x 45mm partition series" },
      { label: "Finishes", value: "Anodized Natural Silver (15-micron), Matte Black, Charcoal Grey, Pure White Powder Coat" },
      { label: "Glass Thickness", value: "5mm, 6mm, 8mm, 10mm Toughened or Laminated Safety Glass" },
      { label: "Acoustic Insulation", value: "Single glazed (30dB) or Double glazed with cavity (up to 42dB)" },
      { label: "Infill Options", value: "Clear Glass, Frosted Glass, Prelaminated Particle Board, Aluminium Sheet" },
      { label: "Door Options", value: "Matching aluminium framed swing doors with concealed overhead closers" },
      { label: "Wiring Cavity", value: "Concealed internal race-ways for electrical conduits, LAN cables, and switches" }
    ],
    applications: [
      { title: "Corporate Back-Offices & Workstations", desc: "Segment departmental teams into organized, acoustically controlled workstations." },
      { title: "Hospitals & Medical Diagnostic Clinics", desc: "Hygienic, easy-to-disinfect glass enclosures for laboratories and consultation cabins." },
      { title: "Schools & Educational Institutes", desc: "Durable classroom dividers, administrative offices, and library study carrels." },
      { title: "Manufacturing & Warehouse Offices", desc: "Dust-tight, sound-insulated supervisor cabins located inside industrial shop floors." }
    ],
    benefits: [
      { title: "High Durability & Impact Resistance", desc: "Rigid heavy-wall aluminium frames withstand heavy daily use in demanding environments." },
      { title: "Integrated Cable Management", desc: "Hollow aluminium sections allow concealed routing of electrical wires and network cables." },
      { title: "Extremely Cost-Effective", desc: "Delivers maximum partition coverage per square foot within commercial budget constraints." },
      { title: "100% Fire-Resistant & Termite-Proof", desc: "Inorganic aluminium and glass construction is completely impervious to termites and fire." }
    ],
    hardwareOptions: ["Heavy Aluminium Hinges", "Mortise Cylinder Locks", "Dorma TS 68 Door Closers", "EPDM Glass Glazing Gaskets"],
    glassTypes: ["5mm / 6mm Saint-Gobain Clear", "8mm / 10mm Toughened Safety Glass", "Frosted Acid Etched", "Double Glazed Acoustic Glass"],
    faqs: [
      {
        q: "What is the advantage of aluminium framed partitions over frameless glass partitions?",
        a: "Aluminium framed partitions provide higher physical protection for glass edges, allow convenient concealment of electrical conduits and data cables inside the frame posts, can support partial solid board infills, and are generally more cost-effective for large commercial office floor plates."
      },
      {
        q: "Can internal blinds be installed inside double-glazed aluminium partitions?",
        a: "Yes. In our 100mm double-glazed aluminium partition series, Venetian blinds can be hermetically sealed between the two glass panes. The blinds can be tilted or raised via an external magnetic knob, providing instant privacy without gathering dust."
      },
      {
        q: "Are your aluminium sections resistant to rust in humid areas?",
        a: "Aluminium is naturally non-ferrous and cannot rust. Our 15-micron architectural anodized or powder-coated finishes provide total protection against oxidation, corrosion, and discoloration."
      }
    ]
  },
  {
    slug: "glass-facades",
    title: "Glass Facades",
    shortTitle: "Glass Facades",
    category: "doors-facades",
    categoryLabel: "Architectural Doors & Facades",
    tagline: "Bespoke architectural glass envelopes, double skin facades, and curtain wall elevations delivering high visual impact and solar energy efficiency.",
    badge: "Architectural Envelopes",
    heroImage: "/images/hero_glazing_profiles.jpg",
    featuredVideo: "/videos/gallery_commercial_facade_elevation.mp4",
    metaTitle: "Glass Facades in Hyderabad | Commercial Glass Elevation & Curtain Walls",
    metaDescription: "Premier Glass Facades Contractor in Hyderabad. High-performance glass elevation, curtain walls, Saint-Gobain solar control glass, and architectural building facades.",
    keywords: [
      "Glass Facades",
      "Structural Glazing Contractor in Hyderabad",
      "Spider Glass Fitting in Hyderabad",
      "Glass Company in Hyderabad"
    ],
    overview: [
      "An architectural Glass Facade is the signature face of any modern building, conveying institutional stature, innovation, and corporate prestige. World Art Glass Hyderabad specializes in the comprehensive turnkey execution of high-performance architectural glass facades for commercial headquarters, retail shopping complexes, and luxury institutions across Hyderabad.",
      "We design custom facade envelopes integrating Saint-Gobain High-Performance Solar Control Glass (Nano, ST, Antelio, and Cool-Lite) that selectively filter the solar spectrum. Our facades bounce harsh infrared heat back into the atmosphere while allowing glare-free natural visible light to flood internal office floors, drastically reducing artificial lighting and air-conditioning operational costs.",
      "Our turnkey facade services encompass dynamic wind load calculations, 3D structural connection engineering, precision CNC fabrication of extruded aluminium curtain wall members, high-altitude crane and cradle erection, and weatherproofing with structural silicones."
    ],
    specifications: [
      { label: "Facade Systems", value: "Unitized Curtain Walls, Semi-Unitized Stick Systems, Point-Supported Spider Facades" },
      { label: "Glass Formats", value: "Double Glazed Units (DGU), Triple Glazed Units (TGU), Heat-Strengthened Laminated Glass" },
      { label: "Solar Heat Gain (SHGC)", value: "Optimized SHGC ratings down to 0.22 - 0.35 to minimize heat ingress" },
      { label: "Light Transmission (VLT)", value: "30% to 65% natural visible daylight transmission without glare" },
      { label: "Thermal U-Value", value: "Low U-values down to 1.6 W/m²K for superior thermal barrier performance" },
      { label: "Structural Mullions", value: "Alom / Jindal 6063-T6 Structural Aluminium Box Profiles with thermal break barrier" },
      { label: "Weather Sealant", value: "Dow Corning 789 / 795 Weatherproofing Neutral Silicone" },
      { label: "Acoustic Attenuation", value: "Blocks up to 45dB of exterior traffic and street noise" }
    ],
    applications: [
      { title: "Corporate Tech Parks & IT Towers", desc: "Energy-efficient glass skins that achieve green building sustainability goals." },
      { title: "Luxury Retail Commercial Complexes", desc: "High-transparency shopfront elevations that captivate shoppers and elevate tenant brands." },
      { title: "Automobile Experience Centers", desc: "Double-height panoramic glass elevations with point-supported spider glass engineering." },
      { title: "Educational & Cultural Institutions", desc: "Iconic geometric glass facades that embody modern architectural expression." }
    ],
    benefits: [
      { title: "High Energy Efficiency", desc: "Blocks up to 75% of solar heat gain, reducing commercial air conditioning bills drastically." },
      { title: "Iconic Skyline Presence", desc: "Creates a breathtaking, mirror-smooth contemporary facade that elevates real estate valuation." },
      { title: "Superior Acoustic Insulation", desc: "Heavy insulated double-glazed units eliminate exterior traffic noise from busy thoroughfares." },
      { title: "Full Weather & Storm Protection", desc: "Engineered to withstand severe monsoon squalls and cyclonic wind pressures without water penetration." }
    ],
    hardwareOptions: ["Dow Corning Structural Glazing Silicones", "Heavy-Duty Galvanized MS Anchor Brackets", "Thermal Break Isolators", "EPDM Sponge Gaskets"],
    glassTypes: ["Saint-Gobain Antelio Cool-Lite", "Saint-Gobain SGG Nano", "Insulated DGU Glass Units", "Ceramic Frit Shading Glass"],
    faqs: [
      {
        q: "What is the difference between a glass facade and structural glazing?",
        a: "Structural glazing is a specific engineering technique where glass is bonded to aluminium frames using structural silicone. A glass facade is the broader architectural building envelope, which can incorporate structural glazing, unitized curtain walls, spider point-supported glass, and ventilated rainscreens."
      },
      {
        q: "How do glass facades perform during severe Hyderabad summer temperatures?",
        a: "By utilizing Saint-Gobain Solar Control Double Glazed Units (DGU), the outer pane reflects solar infrared radiation while the inner argon gas cavity blocks conductive heat transfer. This keeps interior office temperatures significantly lower than outdoor ambient heat."
      },
      {
        q: "How are glass facades cleaned and maintained on tall buildings?",
        a: "We integrate building maintenance unit (BMU) anchoring systems, rooftop davit arms, and cradle tie-back lugs into the structural facade framework to allow professional window-washing access."
      }
    ]
  },
  {
    slug: "led-designer-mirrors",
    title: "LED Mirrors & Designer Mirrors",
    shortTitle: "LED & Designer Mirrors",
    category: "residential-decorative",
    categoryLabel: "Residential & Decorative",
    tagline: "Luxury high-definition copper-free Saint-Gobain mirrors equipped with capacitive touch sensors, defogger pads, and tri-color ambient LED backlighting.",
    badge: "Smart Luxury Vanity",
    heroImage: "/images/cat_led_mirrors.jpg",
    metaTitle: "LED Mirrors & Designer Mirrors in Hyderabad | Smart Touch Bathroom Mirrors",
    metaDescription: "Premier LED Mirrors & Designer Mirrors Manufacturer in Hyderabad. Custom backlit smart touch mirrors, defogger vanity mirrors, and luxury decorative mirrors.",
    keywords: [
      "LED Mirrors & Designer Mirrors",
      "Decorative & Fluted Glass",
      "Glass Company in Hyderabad",
      "Saint-Gobain Glass Dealer in Hyderabad"
    ],
    overview: [
      "Elevate your bathroom vanities, dressing suites, and luxury interior foyers with custom smart LED Mirrors & Designer Mirrors crafted by World Art Glass Hyderabad. We manufacture bespoke illuminated mirrors engineered with crystal-clear high-definition Saint-Gobain Mirox copper-free glass.",
      "Our smart mirrors are equipped with state-of-the-art feather-touch capacitive sensors, continuous stepless dimming, 3-color ambient LED temperature tuning (3000K Warm White, 4500K Natural Daylight, and 6500K Cool White), and integrated heating defogger pads that keep the mirror completely steam-free even after hot showers.",
      "From sleek capsule arches and minimalist pill shapes to dramatic organic irregular silhouettes and backlit full-length dressing mirrors, every piece is custom-built with high-CRI (>90) energy-efficient LED strips encased in IP65 waterproof aluminium frames."
    ],
    specifications: [
      { label: "Mirror Glass", value: "5mm Saint-Gobain Mirox High-Definition Copper-Free & Lead-Free Mirror" },
      { label: "Corrosion Resistance", value: "3x more resistant to black edge oxidation compared to standard mirrors" },
      { label: "LED Lighting", value: "High-Density 120 LED/meter Strip, High-CRI (>90) for accurate natural skin tones" },
      { label: "Color Tuning", value: "3-in-1 Tri-Color (Warm White 3000K / Natural 4500K / Cool White 6500K)" },
      { label: "Touch Sensor", value: "Feather-touch capacitive sensor with integrated brightness memory dimmer" },
      { label: "Defogger System", value: "Integrated PET heating film prevents condensation and mirror steam" },
      { label: "Frame Backing", value: "Anodized Architectural Aluminium Chassis with IP65 moisture protection" },
      { label: "Shapes Available", value: "Capsule, Round, Oval, Rectangular, Arch, Pebble, Organic Asymmetric" }
    ],
    applications: [
      { title: "Master Bathroom Vanity", desc: "Flawless shadow-free facial illumination for daily grooming and makeup application." },
      { title: "Walk-in Dressing Suites", desc: "Full-length floor-to-ceiling illuminated mirrors with ambient perimeter halo lighting." },
      { title: "Powder Rooms & Guest Restrooms", desc: "Dramatic artistic designer mirrors that leave a lasting impression on dinner guests." },
      { title: "Luxury Salons & Spas", desc: "High-CRI color-accurate vanity stations for professional styling and aesthetics." }
    ],
    benefits: [
      { title: "Copper-Free Edge Protection", desc: "Saint-Gobain Mirox glass will never develop unsightly black edge corrosion spots." },
      { title: "Steam-Free Anti-Fog Clarity", desc: "Defogger pad keeps central glass completely clear even during hot steaming baths." },
      { title: "True-to-Life Skin Color (CRI 90+)", desc: "High Color Rendering Index LED illumination renders skin tones naturally without yellow or blue casts." },
      { title: "Bespoke Geometric Shapes", desc: "CNC precision waterjet cutting allows creation of any custom organic arch or geometric shape." }
    ],
    hardwareOptions: ["IP65 Waterproof Meanwell Power Drivers", "Capacitive Touch Dimmer Sensors", "Defogger Heat Pads", "Concealed Wall Mounting Brackets"],
    glassTypes: ["5mm Saint-Gobain Mirox 4Green", "Ultra-Clear Low-Iron Mirror", "Bronze Tinted Mirror", "Smoked Grey Vanity Mirror"],
    faqs: [
      {
        q: "Why do regular bathroom mirrors turn black at the edges, and how do your mirrors prevent this?",
        a: "Traditional mirrors use copper backing layers that oxidize when exposed to bathroom humidity and moisture, resulting in unsightly black edge rot. We exclusively use Saint-Gobain Mirox copper-free and lead-free mirrors which feature advanced multi-layer protective backing, making them three times more resistant to humidity and black edge corrosion."
      },
      {
        q: "How does the anti-fog defogger function operate?",
        a: "An ultra-thin electric PET heating film is laminated to the back of the mirror glass. When activated via the touch sensor, it gently warms the glass slightly above room temperature, preventing water vapor from condensing on the mirror face."
      },
      {
        q: "Can the LED lighting brightness be dimmed?",
        a: "Yes. Our capacitive touch switches feature stepless long-press dimming: press and hold your finger on the touch button to smoothly brighten or dim the LEDs from 10% to 100%, and the internal memory saves your preferred brightness level."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}
