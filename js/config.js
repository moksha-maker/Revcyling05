/* ===== EDIT ME: images and content =====
   To use your own photos, copy them into assets/images/ with the file names below
   (or change the names here). If a file is missing, a placeholder illustration shows instead. */
const SITE={
  // Home page banner: 4 background images you change by hand with the arrows or dots.
  heroAutoplay:0, // seconds between automatic slides; 0 = no automatic change
  hero:[
    {img:'assets/images/hero-1.jpg',title:'Explore the hidden Mirissa with Rev Cycling'}
    // Add more banner slides by copying the line above (a comma after each), e.g.
    // ,{img:'assets/images/hero-2.jpg',title:'Paddy & Tea Trail'}
  ],
  // Ride cards (Home and Activities pages). The first three also show on Home.
  tours:[
    {img:'assets/images/tour-1.jpg',fb:'paddy',name:'Paddy & Cinnamon Trail – Mirissa',meta:'30 km · 3 hours · Moderate',text:'Guided trails through paddy fields, coconut plantations, cinnamon estates and the scenic beauty of the down south countryside.',price:'$30'},
    {img:'assets/images/tour-2.jpg',fb:'sunrise',name:'Sunrise Sunburn Ride – Mirissa',meta:'15 to 18 km · 2 hours · Easy',text:'Roll out before the heat and follow the guided route through the Mirissa countryside, then return for breakfast.',price:'$25'},
    {img:'assets/images/tour-3.jpg',fb:'sunset',name:'Sunset Beach Cruise – Mirissa to Weligama',meta:'15 km · 2 hours · Easy',text:'A relaxed evening loop starting from Spirit Dici Hotel in Mirissa, riding the coastal route to Weligama beach and returning in time for the sunset and evening tea.',price:'$25'},
    {img:'assets/images/tour-4.jpg',fb:'hills',name:'Hill Country Challenge',meta:'65 km · Hard · 7 hrs',text:'For strong riders: climbs, jungle views and a waterfall swim.',price:'$95'}
  ],
  // Blog posts. Each one opens as its own page (#post-<slug>). Edit the text or photos here.
  // Photos: cover = card and page banner; each section can have an img and a cap(tion).
  blog:[
    {slug:'mirissa-south-coast',img:'assets/images/blog-1.jpg',fb:'beach',tag:'Mirissa',date:'28 Oct 2026',read:'4 min',
     title:'Mirissa: the best of Sri Lanka’s south coast',
     excerpt:'A small fishing town with golden beaches, quiet back roads and some of the best sunsets on the island. Here is why riders fall for Mirissa.',
     sections:[
      {h:'A small town with a big reputation',p:['Mirissa is a relaxed fishing and beach town on the south coast of Sri Lanka, in the Matara District of the Southern Province. It is loved for its curve of golden sand, palm-covered headlands and a working fishing harbour that still sets the rhythm of the morning.','Step away from the beach and the pace slows even more. Narrow lanes wind through coconut groves, paddy fields and small villages where children wave and tuk-tuks outnumber cars.'],img:'assets/images/blog-1-a.jpg',fb:'harbour',cap:'Fishing boats in the harbour at Mirissa'},
      {h:'Why Mirissa suits cyclists',p:['The land around Mirissa is gentle and varied. You get flat coastal stretches, rolling country lanes and the odd short climb through a village, so riders of every level can find a route they enjoy.'],list:['Easy coastal roads for first-timers','Inland loops through paddy, coconut and cinnamon country','Short rides to Weligama, Matara and other coastal towns','A king coconut stop never more than a few kilometres away']},
      {h:'The best time to visit',p:['The south coast is at its driest and calmest from around November to April, which is also the main whale-watching season. Rain can arrive at any time of year, so early starts and a light jacket are always a good idea.','Mornings are the best time to ride: the air is cooler, the roads are quiet and the light on the paddy fields is hard to beat.'],img:'assets/images/blog-1-b.jpg',fb:'coconut',cap:'Palms and ocean views along the headland'},
      {h:'Eat well along the way',p:['Expect grilled seafood on the beach, fresh tropical fruit, hoppers for breakfast and rice and curry for lunch. Many of our rides end with a proper breakfast or evening tea, so you never pedal on an empty stomach.']},
      {h:'See it with local guides',p:['Our guides know the best routes all over the country, and especially the quiet roads of the south coast. Join one of our rides to see a side of Mirissa that most visitors miss.']}
     ]},
    {slug:'cycling-in-sri-lanka',img:'assets/images/blog-2.jpg',fb:'roadside',tag:'Cycling',date:'15 Oct 2026',read:'5 min',
     title:'Cycling in Sri Lanka: what to know before your first ride',
     excerpt:'Heat, traffic and hills: a simple guide to riding in Sri Lanka with confidence, whether it is your first guided ride or your fiftieth.',
     sections:[
      {h:'Pick the right time of day',p:['Start early. From around 6 am the air is cooler, the roads are quiet and the light is beautiful. By midday the heat and humidity build, so plan your breaks in the shade and finish before the hottest hours.']},
      {h:'Remember to ride on the left',p:['Sri Lanka drives on the left. Ride in single file, stay predictable and expect buses, tuk-tuks and motorbikes to overtake. Your guide will set the pace and tell you when to move over, so just listen and enjoy the scenery.']},
      {h:'What to wear and pack',p:['Think light, breathable and sun-smart. This short list covers most rides:'],list:['A well-fitted helmet (we provide one)','Light clothing, sunglasses and comfortable shoes','Sunscreen and a hat or buff for rest stops','A refillable water bottle (we carry extra)','A thin rain jacket in the wetter months','A little cash for coconut and tea stops'],img:'assets/images/blog-2-a.jpg',fb:'tips',cap:'Pack light and ride smart'},
      {h:'Stay hydrated',p:['Drink little and often, even if you do not feel thirsty. Fresh king coconut is a local favourite for a reason, and it is on offer at many of our stops.']},
      {h:'Why a guided ride makes it easier',p:['A guide handles the navigation and the traffic, carries spares and first aid, and knows the quiet roads that visitors rarely find. Bikes are fitted to each rider, and the pace stays easy to moderate with plenty of stops.'],img:'assets/images/blog-2-b.jpg',fb:'sunrise',cap:'Early starts mean cooler, quieter roads'}
     ]},
    {slug:'things-to-see-in-mirissa',img:'assets/images/blog-3.jpg',fb:'whale',tag:'Travel',date:'2 Oct 2026',read:'5 min',
     title:'Things to see in Mirissa, on and off the bike',
     excerpt:'From Coconut Tree Hill to whale watching and quiet village lanes, here are the places we love showing visitors around Mirissa.',
     sections:[
      {h:'Coconut Tree Hill',p:['This small headland, lined with palms and facing the open ocean, is one of the most photographed spots in Mirissa. Go at sunrise if you can: the light is soft and you will usually have it to yourself.']},
      {h:'Mirissa Beach and Parrot Rock',p:['The main beach is a long stretch of golden sand with calm swimming spots and plenty of beachside cafés. Parrot Rock, the small rocky outcrop at the beach, makes a great place to watch the sun go down.'],img:'assets/images/blog-3-a.jpg',fb:'sunset',cap:'Sunset on the Mirissa coast'},
      {h:'Whale and dolphin watching',p:['Boat trips leave Mirissa harbour early in the morning, mainly between November and April. Sightings are never guaranteed, so choose an operator that keeps a respectful distance from the animals.']},
      {h:'Village back roads',p:['Some of the best things in Mirissa are not on a map. Paddy fields, cinnamon plantations, small temples and roadside kitchens are best explored by bike, with a local guide who knows which lane leads where.'],img:'assets/images/blog-3-b.jpg',fb:'paddy',cap:'Paddy fields and village lanes inland from the beach'},
      {h:'Nearby places worth a ride',p:['Mirissa is a good base for exploring the wider south coast.'],list:['Weligama: a wide bay popular with beginner surfers','Matara: a busy town with an old fort and a long beach','Dondra Head: the lighthouse at the southern tip of the island','Galle: the historic fort town along the coast to the west'],img:'assets/images/blog-3-c.jpg',fb:'lighthouse',cap:'A lighthouse on the southern coast'}
     ]}
  ],
  aboutBanner:'assets/images/about-banner.jpg', // About us page banner (wide photo)
  aboutHome:'assets/images/about-home.jpg', // About section on Home (portrait photo works best)
  about:'assets/images/about.jpg',      // About us page photo
  stories:'assets/images/stories.jpg',  // Guest stories section photo
  team:[
    {name:'Nuwan',role:'Founder & lead guide',img:'assets/images/team-1.jpg'},
    {name:'Dilini',role:'Tour coordinator',img:'assets/images/team-2.jpg'},
    {name:'Kasun',role:'Mechanic & guide',img:'assets/images/team-3.jpg'}
  ]
};
