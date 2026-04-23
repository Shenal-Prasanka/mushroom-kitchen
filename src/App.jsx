import { useState, useEffect, useRef } from "react";
import { T, sliderMushroomsData, recipes, shops, blogs, FS } from "./components/Data";
import { Icon } from "./components/Icons";

// ─── RECIPE MODAL ─────────────────────────────────────────────────────────────
function RecipeModal({ item, onClose, dark, fs, lang }) {
  const t = T[lang];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"/>
      <div onClick={e=>e.stopPropagation()} className={`relative z-10 rounded-3xl max-w-xl w-full max-h-[88vh] overflow-y-auto shadow-2xl ${dark?"bg-stone-900 text-stone-100":"bg-amber-50 text-stone-800"}`}>
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
          <button onClick={onClose} className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2"><Icon.Close/></button>
          <span className="absolute bottom-3 left-4 text-4xl">{item.emoji}</span>
        </div>
        <div className="p-5">
          <h2 className={`font-extrabold mb-1 font-serif ${fs.heading}`}>{lang==="si"&&item.titleSi ? item.titleSi : item.title}</h2>
          <p className={`mb-4 ${dark?"text-stone-400":"text-stone-500"} ${fs.base}`}>{lang==="si"&&item.descSi ? item.descSi : item.desc}</p>
          <div className={`flex gap-3 mb-5`}>
            {[["⏱",item.time],["👤",`${item.servings} ${t.servings}`],["📊",item.difficulty]].map(([ic,v])=>(
              <div key={v} className={`flex-1 text-center rounded-xl py-2 ${dark?"bg-stone-800":"bg-amber-100"}`}>
                <div>{ic}</div><div className={`font-bold ${fs.base}`}>{v}</div>
              </div>
            ))}
          </div>
          <h3 className={`font-bold mb-2 ${fs.card} ${dark?"text-amber-400":"text-amber-700"}`}>🧺 {t.ingredients}</h3>
          <ul className="grid grid-cols-2 gap-1.5 mb-5">
            {item.ingredients.map((i,idx)=>(
              <li key={idx} className={`flex items-center gap-2 ${fs.base}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${dark?"bg-amber-500":"bg-amber-600"}`}/>
                {i}
              </li>
            ))}
          </ul>
          <h3 className={`font-bold mb-2 ${fs.card} ${dark?"text-amber-400":"text-amber-700"}`}>👨‍🍳 {t.method}</h3>
          <ol className="space-y-2">
            {item.steps.map((s,i)=>(
              <li key={i} className={`flex gap-3 ${fs.base}`}>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${dark?"bg-amber-600 text-white":"bg-amber-500 text-white"}`}>{i+1}</span>
                <span className="pt-0.5">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

// ─── HERO SLIDER ──────────────────────────────────────────────────────────────
function HeroSlider({ dark, fs, lang }) {
  const [cur, setCur] = useState(0);
  const timer = useRef(null);

  const reset = (idx) => {
    clearInterval(timer.current);
    setCur(idx);
    timer.current = setInterval(() => setCur(p => (p + 1) % sliderMushroomsData.length), 4500);
  };

  useEffect(() => {
    timer.current = setInterval(() => setCur(p => (p + 1) % sliderMushroomsData.length), 4500);
    return () => clearInterval(timer.current);
  }, []);

  const m = sliderMushroomsData[cur];

  return (
    <div className={`relative w-full overflow-hidden rounded-3xl shadow-2xl`} style={{minHeight:"420px"}}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 transition-all duration-700">
        <img src={m.img} alt={m.name.en} className="w-full h-full object-cover transition-all duration-700"/>
        <div className={`absolute inset-0 bg-gradient-to-r ${dark?"from-black/85 via-black/60 to-black/20":"from-black/75 via-black/50 to-black/10"}`}/>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-14" style={{minHeight:"420px"}}>
        <div className="max-w-lg">
          <span className="text-5xl md:text-7xl mb-4 block">{m.emoji}</span>
          <h2 className={`font-extrabold text-white font-serif mb-3 leading-tight ${fs.hero}`}>
            {lang==="si" ? m.name.si : m.name.en}
          </h2>
          <p className={`text-white/80 max-w-sm ${fs.body}`}>
            {lang==="si" ? m.desc.si : m.desc.en}
          </p>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={()=>reset((cur-1+sliderMushroomsData.length)%sliderMushroomsData.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all">
        <Icon.ChevLeft/>
      </button>
      <button onClick={()=>reset((cur+1)%sliderMushroomsData.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all">
        <Icon.ChevRight/>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderMushroomsData.map((_, i) => (
          <button key={i} onClick={() => reset(i)} className={`rounded-full transition-all duration-300 ${i === cur ? "w-6 h-2.5 bg-amber-400" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"}`}/>
        ))}
      </div>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────────────────────────────
function ItemCard({ item, onClick, dark, fs, lang, btnLabel, isShop=false }) {
  return (
    <div onClick={()=>onClick(item)} className={`rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-md ${dark?"bg-stone-800":"bg-white"}`}>
      <div className="relative h-44 overflow-hidden">
        <img src={item.img} alt={item.title||item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full font-bold ${fs.sub} ${dark?"bg-amber-600":"bg-amber-500"} text-white`}>{item.category}</span>
        {isShop && (
          <span className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/50 text-amber-300 rounded-full ${fs.sub}`}>
            <Icon.Star/>{item.rating}
          </span>
        )}
        <span className="absolute bottom-3 right-3 text-3xl">{item.emoji}</span>
      </div>
      <div className="p-4">
        <h3 className={`font-extrabold mb-1.5 font-serif leading-tight ${fs.card} ${dark?"text-stone-100":"text-stone-800"}`}>
          {lang==="si" ? (item.nameSi||item.titleSi||item.title||item.name) : (item.title||item.name)}
        </h3>
        <p className={`line-clamp-2 mb-3 ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>
          {lang==="si" ? (item.descSi||item.desc) : item.desc}
        </p>
        {isShop ? (
          <div className={`flex items-center gap-1.5 ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>
            <Icon.MapPin/>{item.location}
          </div>
        ) : (
          <div className={`flex items-center justify-between ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>
            <span>⏱ {item.time}</span>
            <span>👤 {item.servings}</span>
            <span className={`font-semibold px-2 py-0.5 rounded-full ${item.difficulty==="Easy"?(dark?"bg-green-900/50 text-green-400":"bg-green-100 text-green-700"):(dark?"bg-yellow-900/50 text-yellow-400":"bg-yellow-100 text-yellow-700")}`}>{item.difficulty}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SHOP MODAL ───────────────────────────────────────────────────────────────
function ShopModal({ item, onClose, dark, fs, lang }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"/>
      <div onClick={e=>e.stopPropagation()} className={`relative z-10 rounded-3xl max-w-md w-full shadow-2xl ${dark?"bg-stone-900 text-stone-100":"bg-amber-50 text-stone-800"}`}>
        <div className="relative h-48 overflow-hidden rounded-t-3xl">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
          <button onClick={onClose} className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2"><Icon.Close/></button>
          <span className="absolute bottom-3 left-4 text-4xl">{item.emoji}</span>
          <span className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-amber-500 text-white rounded-full text-sm font-bold"><Icon.Star/>{item.rating}</span>
        </div>
        <div className="p-5">
          <h2 className={`font-extrabold mb-2 font-serif ${fs.heading}`}>{lang==="si"?item.nameSi:item.name}</h2>
          <p className={`mb-4 ${dark?"text-stone-400":"text-stone-500"} ${fs.base}`}>{lang==="si"?item.descSi:item.desc}</p>
          <div className="space-y-2 mb-4">
            <div className={`flex items-center gap-2 ${fs.base}`}><Icon.MapPin/>{item.location}</div>
            <div className={`flex items-center gap-2 ${fs.base}`}><Icon.Phone/>{item.phone}</div>
          </div>
          <div>
            <p className={`font-bold mb-2 ${fs.base} ${dark?"text-amber-400":"text-amber-700"}`}>Products:</p>
            <div className="flex flex-wrap gap-2">
              {item.products.map(p=>(
                <span key={p} className={`px-2.5 py-1 rounded-full ${fs.sub} font-semibold ${dark?"bg-amber-700/40 text-amber-300":"bg-amber-200 text-amber-800"}`}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGES ────────────────────────────────────────────────────────────────────
function HomePage({ dark, fs, lang, setPage }) {
  const t = T[lang];
  return (
    <div className="space-y-16">
      {/* Hero Slider */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <h2 className={`font-extrabold font-serif mb-6 text-center ${fs.heading} ${dark?"text-amber-400":"text-amber-700"}`}>{t.featuredMushroomsTitle}</h2>
        <HeroSlider dark={dark} fs={fs} lang={lang}/>
      </section>

      {/* Quick Recipes Preview */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`font-extrabold font-serif ${fs.heading} ${dark?"text-stone-100":"text-stone-800"}`}>🍳 Popular Recipes</h2>
          <button onClick={()=>setPage("recipes")} className={`px-4 py-2 rounded-xl font-semibold ${fs.sub} ${dark?"bg-amber-600 text-white":"bg-amber-500 text-white"}`}>{t.viewRecipe} →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {recipes.slice(0,3).map(r=>(
            <div key={r.id} className={`rounded-2xl overflow-hidden shadow group cursor-pointer hover:-translate-y-1 transition-all ${dark?"bg-stone-800":"bg-white"}`} onClick={()=>setPage("recipes")}>
              <div className="relative h-36 overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <span className="absolute bottom-2 right-2 text-2xl">{r.emoji}</span>
              </div>
              <div className="p-3">
                <p className={`font-bold font-serif ${fs.base} ${dark?"text-stone-100":"text-stone-800"}`}>{lang==="si"?r.titleSi:r.title}</p>
                <p className={`${fs.sub} ${dark?"text-stone-400":"text-stone-500"} mt-1`}>⏱ {r.time} · 👤 {r.servings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className={`py-12 ${dark?"bg-stone-900":"bg-amber-100"}`}>
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["🍄","50+","Mushroom Types"],["📖","20+","Recipes"],["🏪","10+","Partner Shops"],["🌿","100%","Organic Options"]].map(([ic,v,l])=>(
            <div key={l}>
              <div className="text-3xl mb-1">{ic}</div>
              <div className={`font-extrabold font-serif ${fs.heading} ${dark?"text-amber-400":"text-amber-700"}`}>{v}</div>
              <div className={`${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>{l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RecipesPage({ dark, fs, lang }) {
  const t = T[lang];
  const [cat, setCat] = useState("All");
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState("");
  const cats = ["All","Pasta","Rice","Soup","Main","Breakfast","Noodles"];
  const filtered = recipes.filter(r=>(cat==="All"||r.category===cat)&&(r.title.toLowerCase().includes(search.toLowerCase())||r.desc.toLowerCase().includes(search.toLowerCase())));
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className={`font-extrabold font-serif mb-2 text-center ${fs.heading} ${dark?"text-amber-400":"text-amber-700"}`}>🍳 {t.nav.recipes}</h2>
      <p className={`text-center mb-6 ${fs.base} ${dark?"text-stone-400":"text-stone-500"}`}>Discover our collection of mushroom-forward dishes.</p>
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {cats.map(c=>(
          <button key={c} onClick={()=>setCat(c)} className={`px-4 py-1.5 rounded-full font-semibold transition-all ${fs.sub} ${cat===c?(dark?"bg-amber-600 text-white":"bg-amber-500 text-white"):(dark?"bg-stone-800 text-stone-300 border border-stone-700":"bg-white text-stone-600 border border-amber-200")}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(r=><ItemCard key={r.id} item={r} onClick={setModal} dark={dark} fs={fs} lang={lang} btnLabel={t.viewRecipe}/>)}
      </div>
      {modal&&<RecipeModal item={modal} onClose={()=>setModal(null)} dark={dark} fs={fs} lang={lang}/>}
    </div>
  );
}

function ShopsPage({ dark, fs, lang }) {
  const t = T[lang];
  const [cat, setCat] = useState("All");
  const [modal, setModal] = useState(null);
  const filtered = shops.filter(s=>cat==="All"||s.category===cat);
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className={`font-extrabold font-serif mb-2 text-center ${fs.heading} ${dark?"text-amber-400":"text-amber-700"}`}>🛒 {t.nav.shops}</h2>
      <p className={`text-center mb-6 ${fs.base} ${dark?"text-stone-400":"text-stone-500"}`}>Find the best mushroom suppliers near you.</p>
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {t.shopCategories.map((c,i)=>{
          const engCats=["All","Local","Imported","Organic"];
          return(
            <button key={c} onClick={()=>setCat(engCats[i])} className={`px-4 py-1.5 rounded-full font-semibold transition-all ${fs.sub} ${cat===engCats[i]?(dark?"bg-amber-600 text-white":"bg-amber-500 text-white"):(dark?"bg-stone-800 text-stone-300 border border-stone-700":"bg-white text-stone-600 border border-amber-200")}`}>{c}</button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(s=><ItemCard key={s.id} item={s} onClick={setModal} dark={dark} fs={fs} lang={lang} btnLabel={t.viewShop} isShop/>)}
      </div>
      {modal&&<ShopModal item={modal} onClose={()=>setModal(null)} dark={dark} fs={fs} lang={lang}/>}
    </div>
  );
}

function ContactPage({ dark, fs, lang }) {
  const t = T[lang];
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className={`font-extrabold font-serif mb-2 text-center ${fs.heading} ${dark?"text-amber-400":"text-amber-700"}`}>📞 {t.contactTitle}</h2>
      <p className={`text-center mb-10 ${fs.base} ${dark?"text-stone-400":"text-stone-500"}`}>{t.contactSub}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {[
          { icon:<Icon.Clock/>, label:t.hours, val:t.hoursVal, color:"text-blue-400" },
          { icon:<Icon.Phone/>, label:t.phone, val:"0712518433", color:"text-green-400" },
          { icon:<Icon.Mail/>,  label:t.email, val:"shenal@gmail.com", color:"text-amber-400" },
        ].map(({icon,label,val,color})=>(
          <div key={label} className={`rounded-2xl p-6 text-center shadow-md ${dark?"bg-stone-800":"bg-white"}`}>
            <div className={`flex justify-center mb-3 ${color}`}>{icon}</div>
            <p className={`font-bold mb-1 ${fs.base} ${dark?"text-stone-200":"text-stone-700"}`}>{label}</p>
            <p className={`${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>{val}</p>
          </div>
        ))}
      </div>
      {/* Map placeholder */}
      <div className={`rounded-2xl overflow-hidden shadow-md h-56 flex items-center justify-center mb-8 ${dark?"bg-stone-800":"bg-amber-100"}`}>
        <div className="text-center">
          <div className="text-5xl mb-2">📍</div>
          <p className={`${fs.base} ${dark?"text-stone-400":"text-stone-500"}`}>Colombo, Sri Lanka</p>
        </div>
      </div>
      {/* Contact Form */}
      <div className={`rounded-2xl p-6 shadow-md ${dark?"bg-stone-800":"bg-white"}`}>
        <h3 className={`font-bold mb-4 ${fs.card} ${dark?"text-amber-400":"text-amber-700"}`}>✉️ Send a Message</h3>
        <div className="space-y-3">
          {[["Name","Your name"],["Email","your@email.com"],["Message","Your message..."]].map(([label,ph])=>(
            label==="Message" ? (
              <div key={label}>
                <label className={`block mb-1 font-semibold ${fs.sub} ${dark?"text-stone-300":"text-stone-600"}`}>{label}</label>
                <textarea rows={4} placeholder={ph} className={`w-full rounded-xl px-4 py-3 outline-none resize-none ${fs.base} ${dark?"bg-stone-700 border border-stone-600 text-stone-100 placeholder-stone-500 focus:border-amber-500":"bg-amber-50 border border-amber-200 text-stone-800 placeholder-stone-400 focus:border-amber-500"}`}/>
              </div>
            ) : (
              <div key={label}>
                <label className={`block mb-1 font-semibold ${fs.sub} ${dark?"text-stone-300":"text-stone-600"}`}>{label}</label>
                <input type="text" placeholder={ph} className={`w-full rounded-xl px-4 py-3 outline-none ${fs.base} ${dark?"bg-stone-700 border border-stone-600 text-stone-100 placeholder-stone-500 focus:border-amber-500":"bg-amber-50 border border-amber-200 text-stone-800 placeholder-stone-400 focus:border-amber-500"}`}/>
              </div>
            )
          ))}
          <button className={`w-full py-3 rounded-xl font-bold text-white ${dark?"bg-amber-600 hover:bg-amber-500":"bg-amber-500 hover:bg-amber-600"} transition-colors ${fs.base}`}>Send Message 🚀</button>
        </div>
      </div>
    </div>
  );
}

function AboutPage({ dark, fs, lang }) {
  const t = T[lang];
  const team = [
    { name:"Shenal Perera", role:"Founder & Head Chef", emoji:"👨‍🍳", bio:"Mushroom enthusiast with 10+ years cultivating and cooking fungi across Sri Lanka." },
    { name:"Dilini Silva", role:"Mycologist & Researcher", emoji:"🔬", bio:"PhD in Mycology, dedicated to discovering Sri Lanka's native mushroom biodiversity." },
    { name:"Kasun Jayawardena", role:"Farm Manager", emoji:"🌿", bio:"Oversees our partner farms, ensuring organic standards and sustainable practices." },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className={`font-extrabold font-serif mb-2 text-center ${fs.heading} ${dark?"text-amber-400":"text-amber-700"}`}>🍄 {t.aboutTitle}</h2>
      <p className={`text-center mb-10 ${fs.body} ${dark?"text-stone-400":"text-stone-500"}`}>{t.aboutSub}</p>

      {/* Story */}
      <div className={`rounded-3xl p-8 mb-10 shadow-lg ${dark?"bg-stone-800":"bg-white"}`}>
        <div className="flex items-start gap-5">
          <div className="text-6xl flex-shrink-0">🌱</div>
          <div>
            <h3 className={`font-bold mb-3 ${fs.card} ${dark?"text-amber-400":"text-amber-700"}`}>Our Story</h3>
            <p className={`${fs.body} ${dark?"text-stone-300":"text-stone-600"} leading-relaxed`}>
              Mushroom Kitchen was born in 2020 from a simple obsession — the belief that mushrooms are one of the most underappreciated ingredients on earth. Starting from a small kitchen in Colombo, Sri Lanka, we've grown into a community hub connecting growers, cooks, and mushroom lovers across the island.
            </p>
            <p className={`mt-3 ${fs.body} ${dark?"text-stone-300":"text-stone-600"} leading-relaxed`}>
              We work with local organic farmers, import rare varieties from around the world, and share our passion through recipes, workshops, and our thriving online community.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {[
          { emoji:"🌿", title:"Sustainability", desc:"Every mushroom we source is grown with respect for the environment and local communities." },
          { emoji:"🔬", title:"Science-Backed", desc:"Our team of mycologists ensures every product meets the highest quality and safety standards." },
          { emoji:"❤️", title:"Community", desc:"We believe in sharing knowledge and supporting local growers, cooks, and enthusiasts." },
        ].map(v=>(
          <div key={v.title} className={`rounded-2xl p-5 text-center shadow ${dark?"bg-stone-800":"bg-white"}`}>
            <div className="text-4xl mb-3">{v.emoji}</div>
            <h4 className={`font-bold mb-2 ${fs.card} ${dark?"text-stone-100":"text-stone-800"}`}>{v.title}</h4>
            <p className={`${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h3 className={`font-bold mb-5 text-center ${fs.heading} ${dark?"text-stone-100":"text-stone-800"}`}>👥 Meet The Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {team.map(m=>(
          <div key={m.name} className={`rounded-2xl p-5 text-center shadow ${dark?"bg-stone-800":"bg-white"}`}>
            <div className="text-5xl mb-3">{m.emoji}</div>
            <h4 className={`font-bold ${fs.card} ${dark?"text-stone-100":"text-stone-800"}`}>{m.name}</h4>
            <p className={`font-semibold mb-2 ${dark?"text-amber-400":"text-amber-600"} ${fs.sub}`}>{m.role}</p>
            <p className={`${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogPage({ dark, fs, lang }) {
  const t = T[lang];
  const tags = ["All","Health","Growing","Recipes","Science","Nature","Tips"];
  const [tag, setTag] = useState("All");
  const filtered = blogs.filter(b=>tag==="All"||b.tag===tag);
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className={`font-extrabold font-serif mb-2 text-center ${fs.heading} ${dark?"text-amber-400":"text-amber-700"}`}>📝 {t.blogTitle}</h2>
      <p className={`text-center mb-8 ${fs.base} ${dark?"text-stone-400":"text-stone-500"}`}>{t.blogSub}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {tags.map(tg=>(
          <button key={tg} onClick={()=>setTag(tg)} className={`px-4 py-1.5 rounded-full font-semibold transition-all ${fs.sub} ${tag===tg?(dark?"bg-amber-600 text-white":"bg-amber-500 text-white"):(dark?"bg-stone-800 text-stone-300 border border-stone-700":"bg-white text-stone-600 border border-amber-200")}`}>{tg}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(b=>(
          <div key={b.id} className={`rounded-3xl overflow-hidden shadow-md group hover:-translate-y-1 transition-all cursor-pointer ${dark?"bg-stone-800":"bg-white"}`}>
            <div className="relative h-44 overflow-hidden">
              <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
              <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full font-bold ${fs.sub} bg-amber-500 text-white`}>{b.tag}</span>
              <span className="absolute bottom-3 right-3 text-3xl">{b.emoji}</span>
            </div>
            <div className="p-4">
              <p className={`font-bold font-serif mb-1 ${fs.card} ${dark?"text-stone-100":"text-stone-800"}`}>{lang==="si"?b.titleSi:b.title}</p>
              <p className={`line-clamp-2 mb-3 ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>{lang==="si"?b.descSi:b.desc}</p>
              <div className={`flex items-center justify-between ${fs.sub} ${dark?"text-stone-500":"text-stone-400"}`}>
                <span>✍️ {b.author}</span>
                <span>📅 {b.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [fontSize, setFontSize] = useState("medium");
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const fs = FS[fontSize];
  const t = T[lang];
  const navPages = ["home","recipes","shops","contact","about","blog"];

  const handleNav = (p) => {
    setMobileOpen(false);
    const el = document.getElementById(p);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "recipes", "shops", "contact", "about", "blog"];
      const halfway = window.innerHeight / 2;
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= halfway) {
          current = sections[i];
          break;
        }
      }
      setPage(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark?"bg-stone-950 text-stone-100":"bg-amber-50 text-stone-800"}`}>

      {/* ── TOP NAVBAR ── */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${dark?"bg-stone-950/95 border-stone-800":"bg-amber-50/95 border-amber-200"}`}>
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center gap-3">
          {/* Brand */}
          <button onClick={()=>handleNav("home")} className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">🍄</span>
            <span className={`font-extrabold tracking-tight font-serif hidden md:block ${dark?"text-amber-400":"text-amber-700"} ${fs.heading}`}>{t.brand}</span>
          </button>

          {/* Search — flex-1 */}
          <div className="relative flex-1 max-w-xs hidden sm:block">
            <input type="text" placeholder={t.search} value={search} onChange={e=>setSearch(e.target.value)}
              className={`w-full rounded-xl px-4 py-2 pr-9 outline-none ${fs.base} ${dark?"bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-500 focus:border-amber-500":"bg-white border border-amber-200 text-stone-800 placeholder-stone-400 focus:border-amber-500"}`}/>
            <span className="absolute right-3 top-1/2 -translate-y-1/2">🔍</span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Language Toggle */}
            <button onClick={()=>setLang(l=>l==="en"?"si":"en")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors border ${fs.sub} ${dark?"bg-stone-800 border-stone-700 text-amber-400 hover:bg-stone-700":"bg-white border-amber-300 text-amber-700 hover:bg-amber-100"}`}>
              {lang==="en"?"සිංහල":"EN"}
            </button>

            {/* Font Size */}
            <div className={`hidden sm:flex rounded-xl overflow-hidden border ${dark?"border-stone-700":"border-amber-300"}`}>
              {["small","medium","large"].map((size,i)=>(
                <button key={size} onClick={()=>setFontSize(size)}
                  className={`px-2 py-1.5 font-bold transition-colors ${fontSize===size?(dark?"bg-amber-600 text-white":"bg-amber-500 text-white"):(dark?"bg-stone-800 text-stone-300 hover:bg-stone-700":"bg-white text-stone-500 hover:bg-amber-100")} ${["text-xs","text-sm","text-base"][i]}`}>
                  A
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button onClick={()=>setDark(d=>!d)}
              className={`p-2 rounded-xl border transition-colors ${dark?"bg-stone-800 border-stone-700 text-amber-400 hover:bg-stone-700":"bg-white border-amber-300 text-stone-600 hover:bg-amber-100"}`}>
              {dark?<Icon.Sun/>:<Icon.Moon/>}
            </button>

            {/* Mobile Hamburger */}
            <button onClick={()=>setMobileOpen(o=>!o)}
              className={`md:hidden p-2 rounded-xl border transition-colors ${dark?"bg-stone-800 border-stone-700 text-stone-200":"bg-white border-amber-300 text-stone-700"}`}>
              {mobileOpen?<Icon.Close/>:<Icon.Menu/>}
            </button>
          </div>
        </div>

        {/* ── SUB NAVBAR (desktop) ── */}
        <div className={`hidden md:block border-t ${dark?"border-stone-800":"border-amber-100"}`}>
          <div className="max-w-6xl mx-auto px-4 flex gap-1 py-1">
            {navPages.map(p=>(
              <button key={p} onClick={()=>handleNav(p)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize ${fs.sub} ${page===p?(dark?"bg-amber-600 text-white":"bg-amber-500 text-white"):(dark?"text-stone-300 hover:bg-stone-800":"text-stone-600 hover:bg-amber-100")}`}>
                {t.nav[p]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU DRAWER ── */}
      {mobileOpen && (
        <div className={`fixed inset-0 z-40 flex`}>
          <div className="absolute inset-0 bg-black/50" onClick={()=>setMobileOpen(false)}/>
          <div className={`relative z-10 w-64 h-full flex flex-col shadow-2xl ${dark?"bg-stone-900":"bg-amber-50"}`}>
            <div className={`p-4 border-b ${dark?"border-stone-700":"border-amber-200"} flex items-center gap-2`}>
              <span className="text-2xl">🍄</span>
              <span className={`font-extrabold font-serif ${dark?"text-amber-400":"text-amber-700"}`}>{t.brand}</span>
            </div>
            {/* Mobile Search */}
            <div className={`p-4 border-b ${dark?"border-stone-700":"border-amber-100"}`}>
              <div className="relative">
                <input type="text" placeholder={t.search}
                  className={`w-full rounded-xl px-4 py-2 pr-8 outline-none ${fs.base} ${dark?"bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-500":"bg-white border border-amber-200 text-stone-800 placeholder-stone-400"}`}/>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm">🔍</span>
              </div>
            </div>
            {/* Font size mobile */}
            <div className={`p-4 border-b ${dark?"border-stone-700":"border-amber-100"} flex items-center gap-2`}>
              <span className={`${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>Font:</span>
              <div className={`flex rounded-lg overflow-hidden border ${dark?"border-stone-700":"border-amber-300"}`}>
                {["small","medium","large"].map((size,i)=>(
                  <button key={size} onClick={()=>setFontSize(size)}
                    className={`px-2.5 py-1 font-bold transition-colors ${fontSize===size?(dark?"bg-amber-600 text-white":"bg-amber-500 text-white"):(dark?"bg-stone-800 text-stone-300":"bg-white text-stone-500")} ${["text-xs","text-sm","text-base"][i]}`}>A</button>
                ))}
              </div>
            </div>
            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto p-3 space-y-1">
              {navPages.map(p=>(
                <button key={p} onClick={()=>handleNav(p)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all capitalize ${fs.base} ${page===p?(dark?"bg-amber-600 text-white":"bg-amber-500 text-white"):(dark?"text-stone-200 hover:bg-stone-800":"text-stone-700 hover:bg-amber-100")}`}>
                  {t.nav[p]}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ── PAGE CONTENT ── */}
      <main>
        <div id="home"><HomePage dark={dark} fs={fs} lang={lang} setPage={handleNav}/></div>
        <div id="recipes"><RecipesPage dark={dark} fs={fs} lang={lang}/></div>
        <div id="shops"><ShopsPage dark={dark} fs={fs} lang={lang}/></div>
        <div id="contact"><ContactPage dark={dark} fs={fs} lang={lang}/></div>
        <div id="about"><AboutPage dark={dark} fs={fs} lang={lang}/></div>
        <div id="blog"><BlogPage dark={dark} fs={fs} lang={lang}/></div>
      </main>

      {/* ── FOOTER ── */}
      <footer className={`border-t mt-16 transition-colors duration-300 ${dark?"border-stone-800 bg-stone-900":"border-amber-200 bg-amber-100"}`}>
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🍄</span>
              <span className={`font-extrabold font-serif ${dark?"text-amber-400":"text-amber-700"}`}>{t.brand}</span>
            </div>
            <p className={`${fs.sub} ${dark?"text-stone-400":"text-stone-500"} leading-relaxed`}>Celebrating the magic of fungi, one recipe at a time. Based in Colombo, Sri Lanka.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className={`font-bold mb-3 ${fs.base} ${dark?"text-stone-200":"text-stone-700"}`}>Quick Links</h4>
            <ul className="space-y-2">
              {navPages.map(p=>(
                <li key={p}><button onClick={()=>handleNav(p)} className={`capitalize transition-colors ${fs.sub} ${dark?"text-stone-400 hover:text-amber-400":"text-stone-500 hover:text-amber-600"}`}>{t.nav[p]}</button></li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className={`font-bold mb-3 ${fs.base} ${dark?"text-stone-200":"text-stone-700"}`}>{t.contactTitle}</h4>
            <ul className="space-y-2">
              <li className={`flex items-center gap-2 ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}><Icon.Clock/>Mon–Sun, 9AM–5PM</li>
              <li className={`flex items-center gap-2 ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}><Icon.Phone/>0712518433</li>
              <li className={`flex items-center gap-2 ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}><Icon.Mail/>shenal@gmail.com</li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className={`font-bold mb-3 ${fs.base} ${dark?"text-stone-200":"text-stone-700"}`}>Follow Us</h4>
            <div className="flex gap-3 flex-wrap">
              {["📘","📸","🐦","▶️"].map((ic,i)=>(
                <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:scale-110 ${dark?"bg-stone-800 hover:bg-stone-700":"bg-white hover:bg-amber-200"} shadow`}>{ic}</button>
              ))}
            </div>
            <p className={`mt-4 ${fs.sub} ${dark?"text-stone-400":"text-stone-500"}`}>#MushroomKitchenSL</p>
          </div>
        </div>
        <div className={`border-t py-4 text-center ${fs.sub} ${dark?"border-stone-800 text-stone-600":"border-amber-200 text-stone-400"}`}>
          © 2025 Mushroom Kitchen. All rights reserved. Made with 🍄 in Sri Lanka.
        </div>
      </footer>

      {/* ── MOBILE BOTTOM NAV ── */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 md:hidden border-t ${dark?"bg-stone-900 border-stone-800":"bg-white border-amber-200"} pb-safe`}>
        <div className="flex">
          {navPages.slice(0,5).map(p=>{
            const icons={home:"🏠",recipes:"🍳",shops:"🛒",contact:"📞",about:"👥",blog:"📝"};
            return(
              <button key={p} onClick={()=>handleNav(p)}
                className={`flex-1 flex flex-col items-center py-2 transition-colors ${page===p?(dark?"text-amber-400":"text-amber-600"):(dark?"text-stone-500":"text-stone-400")}`}>
                <span className="text-lg">{icons[p]}</span>
                <span className="text-xs font-semibold mt-0.5">{t.nav[p].length>7?t.nav[p].slice(0,6)+"…":t.nav[p]}</span>
              </button>
            );
          })}
          <button onClick={()=>handleNav("blog")}
            className={`flex-1 flex flex-col items-center py-2 transition-colors ${page==="blog"?(dark?"text-amber-400":"text-amber-600"):(dark?"text-stone-500":"text-stone-400")}`}>
            <span className="text-lg">📝</span>
            <span className="text-xs font-semibold mt-0.5">{t.nav.blog.length>7?t.nav.blog.slice(0,6)+"…":t.nav.blog}</span>
          </button>
        </div>
      </div>

      {/* Bottom padding for mobile nav */}
      <div className="h-16 md:hidden"/>
    </div>
  );
}
