'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessType: string
  coreBusinessActivities: string
  geographicPresence: string
  totalAnnualRevenue: string
  customerSizeScale: string
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
    businessType: 'Operators managing hospitality for football leagues and major entertainment events',
    coreBusinessActivities: 'Sports and entertainment',
    geographicPresence: 'UK, Ireland',
    totalAnnualRevenue: '850',
    customerSizeScale: 'Large multinational hospitality',
    keyContactPerson: 'Jon Davies',
    designation: 'CEO',
    emailAddress: 'j.davies@levyuk.com',
    phoneNumber: '+44 20 7234 5000',
    linkedInProfile: 'linkedin.com/in/jondavieslevy',
    websiteUrl: 'www.levyuk.com',
    primaryBusinessObjective: 'Quality of guest experience and service reliability, Brand reputation and past event credentials',
    keyPainPoints: 'High operational and staffing costs, Dependency on seasonal and flagship events',
    upcomingTriggersAndInitiatives: 'New stadium developments and renovations, Major tournaments and championships',
    vendorSelectionCriteria: 'Event operations and hospitality management teams',
    preferredVendorType: 'Long term contracts with venues and suppliers',
    contractDurationPreference: 'Strategic partnerships with venue owners and leagues',
    preferredSolutionType: 'End to end hospitality service providers',
    preferredDeploymentModel: 'On site delivery at stadiums and arenas',
    performanceExpectations: 'High service quality with zero errors during events',
    customerBenchmarking: 'Large multinational hospitality - High potential',
    additionalComments: 'Long term Premier League stadium contracts'
  },
  {
    customerName: 'Sodexo Live!',
    businessType: 'Operators managing hospitality for major sport tourism and entertainment events',
    coreBusinessActivities: 'Hospitality and catering',
    geographicPresence: 'France, USA, UK, Global',
    totalAnnualRevenue: '3200',
    customerSizeScale: 'Large multinational hospitality',
    keyContactPerson: 'Nathalie Bellon-Szabo',
    designation: 'CEO Sodexo Live!',
    emailAddress: 'n.bellon@sodexolive.com',
    phoneNumber: '+33 1 30 85 75 00',
    linkedInProfile: 'linkedin.com/in/nathaliebellon',
    websiteUrl: 'www.sodexolive.com',
    primaryBusinessObjective: 'Ability to scale for mega international events, Digital capabilities for ticketing and guest management',
    keyPainPoints: 'Logistics complexity across multiple countries, Demand volatility and last minute cancellations',
    upcomingTriggersAndInitiatives: 'Major tournaments and championships, Smart stadium and digital guest experience programs',
    vendorSelectionCriteria: 'Commercial and marketing departments, Procurement and vendor management teams',
    preferredVendorType: 'Frame work agreements with caterers and service partners',
    contractDurationPreference: 'Early involvement in event planning and design stage',
    preferredSolutionType: 'Venue management and catering partners',
    preferredDeploymentModel: 'Hybrid with physical booking and digital accommodation solution partners',
    performanceExpectations: 'Fast guest onboarding and entry processes, High customer satisfaction and repeat bookings',
    customerBenchmarking: 'Large multinational hospitality - Strategic customer',
    additionalComments: 'FIFA World Cup and Olympic Games partnerships'
  },
  {
    customerName: 'Legends Hospitality',
    businessType: 'Operators managing hospitality for motorsports and major sport tourism',
    coreBusinessActivities: 'Event management',
    geographicPresence: 'USA, UK, Germany',
    totalAnnualRevenue: '1850',
    customerSizeScale: 'Large multinational hospitality',
    keyContactPerson: 'Shervin Mirhashemi',
    designation: 'President & CEO',
    emailAddress: 's.mirhashemi@legends.net',
    phoneNumber: '+1 212 397 0900',
    linkedInProfile: 'linkedin.com/in/shervinmirhashemi',
    websiteUrl: 'www.legends.net',
    primaryBusinessObjective: 'Brand reputation and past event credentials, Compliance with venue and security regulations',
    keyPainPoints: 'Security and access restrictions at venues, Limited differentiation between hospitality packages',
    upcomingTriggersAndInitiatives: 'Smart stadium and digital guest experience programs',
    vendorSelectionCriteria: 'Finance or commercial strategy units, Senior management for large contracts',
    preferredVendorType: 'Multi vendor sourcing for risk reduction',
    contractDurationPreference: 'Co branding and sponsorship collaboration',
    preferredSolutionType: 'Digital ticketing and guest experience platforms',
    preferredDeploymentModel: 'On site delivery at stadiums and arenas',
    performanceExpectations: 'High customer satisfaction and repeat bookings',
    customerBenchmarking: 'Large multinational hospitality - Premium operator',
    additionalComments: 'NFL and MLB premium hospitality partnerships'
  },
  {
    customerName: 'Delaware North Sportservice',
    businessType: 'Hospitality and catering',
    coreBusinessActivities: 'Facilities and venue management',
    geographicPresence: 'USA, Canada',
    totalAnnualRevenue: '2400',
    customerSizeScale: 'Large multinational hospitality',
    keyContactPerson: 'Rick Abramson',
    designation: 'President - Sportservice',
    emailAddress: 'r.abramson@delawarenorth.com',
    phoneNumber: '+1 716 858 5000',
    linkedInProfile: 'linkedin.com/in/rickabramson',
    websiteUrl: 'www.delawarenorth.com',
    primaryBusinessObjective: 'Cost efficiency and margin control, Quality of guest experience and service reliability',
    keyPainPoints: 'High operational and staffing costs, Dependency on seasonal and flagship events',
    upcomingTriggersAndInitiatives: 'New stadium developments and renovations',
    vendorSelectionCriteria: 'Event operations and hospitality management teams',
    preferredVendorType: 'Long term contracts with venues and suppliers',
    contractDurationPreference: 'Service level agreements for recurring events',
    preferredSolutionType: 'End to end hospitality service providers',
    preferredDeploymentModel: 'On site delivery at stadiums and arenas',
    performanceExpectations: 'High service quality with zero errors during events',
    customerBenchmarking: 'Large multinational hospitality - Major venue operator',
    additionalComments: 'MLB and NHL stadium concession contracts'
  },
  {
    customerName: 'Compass Group UK & Ireland',
    businessType: 'Operators managing hospitality for tennis and rugby events',
    coreBusinessActivities: 'Travel and tourism',
    geographicPresence: 'UK, Ireland',
    totalAnnualRevenue: '4200',
    customerSizeScale: 'Large multinational hospitality',
    keyContactPerson: 'Gary Green',
    designation: 'Managing Director - Sports & Leisure',
    emailAddress: 'g.green@compass-group.co.uk',
    phoneNumber: '+44 1932 573000',
    linkedInProfile: 'linkedin.com/in/garygreen-compass',
    websiteUrl: 'www.compass-group.co.uk',
    primaryBusinessObjective: 'Ability to scale for mega international events, Quality of guest experience and service reliability',
    keyPainPoints: 'Demand volatility and last minute cancellations, Logistics complexity across multiple countries',
    upcomingTriggersAndInitiatives: 'Major tournaments and championships',
    vendorSelectionCriteria: 'Commercial and marketing departments',
    preferredVendorType: 'Frame work agreements with caterers and service partners',
    contractDurationPreference: 'Strategic partnerships with venue owners and leagues',
    preferredSolutionType: 'Venue management and catering partners',
    preferredDeploymentModel: 'Hybrid with physical booking and digital accommodation solution partners',
    performanceExpectations: 'High service quality with zero errors during events',
    customerBenchmarking: 'Large multinational hospitality - Global leader',
    additionalComments: 'Wimbledon and Six Nations rugby contracts'
  },
  {
    customerName: 'On Location (Endeavor)',
    businessType: 'Operators managing hospitality for major sport tourism',
    coreBusinessActivities: 'Event management',
    geographicPresence: 'USA, Qatar, France',
    totalAnnualRevenue: '1620',
    customerSizeScale: 'Specialized premium lounge',
    keyContactPerson: 'Paul Caine',
    designation: 'President',
    emailAddress: 'p.caine@onlocationexp.com',
    phoneNumber: '+1 704 357 8600',
    linkedInProfile: 'linkedin.com/in/paulcaine',
    websiteUrl: 'www.onlocationexp.com',
    primaryBusinessObjective: 'Digital capabilities for ticketing and guest management, Brand reputation and past event credentials',
    keyPainPoints: 'Logistics complexity across multiple countries, Limited differentiation between hospitality packages',
    upcomingTriggersAndInitiatives: 'Major tournaments and championships',
    vendorSelectionCriteria: 'Senior management for large contracts',
    preferredVendorType: 'Event specific tender based procurement',
    contractDurationPreference: 'Early involvement in event planning and design stage',
    preferredSolutionType: 'Digital ticketing and guest experience platforms',
    preferredDeploymentModel: 'Hybrid with physical booking and digital accommodation solution partners',
    performanceExpectations: 'Fast guest onboarding and entry processes, High customer satisfaction and repeat bookings',
    customerBenchmarking: 'Specialized premium lounge - Premium travel packages',
    additionalComments: 'Official FIFA World Cup and IOC partner'
  },
  {
    customerName: 'QuintEvents',
    businessType: 'Operators managing hospitality for motorsports and tennis',
    coreBusinessActivities: 'Hospitality and catering',
    geographicPresence: 'USA, Monaco, UK',
    totalAnnualRevenue: '680',
    customerSizeScale: 'Mid Size regional agencies',
    keyContactPerson: 'Brian Ruede',
    designation: 'CEO',
    emailAddress: 'b.ruede@quintevents.com',
    phoneNumber: '+1 770 772 6045',
    linkedInProfile: 'linkedin.com/in/brianruede',
    websiteUrl: 'www.quintevents.com',
    primaryBusinessObjective: 'Cost efficiency and margin control, Compliance with venue and security regulations',
    keyPainPoints: 'Dependency on seasonal and flagship events, Security and access restrictions at venues',
    upcomingTriggersAndInitiatives: 'Smart stadium and digital guest experience programs',
    vendorSelectionCriteria: 'Procurement and vendor management teams',
    preferredVendorType: 'Pre preferred vendor lists',
    contractDurationPreference: 'Co branding and sponsorship collaboration',
    preferredSolutionType: 'End to end hospitality service providers',
    preferredDeploymentModel: 'On site delivery at stadiums and arenas',
    performanceExpectations: 'High customer satisfaction and repeat bookings',
    customerBenchmarking: 'Mid Size regional agencies - Specialized operator',
    additionalComments: 'Official Formula 1 and US Open partner'
  },
  {
    customerName: 'Seat Unique',
    businessType: 'Operators managing hospitality for football leagues and rugby',
    coreBusinessActivities: 'Sports and entertainment',
    geographicPresence: 'UK, Spain',
    totalAnnualRevenue: '420',
    customerSizeScale: 'Mid Size regional agencies',
    keyContactPerson: 'Rob Massey',
    designation: 'CEO & Co-Founder',
    emailAddress: 'r.massey@seatunique.com',
    phoneNumber: '+44 20 3695 9900',
    linkedInProfile: 'linkedin.com/in/robmassey',
    websiteUrl: 'www.seatunique.com',
    primaryBusinessObjective: 'Digital capabilities for ticketing and guest management, Quality of guest experience and service reliability',
    keyPainPoints: 'Limited differentiation between hospitality packages, Demand volatility and last minute cancellations',
    upcomingTriggersAndInitiatives: 'Smart stadium and digital guest experience programs',
    vendorSelectionCriteria: 'Commercial and marketing departments',
    preferredVendorType: 'Multi vendor sourcing for risk reduction',
    contractDurationPreference: 'Service level agreements for recurring events',
    preferredSolutionType: 'Digital ticketing and guest experience platforms',
    preferredDeploymentModel: 'Hybrid with physical booking and digital accommodation solution partners',
    performanceExpectations: 'Fast guest onboarding and entry processes',
    customerBenchmarking: 'Mid Size regional agencies - Digital innovator',
    additionalComments: 'Premier League and Six Nations digital partnerships'
  },
  {
    customerName: 'Keith Prowse (Hospitality)',
    businessType: 'Facilities and venue management',
    coreBusinessActivities: 'Facilities and venue management',
    geographicPresence: 'UK, Ireland',
    totalAnnualRevenue: '540',
    customerSizeScale: 'Local stadium hospitality managers',
    keyContactPerson: 'David Hornby',
    designation: 'Managing Director',
    emailAddress: 'd.hornby@keithprowse.co.uk',
    phoneNumber: '+44 161 385 3090',
    linkedInProfile: 'linkedin.com/in/davidhornby',
    websiteUrl: 'www.keithprowse.co.uk',
    primaryBusinessObjective: 'Brand reputation and past event credentials, Quality of guest experience and service reliability',
    keyPainPoints: 'High operational and staffing costs, Dependency on seasonal and flagship events',
    upcomingTriggersAndInitiatives: 'New stadium developments and renovations',
    vendorSelectionCriteria: 'Event operations and hospitality management teams',
    preferredVendorType: 'Long term contracts with venues and suppliers',
    contractDurationPreference: 'Strategic partnerships with venue owners and leagues',
    preferredSolutionType: 'End to end hospitality service providers',
    preferredDeploymentModel: 'On site delivery at stadiums and arenas',
    performanceExpectations: 'High service quality with zero errors during events, High customer satisfaction and repeat bookings',
    customerBenchmarking: 'Local stadium hospitality managers - Established operator',
    additionalComments: 'Premier League and rugby hospitality contracts'
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
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerSizeScale}</td>
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
