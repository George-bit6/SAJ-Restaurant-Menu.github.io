import "../styles/index.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const menuCategories = [
  {
    id: "sandwiches",
    label: "SANDWICHES",
    number: "01",
    items: [
      {
        name: "Chicken Liver",
        arabic: "سودة دجاج",
        price: "$5.00",
        description:
          "Marinated chicken breast chunks grilled to perfection over charcoal, rolled with our signature garlic toum and pickles.",
        featured: true,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDtglr4tIv3OFQrtTZB4R3kirVcQ2EMHU18RMA30QmK1UWQ8LXHCzQPR0EbX7uiwbQ46ZcMPchMMMag2IyxUBCx7CL6n8R-KFcyoMvrUSsvkSLgEjvAJXdUs4PlbNwrCnrFUudqYaiiLqj-Wnqi0umCGI9qHPD1nXLQBNCwOV9wjHMm4IZ_9MwXOlofUMg-xc29pMq1yh6XIXRkIivLPzmoLTnTjZp9cGJQu18jOy2wAy-POOALiO2Vv478vsB2wXVUHdBB_JdBM3nC",
      },
      { name: "Chicken", arabic: "دجاج", price: "$5.00" },
      { name: "Fajita", arabic: "فاهيتا", price: "$5.50" },
      { name: "Crispy Chicken", arabic: "دجاج كريسبي", price: "$5.50" },
      { name: "Grilled Taouk", arabic: "طاووق مشوي", price: "$5.00" },
      { name: "Baked Taouk", arabic: "طاووق بالفرن", price: "$5.00" },
      { name: "Roast Beef", arabic: "روستو بيف", price: "$5.50" },
      { name: "Lebanese Burger", arabic: "برغر لبناني", price: "$5.00" },
      { name: "Cheese Burger", arabic: "تشيز برغر", price: "$5.50" },
      { name: "Chicken Burger", arabic: "برغر دجاج", price: "$5.00" },
      { name: "Kafta", arabic: "كفتة", price: "$5.00" },
      { name: "Sujuk", arabic: "سجق", price: "$5.00" },
      { name: "Makanik", arabic: "مقانق", price: "$5.00" },
      { name: "Cheese & Ham", arabic: "جبنة و هام", price: "$5.00" },
      { name: "Spine Meat", arabic: "سناسل", price: "$7.00" },
      { name: "Potato", arabic: "بطاطا", price: "$3.00" },
    ],
  },
  {
    id: "plates",
    label: "ROTISSERIE & PLATES",
    number: "02",
    items: [
      {
        name: "Whole Grilled Chicken",
        arabic: null,
        price: "$11.00",
        description: "Served with toum, pickles, and freshly baked bread.",
        tags: ["Charcoal", "Marinated 24h"],
        featured: true,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCaW58qh9QiLWzRgsb1Ki3-ne8tcbVJh2_-gpWXk87jlduU_ZUw5f9w6RzY-liOTlCdnPslc9arTPGq1TbqtW2FQ4ok1KUwk9qHzDwwvd_PmhuqyPSt1dMInRo-fDl0l5LMDNvlwrj6qz4Mg8D31wAHwo8uggIon6P0DiP6GtwvVB-6o9rSswudKsxm3LUUqOJvXM8JaUFyZ7bH9NmE620pQ7WV_6Nhsxr81u2iTDxAYmrboqCpkUfVG54eB9oxppD5n6f1n877U9aJ",
      },
      { name: "Half Grilled Chicken", arabic: null, price: "$6.00" },
      { name: "Chicken Taouk Plate", arabic: null, price: "$7.50" },
    ],
  },
  {
    id: "sides",
    label: "SIDES",
    number: "03",
    items: [
      { name: "French Fries", price: "$2.00" },
      { name: "Coleslaw", price: "$2.50" },
      { name: "Garlic Sauce", price: "$1.00", badge: "SIGNATURE" },
    ],
  },
  {
    id: "drinks",
    label: "DRINKS",
    number: "04",
    items: [
      { name: "Soft Drinks", price: "$1.50" },
      { name: "Water", price: "$1.00" },
    ],
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function FeaturedCard({ item }) {
  return (
    <div className="relative overflow-hidden rounded-xl group bg-black text-white md:col-span-8 min-h-[320px] flex flex-col justify-end">
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
      />
      <div className="relative z-10 p-8 md:p-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-2xl font-bold tracking-tight">{item.name}</h4>
            {item.arabic && (
              <p className="text-yellow-200/70 text-xl mt-1" dir="rtl">
                {item.arabic}
              </p>
            )}
          </div>
          <span className="text-sm font-bold border border-yellow-200/40 text-yellow-200 px-4 py-1.5 rounded-full whitespace-nowrap">
            {item.price}
          </span>
        </div>
        {item.description && (
          <p className="text-white/60 text-sm max-w-md leading-relaxed">
            {item.description}
          </p>
        )}
        {item.tags && (
          <div className="flex gap-4 mt-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SmallCard({ item }) {
  return (
    <div className="bg-white border border-stone-100 rounded-xl p-6 hover:border-red-400/40 hover:shadow-md transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-stone-900 group-hover:text-red-600 transition-colors text-lg leading-tight">
            {item.name}
          </h4>
          {item.arabic && (
            <p className="text-stone-400 text-base mt-0.5" dir="rtl">
              {item.arabic}
            </p>
          )}
        </div>
        <span className="text-xs font-bold text-stone-400 whitespace-nowrap ml-4">
          {item.price}
        </span>
      </div>
    </div>
  );
}

function ListCard({ item }) {
  return (
    <li className="group border-b border-stone-100 pb-6 hover:border-stone-900 transition-colors last:border-0">
      <div className="flex justify-between items-baseline mb-1">
        <h4 className="font-bold text-stone-900 text-xl group-hover:translate-x-1 transition-transform">
          {item.name}
        </h4>
        <span className="text-xs font-bold text-stone-400 ml-4">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-stone-500 text-sm pl-4 border-l-2 border-yellow-400 mt-2 leading-relaxed">
          {item.description}
        </p>
      )}
      {item.tags && (
        <div className="flex gap-4 mt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest text-stone-400 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}

function SimpleRow({ item }) {
  return (
    <li className="flex justify-between items-center group py-2">
      <span className="font-medium text-stone-800 group-hover:text-red-600 transition-colors flex items-center gap-2">
        {item.name}
        {item.badge && (
          <span className="text-[9px] uppercase tracking-widest bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-bold">
            {item.badge}
          </span>
        )}
      </span>
      <span className="text-xs font-bold text-stone-400">{item.price}</span>
    </li>
  );
}

// ─── CATEGORY SECTION ─────────────────────────────────────────────────────────

function CategorySection({ category }) {
  const featured = category.items.find((i) => i.featured);
  const rest = category.items.filter((i) => !i.featured);
  const isSimple = ["sides", "drinks"].includes(category.id);
  const isRotisserie = category.id === "rotisserie";

  return (
    <div className="mb-24 relative">
      {/* Big background number */}
      <div
        className="absolute -top-10 text-[100px] font-black text-stone-100 select-none tracking-tighter z-0 pointer-events-none"
        style={{ [isRotisserie ? "right" : "left"]: "-8px" }}
      >
        {category.number}
      </div>

      {/* Label row */}
      <div
        className={`flex items-center gap-4 mb-10 relative z-10 ${isRotisserie ? "flex-row-reverse" : ""}`}
      >
        <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase bg-stone-900 text-white px-4 py-2 whitespace-nowrap">
          {category.label}
        </h3>
        <div className="flex-grow h-px bg-stone-100" />
      </div>

      {/* Items */}
      {isSimple ? (
        <ul className="space-y-2">
          {category.items.map((item) => (
            <SimpleRow key={item.name} item={item} />
          ))}
        </ul>
      ) : isRotisserie ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <ul className="space-y-8">
            {category.items.map((item) => (
              <ListCard key={item.name} item={item} />
            ))}
          </ul>
          {featured?.image && (
            <div className="rounded-xl overflow-hidden aspect-square relative group">
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white/90 italic text-sm">
                  "The true taste of the street, brought to the table."
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {featured && <FeaturedCard item={featured} />}
          <div className="md:col-span-4 flex flex-col gap-5">
            {rest.map((item) => (
              <SmallCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased">
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900">
        <img
          src="https://lh3.googleusercontent.com/aida/ADBb0ughoV20dj6UdjMc7_1qcu8KhLbGlZ6UpFHCWoDue341D3HD-hK1sMw6qDdw6pbwDg9uJXY2EMj8x7MQKhwAstSqEpuHyVzBuYMA9n2pODThHRQPIB8QxSwr-Y3NRJe_BfSJCNRmX9EKynRB2WcLaoZ_LlDCuoEdn2KpJzPIY_aoBoeWDlwS2XBQ7gskgjysC4-eMYPcRdv1VaXXypgwrN4lpfJNH5FIKvHMiQRz10tcor2MKwQVN2xEx2tSCAgaNrHGcnn7YIto1SI"
          alt="Storefront"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4">
            Snack Abou Joseph
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-300/80 mb-6" dir="rtl">
            سناك أبو جوزيف
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-white/50 border-t border-b border-white/10 py-3 inline-block px-6">
            Authentic Lebanese Chicken &amp; Sandwiches
          </p>
        </div>
      </section>

      {/* Menu */}
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            THE FIRE.{" "}
            <span className="text-stone-400 font-light italic">THE BREAD.</span>
          </h2>
          <p className="text-stone-500 text-base border-l-4 border-stone-900 pl-5 max-w-xl leading-relaxed">
            Our menu is stripped of pretense. Just fire-kissed meats, sharp
            garlic, and bread baked fresh in the taboun.
          </p>
        </div>

        {/* Render each category using .forEach-style .map */}
        {menuCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 px-10 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h2 className="text-white font-black text-xl tracking-widest mb-4">
            SNACK ABOU JOSEPH
          </h2>
          <p className="text-xs uppercase tracking-widest">Aindara, Lebanon</p>
        </div>
        <p className="text-xs uppercase tracking-widest self-end">
          © 2024 · Refined Grit
        </p>
      </footer>
    </div>
  );
}
