import { allCategoriesData } from "./allCategoriesData";

export const resourcesData: Record<string, Record<string, Record<string, Array<{name: string; description: string}>>>> = {
  "Accounts and Finance": {
    "Actuarial Science": {
      "Professional Bodies": [
        { name: "www.actuariesindia.org", description: "The statutory body for Indian actuarial certifications and exams." },
        { name: "www.insuranceinstituteofindia.com", description: "Provides specialized insurance and risk management certifications." },
        { name: "www.theactuaryindia.com", description: "Official resource for industry research and professional updates." }
      ],
      "Top Universities": [
        { name: "www.amity.com", description: "Offers industry-aligned Actuarial Science degrees and training." },
        { name: "www.christuniversity.com", description: "Renowned for comprehensive risk management and financial mathematics programs." },
        { name: "www.shiksha.com", description: "Leading portal for Indian actuarial admission guides and rankings." }
      ],
      "Scholarships": [
        { name: "www.buddy4study.com", description: "Aggregates merit-based scholarships for financial and actuarial students." },
        { name: "www.scholarshipsinindia.com", description: "Extensive database for Indian professional course grants." },
        { name: "www.vidyasaarathi.com", description: "Facilitates corporate-funded scholarships for specialized skill programs." }
      ]
    },
    "Banking and Related Services": {
      "Professional Bodies": [
        { name: "www.iibf.org.in", description: "Primary portal offering the premier JAIIB/CAIIB certifications for banking professionals." },
        { name: "www.nism.com", description: "Provides essential certifications for banking, securities, and financial market operations." },
        { name: "www.fpsb.com", description: "The global authority for Certified Financial Planner (CFP) credentials in banking services." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "Leading portal for admission guides and rankings of top Indian banking and finance MBAs." },
        { name: "www.amity.com", description: "Offers specialized industry-aligned degrees in Banking, Insurance, and Financial Services." },
        { name: "www.collegedekho.com", description: "Provides data-driven insights into prestigious Indian institutes for banking and investment management." }
      ],
      "Scholarships": [
        { name: "www.buddy4study.com", description: "India's largest platform for merit-based banking and financial studies scholarships." },
        { name: "www.vidyasaarathi.com", description: "Facilitates corporate-funded (CSR) scholarships for students pursuing specialized banking diplomas." },
        { name: "www.scholarshipsinindia.com", description: "Extensive database for professional grants and banking entrance exam financial aid." }
      ]
    },
    "Chartered Accountant": {
      "Professional Bodies": [
        { name: "www.icai.org", description: "The statutory body regulating Indian CA certification and professional standards." },
        { name: "www.taxmann.com", description: "Provides essential clinical tax resources, practice tools, and legal updates." },
        { name: "www.clear.com", description: "Major commercial network for CA practice management and professional networking." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "Premier portal for rankings and admission guides for CA-integrated colleges." },
        { name: "www.amity.com", description: "Offers industry-aligned accounting degrees with dedicated CA examination support." },
        { name: "www.collegedekho.com", description: "Provides data-driven insights into prestigious Indian accounting institutes." }
      ],
      "Scholarships": [
        { name: "www.buddy4study.com", description: "India's largest platform hosting merit-based scholarships for CA and commerce studies." },
        { name: "www.vidyasaarathi.com", description: "Facilitates corporate-funded (CSR) scholarships for specialized accounting training." },
        { name: "www.scholarshipsinindia.com", description: "Database for professional grants and CA entrance exam financial aid." }
      ]
    },
    "Company Secretary": {
      "Professional Bodies": [
        { name: "www.icsi.edu", description: "The statutory body regulating the Company Secretary profession in India." },
        { name: "www.taxmann.com", description: "Provides essential legal updates, clinical resources, and practice tools for corporate compliance." },
        { name: "www.corporateprofessionals.com", description: "Offers specialized advisory services and networking for corporate governance experts." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "India's premier portal for admission guides and rankings of top CS-integrated colleges." },
        { name: "www.amity.com", description: "Offers industry-aligned corporate law degrees with CS examination support." },
        { name: "www.collegedekho.com", description: "Provides data-driven insights into prestigious Indian institutes for corporate governance careers." }
      ],
      "Scholarships": [
        { name: "www.buddy4study.com", description: "Aggregates merit-based scholarships for professional CS and law studies." },
        { name: "www.vidyasaarathi.com", description: "Facilitates corporate-funded (CSR) scholarships for specialized secretarial training." },
        { name: "www.scholarshipsinindia.com", description: "Database for professional grants and CS entrance exam financial aid." }
      ]
    },
    "Cost Accountant": {
      "Professional Bodies": [
        { name: "www.icmai.in", description: "The statutory body regulating Cost and Management Accountancy (CMA) in India." },
        { name: "www.taxmann.com", description: "Provides essential clinical resources, practice tools, and legal updates for cost accountants." },
        { name: "www.clear.com", description: "A major commercial network for CMA practice management and professional networking." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "Premier portal for rankings and admission guides for CMA-integrated colleges." },
        { name: "www.amity.com", description: "Offers industry-aligned accounting degrees with dedicated professional examination support." },
        { name: "www.collegedekho.com", description: "Provides data-driven insights into prestigious Indian management accounting institutes." }
      ],
      "Scholarships": [
        { name: "www.buddy4study.com", description: "India's largest platform hosting merit-based scholarships for CMA and commerce studies." },
        { name: "www.vidyasaarathi.com", description: "Facilitates corporate-funded (CSR) scholarships for specialized accounting training." },
        { name: "www.scholarshipsinindia.com", description: "Database for professional grants and CMA entrance exam financial aid." }
      ]
    },
    "Economics": {
      "Professional Bodies": [
        { name: "www.isid.org.in", description: "Premier institute for industrial development research and professional policy networking for Indian economists." },
        { name: "www.nipfp.org.in", description: "Leading authority for public finance and fiscal policy research, providing professional industry insights." },
        { name: "www.mse.ac.in", description: "Prominent body for economic modelling, research certifications, and policy advocacy in India." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "India's top portal for admission guides and rankings of elite economics colleges." },
        { name: "www.amity.com", description: "Offers industry-aligned economics degrees focusing on quantitative analysis and global trends." },
        { name: "www.ashoka.edu.in", description: "Renowned for world-class faculty and specialized research in economic sciences." }
      ],
      "Scholarships": [
        { name: "www.idfcfirstbank.com", description: "Provides specialized MBA and MA Economics scholarships for students at prestigious institutes." },
        { name: "www.buddy4study.com", description: "Aggregates merit-based and corporate scholarships for students in economic and financial sciences." },
        { name: "www.scholarshipsinindia.com", description: "Database for national scholarship programs and financial aid for professional economics degrees." }
      ]
    },
    "Financial Analyst": {
      "Professional Bodies": [
        { name: "www.cfainstitute.org", description: "Provides the globally recognized CFA charter, the gold standard for investment analysis." },
        { name: "www.nism.com", description: "Offers SEBI-regulated certifications for Indian securities markets and financial operations." },
        { name: "www.fpsb.org", description: "The authority for CFP credentials, focusing on professional financial planning." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "India's leading portal for rankings and admission guides for finance programs." },
        { name: "www.amity.com", description: "Offers industry-aligned degrees in Applied Finance with analyst-specific training." },
        { name: "www.lpu.in", description: "Provides ACBSP-accredited finance degrees with strong corporate placement ties." }
      ],
      "Scholarships": [
        { name: "www.ey.com", description: "Provides grants and internships for exceptional Indian students in financial analysis." },
        { name: "www.buddy4study.com", description: "Aggregates merit-based scholarships for professional finance and analytical studies." },
        { name: "www.vidyasaarathi.com", description: "Facilitates corporate-funded (CSR) scholarships for specialized financial and vocational programs." }
      ]
    },
    "Financial and Investment Planning": {
      "Professional Bodies": [
        { name: "www.fpsb.org", description: "The authority for CFP certification, setting professional standards in financial planning." },
        { name: "www.cfainstitute.org", description: "Global provider of the CFA charter, the gold standard for investment management." },
        { name: "www.nism.com", description: "SEBI-backed body offering essential certifications for Indian securities and investment operations." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "Leading portal for rankings and admission guides for top Indian finance programs." },
        { name: "www.amity.com", description: "Offers specialized industry-aligned degrees in financial and investment planning." }
      ],
      "Scholarships": [
        { name: "www.buddy4study.com", description: "Aggregates merit-based scholarships for Indian students in financial and analytical studies." }
      ]
    },
    "Financial Risk Management": {
      "Professional Bodies": [
        { name: "www.garp.com", description: "Awards the FRM designation, the global standard for financial risk expertise." },
        { name: "www.prmia.com", description: "Provides PRM certification and a global network for risk research and advocacy." },
        { name: "www.nism.com", description: "Offers SEBI-regulated certifications for managing risk in Indian securities markets." }
      ],
      "Top Universities": [
        { name: "www.shiksha.com", description: "Top portal for rankings and admission guides for Indian risk management programs." },
        { name: "www.amity.com", description: "Offers industry-aligned degrees in Financial Risk Management with certification support." },
        { name: "www.uptopcareers.com", description: "Provides executive risk management certificates from prestigious IIMs." }
      ],
      "Scholarships": [
        { name: "www.ey.com", description: "Offers grants for Indian students excelling in business and risk studies." },
        { name: "www.buddy4study.com", description: "Aggregates merit-based scholarships for professional finance and risk careers." },
        { name: "www.vidyasaarathi.com", description: "Facilitates corporate-funded scholarships for specialized financial risk training." }
      ]
    }
  }
};

Object.assign(resourcesData, allCategoriesData);
