import type { GeologyData } from "./geology.types";

export const geologyData: GeologyData[] = [
  {
    slug: "clay",
    name: "Clay",
    shortName: "Clay Formation",
    badge: "SOFT FORMATION",

    introduction:
      "Clay formations are generally soft and cohesive, but drilling performance can be affected by swelling, sticking, poor hole stability and inefficient removal of cuttings. The drilling system should therefore be selected around formation behaviour, bore diameter, depth and the required level of bore stability.",

    characteristics: [
      "Soft and cohesive formation",
      "Can become sticky when exposed to water",
      "May swell and reduce bore stability",
      "Cuttings can become difficult to remove",
      "Mud properties can strongly influence drilling performance",
    ],

    challenges: [
      {
        title: "Bit Balling",
        description:
          "Sticky clay can accumulate around the bit and reduce effective cutting action and penetration performance.",
      },
      {
        title: "Borehole Stability",
        description:
          "Soft or swelling clay can create unstable borehole conditions and may require careful drilling-fluid and casing management.",
      },
      {
        title: "Cuttings Removal",
        description:
          "Efficient circulation is important to prevent cuttings from accumulating around the drilling tool.",
      },
      {
        title: "Sticking Risk",
        description:
          "Poor drilling-fluid control or unsuitable operating parameters can increase the possibility of sticking the drilling assembly.",
      },
    ],

    drillingMethods: [
      {
        name: "Mud Rotary",
        suitability: "PRIMARY METHOD",
        description:
          "Mud rotary drilling is generally well suited to soft cohesive formations because drilling fluid can support the borehole and transport cuttings to the surface.",
        advantages: [
          "Effective cuttings circulation",
          "Useful borehole support",
          "Suitable for deep water-well applications",
          "Allows drilling-fluid properties to be controlled",
        ],
      },
      {
        name: "Rotary Drilling with Casing",
        suitability: "PROJECT DEPENDENT",
        description:
          "Where formation stability becomes a concern, casing can be introduced progressively according to the actual ground conditions.",
        advantages: [
          "Improved borehole stability",
          "Useful in unstable intervals",
          "Supports controlled bore construction",
        ],
      },
    ],

    rigRequirements: [
      {
        parameter: "Rotary System",
        requirement: "Controlled rotary torque and speed",
        reason:
          "Soft formations require controlled cutting action rather than unnecessarily aggressive drilling.",
      },
      {
        parameter: "Feed System",
        requirement: "Smooth and controllable feed force",
        reason:
          "Controlled feed helps maintain stable penetration and reduces the risk of overloading the tooling.",
      },
      {
        parameter: "Mud Circulation",
        requirement: "Adequate mud pumping and circulation capability",
        reason:
          "Efficient removal of clay cuttings is critical for maintaining drilling performance.",
      },
      {
        parameter: "Casing Capability",
        requirement: "Suitable casing handling and installation arrangement",
        reason:
          "Soft or unstable intervals may require casing support during drilling.",
      },
    ],

    tooling: [
      {
        item: "Drill Bit",
        recommendation:
          "Tooling selected specifically for soft and cohesive formations",
        purpose:
          "Maintain cutting efficiency while reducing the tendency for clay accumulation.",
      },
      {
        item: "Drill Pipe",
        recommendation: "Drill pipe matched to the selected drilling system",
        purpose:
          "Provide reliable transmission of rotary and hydraulic drilling energy.",
      },
      {
        item: "Drilling Fluid",
        recommendation:
          "Mud system selected and controlled according to actual clay behaviour",
        purpose:
          "Support borehole stability and transport cuttings efficiently.",
      },
      {
        item: "Casing",
        recommendation: "Casing selected according to unstable intervals",
        purpose:
          "Maintain borehole integrity where required.",
      },
    ],

    recommendedRigs: [
      {
        model: "NGDR Series",
        reason:
          "Suitable configurations can be engineered for mud rotary drilling in soft formations, subject to depth, diameter and project requirements.",
        applications: [
          "Water Wells",
          "Deep Tubewells",
          "Groundwater Development",
        ],
        href: "/drilling-rigs",
      },
    ],

    engineeringNote:
      "For clay formations, NGE engineering should focus on mud circulation, borehole stability, controlled rotary operation and appropriate tooling rather than simply selecting the highest-powered rig.",
  },

  {
    slug: "sand",
    name: "Sand",
    shortName: "Sand Formation",
    badge: "LOOSE FORMATION",

    introduction:
      "Sand formations can range from relatively stable compacted material to loose, water-bearing formations that create significant borehole stability and casing challenges. Drilling-fluid control and appropriate casing planning are therefore critical.",

    characteristics: [
      "Loose or weakly consolidated formation",
      "May contain significant groundwater",
      "Can collapse into the borehole",
      "Requires effective cuttings transport",
      "Casing and screen design can be critical in water-well applications",
    ],

    challenges: [
      {
        title: "Borehole Collapse",
        description:
          "Loose sand can cave into the borehole, particularly when formation support is inadequate.",
      },
      {
        title: "Sand Production",
        description:
          "Water-bearing formations can introduce large quantities of formation sand into the borehole.",
      },
      {
        title: "Casing Installation",
        description:
          "Maintaining borehole integrity may require carefully planned casing installation during or after drilling.",
      },
      {
        title: "Circulation Control",
        description:
          "The drilling system must maintain effective circulation without unnecessarily disturbing the formation.",
      },
    ],

    drillingMethods: [
      {
        name: "Mud Rotary",
        suitability: "PRIMARY METHOD",
        description:
          "Mud rotary drilling can provide formation support while transporting loose sand cuttings from the borehole.",
        advantages: [
          "Supports loose formations",
          "Effective cuttings transport",
          "Well suited to groundwater drilling",
          "Compatible with casing operations",
        ],
      },
      {
        name: "Rotary with Casing",
        suitability: "FORMATION DEPENDENT",
        description:
          "Where loose sand is highly unstable, drilling and casing strategy should be planned together.",
        advantages: [
          "Improved borehole stability",
          "Reduced collapse risk",
          "Better control of unstable intervals",
        ],
      },
    ],

    rigRequirements: [
      {
        parameter: "Mud System",
        requirement: "Reliable and controllable mud circulation",
        reason:
          "Formation support and cuttings transport are fundamental in loose sand.",
      },
      {
        parameter: "Rotary Control",
        requirement: "Stable rotary operation",
        reason:
          "Controlled drilling reduces unnecessary disturbance of the formation.",
      },
      {
        parameter: "Feed System",
        requirement: "Smooth feed control",
        reason:
          "Controlled penetration helps maintain stable drilling conditions.",
      },
      {
        parameter: "Casing System",
        requirement: "Suitable casing handling capability",
        reason:
          "Loose formations frequently require early casing support.",
      },
    ],

    tooling: [
      {
        item: "Drill Bit",
        recommendation:
          "Bit selected for efficient penetration and controlled cuttings generation",
        purpose:
          "Maintain drilling performance without excessive formation disturbance.",
      },
      {
        item: "Drilling Fluid",
        recommendation:
          "Fluid properties controlled according to formation behaviour",
        purpose:
          "Support the borehole and transport cuttings.",
      },
      {
        item: "Casing",
        recommendation:
          "Casing diameter and installation sequence based on bore design",
        purpose:
          "Prevent collapse and maintain bore integrity.",
      },
      {
        item: "Well Screen",
        recommendation:
          "Selected according to aquifer and formation conditions",
        purpose:
          "Control formation sand entry in completed water wells.",
      },
    ],

    recommendedRigs: [
      {
        model: "NGDR Series",
        reason:
          "Mud rotary configurations can be engineered for loose and water-bearing formations where bore stability and circulation are important.",
        applications: [
          "Water Wells",
          "Groundwater Development",
          "Deep Tubewells",
        ],
        href: "/drilling-rigs",
      },
    ],

    engineeringNote:
      "In sand formations, the drilling rig is only one part of the solution. Mud properties, casing strategy, bore diameter and final well completion design must be considered together.",
  },

  {
    slug: "gravel",
    name: "Gravel",
    shortName: "Gravel Formation",
    badge: "COARSE FORMATION",

    introduction:
      "Gravel formations can contain loose particles, cobbles and larger fragments that create variable drilling resistance, borehole instability and tooling challenges. The drilling system should provide controlled rotary performance and effective removal of coarse cuttings.",

    characteristics: [
      "Coarse and highly variable formation",
      "May contain cobbles and larger particles",
      "Can cause variable drilling resistance",
      "Loose intervals may require casing support",
      "Efficient cuttings circulation is important",
    ],

    challenges: [
      {
        title: "Variable Formation Resistance",
        description:
          "The drilling assembly may move between loose material and larger coarse fragments, creating changing drilling loads.",
      },
      {
        title: "Cobbles and Large Fragments",
        description:
          "Large particles can interfere with smooth bit engagement and may increase vibration.",
      },
      {
        title: "Borehole Instability",
        description:
          "Loose gravel can fall into the borehole and complicate drilling and casing operations.",
      },
      {
        title: "Cuttings Management",
        description:
          "The circulation system must effectively transport coarse drilling returns.",
      },
    ],

    drillingMethods: [
      {
        name: "Mud Rotary",
        suitability: "PRIMARY OPTION",
        description:
          "Mud rotary can provide controlled drilling and circulation where the formation is loose and requires borehole support.",
        advantages: [
          "Effective circulation",
          "Suitable for larger boreholes",
          "Useful for water-well applications",
          "Can be combined with casing operations",
        ],
      },
      {
        name: "Rotary with Casing",
        suitability: "PROJECT DEPENDENT",
        description:
          "Where loose gravel creates significant collapse risk, the drilling and casing sequence should be engineered together.",
        advantages: [
          "Improved borehole stability",
          "Better control of loose intervals",
          "Supports continuous drilling operations",
        ],
      },
    ],

    rigRequirements: [
      {
        parameter: "Rotary System",
        requirement: "Adequate torque with controlled operation",
        reason:
          "Coarse formations can create variable resistance and intermittent loading.",
      },
      {
        parameter: "Feed System",
        requirement: "Strong and controllable feed system",
        reason:
          "The drilling assembly must maintain stable contact with changing formation conditions.",
      },
      {
        parameter: "Mud Pump",
        requirement: "Adequate circulation capacity",
        reason:
          "Coarse cuttings require effective removal from the borehole.",
      },
      {
        parameter: "Casing Capability",
        requirement: "Suitable casing handling arrangement",
        reason:
          "Loose gravel intervals may require rapid casing support.",
      },
    ],

    tooling: [
      {
        item: "Drill Bit",
        recommendation:
          "Robust tooling selected according to the proportion of gravel, cobbles and finer material",
        purpose:
          "Maintain penetration while handling variable formation conditions.",
      },
      {
        item: "Drill Pipe",
        recommendation: "Suitable heavy-duty drill pipe configuration",
        purpose:
          "Transmit drilling loads reliably through variable formation.",
      },
      {
        item: "Mud System",
        recommendation: "Circulation system sized for the borehole and cuttings load",
        purpose:
          "Maintain effective removal of coarse returns.",
      },
      {
        item: "Casing",
        recommendation: "Casing selected for unstable intervals",
        purpose:
          "Maintain borehole integrity.",
      },
    ],

    recommendedRigs: [
      {
        model: "NGDR Series",
        reason:
          "Rotary configurations can be engineered for gravel and mixed coarse formations according to bore diameter and depth.",
        applications: [
          "Water Wells",
          "Groundwater Projects",
          "Large-Diameter Drilling",
        ],
        href: "/drilling-rigs",
      },
    ],

    engineeringNote:
      "Gravel formations should be evaluated carefully because the proportion and size of cobbles can change drilling behaviour significantly. Rig selection should follow the actual formation profile and bore design.",
  },

  {
    slug: "hard-rock",
    name: "Hard Rock",
    shortName: "Hard Rock Formation",
    badge: "HARD FORMATION",

    introduction:
      "Hard-rock formations such as granite, basalt and competent crystalline rock require substantially different drilling energy from soft formations. High penetration resistance, tooling wear, vibration and fractured zones must be considered when selecting the drilling system.",

    characteristics: [
      "High formation strength",
      "High resistance to penetration",
      "Significant bit and tooling wear",
      "May contain fractured or broken intervals",
      "Can require high drilling energy",
    ],

    challenges: [
      {
        title: "High Rock Strength",
        description:
          "Competent rock requires sufficient drilling energy and an appropriate bit or hammer system.",
      },
      {
        title: "Tooling Wear",
        description:
          "Hard formations can significantly increase bit and hammer wear if tooling is not matched correctly.",
      },
      {
        title: "High Drilling Loads",
        description:
          "Rotary torque, feed force and impact energy must remain appropriate for the selected drilling method.",
      },
      {
        title: "Fractured Rock",
        description:
          "Fractured zones can create loss of circulation, borehole instability and casing challenges.",
      },
    ],

    drillingMethods: [
      {
        name: "DTH Drilling",
        suitability: "PRIMARY OPTION FOR SUITABLE HARD ROCK",
        description:
          "Down-the-hole drilling can provide direct impact energy at the bit and is widely suited to hard-rock drilling applications.",
        advantages: [
          "Effective rock penetration",
          "Direct impact energy",
          "Suitable for hard formations",
          "Useful across a range of borehole applications",
        ],
      },
      {
        name: "Mud Rotary",
        suitability: "APPLICATION DEPENDENT",
        description:
          "Rotary drilling can be considered for suitable rock conditions, particularly where bore diameter, circulation or combined drilling requirements favour a rotary system.",
        advantages: [
          "Flexible borehole sizing",
          "Effective circulation",
          "Can support combined drilling configurations",
        ],
      },
    ],

    rigRequirements: [
      {
        parameter: "Drilling Energy",
        requirement: "Adequate rotary or impact drilling energy",
        reason:
          "Hard rock requires substantially greater energy than soft formations.",
      },
      {
        parameter: "Feed System",
        requirement: "Strong feed and pullback capability",
        reason:
          "Stable tool engagement is essential for maintaining penetration performance.",
      },
      {
        parameter: "Compressor",
        requirement: "Compressor matched to the selected DTH hammer and borehole",
        reason:
          "DTH performance depends strongly on suitable compressed-air delivery.",
      },
      {
        parameter: "Hydraulic System",
        requirement: "Robust hydraulic power system",
        reason:
          "High-load drilling components require reliable hydraulic power and control.",
      },
    ],

    tooling: [
      {
        item: "DTH Hammer",
        recommendation:
          "Hammer selected according to hole diameter, formation and compressor capability",
        purpose:
          "Deliver suitable impact energy to the bit.",
      },
      {
        item: "DTH Bit",
        recommendation:
          "Rock bit selected according to formation hardness and drilling diameter",
        purpose:
          "Provide effective rock penetration.",
      },
      {
        item: "Drill Pipe",
        recommendation:
          "Heavy-duty DTH drill pipe matched to the hammer system",
        purpose:
          "Transmit air and drilling loads reliably.",
      },
      {
        item: "Casing",
        recommendation:
          "Casing strategy based on fractured and unstable intervals",
        purpose:
          "Maintain borehole integrity where required.",
      },
    ],

    recommendedRigs: [
      {
        model: "NGDTH600R",
        reason:
          "A dedicated DTH drilling platform suited to demanding hard-rock applications where the required configuration matches the project.",
        applications: [
          "Hard Rock",
          "Water Wells",
          "DTH Drilling",
        ],
        href: "/drilling-rigs",
      },
      {
        model: "NGDTH300R",
        reason:
          "A DTH-oriented solution for applications where its capacity and configuration match the required drilling depth and diameter.",
        applications: [
          "Hard Rock",
          "Water Wells",
          "DTH Drilling",
        ],
        href: "/drilling-rigs",
      },
    ],

    engineeringNote:
      "Hard-rock rig selection should be based on required depth, hole diameter, rock strength, drilling method, hammer size and compressor requirements. The largest machine is not automatically the best machine.",
  },

  {
    slug: "limestone",
    name: "Limestone",
    shortName: "Limestone Formation",
    badge: "VARIABLE ROCK",

    introduction:
      "Limestone can range from relatively soft and porous material to strong, competent rock. Cavities, fractures and changing formation strength can make drilling behaviour highly variable within the same project.",

    characteristics: [
      "Formation strength can vary significantly",
      "May contain fractures and cavities",
      "Can range from soft to hard rock",
      "Groundwater can occur through fractures and solution features",
      "Borehole stability may change rapidly",
    ],

    challenges: [
      {
        title: "Variable Rock Strength",
        description:
          "The drilling system may encounter substantial changes in formation hardness during the same borehole.",
      },
      {
        title: "Cavities and Voids",
        description:
          "Solution cavities can cause sudden changes in drilling response and may complicate borehole stability.",
      },
      {
        title: "Fractured Zones",
        description:
          "Fractures can create fluid losses and require changes in drilling and casing strategy.",
      },
      {
        title: "Water Ingress",
        description:
          "Fractured and solution-developed limestone can contain significant groundwater inflows.",
      },
    ],

    drillingMethods: [
      {
        name: "Rotary Drilling",
        suitability: "FORMATION DEPENDENT",
        description:
          "Rotary drilling can be suitable where limestone strength and borehole requirements favour a rotary system.",
        advantages: [
          "Flexible drilling configuration",
          "Suitable for larger diameters",
          "Effective circulation options",
        ],
      },
      {
        name: "DTH Drilling",
        suitability: "HARD LIMESTONE",
        description:
          "DTH can be considered where limestone becomes sufficiently hard to benefit from direct impact drilling energy.",
        advantages: [
          "Effective in competent rock",
          "Direct impact energy",
          "Suitable for hard intervals",
        ],
      },
    ],

    rigRequirements: [
      {
        parameter: "Flexible Drilling System",
        requirement: "Configuration capable of handling changing formation conditions",
        reason:
          "Limestone can transition between soft, hard and fractured intervals.",
      },
      {
        parameter: "Circulation",
        requirement: "Reliable drilling-fluid or air circulation",
        reason:
          "Fractures and cavities can significantly change drilling-fluid behaviour.",
      },
      {
        parameter: "Feed Control",
        requirement: "Accurate and controllable feed system",
        reason:
          "Changing formation strength requires controlled drilling response.",
      },
      {
        parameter: "Casing",
        requirement: "Casing capability for unstable or fractured zones",
        reason:
          "Fractured limestone may require immediate borehole support.",
      },
    ],

    tooling: [
      {
        item: "Bit",
        recommendation:
          "Bit selected according to the actual limestone strength",
        purpose:
          "Maintain efficient penetration across changing rock conditions.",
      },
      {
        item: "DTH Hammer",
        recommendation:
          "Considered for competent hard-rock intervals where appropriate",
        purpose:
          "Provide direct impact drilling energy.",
      },
      {
        item: "Drill Pipe",
        recommendation:
          "Pipe selected for the chosen rotary or DTH configuration",
        purpose:
          "Transmit drilling loads and circulation media reliably.",
      },
      {
        item: "Casing",
        recommendation:
          "Selected according to fractured and unstable intervals",
        purpose:
          "Maintain borehole integrity.",
      },
    ],

    recommendedRigs: [
      {
        model: "NGDR Series",
        reason:
          "Rotary configurations can be engineered for variable limestone formations where bore diameter and circulation requirements favour rotary drilling.",
        applications: [
          "Water Wells",
          "Groundwater Development",
          "Rotary Drilling",
        ],
        href: "/drilling-rigs",
      },
      {
        model: "NGDTH Series",
        reason:
          "DTH configurations can be considered for competent limestone intervals where impact drilling is advantageous.",
        applications: [
          "Hard Limestone",
          "DTH Drilling",
          "Water Wells",
        ],
        href: "/drilling-rigs",
      },
    ],

    engineeringNote:
      "Limestone is particularly formation-dependent. The final drilling method should be selected after considering rock strength, fracture density, cavity risk, required diameter and groundwater conditions.",
  },

  {
    slug: "mixed-formation",
    name: "Mixed Formation",
    shortName: "Mixed Formation",
    badge: "VARIABLE GEOLOGY",

    introduction:
      "Mixed formations contain alternating soft and hard layers, often requiring the drilling system to adapt as formation conditions change with depth. These projects benefit from versatile equipment and an engineering approach that considers the complete geological profile.",

    characteristics: [
      "Alternating soft and hard formations",
      "Drilling conditions can change rapidly with depth",
      "May require more than one drilling method",
      "Tooling selection can change between intervals",
      "Casing requirements may vary throughout the borehole",
    ],

    challenges: [
      {
        title: "Changing Formation Conditions",
        description:
          "The drilling assembly may move from soft material into hard rock and back again during the same borehole.",
      },
      {
        title: "Tooling Changes",
        description:
          "Different formation intervals may require different bits, hammers or drilling parameters.",
      },
      {
        title: "Variable Borehole Stability",
        description:
          "Soft and fractured intervals can create stability problems while harder layers require higher drilling energy.",
      },
      {
        title: "Method Selection",
        description:
          "A single drilling method may not provide optimum performance across every interval.",
      },
    ],

    drillingMethods: [
      {
        name: "Combined Rotary / DTH",
        suitability: "HIGHLY PROJECT DEPENDENT",
        description:
          "A combined drilling configuration can provide flexibility where the geological profile contains both soft and hard intervals.",
        advantages: [
          "Flexible formation response",
          "Can address different drilling intervals",
          "Useful for complex geological profiles",
        ],
      },
      {
        name: "Mud Rotary",
        suitability: "SOFT / UNSTABLE INTERVALS",
        description:
          "Mud rotary can be used where soft formations, borehole support and circulation become the dominant requirements.",
        advantages: [
          "Borehole support",
          "Effective cuttings transport",
          "Suitable for soft formations",
        ],
      },
      {
        name: "DTH",
        suitability: "HARD ROCK INTERVALS",
        description:
          "DTH can be considered when the borehole enters competent hard-rock sections requiring impact drilling.",
        advantages: [
          "Effective hard-rock penetration",
          "Direct impact energy",
          "Useful in competent rock",
        ],
      },
    ],

    rigRequirements: [
      {
        parameter: "Versatility",
        requirement: "Drilling platform capable of adapting to changing formations",
        reason:
          "Mixed geology can require different drilling approaches at different depths.",
      },
      {
        parameter: "Hydraulic System",
        requirement: "Reliable hydraulic power and control",
        reason:
          "Multiple drilling functions may need to operate reliably across changing conditions.",
      },
      {
        parameter: "Feed System",
        requirement: "Wide and controllable operating range",
        reason:
          "Different formations require different feed behaviour.",
      },
      {
        parameter: "Circulation System",
        requirement: "Configuration appropriate to the selected drilling method",
        reason:
          "The system may need to handle mud, air or different circulation requirements.",
      },
    ],

    tooling: [
      {
        item: "Rotary Bit",
        recommendation:
          "Selected according to soft and intermediate formation intervals",
        purpose:
          "Maintain effective cutting performance.",
      },
      {
        item: "DTH Hammer and Bit",
        recommendation:
          "Selected for competent hard-rock intervals where required",
        purpose:
          "Provide impact drilling capability.",
      },
      {
        item: "Drill Pipe",
        recommendation:
          "Pipe configuration matched to the complete drilling system",
        purpose:
          "Support changing drilling methods and operating conditions.",
      },
      {
        item: "Casing",
        recommendation:
          "Planned around unstable and fractured intervals",
        purpose:
          "Maintain borehole integrity through variable formations.",
      },
    ],

    recommendedRigs: [
      {
        model: "NGDR2000",
        reason:
          "A heavy-duty drilling platform that can be considered where project depth, diameter and mixed-method requirements justify its configuration.",
        applications: [
          "Mixed Formation",
          "Deep Drilling",
          "Water Wells",
        ],
        href: "/drilling-rigs",
      },
      {
        model: "NGDR3000",
        reason:
          "A heavy-duty platform for demanding deep-drilling projects where the required drilling configuration and project scale match its capabilities.",
        applications: [
          "Mixed Formation",
          "Deep Drilling",
          "Large Projects",
        ],
        href: "/drilling-rigs",
      },
    ],

    engineeringNote:
      "Mixed formation projects should be engineered from the complete geological profile rather than selecting equipment from a single formation interval. The objective is a rig configuration that can adapt as conditions change with depth.",
  },
];