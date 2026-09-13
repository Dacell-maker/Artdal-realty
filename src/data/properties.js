/**
 * Artdal Realty — local property dataset (frontend-only demo data).
 * All photography: real listings-style photography from Unsplash (royalty-free).
 * priceValue = approximate USD equivalent, used by the price-range filter.
 */

const u = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties = [
  {
    id: 1,
    name: "The Oak Residence",
    location: "Ikoyi, Lagos, Nigeria",
    type: "Luxury Villa",
    status: "Buy",
    price: "₦185,000,000",
    priceValue: 120000,
    bedrooms: 4,
    bathrooms: 5,
    area: "3,200 Sq Ft",
    image: u("photo-1600585154340-be6161a56a0c"),
    description:
      "A quietly confident family villa on a tree-lined Ikoyi close. Double-height living spaces open onto a private courtyard garden, while the upper floor holds four en-suite bedrooms finished in warm oak and travertine.",
  },
  {
    id: 2,
    name: "Marina Sky Penthouse",
    location: "Victoria Island, Lagos, Nigeria",
    type: "Penthouse",
    status: "Buy",
    price: "₦320,000,000",
    priceValue: 210000,
    bedrooms: 3,
    bathrooms: 4,
    area: "2,600 Sq Ft",
    image: u("photo-1600607687920-4e2a09cf159d"),
    description:
      "Perched above the marina with wraparound glazing, this penthouse trades walls for horizon. A private lift opens into the living hall, where sunset light moves across lime-plastered walls and a sculpted stone kitchen.",
  },
  {
    id: 3,
    name: "The Courtyard Duplex",
    location: "Maitama, Abuja, Nigeria",
    type: "Duplex",
    status: "Buy",
    price: "₦240,000,000",
    priceValue: 160000,
    bedrooms: 5,
    bathrooms: 6,
    area: "4,100 Sq Ft",
    image: u("photo-1600047509807-ba8f99d2cdde"),
    description:
      "Organised around a shaded central courtyard, this Maitama duplex balances generous family rooms with real privacy. Staff quarters, a study wing and a double garage complete a well-planned plan.",
  },
  {
    id: 4,
    name: "Pearl Ridge Villa",
    location: "East Legon, Accra, Ghana",
    type: "Luxury Villa",
    status: "Buy",
    price: "$485,000",
    priceValue: 485000,
    bedrooms: 4,
    bathrooms: 4,
    area: "3,600 Sq Ft",
    image: u("photo-1580587771525-78b9dba3b914"),
    description:
      "A crisp white volume set behind manicured hedges in East Legon. The villa's open plan flows from a bright living hall to a covered terrace, with a plunge pool tucked into the western garden.",
  },
  {
    id: 5,
    name: "Palm Creek Waterfront",
    location: "Lekki Phase 1, Lagos, Nigeria",
    type: "Waterfront",
    status: "Rent",
    price: "₦24,000,000 / yr",
    priceValue: 16000,
    bedrooms: 4,
    bathrooms: 4,
    area: "3,000 Sq Ft",
    image: u("photo-1600566753190-17f0baa2a6c3"),
    description:
      "Wake to water on the Lekki creek. A relaxed waterfront home with a tiled sun terrace, outdoor shower and a living room that opens fully to the breeze — available on a yearly lease.",
  },
  {
    id: 6,
    name: "Chelsea Garden Apartment",
    location: "Chelsea, London, UK",
    type: "Modern Apartment",
    status: "Rent",
    price: "£4,800 / mo",
    priceValue: 73000,
    bedrooms: 2,
    bathrooms: 2,
    area: "1,150 Sq Ft",
    image: u("photo-1522708323590-d24dbb6b0267"),
    description:
      "A calm, light-filled apartment on a quiet Chelsea street, with a private walled garden shared by only two neighbours. Recently refurbished with oak floors and a bespoke kitchen.",
  },
  {
    id: 7,
    name: "Skyline Terrace Apartment",
    location: "Dubai Marina, Dubai, UAE",
    type: "Modern Apartment",
    status: "Rent",
    price: "AED 165,000 / yr",
    priceValue: 45000,
    bedrooms: 2,
    bathrooms: 3,
    area: "1,480 Sq Ft",
    image: u("photo-1600210491892-03d54c0aaf87"),
    description:
      "High above the marina, this corner apartment pairs floor-to-ceiling glass with a deep terrace made for evening air. Building amenities include a lap pool, gym and concierge.",
  },
  {
    id: 8,
    name: "Clifton View House",
    location: "Clifton, Cape Town, South Africa",
    type: "Family Home",
    status: "Buy",
    price: "R 14,500,000",
    priceValue: 800000,
    bedrooms: 4,
    bathrooms: 3,
    area: "2,900 Sq Ft",
    image: u("photo-1568605114967-8130f3a36994"),
    description:
      "A gentle modernist family house on the Clifton slopes, with sea glimpses from the upper terrace. Mature gardens, a shaded stoep and rooms that hold the late Atlantic light.",
  },
  {
    id: 9,
    name: "The Ashford Duplex",
    location: "Asokoro, Abuja, Nigeria",
    type: "Duplex",
    status: "Sold",
    price: "₦210,000,000",
    priceValue: 140000,
    bedrooms: 4,
    bathrooms: 4,
    area: "3,400 Sq Ft",
    image: u("photo-1600047509358-9dc75507daeb"),
    description:
      "Recently sold within six weeks of listing. A composed Asokoro duplex with a double-height entrance, formal lounge and a family kitchen opening to a lawned garden.",
  },
  {
    id: 10,
    name: "Azure Palm Waterfront",
    location: "Palm Jumeirah, Dubai, UAE",
    type: "Waterfront",
    status: "Buy",
    price: "AED 12,800,000",
    priceValue: 3500000,
    bedrooms: 5,
    bathrooms: 6,
    area: "5,200 Sq Ft",
    image: u("photo-1613490493576-7fde63acd811"),
    description:
      "A signature beachfront villa with its own mooring-side pool deck. Interiors are layered in stone and smoked oak, lit at dusk by the glow of the Dubai skyline across the water.",
  },
  {
    id: 11,
    name: "The Wren Apartment",
    location: "Canary Wharf, London, UK",
    type: "Modern Apartment",
    status: "Sold",
    price: "£685,000",
    priceValue: 870000,
    bedrooms: 1,
    bathrooms: 1,
    area: "720 Sq Ft",
    image: u("photo-1493809842364-78817add7ffb"),
    description:
      "A precise one-bedroom apartment with a south-facing window wall over the dock. Sold above guide price after a competitive campaign — a benchmark for compact Wharf living.",
  },
  {
    id: 12,
    name: "Fernhill Family Home",
    location: "Airport Residential, Accra, Ghana",
    type: "Family Home",
    status: "Rent",
    price: "$38,000 / yr",
    priceValue: 38000,
    bedrooms: 3,
    bathrooms: 3,
    area: "2,400 Sq Ft",
    image: u("photo-1567496898669-ee935f5f647a"),
    description:
      "An easy, sunny family rental in Airport Residential: three en-suite bedrooms, a fenced garden for children and pets, and a generous verandah for long evenings.",
  },
];

/* Ambient interior tiles for the "Property Match" collage */
export const collageTiles = [
  {
    id: "c1",
    label: "Chef's kitchen",
    image: u("photo-1556912173-3bb406ef7e77", 900),
    alt: "Bright white kitchen with marble island and brass hardware",
  },
  {
    id: "c2",
    label: "Spa bathroom",
    image: u("photo-1600566752355-35792bedcfea", 900),
    alt: "Minimalist grey bathroom with freestanding bathtub",
  },
  {
    id: "c3",
    label: "Living light",
    image: u("photo-1600210492486-724fe5c67fb0", 900),
    alt: "Sunlit living room with linen sofa and gallery wall",
  },
  {
    id: "c4",
    label: "Garden pool",
    image: u("photo-1576013551627-0cc20b96c2a7", 900),
    alt: "Turquoise garden pool surrounded by olive trees",
  },
];

export const heroImage = u("photo-1600607687939-ce8a6c25118c", 2200);
export const aboutImage = u("photo-1600880292203-757bb62b4baf", 1400);
export const ctaImage = u("photo-1512917774080-9991f1c4c750", 2200);

export const locations = [
  ...new Set(properties.map((p) => p.location.split(", ").slice(-2).join(", "))),
];

export const propertyTypes = [...new Set(properties.map((p) => p.type))];

export const priceBands = [
  { id: "any", label: "Any price", test: () => true },
  { id: "u100", label: "Under $100k", test: (v) => v < 100000 },
  { id: "100-500", label: "$100k – $500k", test: (v) => v >= 100000 && v < 500000 },
  { id: "500-1m", label: "$500k – $1M", test: (v) => v >= 500000 && v < 1000000 },
  { id: "1m+", label: "$1M+", test: (v) => v >= 1000000 },
];
