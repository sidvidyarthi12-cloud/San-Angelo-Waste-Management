export const COMPANY = {
  name: 'San Angelo Waste Management',
  shortName: 'SAWM',
  phone: '(325) 555-0142',
  phoneHref: 'tel:+13255550142',
  emergencyPhone: '(325) 555-0199',
  emergencyPhoneHref: 'tel:+13255550199',
  email: 'quotes@sanangelowaste.com',
  address: '2450 N Bell Street, San Angelo, TX 76903',
  hours: 'Mon–Fri 7:00 AM – 6:00 PM · Sat 8:00 AM – 2:00 PM',
  tagline: 'Fluid Logistics | Dumpster Rentals | Portable Toilets | Septic Services',
}

export interface ServiceInfo {
  slug: string
  title: string
  shortTitle: string
  blurb: string
  bullets: string[]
  icon: 'dumpster' | 'toilet' | 'trailer' | 'septic' | 'fence' | 'washout' | 'fluid'
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'fluid-logistics',
    title: 'Fluid Logistics & Water Hauling',
    shortTitle: 'Fluid Logistics',
    blurb:
      'Bulk liquid transport for drilling, fracking, and renewable energy sites. Our fleet handles bulk water delivery, vacuum truck services, and safe fluid transfer to and from your job site.',
    bullets: [
      'Bulk water delivery for drilling & fracking',
      'Vacuum truck services',
      'Fluid transfer & safe liquids management',
      'Support for oil, gas, wind & solar sites',
    ],
    icon: 'fluid',
  },
  {
    slug: 'roll-off-dumpsters',
    title: 'Roll Off Dumpster Rentals',
    shortTitle: 'Roll Off Dumpsters',
    blurb:
      'Sturdy roll off containers for construction sites, home cleanouts, roofing jobs, and commercial projects. Same-week delivery with flexible rental periods and straightforward pricing.',
    bullets: [
      '20, 30, and 40 yard containers',
      'Fast drop-off and scheduled swap-outs',
      'Flat-rate pricing with no hidden fees',
      'Construction, demolition, and household debris',
    ],
    icon: 'dumpster',
  },
  {
    slug: 'portable-toilets',
    title: 'Portable Toilet Rentals',
    shortTitle: 'Portable Toilets',
    blurb:
      'Clean, dependable portable restrooms for job sites, events, and remote locations. Every unit is serviced on a regular schedule so your crew and guests always have a fresh facility.',
    bullets: [
      'Standard and ADA-compliant units',
      'Hand wash and sanitizer stations',
      'Weekly cleaning and restocking included',
      'Long-term job site and single-event rentals',
    ],
    icon: 'toilet',
  },
  {
    slug: 'restroom-trailers',
    title: 'Luxury Restroom Trailers',
    shortTitle: 'Restroom Trailers',
    blurb:
      'Climate-controlled restroom trailers with running water, flushing toilets, and interior lighting — the right choice for weddings, corporate events, and VIP hospitality.',
    bullets: [
      '2, 4, and 8 station trailer options',
      'Heating and air conditioning',
      'Running water sinks and vanity mirrors',
      'Delivery, setup, and teardown handled for you',
    ],
    icon: 'trailer',
  },
  {
    slug: 'septic-services',
    title: 'Septic Cleaning & Pumping',
    shortTitle: 'Septic Services',
    blurb:
      'Professional septic tank pumping, cleaning, and aboveground holding tank rentals for homes, businesses, and oilfield operations. Licensed operators and honest recommendations.',
    bullets: [
      'Residential and commercial septic pumping',
      'Aboveground holding tank rentals',
      'Fresh water and wastewater tanks',
      '24/7 emergency response available',
    ],
    icon: 'septic',
  },
]

export const EXTRA_SERVICES: ServiceInfo[] = [
  {
    slug: 'safety-fencing',
    title: 'Temporary Safety Fencing',
    shortTitle: 'Safety Fencing',
    blurb:
      'Keep your site secure and compliant with temporary panel fencing, delivered and installed on your schedule.',
    bullets: ['Chain link panels', 'Wind screen options', 'Install and removal included'],
    icon: 'fence',
  },
  {
    slug: 'concrete-washouts',
    title: 'Concrete Washouts',
    shortTitle: 'Concrete Washouts',
    blurb:
      'Contained washout bins that keep concrete slurry off your ground and keep your site inspection-ready.',
    bullets: ['Watertight containment', 'Scheduled swap-outs', 'EPA-friendly disposal'],
    icon: 'washout',
  },
]

export interface Location {
  slug: string
  city: string
  state: string
}

export const LOCATIONS: Location[] = [
  { slug: 'san-angelo', city: 'San Angelo', state: 'TX' },
  { slug: 'abilene', city: 'Abilene', state: 'TX' },
  { slug: 'midland', city: 'Midland', state: 'TX' },
  { slug: 'odessa', city: 'Odessa', state: 'TX' },
  { slug: 'big-spring', city: 'Big Spring', state: 'TX' },
  { slug: 'brownwood', city: 'Brownwood', state: 'TX' },
  { slug: 'sweetwater', city: 'Sweetwater', state: 'TX' },
  { slug: 'ballinger', city: 'Ballinger', state: 'TX' },
  { slug: 'sonora', city: 'Sonora', state: 'TX' },
  { slug: 'ozona', city: 'Ozona', state: 'TX' },
  { slug: 'eldorado', city: 'Eldorado', state: 'TX' },
  { slug: 'sterling-city', city: 'Sterling City', state: 'TX' },
  { slug: 'robert-lee', city: 'Robert Lee', state: 'TX' },
  { slug: 'winters', city: 'Winters', state: 'TX' },
  { slug: 'miles', city: 'Miles', state: 'TX' },
  { slug: 'christoval', city: 'Christoval', state: 'TX' },
  { slug: 'mertzon', city: 'Mertzon', state: 'TX' },
]

export const TESTIMONIALS = [
  {
    quote:
      'They had a dumpster on our job site the next morning and swapped it out every time we called. Easiest vendor we work with, hands down.',
    author: 'Mike R.',
    role: 'General Contractor, San Angelo',
  },
  {
    quote:
      'The restroom trailer for our daughter’s wedding was spotless and the crew handled everything. Our guests thought it was part of the venue.',
    author: 'Sandra T.',
    role: 'Event Host, Christoval',
  },
  {
    quote:
      'We run crews across three counties and they keep every site stocked and serviced without us having to chase anyone. Communication is outstanding.',
    author: 'Daniel H.',
    role: 'Operations Manager, Midland',
  },
]
