import americanImg from "../assets/american.jpg";
import abaloneImg from "../assets/abalone.jpg";
import milkyImg from "../assets/milky.jpg";
import buttonImg from "../assets/button.jpg";
import spicyImg from "../assets/spicy Mushrooms.jpg";
import hotbutterImg from "../assets/Hot Butter Mushroom.jpg";
import curryImg from "../assets/Curry Recipe.jpg";
import soupImg from "../assets/soup mushroom.jpg";
import pepperfryImg from "../assets/mushroom pepper fry.jpg";
import omletImg from "../assets/omlet mushroom.jpg";
import stewImg from "../assets/stew.jpg";
import mojuImg from "../assets/moju.jpg";
import garlicImg from "../assets/garlic.jpg";

export const T = {
    en: {
        brand: "Mushroom Kitchen",
        nav: { home: "Home", recipes: "Recipes", shops: "Shops", contact: "Contact", about: "About", blog: "Blog" },
        search: "Search...",
        heroTitle: "The Art of Mushroom Cooking",
        heroSub: "From earthy portobellos to delicate chanterelles — celebrate fungi in all their umami glory.",
        categories: "Categories",
        all: "All",
        viewRecipe: "View Recipe",
        viewShop: "Visit Shop",
        ingredients: "Ingredients",
        method: "Method",
        servings: "servings",
        readMore: "Read More",
        contactTitle: "Get In Touch",
        contactSub: "We'd love to hear from you. Reach out any time.",
        hours: "Open Hours",
        hoursVal: "Everyday, 9:00 AM – 5:00 PM",
        phone: "Phone",
        email: "Email",
        aboutTitle: "About Mushroom Kitchen",
        aboutSub: "Rooted in nature, grown with passion.",
        blogTitle: "Mushroom Stories",
        blogSub: "Tips, tales, and trivia from the world of fungi.",
        featuredMushroomsTitle: "Our Premium Mushrooms",
        shopCategories: ["All", "Local", "Imported", "Organic"],
        cleanMushrooms: {
            title: "How to Clean Mushrooms",
            steps: [
                { title: "1. Don't Soak in Water", desc: "Never soak mushrooms in a bowl of water. They act like sponges and absorb water rapidly, which makes them soggy and flavorless when cooked." },
                { title: "2. The Damp Cloth Method", desc: "The best way is to use a damp paper towel or a soft cloth to gently wipe off any dirt or peat moss from each mushroom." },
                { title: "3. Quick Rinse (If Very Dirty)", desc: "If they are very dirty, place them in a colander and give them a very quick rinse under cold running water. Immediately pat them dry with a clean towel." },
                { title: "4. Trim the Stems", desc: "Cut off the very end of the mushroom stem, especially if it feels woody or dry. For Oyster mushrooms (kiri hathu), you can pull them apart by hand along the grain." }
            ],
            proTipTitle: "💡 Pro Tip:",
            proTipSub: '"Cook them dry!"',
            proTipDesc: "Mushrooms naturally contain a lot of water. Therefore, when cooking them in a pan, heat them for 2-3 minutes without adding oil or butter at first. Once the water has cooked out, add your oil, and the mushrooms will brown perfectly."
        },
    },
    si: {
        brand: "මාෂ්රූම් කිචන්",
        nav: { home: "මුල් පිටුව", recipes: "වට්ටෝරු", shops: "වෙළඳසැල්", contact: "අප අමතන්න", about: "අප ගැන", blog: "බ්ලොග්" },
        search: "සොයන්න...",
        heroTitle: "හතු පිසීමේ කලාව",
        heroSub: "පෘථිවිය සුවඳ සහිත හතු වලින් රසවත් ආහාර — ආහාර ලෝකයේ අලුත් රස ගවේෂණය.",
        categories: "ප්‍රවර්ග",
        all: "සියල්ල",
        viewRecipe: "වට්ටෝරුව බලන්න",
        viewShop: "වෙළඳසැල බලන්න",
        ingredients: "අමුද්‍රව්‍ය",
        method: "ක්‍රමය",
        servings: "දෙනෙකුට",
        readMore: "තව කියවන්න",
        contactTitle: "අප හා සම්බන්ධ වන්න",
        contactSub: "ඔබගේ පණිවිඩ අපට ලබා දෙන්න. ඕනෑම වෙලාවක අමතන්න.",
        hours: "විවෘත වේලාව",
        hoursVal: "සෑම දිනකම, පෙ.ව. 9:00 – ප.ව. 5:00",
        phone: "දුරකථන",
        email: "විද්‍යුත් තැපෑල",
        aboutTitle: "මාෂ්රූම් කිචන් ගැන",
        aboutSub: "ස්වභාවයෙන් උපත ලැබ, ආශාවෙන් වගා කරන ලද.",
        blogTitle: "හතු කතා",
        blogSub: "හතු ලෝකයෙන් ඉඟි, කතා සහ රසවත් තොරතුරු.",
        featuredMushroomsTitle: "අපගේ ප්‍රිමියම් හතු",
        shopCategories: ["සියල්ල", "දේශීය", "ආනයනික", "කාබනික"],
        cleanMushrooms: {
            title: "හතු පිරිසිදු කරගන්නා නිවැරදි ක්‍රමය",
            steps: [
                { title: "1. වතුරේ දමා සෝදන්න එපා", desc: "හතු කිසිම විටක බඳුනකට වතුර දමා පෙඟෙන්නට හරින්න එපා. හතු ස්පොන්ජ් එකක් මෙන් ඉක්මනින් වතුර උරා ගන්නා නිසා, පිසීමේදී ඒවායේ රසය අඩු වී බුරුල් ගතියක් ඇති වේ." },
                { title: "2. තෙත රෙදි කඩකින් පිසදාන්න", desc: "හොඳම ක්‍රමය වන්නේ තරමක් තෙත මාත්තු කළ පිරිසිදු රෙදි කඩකින් හෝ පේපර් ටවල් එකකින් හතු මත ඇති දූවිලි සහ අනෙකුත් අපද්‍රව්‍ය මෘදුව පිසදා ඉවත් කිරීමයි." },
                { title: "3. අධික ලෙස අපිරිසිදු නම් පමණක් කෙටි සේදීමක්", desc: "හතු ගොඩක් අපිරිසිදු නම් පමණක්, පෙනේරයකට දමා ගලා යන සීතල වතුරෙන් ඉතා ඉක්මනින් සෝදා ගන්න. සෝදා අවසන් වූ වහාම පිරිසිදු තුවායකින් තෙත මාත්තු කර වියළා ගන්න." },
                { title: "4. නැට්ටේ අග කොටස ඉවත් කරන්න", desc: "හතු නැට්ටේ ඉතා තද හෝ වියළි අග කොටස කපා ඉවත් කරන්න. කිරි හතු වැනි වර්ග අතින් ඉරා ගැනීමේදී ඒවායේ කෙඳි ඇති දිශාවට (along the grain) ඉරා ගැනීම වඩාත් සුදුසුයි." }
            ],
            proTipTitle: "💡 Pro Tip:",
            proTipSub: '"Cook them dry!"',
            proTipDesc: "Mushrooms වල ස්වාභාවිකවම වතුර ගොඩක් තියනවා. ඒ නිසා පෑන් එකකට දාලා පිසිනකොට මුලින්ම තෙල් හෝ බටර් දාන්නේ නැතුව විනාඩි 2-3ක් රත් කරන්න. එතකොට හතු වල තියන වතුර එලියට ඇවිත් ඉවර වුනාම තෙල් එකතු කරාම හතු ටික නියමෙටම රන්වන් පාටට බැදෙනවා."
        },
    },
};

export const sliderMushroomsData = [
    {
        name: { en: "American Oyster Mushroom", si: "ඇමෙරිකන් ඔයිස්ටර් හතු" },
        desc: { en: "Delicate, fan-shaped caps with a mild, anise-like flavour. Perfect for stir-fries and soups.", si: "මෘදු, රසවත් රසයක් සහිත පෙති-හැඩ හතු. ෆ්‍රයිඩ් රයිස් සහ සුප් සඳහා වඩාත් සුදුසු." },
        emoji: "🍄",
        color: "from-slate-600 to-slate-800",
        img: americanImg,
    },
    {
        name: { en: "Abalone Mushroom", si: "අබලෝන් හතු" },
        desc: { en: "Thick, meaty texture resembling abalone. Rich umami taste, ideal for grilling or braising.", si: "ඝන, මස් බඳු සැකැස්ම. ග්‍රිල් කිරීම හෝ ස්ටූ කිරීම සඳහා ඉතාමත් සුදුසු." },
        emoji: "🍄",
        color: "from-amber-700 to-amber-900",
        img: abaloneImg,
    },
    {
        name: { en: "Milky Mushroom", si: "කිරි හතු" },
        desc: { en: "Pure white, firm mushrooms with a subtle creamy taste. A versatile ingredient in any cuisine.", si: "සුදු, දෘඪ හතු, සියුම් කිරිවැල් රසයකින් යුත්. ඕනෑම ආහාර වට්ටෝරුවකට ගැළපෙන." },
        emoji: "🍄",
        color: "from-stone-500 to-stone-700",
        img: milkyImg,
    },
    {
        name: { en: "Button Mushroom", si: "බටන් හතු" },
        desc: { en: "The world's most popular mushroom. Mild flavour that intensifies when cooked. A kitchen staple.", si: "ලොව වඩාත්ම ජනප්‍රිය හතු. රත් කළ විට රස වැඩිවේ. ගෙදර ආහාර පිසීමේ අත්‍යවශ්‍ය අමුද්‍රව්‍යයකි." },
        emoji: "🍄",
        color: "from-neutral-600 to-neutral-800",
        img: buttonImg,
    },
];

export const recipes = [
    { id: 1, title: "Spicy Mushroom Devilled", titleSi: "Spicy Mushroom Devilled", category: "Veg", time: "20 min", servings: 3, difficulty: "Veg", emoji: "", img: spicyImg, desc: "A must-have recipe for any Sri Lankan; it’s the ultimate accompaniment for a rice and curry meal or a perfect 'bite' to go with drinks.", descSi: "ලංකාවේ අපිට නැතුවම බැරි, බත් එක්ක හරි බයිට් එකකට හරි මරු රෙසිපි එකක්.", ingredients: ["200g mushrooms", "2 Onions (sliced)", "3 Green chillies", "1 Tomato", "1 tbsp Chili flakes", "2 tbsp Soy sauce", "2 tbsp Tomato sauce", "Salt and Pepper"], ingredientsSi: ["හතු 200g", "ලූනු ගෙඩි 2 (ලියාගත්)", "අමු මිරිස් කරල් 3", "තක්කාලි ගෙඩි 1", "කෑලි මිරිස් මේස හැඳි 1", "සෝයා සෝස් මේස හැඳි 2", "තක්කාලි සෝස් මේස හැඳි 2", "ලුණු සහ ගම්මිරිස්"], steps: ["Clean and tear mushrooms into pieces.", "Deep fry or sauté until golden.", "Sauté onions, green chillies, and curry leaves.", "Add fried mushrooms, chili flakes, and sauces.", "Toss on high heat for 2 mins and serve."], stepsSi: ["හතු පිරිසිදු කර කැබලි වලට කඩා ගන්න", "රන්වන් පැහැ වන තුරු ගැඹුරු තෙලේ බැදගන්න හෝ තෙම්පරාදු කරන්න.", "ලූනු, අමු මිරිස් සහ කරපිංචා තෙම්පරාදු කරන්න.", "බැදගත් හතු, කෑලි මිරිස් සහ සෝස් වර්ග එකතු කරන්න.", "විනාඩි 2ක් පමණ අධික ගින්දරේ කලවම් කර පිළිගන්වන්න."], tags: ["Vegetarian", "Creamy", "Quick"], protein: "5–8g", cal: "180–250", videoLink: "https://youtu.be/9jq-tVPMUBw?si=sXufqZd1eH7xv40W" },
    { id: 2, title: "Crispy Fried Mushroom", titleSi: "Crispy Fried Mushroom", category: "Non-Veg", time: "15 min", servings: 2, difficulty: "Non-Veg", emoji: "", img: hotbutterImg, desc: "This is something that even little children love to eat very much.", descSi: "මේක නම් පොඩි ළමයි පවා ගොඩක් ආසාවෙන් කන එකක්.", ingredients: ["200g Mushrooms", "1/2 cup Corn flour", "1/4 cup All-purpose flour", "1 Egg(optional)", "Chili powder & Turmeric", "Oil for frying"], ingredientsSi: ["හතු ග්‍රෑම් 200", "කෝන් ෆ්ලවර් කෝප්ප 1/2", "පාන් පිටි කෝප්ප 1/4", "බිත්තරයක්", "මිරිස් කුඩු සහ කහ ස්වල්පයක්", "බැදීමට තෙල්"], steps: ["Clean and tear mushrooms into pieces.", "Mix flour, egg, and spices with a little water to make a thick batter.", "Dip mushrooms in the batter.", "Deep fry in hot oil until very crispy.", "Sprinkle some salt and chili powder on top."], stepsSi: ["හතු පිරිසිදු කර කැබලි වලට කඩා ගන්න", "පිටි වර්ග, බිත්තර සහ කුළුබඩු වතුර ස්වල්පයක් දමා උකු මිශ්‍රණයක් සාදාගන්න.", "හතු එම මිශ්‍රණයේ දවටන්න.", "රත් වූ තෙල් වල දමා කරස් ගා ශබ්දය එනතුරු හොඳින් බැදගන්න.", "රස අනුව ලුණු සහ මිරිස් කුඩු ඉසින්න."], tags: ["Vegetarian", "Italian", "Comfort"], protein: "3–5g", cal: "150–250", videoLink: "https://youtu.be/5uQIk-lJfFQ?si=MSB4MFz8wj92A9QQ" },
    { id: 3, title: "Mushroom Curry", titleSi: "Mushroom Curry", category: "Veg", time: "35 min", servings: 6, difficulty: "Veg", emoji: "", img: curryImg, desc: "Mushroom curry with creamy coconut milk gravy to eat with rice.", descSi: "බත් එක්ක කන්න කිරිරස මෂ්රූම් කරිය.", ingredients: ["250g Mushrooms", "1 cup Thick coconut milk", "1/2 tsp Turmeric powder", "1 tbsp Curry powder (Unroasted)", "Fenugreek seeds (Uluhaal)", "Cinnamon piece, Curry leaves & Pandan leaf"], ingredientsSi: ["හතු ග්‍රෑම් 250", "උකු මිටිකිරි කෝප්ප 1", "කහ කුඩු තේ හැඳි 1/2", "තුනපහ කුඩු මේස හැඳි 1", "උළුහාල් ස්වල්පයක්", "කුරුඳු පොතු, කරපිංචා සහ රම්පේ"], steps: ["Mix mushrooms with all spices and coconut milk in a bowl.", "Add salt, curry leaves, and onions.", "Cook on medium heat until the gravy thickens.", "Do not overcook to keep the texture."], stepsSi: ["වළඳකට හතු, කුළුබඩු සහ මිටිකිරි එක් කර කලවම් කරන්න", "එයට ලුණු, කරපිංචා සහ ළූණු එක් කරන්න.", "මද ගින්දරේ කිරි හොද්ද උකු වන තෙක් පිසගන්න.", "හතු වැඩිපුර තැම්බෙන්නට හරින්න එපා."], tags: ["Vegan-adaptable", "Elegant", "Blended"], protein: "6g", cal: "180", videoLink: "https://youtu.be/OlXhFLHIN_o?si=2reabXoHoKjofFJH" },
    { id: 4, title: "Mushroom Soup", titleSi: "Mushroom Soup", category: "Veg", time: "20 min", servings: 2, difficulty: "Veg", emoji: "", img: soupImg, desc: "This is a really good side dish and also perfect for a light dinner. It can be made in restaurant style.", descSi: "මේක නම්  dinner එකකට මරු. Restaurant style එකට හදන්න පුළුවන්.", ingredients: ["250g Mushrooms (chopped small)", "2 cups Fresh milk or Cooking cream", "2 tbsp Butter", "1 Onion (finely chopped)", "2 tbsp All-purpose flour", "Black pepper & Salt"], ingredientsSi: ["හතු ග්‍රෑම් 250 (සිහින්ව කපාගත්)", "නැවුම් කිරි හෝ කුකින් ක්‍රීම් කෝප්ප 2", "ලොකු ළූණු ගෙඩි 1 (සිහින්ව කපාගත්)", "බටර් මේස හැඳි 2", "පාන් පිටි මේස හැඳි 2", "ලුණු සහ ගම්මිරිස්"], steps: ["Melt butter in a pan and sauté onions until soft.", "Add mushrooms and cook until brown.", "Stir in flour and cook for 1 minute.", "Slowly pour in milk while whisking to avoid lumps.", "Simmer until thick, add pepper and salt. Serve hot."], stepsSi: ["භාජනයකට බටර් දමා රත් වූ පසු ළූණු එක් කර තෙම්පරාදු කරන්න.", "එයට හතු එකතු කර දුඹුරු පැහැ වන තුරු පිසගන්න.", "පාන් පිටි එකතු කර විනාඩියක් පමණ කලවම් කරන්න.", "පිටි කැටි ගැසීමට නොදී කිරි ස්වල්පය බැගින් එකතු කරමින් කලවම් කරන්න.", "සුප් එක උකු වන තෙක් රත් කර ලුණු සහ ගම්මිරිස් එක් කර උණුවෙන්ම පිළිගන්වන්න."], tags: ["Vegetarian", "Baked", "Filling"], protein: "4–6g", cal: "150–200", videoLink: "https://youtu.be/9DQrhB924wQ?si=X-YUpDaNBO7L1BC4" },
    { id: 5, title: "Mushroom Pepper Fry", titleSi: "Mushroom Pepper Fry", category: "Veg", time: "15 min", servings: 3, difficulty: "Veg", emoji: "", img: pepperfryImg, desc: "This is a slightly spicy dry curry. It goes really well with rice or even with parata—it's a perfect match.", descSi: "මේක ටිකක් සැර විදිහට හදන ඩ්‍රයි කරියක්. බත් එක්ක හරි පරාටා එක්ක හරි මරුම මැච් එකක්.", ingredients: ["300g Oyster mushrooms", "2 tbsp Crushed black pepper", "1 tsp Turmeric powder", "Curry leaves & Ginger-garlic paste", "2 Green chillies (sliced)", "Coconut oil"], ingredientsSi: ["හතු ග්‍රෑම් 300", "ගම්මිරිස් කුඩු මේස හැඳි 2", "කහ කුඩු තේ හැඳි 1", "කරපිංචා සහ ඉඟුරු-සුදුළූණු පේස්ට්", "අමු මිරිස් කරල් 2", "පොල් තෙල්"], steps: ["Clean and shred mushrooms by hand.", "Heat oil, add curry leaves and ginger-garlic paste.", "Add mushrooms, turmeric, and salt. Cook until water evaporates.", "Add plenty of black pepper and green chillies.", "Fry until the mushrooms get a dark, roasted texture."], stepsSi: ["හතු පිරිසිදු කර අතින් කැබලි වලට ඉරා ගන්න.", "තෙල් රත් කර කරපිංචා සහ ඉඟුරු-සුදුළූණු පේස්ට් එක් කරන්න.", "එයට හතු, කහ සහ ලුණු එකතු කර හතු වල වතුර ගතිය යන තුරු පිසගන්න.", "ගම්මිරිස් කුඩු සහ අමු මිරිස් වැඩිපුර එකතු කරන්න.", "හතු ටික කර වීගෙන එන තෙක් හොඳින් බැදගන්න."], tags: ["Breakfast", "Spiced", "One-pan"], protein: "5–8g", cal: "180–300", videoLink: "https://youtu.be/CbuXmGShfXI?si=jFBl4xBrhQpadA_S" },
    { id: 6, title: "Mushroom Omelette", titleSi: "Mushroom Omelette", category: "Non-Veg", time: "10 min", servings: 1, difficulty: "Non-Veg", emoji: "", img: omletImg, desc: "A healthy recipe that can be prepared quickly for breakfast.", descSi: "Breakfast එකට හරි ඉක්මනින් හදාගන්න පුළුවන් ගුණදායක රෙසිපි එකක්.", ingredients: ["2 Eggs", "50g Mushrooms (sliced)", "1/2 Onion (chopped)", "1 Green chili", "Pinch of Salt and Pepper", "Butter"], ingredientsSi: ["බිත්තර 2", "හතු ග්‍රෑම් 50 (සිහින්ව කපාගත්)", "ලොකු ළූණු ගෙඩි 1/2", "අමු මිරිස් කරල් 1", "ලුණු සහ ගම්මිරිස්", "බටර්"], steps: ["Sauté mushrooms and onions in a pan with a bit of butter until soft.", "Whisk eggs with salt, pepper, and green chili.", "Pour the egg mixture over the sautéed mushrooms.", "Cook both sides until golden brown."], stepsSi: ["බටර් ස්වල්පයක් රත් කර එයට හතු සහ ළූණු එක් කර බැදගන්න.", "බිත්තර වලට ලුණු, ගම්මිරිස් සහ අමු මිරිස් දමා හොඳින් ගසාගන්න.", "බැදගත් හතු මිශ්‍රණය මතට බිත්තර සාරු ටික වත් කරන්න", "දෙපැත්තම රන්වන් පැහැ වන තුරු පිසගන්න."], tags: ["Japanese", "Umami", "Warming"], protein: "12–16g", cal: "180–250", videoLink: "https://youtu.be/_jPajbeirQI?si=OT8zz5zi6xX1PqCl" },
    { id: 7, title: "Mushroom Stew", titleSi: "Mushroom Stew", category: "Veg", time: "20 min", servings: 3, difficulty: "Veg", emoji: "", img: stewImg, desc: "This bread is extremely delicious to eat with toast. It has a milky flavor and a buttery taste.", descSi: "මේ පාන් එක roast පාන් එක්ක කන්න හරිම රසවත් කෑමක්. කිරි රස සහ බටර් රසත් තියෙනවා.", ingredients: ["250g Mushrooms", "2 Potatoes (boiled and cubed)", "1 Carrot (sliced)", "1 cup Coconut milk", "1 Onion & 2 Green chillies", "Piece of Cinnamon & Cloves","Salt and Black pepper"], ingredientsSi: ["හතු ග්‍රෑම් 250", "අල ගෙඩි 2 (තම්බා කැබලි කරගත්)", "කැරට් අල 1 (කැබලි කරගත්)", "මිටිකිරි කෝප්ප 1", "ලොකු ළූණු 1 සහ අමු මිරිස් 2", "කුරුඳු පොතු සහ කරාබුනැටි","ලුණු සහ ගම්මිරිස්"], steps: ["Heat a pan, add chopped onions, green chillies, cinnamon, and cloves.", "Add mushrooms, carrots, and boiled potatoes. Sauté for 3 mins.", "Pour coconut milk and bring to a simmer.", "Add salt and plenty of black pepper.", "Remove from heat when the gravy is slightly thick."], stepsSi: ["භාජනයක් රත් කර එයට ළූණු, අමු මිරිස්, කුරුඳු සහ කරාබුනැටි එක් කරන්න.", "එයට හතු, කැරට් සහ තම්බා ගත් අල එකතු කර විනාඩි 3ක් තෙම්පරාදු කරන්න.", "මිටිකිරි එකතු කර උතුරන්නට හරින්න.", "රස අනුව ලුණු සහ ගම්මිරිස් වැඩිපුර එකතු කරන්න.", "හොද්ද තරමක් උකු වූ පසු ලිපෙන් බාගන්න."], tags: ["Vegetarian", "Baked", "Filling"], protein: "3–6g", cal: "80–180", videoLink: "https://youtu.be/YDx22ov2A_M?si=7ufgbVx8BZjWZmy8" },
    { id: 8, title: "Mushroom Moju", titleSi: "Mushroom Moju", category: "Veg", time: "30 min", servings: 5, difficulty: "Veg", emoji: "", img: mojuImg, desc: "Just like “Wambatu Moju,” it is possible to make a delicious “Mushroom Moju” as well. This is a very popular recipe that many people love to try and enjoy.", descSi: "වම්බටු මෝජු වගේම හතු වලිනුත් හොඳම මෝජු එකක් හදාගන්න පුළුවන්. මේක ගොඩක් දෙනා ආසාවෙන් හොයන රසවත් රෙසිපියක්.", ingredients: ["300g mushrooms", "100g Small onions", "10-12 Green chillies", "2 tbsp Vinegar", "1 tbsp Mustard seeds (ground)", "1 tbsp Sugar","Oil for deep frying"], ingredientsSi: ["හතු ග්‍රෑම් 300", "රතු ළූණු ග්‍රෑම් 100", "අමු මිරිස් කරල් 10-12", "විනාකිරි මේස හැඳි 2", "අඹරාගත් අබ මේස හැඳි 1", "සීනි මේස හැඳි","බැදීමට තෙල්"], steps: ["Deep fry the mushrooms until golden and crispy.", "Briefly fry small onions and green chillies (don't overcook).", "Mix vinegar, ground mustard, sugar, salt, and chili flakes in a bowl.", "Add the fried ingredients into the mixture and mix well.", "Let it sit for 1 hour before serving for best taste."], stepsSi: ["හතු රන්වන් පැහැ වන තෙක් තෙලෙන් බැදගන්න.", "රතු ළූණු සහ අමු මිරිස් ද සැහැල්ලුවෙන් බැදගන්න (වැඩිපුර තැම්බෙන්නට හරින්න එපා).", "භාජනයකට විනාකිරි, අබ, සීනි, ලුණු සහ කෑලි මිරිස් දමා මිශ්‍රණයක් සාදාගන්න.", "බැදගත් හතු, ළූණු සහ මිරිස් එම මිශ්‍රණයට දමා හොඳින් කලවම් කරන්න.", "පැයක් පමණ තබා පසුව පිළිගන්වන්න."], tags: ["Breakfast", "Spiced", "One-pan"], protein: "2–3g", cal: "22–32", videoLink: "https://youtu.be/DnoV3oIWVLg?si=1-ZslkIY53vIIRrP" },
    { id: 9, title: "Garlic Butter Mushrooms", titleSi: "Garlic Butter Mushrooms", category: "Veg", time: "12 min", servings: 2, difficulty: "Veg", emoji: "", img: garlicImg, desc: "A simple recipe, but with a luxurious taste.", descSi: "සරලයි, නමුත් ලක්සරි රසයක් තියෙන රෙසිපියක්.", ingredients: ["250g Mushrooms (whole or halved)", "3 tbsp Butter", "6 Garlic cloves (finely minced)", "Fresh parsley or Coriander", "Salt and Black pepper"], ingredientsSi: ["හතු ග්‍රෑම් 250", "බටර් මේස හැඳි 3", "සුදුළූණු බික් 6 (සිහින්ව කපාගත්)", "පාස්ලි හෝ කොත්තමල්ලි කොළ", "ලුණු සහ ගම්මිරිස්"], steps: ["Melt butter in a large skillet over medium-high heat.", "Add mushrooms and sauté until brown and tender.", "Stir in minced garlic and cook for 1 minute until fragrant.", "Season with salt and pepper.","Garnish with chopped parsley and serve."], stepsSi: ["පෑන් එකකට බටර් දමා මද ගින්දරේ රත් කරන්න.", "එයට හතු එකතු කර දුඹුරු පැහැ වන තෙක් තෙම්පරාදු කරන්න.", "සිහින්ව කපාගත් සුදුළූණු එකතු කර විනාඩියක් පමණ බැදගන්න.", "රස අනුව ලුණු සහ ගම්මිරිස් එක් කරන්න.","කොත්තමල්ලි කොළ ඉස උණුවෙන්ම පිළිගන්වන්න."], tags: ["Japanese", "Umami", "Warming"], protein: "2–5g", cal: "80–150", videoLink: "https://youtu.be/Z19YWgw2UDA?si=au2Qp-tALWyrPKJq" },
];

export const shops = [
    { id: 1, name: "Forest Fungi Farm", nameSi: "වන හතු ගොවිපල", category: "Local", emoji: "", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80", desc: "Family-run organic mushroom farm supplying fresh local varieties daily.", descSi: "දිනපතා නැවුම් දේශීය හතු සපයන පවුල් කාබනික ගොවිපලක්.", location: "Kandy Road, Colombo", phone: "071 234 5678", rating: "4.9", products: ["Oyster", "Button", "Milky", "Shiitake"], tags: ["Organic", "Local", "Fresh"] },
    { id: 2, name: "The Mushroom Market", nameSi: "හතු වෙළඳසල", category: "Local", emoji: "", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80", desc: "One-stop shop for all mushroom varieties, dried, fresh, and powdered.", descSi: "සැල, නැවුම් සහ කුඩු ස්වරූපයෙන් සියළු හතු ලැබෙන වෙළඳසල.", location: "Pettah Market, Colombo", phone: "011 456 7890", rating: "4.7", products: ["All Varieties", "Dried", "Powders", "Extracts"], tags: ["Wholesale", "Variety", "City"] },
    { id: 3, name: "Premium Fungi Imports", nameSi: "ප්‍රිමියම් ආනයන හතු", category: "Imported", emoji: "", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", desc: "Rare imported varieties including Truffle, Morel, and Chanterelle.", descSi: "ට්‍රෆල්, මොරල් සහ චන්ටරෙල් ඇතුළු දුර්ලභ ආනයනික හතු.", location: "Colombo 03", phone: "077 890 1234", rating: "4.8", products: ["Truffle", "Morel", "Chanterelle", "Porcini"], tags: ["Imported", "Rare", "Premium"] },
    { id: 4, name: "Green Earth Organics", nameSi: "ග්‍රීන් අර්ත් ඕගනික්ස්", category: "Organic", emoji: "", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", desc: "Certified organic mushrooms grown without any pesticides or chemicals.", descSi: "කෘමිනාශක රහිතව වගා කළ සහතිකලත් කාබනික හතු.", location: "Nugegoda, Colombo", phone: "076 567 8901", rating: "5.0", products: ["Organic Oyster", "Organic Button", "Organic Shiitake"], tags: ["Certified", "No-Pesticide", "Healthy"] },
    { id: 5, name: "Mushroom Medicals", nameSi: "ඖෂධීය හතු", category: "Organic", emoji: "", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80", desc: "Medicinal mushroom supplements, tinctures, and wellness products.", descSi: "ඖෂධීය හතු සප්ලිමන්ට්, ටින්ක්චර් සහ සෞඛ්‍ය නිෂ්පාදන.", location: "Rajagiriya, Colombo", phone: "075 123 4567", rating: "4.6", products: ["Reishi", "Lion's Mane", "Chaga", "Cordyceps"], tags: ["Medicinal", "Wellness", "Supplements"] },
    { id: 6, name: "SporeBox Delivery", nameSi: "ස්පෝර් බොක්ස් ඩිලිවරි", category: "Local", emoji: "", img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80", desc: "Subscription delivery boxes with seasonal fresh mushrooms to your door.", descSi: "ඔබේ දොරකඩට නැවුම් සෘතු හතු ලබා දෙන දායක ශ්‍රේණි.", location: "Island-wide delivery", phone: "070 987 6543", rating: "4.8", products: ["Weekly Box", "Monthly Box", "Gift Box"], tags: ["Delivery", "Subscription", "Gift"] },
];

export const blogs = [
    { id: 1, title: "The Health Benefits of Medicinal Mushrooms", titleSi: "ඖෂධීය හතු වල සෞඛ්‍ය ප්‍රතිලාභ", date: "Apr 10, 2025", author: "Shenal", emoji: "🧬", img: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&q=80", desc: "Discover how Reishi, Lion's Mane, and Chaga mushrooms are transforming modern wellness routines.", descSi: "රෙෂි, ලයන්ස් මේන් සහ චාගා හතු නූතන සෞඛ්‍ය ජීවිතය පරිවර්තනය කරන ආකාරය ගවේෂණය කරන්න.", tag: "Health" },
    { id: 2, title: "How to Grow Oyster Mushrooms at Home", titleSi: "ගෙදරදී ඔයිස්ටර් හතු වගා කරන ආකාරය", date: "Mar 22, 2025", author: "Dilini", emoji: "🌱", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", desc: "A step-by-step beginner's guide to growing delicious oyster mushrooms in your own kitchen.", descSi: "ඔබේම ගෙදර ඔයිස්ටර් හතු වගා කිරීම සඳහා පියවරෙන් පියවර ගිය මාර්ගෝපදේශය.", tag: "Growing" },
    { id: 3, title: "5 Mushroom Recipes for Rainy Season", titleSi: "වැසි කාලයට හතු වට්ටෝරු 5", date: "Feb 14, 2025", author: "Kasun", emoji: "🌧️", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80", desc: "Warm, comforting mushroom dishes perfect for those cosy rainy evenings in Sri Lanka.", descSi: "ශ්‍රී ලංකාවේ වැසි සාන්ත රාත්‍රිය සඳහා සුදුසු රසවත් හතු ආහාර 5ක්.", tag: "Recipes" },
    { id: 4, title: "The Science of Umami: Why Mushrooms Taste So Good", titleSi: "උමාමි විද්‍යාව: හතු ඇයි රසවත් වන්නේ", date: "Jan 30, 2025", author: "Shenal", emoji: "🔬", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80", desc: "The chemistry behind glutamates and why mushrooms are nature's ultimate flavour enhancers.", descSi: "ග්ලූටාමේට් රසායන විද්‍යාව සහ හතු ස්වාභාවික රස වැඩිකරන්නන් ලෙස ක්‍රියා කරන ආකාරය.", tag: "Science" },
    { id: 5, title: "Sri Lanka's Native Wild Mushrooms", titleSi: "ශ්‍රී ලංකාවේ දේශීය වල් හතු", date: "Jan 08, 2025", author: "Nimali", emoji: "🌿", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80", desc: "Exploring the rich diversity of native wild mushrooms found in Sri Lanka's forests.", descSi: "ශ්‍රී ලංකාවේ වනාන්තරවල ඇති දේශීය වල් හතු විවිධත්වය ගවේෂණය කිරීම.", tag: "Nature" },
    { id: 6, title: "Drying & Preserving Mushrooms at Home", titleSi: "ගෙදරදී හතු ශීත-කිරීම සහ ආරක්ෂා කිරීම", date: "Dec 15, 2024", author: "Kasun", emoji: "🌞", img: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80", desc: "Practical methods to dry, freeze and store mushrooms so they last all year round.", descSi: "හතු ශීත-කිරීමට, ශ්‍රීතකරණය කිරීමට සහ ගබඩා කිරීමට ප්‍රායෝගික ක්‍රම.", tag: "Tips" },
];

export const FS = {
    small: { base: "text-xs", body: "text-sm", heading: "text-lg", hero: "text-3xl", card: "text-sm", sub: "text-xs" },
    medium: { base: "text-sm", body: "text-base", heading: "text-2xl", hero: "text-4xl", card: "text-base", sub: "text-sm" },
    large: { base: "text-base", body: "text-lg", heading: "text-3xl", hero: "text-5xl", card: "text-lg", sub: "text-base" },
};
