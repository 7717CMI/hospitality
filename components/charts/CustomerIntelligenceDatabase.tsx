'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessType: string
  coreBusinessActivities: string
  geographicPresence: string
  vehicleCategoriesHandled: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (for Proposition 2)
  primaryBusinessObjective: string
  keyPainPoints: string
  upcomingTriggersAndInitiatives: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  vendorSelectionCriteria: string
  preferredVendorType: string
  contractDurationPreference: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType: string
  preferredDeploymentModel: string
  performanceExpectations: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking: string
  additionalComments: string
}

// Sample data - Hospitality Industry Customers
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Levy UK + Ireland',
    businessType: 'Sports and entertainment venue hospitality',
    coreBusinessActivities: 'Premium hospitality and catering at major football stadiums and entertainment venues',
    geographicPresence: 'UK, Ireland',
    vehicleCategoriesHandled: '2,500',
    keyContactPerson: 'Jon Davies',
    designation: 'CEO',
    emailAddress: 'j.davies@levyuk.com',
    phoneNumber: '+44 20 7234 5000',
    linkedInProfile: 'linkedin.com/in/jondavieslevy',
    websiteUrl: 'www.levyuk.com',
    primaryBusinessObjective: 'Quality of guest experience and service reliability, Brand reputation at premium venues',
    keyPainPoints: 'High operational costs, Seasonal event dependency, Venue access restrictions',
    upcomingTriggersAndInitiatives: 'New stadium contracts, Major tournament catering',
    vendorSelectionCriteria: 'Event operations teams, Commercial departments',
    preferredVendorType: 'Long term venue contracts',
    contractDurationPreference: 'Strategic partnerships with stadium owners',
    preferredSolutionType: 'End to end hospitality service delivery',
    preferredDeploymentModel: 'On site at stadiums',
    performanceExpectations: 'High service quality, Zero errors during events',
    customerBenchmarking: 'Tier 1 - Major venue operator',
    additionalComments: 'Long term Premier League contracts'
  },
  {
    customerName: 'Sodexo Live!',
    businessType: 'Event catering and hospitality management',
    coreBusinessActivities: 'Full service hospitality for sports events, concerts, and major entertainment venues',
    geographicPresence: 'Global - 60+ countries',
    vehicleCategoriesHandled: '8,500',
    keyContactPerson: 'Nathalie Bellon-Szabo',
    designation: 'CEO Sodexo Live!',
    emailAddress: 'n.bellon@sodexolive.com',
    phoneNumber: '+33 1 30 85 75 00',
    linkedInProfile: 'linkedin.com/in/nathaliebellon',
    websiteUrl: 'www.sodexolive.com',
    primaryBusinessObjective: 'Scale for mega international events, Digital guest management capabilities',
    keyPainPoints: 'Logistics complexity across countries, Demand volatility',
    upcomingTriggersAndInitiatives: 'FIFA World Cup contracts, Olympic Games catering',
    vendorSelectionCriteria: 'Procurement and commercial teams',
    preferredVendorType: 'Framework agreements with caterers',
    contractDurationPreference: 'Early involvement in event planning',
    preferredSolutionType: 'Venue management and catering integration',
    preferredDeploymentModel: 'Hybrid on-site and digital platforms',
    performanceExpectations: 'Fast guest onboarding, High satisfaction',
    customerBenchmarking: 'Tier 1 - Global leader',
    additionalComments: 'Major sports federation partnerships'
  },
  {
    customerName: 'Legends Hospitality',
    businessType: 'Premium hospitality experiences for sports and entertainment',
    coreBusinessActivities: 'VIP hospitality management for NFL stadiums, motorsports events, and major leagues',
    geographicPresence: 'USA, UK, Global',
    vehicleCategoriesHandled: '4,200',
    keyContactPerson: 'Shervin Mirhashemi',
    designation: 'President & CEO',
    emailAddress: 's.mirhashemi@legends.net',
    phoneNumber: '+1 212 397 0900',
    linkedInProfile: 'linkedin.com/in/shervinmirhashemi',
    websiteUrl: 'www.legends.net',
    primaryBusinessObjective: 'Brand reputation and past event credentials, Compliance with security regulations',
    keyPainPoints: 'Security and access restrictions, Limited package differentiation',
    upcomingTriggersAndInitiatives: 'Smart stadium digital experience rollouts',
    vendorSelectionCriteria: 'Finance and senior management',
    preferredVendorType: 'Multi vendor risk reduction',
    contractDurationPreference: 'Co-branding and sponsorship collaboration',
    preferredSolutionType: 'Digital ticketing and guest platforms',
    preferredDeploymentModel: 'On-site with digital integration',
    performanceExpectations: 'High customer satisfaction and repeat bookings',
    customerBenchmarking: 'Tier 1 - Premium segment leader',
    additionalComments: 'NFL and Yankees partnership'
  },
  {
    customerName: 'Delaware North Sportservice',
    businessType: 'Sports venue concessions and hospitality',
    coreBusinessActivities: 'Food and beverage concessions at major league stadiums and arenas',
    geographicPresence: 'USA, Canada',
    vehicleCategoriesHandled: '3,800',
    keyContactPerson: 'Rick Abramson',
    designation: 'President - Sportservice',
    emailAddress: 'r.abramson@delawarenorth.com',
    phoneNumber: '+1 716 858 5000',
    linkedInProfile: 'linkedin.com/in/rickabramson',
    websiteUrl: 'www.delawarenorth.com',
    primaryBusinessObjective: 'Cost efficiency and margin control, Service reliability',
    keyPainPoints: 'High staffing costs, Seasonal dependency on sports schedules',
    upcomingTriggersAndInitiatives: 'New arena renovations, Championship event catering',
    vendorSelectionCriteria: 'Event operations and hospitality teams',
    preferredVendorType: 'Long term venue supplier contracts',
    contractDurationPreference: 'Service level agreements for recurring events',
    preferredSolutionType: 'End to end hospitality providers',
    preferredDeploymentModel: 'On-site stadium delivery',
    performanceExpectations: 'Zero errors during major events',
    customerBenchmarking: 'Tier 1 - Major league operator',
    additionalComments: 'MLB and NHL partnerships'
  },
  {
    customerName: 'Compass Group UK & Ireland',
    businessType: 'Catering and hospitality management',
    coreBusinessActivities: 'Sports and events catering for rugby stadiums, football venues, and tennis championships',
    geographicPresence: 'UK, Ireland, Global',
    vehicleCategoriesHandled: '5,600',
    keyContactPerson: 'Gary Green',
    designation: 'Managing Director - Sports & Leisure',
    emailAddress: 'g.green@compass-group.co.uk',
    phoneNumber: '+44 1932 573000',
    linkedInProfile: 'linkedin.com/in/garygreen-compass',
    websiteUrl: 'www.compass-group.co.uk',
    primaryBusinessObjective: 'Ability to scale for mega events, Guest experience quality',
    keyPainPoints: 'Last minute event cancellations, Demand volatility',
    upcomingTriggersAndInitiatives: 'Major tennis and rugby tournament contracts',
    vendorSelectionCriteria: 'Commercial and marketing departments',
    preferredVendorType: 'Framework agreements with service partners',
    contractDurationPreference: 'Strategic partnerships with leagues',
    preferredSolutionType: 'Venue management and catering partners',
    preferredDeploymentModel: 'Hybrid physical and digital booking',
    performanceExpectations: 'High service quality with zero errors',
    customerBenchmarking: 'Tier 1 - Global hospitality leader',
    additionalComments: 'Wimbledon and Six Nations contracts'
  },
  {
    customerName: 'On Location (Endeavor)',
    businessType: 'Premium sports travel and hospitality packages',
    coreBusinessActivities: 'VIP travel packages for Super Bowl, Olympics, FIFA World Cup, and major motorsports',
    geographicPresence: 'Global - 150+ countries',
    vehicleCategoriesHandled: '6,200',
    keyContactPerson: 'Paul Caine',
    designation: 'President',
    emailAddress: 'p.caine@onlocationexp.com',
    phoneNumber: '+1 704 357 8600',
    linkedInProfile: 'linkedin.com/in/paulcaine',
    websiteUrl: 'www.onlocationexp.com',
    primaryBusinessObjective: 'Digital ticketing capabilities, Brand reputation at premium events',
    keyPainPoints: 'Logistics complexity across multiple countries, Package differentiation',
    upcomingTriggersAndInitiatives: 'FIFA World Cup and Olympics hospitality programs',
    vendorSelectionCriteria: 'Senior management for large contracts',
    preferredVendorType: 'Event specific tender procurement',
    contractDurationPreference: 'Early event planning involvement',
    preferredSolutionType: 'Digital ticketing and guest experience platforms',
    preferredDeploymentModel: 'Hybrid with accommodation partners',
    performanceExpectations: 'Fast guest onboarding, Repeat bookings',
    customerBenchmarking: 'Tier 1 - Premium travel leader',
    additionalComments: 'Official FIFA and IOC partner'
  },
  {
    customerName: 'QuintEvents',
    businessType: 'Sports travel and hospitality packages',
    coreBusinessActivities: 'Official travel packages for Formula 1, tennis Grand Slams, and golf majors',
    geographicPresence: 'USA, Europe, Asia',
    vehicleCategoriesHandled: '2,100',
    keyContactPerson: 'Brian Ruede',
    designation: 'CEO',
    emailAddress: 'b.ruede@quintevents.com',
    phoneNumber: '+1 770 772 6045',
    linkedInProfile: 'linkedin.com/in/brianruede',
    websiteUrl: 'www.quintevents.com',
    primaryBusinessObjective: 'Cost efficiency and margin control, Compliance with venue regulations',
    keyPainPoints: 'Seasonal flagship event dependency, Access restrictions at venues',
    upcomingTriggersAndInitiatives: 'F1 race weekends, US Open tennis hospitality',
    vendorSelectionCriteria: 'Procurement and vendor management teams',
    preferredVendorType: 'Pre-preferred vendor lists',
    contractDurationPreference: 'Co-branding with event organizers',
    preferredSolutionType: 'End to end hospitality service providers',
    preferredDeploymentModel: 'On-site delivery at venues',
    performanceExpectations: 'High customer satisfaction scores',
    customerBenchmarking: 'Tier 2 - Specialized events operator',
    additionalComments: 'Official F1 and USTA partner'
  },
  {
    customerName: 'Seat Unique',
    businessType: 'Premium seating and hospitality marketplace',
    coreBusinessActivities: 'Premium ticket and hospitality experiences for football, rugby, and entertainment events',
    geographicPresence: 'UK, Europe',
    vehicleCategoriesHandled: '1,800',
    keyContactPerson: 'Rob Massey',
    designation: 'CEO & Co-Founder',
    emailAddress: 'r.massey@seatunique.com',
    phoneNumber: '+44 20 3695 9900',
    linkedInProfile: 'linkedin.com/in/robmassey',
    websiteUrl: 'www.seatunique.com',
    primaryBusinessObjective: 'Digital guest management capabilities, Quality guest experience',
    keyPainPoints: 'Limited hospitality package differentiation, Demand volatility',
    upcomingTriggersAndInitiatives: 'Smart stadium digital guest programs',
    vendorSelectionCriteria: 'Marketing and commercial departments',
    preferredVendorType: 'Multi vendor sourcing strategy',
    contractDurationPreference: 'Service level agreements',
    preferredSolutionType: 'Digital ticketing and guest platforms',
    preferredDeploymentModel: 'Digital platforms with on-site fulfillment',
    performanceExpectations: 'Fast guest onboarding processes',
    customerBenchmarking: 'Tier 2 - Digital marketplace innovator',
    additionalComments: 'Premier League and Six Nations partnerships'
  },
  {
    customerName: 'Keith Prowse (Hospitality)',
    businessType: 'Corporate hospitality and event experiences',
    coreBusinessActivities: 'Corporate hospitality for Premier League football, rugby internationals, and motorsports',
    geographicPresence: 'UK, Europe',
    vehicleCategoriesHandled: '3,400',
    keyContactPerson: 'David Hornby',
    designation: 'Managing Director',
    emailAddress: 'd.hornby@keithprowse.co.uk',
    phoneNumber: '+44 161 385 3090',
    linkedInProfile: 'linkedin.com/in/davidhornby',
    websiteUrl: 'www.keithprowse.co.uk',
    primaryBusinessObjective: 'Brand reputation and event credentials, Service reliability',
    keyPainPoints: 'High operational costs, Seasonal event schedules',
    upcomingTriggersAndInitiatives: 'Major tournament hospitality expansions',
    vendorSelectionCriteria: 'Event operations and hospitality teams',
    preferredVendorType: 'Long term venue contracts',
    contractDurationPreference: 'Strategic partnerships with venues',
    preferredSolutionType: 'End to end hospitality service providers',
    preferredDeploymentModel: 'On-site at stadiums and arenas',
    performanceExpectations: 'High satisfaction and repeat bookings',
    customerBenchmarking: 'Tier 2 - Established corporate operator',
    additionalComments: 'Long standing Premier League partnerships'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Common Customer Information header cells (5 columns)
  const renderCustomerInfoHeaders = () => (
    <>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Customer Name/Company Name</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Business Overview</div>
        <div className="font-normal text-[10px] text-gray-600">(Operators managing hospitality for football leagues, major entertainment events, motorsports, tennis, rugby, and major sport tourism/Hospitality and catering/Facilities and venue management)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Industry Vertical</div>
        <div className="font-normal text-[10px] text-gray-600">(Sports and entertainment/Event management/Travel and tourism/Hospitality and catering/Facilities and venue management)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Total Annual Revenue (US$ Million)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Customer Size / Scale</div>
        <div className="font-normal text-[10px] text-gray-600">(Large multinational hospitality/Mid Size regional agencies/Specialized premium lounge/Local stadium hospitality managers)</div>
      </th>
    </>
  )

  // Common Contact Details header cells (6 columns)
  const renderContactHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
    </>
  )

  // Common Customer Information data cells (5 columns)
  const renderCustomerInfoCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.coreBusinessActivities}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.geographicPresence}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.vehicleCategoriesHandled}</td>
    </>
  )

  // Common Contact Details data cells (6 columns)
  const renderContactCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
      </td>
    </>
  )

  // Professional Drivers header cells (3 columns)
  const renderProfessionalDriversHeaders = () => (
    <>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Key Buying Criteria</div>
        <div className="font-normal text-[10px] text-gray-600">(Quality of guest experience and service reliability/Brand reputation and past event credentials/Compliance with venue and security regulations/Ability to scale for mega international events/Cost efficiency and margin control/Digital capabilities for ticketing and guest management)</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Key Pain Points</div>
        <div className="font-normal text-[10px] text-gray-600">(High operational and staffing costs/Dependency on seasonal and flagship events/Security and access restrictions at venues/Demand volatility and last minute/ cancellations/Limited differentiation between hospitality packages/Logistics complexity across multiple countries)</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Upcoming Triggers and Initiatives</div>
        <div className="font-normal text-[10px] text-gray-600">(New stadium developments and renovations/Major tournaments and championships/Smart stadium and digital guest experience programs)</div>
      </th>
    </>
  )

  // Professional Drivers data cells
  const renderProfessionalDriversCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryBusinessObjective}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPainPoints}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggersAndInitiatives}</td>
    </>
  )

  // Purchasing Behaviour Metrics header cells (3 columns)
  const renderPurchasingHeaders = () => (
    <>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Budget Ownership</div>
        <div className="font-normal text-[10px] text-gray-600">(Event operations and hospitality management teams/Commercial and marketing departments/Procurement and vendor management teams/Finance or commercial strategy units/Senior management for large contracts)</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Procurement Model</div>
        <div className="font-normal text-[10px] text-gray-600">(Long term contracts with venues and suppliers/Frame work agreements with caterers and service partners/Multi vendor sourcing for risk reduction/Event specific tender based procurement/Pre preferred vendor lists)</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Preferred Engagement Type</div>
        <div className="font-normal text-[10px] text-gray-600">(Strategic partnerships with venue owners and leagues/Early involvement in event planning and design stage/Co branding and sponsorship collaboration/Service level agreements for recurring events)</div>
      </th>
    </>
  )

  // Purchasing Behaviour Metrics data cells
  const renderPurchasingCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.vendorSelectionCriteria}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredVendorType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.contractDurationPreference}</td>
    </>
  )

  // Solution Requirements header cells (3 columns)
  const renderSolutionHeaders = () => (
    <>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Preferred Solution Type</div>
        <div className="font-normal text-[10px] text-gray-600">(End to end hospitality service providers/Venue management and catering partners/Digital ticketing and guest experience platforms)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Preferred Deployment Model</div>
        <div className="font-normal text-[10px] text-gray-600">(On site delivery at stadiums and arenas/ Hybrid with physical booking and digital accommodation solution partners)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Performance Expectations</div>
        <div className="font-normal text-[10px] text-gray-600">(High service quality with zero errors during events/Fast guest onboarding and entry processes/High customer satisfaction and repeat bookings)</div>
      </th>
    </>
  )

  // Solution Requirements data cells
  const renderSolutionCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredDeploymentModel}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.performanceExpectations}</td>
    </>
  )

  // CMI Insights header cells (3 columns)
  const renderCMIHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Performance Expectations</div>
        <div className="font-normal text-[10px] text-gray-600">(High service quality with zero errors during events/Fast guest onboarding and entry processes/High customer satisfaction and repeat bookings)</div>
      </th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Customer Benchmarking Summary</div>
        <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
      </th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Additional Comments/Notes By CMI team</div>
      </th>
    </>
  )

  // CMI Insights data cells (3 columns)
  const renderCMICells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.performanceExpectations}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
    </>
  )

  // Proposition 1 Table - Customer Information (5) + Contact Details (6) = 11 columns
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 Table - Customer Info (5) + Contact (6) + Professional Drivers (3) = 14 columns
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProfessionalDriversHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProfessionalDriversCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 Table - All sections: Customer Info (5) + Contact (6) + Professional Drivers (3) + Purchasing (3) + Solution (3) + CMI (3) = 23 columns
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
            <th colSpan={3} className="bg-[#D8BFD8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={3} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProfessionalDriversHeaders()}
            {renderPurchasingHeaders()}
            {renderSolutionHeaders()}
            {renderCMIHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProfessionalDriversCells(customer)}
              {renderPurchasingCells(customer)}
              {renderSolutionCells(customer)}
              {renderCMICells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
