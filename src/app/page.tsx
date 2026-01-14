import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import ClientOnly from "@/app/components/ClientOnly";

const FAKE_LISTINGS = [
  {
    id: "1",
    title: "Modern Villa",
    description: "A beautiful modern villa with a pool.",
    imageSrc: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop",
    category: "Modern",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "Los Angeles, CA",
    price: 450,
  },
  {
    id: "2",
    title: "Cozy Cabin",
    description: "Relax in this cozy cabin in the woods.",
    imageSrc: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2670&auto=format&fit=crop",
    category: "Cabin",
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    locationValue: "Aspen, CO",
    price: 200,
  },
  {
    id: "3",
    title: "Beachfront Condo",
    description: "Wake up to the sound of waves.",
    imageSrc: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2670&auto=format&fit=crop",
    category: "Beach",
    roomCount: 2,
    bathroomCount: 2,
    guestCount: 4,
    locationValue: "Miami, FL",
    price: 350,
  },
  {
    id: "4",
    title: "Urban Loft",
    description: "Stylish loft in the heart of the city.",
    imageSrc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2680&auto=format&fit=crop",
    category: "City",
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 2,
    locationValue: "New York, NY",
    price: 250,
  },
  {
    id: "5",
    title: "Modern Villa",
    description: "A beautiful modern villa with a pool.",
    imageSrc: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop",
    category: "Modern",
    roomCount: 4,
    bathroomCount: 3,
    guestCount: 8,
    locationValue: "Los Angeles, CA",
    price: 450,
  },
  {
    id: "6",
    title: "Cozy Cabin",
    description: "Relax in this cozy cabin in the woods.",
    imageSrc: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2670&auto=format&fit=crop",
    category: "Cabin",
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    locationValue: "Aspen, CO",
    price: 200,
  },
  {
    id: "7",
    title: "Beachfront Condo",
    description: "Wake up to the sound of waves.",
    imageSrc: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2670&auto=format&fit=crop",
    category: "Beach",
    roomCount: 2,
    bathroomCount: 2,
    guestCount: 4,
    locationValue: "Miami, FL",
    price: 350,
  },
  {
    id: "8",
    title: "Urban Loft",
    description: "Stylish loft in the heart of the city.",
    imageSrc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2680&auto=format&fit=crop",
    category: "City",
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 2,
    locationValue: "New York, NY",
    price: 250,
  },
];

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 pb-10">
          <h1 className="text-2xl font-bold mb-6">Popular homes in United States</h1>
          <div
            className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
            "
          >
            {FAKE_LISTINGS.map((listing) => (
              <ListingCard
                currentUser={null}
                key={listing.id}
                data={listing}
              />
            ))}
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
}
