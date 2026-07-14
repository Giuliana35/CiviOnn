const header = document.querySelector(".site-header");
const pages = [...document.querySelectorAll("[data-page]")];
const routeLinks = [...document.querySelectorAll("[data-route]")];
const searchButton = document.querySelector(".search");
const quickSearchForms = [...document.querySelectorAll("[data-quick-search]")];
const searchForm = document.querySelector(".search-panel");
const searchInput = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
const sectionNames = {
  home: "Home",
  about: "About",
  mission: "Mission",
  articoli: "Articoli",
  "guerra-ai": "Articoli",
  "onu-quotidianita": "Articoli",
  "internet-appartiene": "Articoli",
  "chat-control": "Articoli",
  criptovalute: "Articoli",
  "sopravvivere-permesso": "Articoli",
  "milizie-armate": "Articoli",
  "accordi-parigi": "Articoli",
  "canale-suez": "Articoli",
  "rivoluzione-fenicotteri": "Articoli",
  "trump-politica-estera": "Articoli",
  weekly: "Weekly",
  culture: "Culture",
  "altra-parte-medaglia": "Culture",
  team: "Team",
  dictionary: "Dictionary",
  backgrounds: "Backgrounds",
  map: "Map",
  forum: "Forum",
  attualita: "Attualita",
  geopolitica: "Geopolitica",
  newsletter: "Newsletter",
  education: "Education",
  "climate-negotiation": "Education",
};
const mapData = {
  italia: {
    country: "Italia 🇮🇹",
    region: "Southern Europe",
    status: "Stable / Watch",
    themes: "youth, migration, gender equality, organized crime, political participation",
    overview: "Italy is a democratic country and member of the European Union, with strong cultural, historical and legal institutions. However, it faces civic issues such as youth unemployment, regional inequality, migration, gender-based violence, corruption, organized crime and distrust in politics.",
    issues: ["youth unemployment", "North-South inequality", "migration and integration", "gender-based violence", "organized crime", "low political trust", "media and political polarization"],
    youth: "Many young Italians face uncertainty about work, university, housing and future opportunities. Some leave the country to study or work abroad, while others engage in activism, volunteering and local civic projects.",
    why: "Italy is useful for CiviOn because it allows users to understand civic issues close to home: democracy is not only about institutions, but also about participation, rights and daily inequalities.",
  },
  brasile: {
    country: "Brasile 🇧🇷",
    region: "Latin America",
    status: "Watch",
    themes: "environment, inequality, Indigenous rights, violence, democracy",
    overview: "Brazil is the largest country in Latin America and one of the most important democracies in the Global South. It has a powerful civil society and rich cultural diversity, but it also faces serious challenges related to inequality, violence, corruption, environmental destruction and Indigenous rights. The Amazon rainforest makes Brazil central to global climate politics.",
    issues: ["Amazon deforestation", "Indigenous rights", "urban violence", "political polarization", "inequality", "police violence", "corruption"],
    youth: "Young Brazilians often experience the effects of inequality, insecurity and limited access to opportunities. At the same time, youth movements are active in climate justice, anti-racism, feminism and democratic participation.",
    why: "Brazil connects democracy, climate justice and social inequality in one country. What happens there affects not only Brazilians, but also the global climate.",
  },
  india: {
    country: "India 🇮🇳",
    region: "South Asia",
    status: "Concern",
    themes: "democracy, religion, caste, gender, digital rights",
    overview: "India is the world’s largest democracy by population and one of the most diverse countries in the world. Its society includes many religions, languages, ethnic groups and regional identities. However, India also faces major civic challenges, including religious tensions, caste discrimination, gender-based violence, restrictions on civil society and debates around press freedom.",
    issues: ["religious minorities", "caste discrimination", "gender inequality", "press freedom", "internet shutdowns and digital rights", "poverty and development"],
    youth: "India has a huge youth population. Young people are involved in education, technology, activism and migration, but many also face pressure from unemployment, social inequality and intense competition.",
    why: "India helps users understand how democracy can exist alongside deep social divisions and how rights are affected by identity, religion, class and caste.",
  },
  kenya: {
    country: "Kenya 🇰🇪",
    region: "East Africa",
    status: "Watch",
    themes: "youth activism, inequality, corruption, climate, protests",
    overview: "Kenya is one of East Africa’s most influential countries, with a young population, an active civil society and a dynamic political environment. At the same time, the country faces challenges linked to corruption, economic inequality, police violence, unemployment and access to public services.",
    issues: ["youth unemployment", "political protests", "corruption and public accountability", "climate vulnerability", "urban inequality", "access to education and healthcare"],
    youth: "Young people in Kenya are increasingly active in politics, digital activism and social movements. Many use social media to discuss corruption, taxation, police violence and economic injustice.",
    why: "Kenya shows how young citizens can become central actors in political debate, especially when economic pressure and inequality affect daily life.",
  },
  giappone: {
    country: "Japan 🇯🇵",
    region: "East Asia",
    status: "Stable",
    themes: "ageing society, gender equality, death penalty, minority rights, work culture",
    overview: "Japan is a highly developed democratic country with strong institutions, advanced technology and a stable political system. However, civic challenges remain, especially around gender equality, discrimination protections, the death penalty, work culture and the rights of minorities. Human Rights Watch notes that Japan lacks comprehensive anti-discrimination laws covering areas such as racial, ethnic, religious, sexual orientation, gender identity and age discrimination.",
    issues: ["gender inequality in politics and work", "ageing population", "death penalty", "minority rights", "mental health and work pressure", "immigration and integration"],
    youth: "Young people in Japan face high academic and work expectations, economic insecurity, mental health pressure and questions about the future of an ageing society.",
    why: "Japan shows that even stable democracies can have unresolved human rights and social equality issues.",
  },
  turchia: {
    country: "Turchia 🇹🇷",
    region: "Europe / Middle East",
    status: "Concern",
    themes: "press freedom, elections, secularism, women’s rights, minority rights",
    overview: "Turkey is a strategically important country between Europe and Asia, with a complex political identity and a rich cultural history. It has competitive politics, but civic space, media freedom and judicial independence have been major concerns in recent years.",
    issues: ["press freedom", "political opposition", "women’s rights", "Kurdish question", "secularism and religion", "judicial independence", "earthquake response and public accountability"],
    youth: "Young people in Turkey are often highly politically aware, especially around education, economy, freedom of expression and the future of democracy.",
    why: "Turkey helps explain how democracy, nationalism, religion, secularism and civil liberties can interact in complex ways.",
  },
  stati_uniti: {
    country: "Stati Uniti 🇺🇸",
    region: "North America",
    status: "Watch",
    themes: "polarization, race, gun violence, elections, inequality",
    overview: "The United States is one of the world’s most influential democracies, but it faces deep internal divisions. Civic debates often focus on race, inequality, gun violence, reproductive rights, migration, voting rights, misinformation and political polarization.",
    issues: ["racial inequality", "gun violence", "voting rights", "misinformation", "reproductive rights", "migration", "political polarization"],
    youth: "Young Americans are active in movements around climate justice, gun control, racial justice, LGBTQ+ rights and student debt. At the same time, many feel disconnected from traditional politics.",
    why: "The United States shows how even powerful democracies can face serious questions about equality, trust and participation.",
  },
  sudafrica: {
    country: "Sudafrica 🇿🇦",
    region: "Southern Africa",
    status: "Watch",
    themes: "apartheid legacy, inequality, race, corruption, youth unemployment",
    overview: "South Africa is a constitutional democracy shaped by the legacy of apartheid. It has one of the world’s most progressive constitutions, but it continues to face extreme inequality, unemployment, corruption, crime and racial injustice.",
    issues: ["apartheid legacy", "economic inequality", "youth unemployment", "corruption", "access to housing and services", "crime and public safety"],
    youth: "Young South Africans often face limited job opportunities and frustration with inequality. Student movements and youth activism have played an important role in debates on education and social justice.",
    why: "South Africa helps users understand how historical injustice can continue to shape society long after formal discrimination ends.",
  },
  messico: {
    country: "Messico 🇲🇽",
    region: "Latin America",
    status: "Concern",
    themes: "organized crime, migration, femicide, corruption, journalism",
    overview: "Mexico is a major democracy with a vibrant culture and strong civil society. However, it faces severe challenges related to organized crime, corruption, violence against journalists, gender-based violence and migration.",
    issues: ["organized crime", "violence against journalists", "femicide", "migration routes", "corruption", "disappearances", "public security"],
    youth: "Young people in Mexico are affected by insecurity, limited opportunities and violence, but they are also active in feminist movements, student activism and local community projects.",
    why: "Mexico shows how democracy can be weakened when organized crime, corruption and violence limit people’s freedoms.",
  },
  afghanistan: {
    country: "Afghanistan 🇦🇫",
    region: "Central / South Asia",
    status: "Critical",
    themes: "women’s rights, education, authoritarian rule, humanitarian crisis",
    overview: "Afghanistan is facing one of the world’s most serious human rights crises. Since the Taliban returned to power, women and girls have faced severe restrictions on education, work, public life and freedom of movement. The country also faces poverty, humanitarian needs and limited civic space.",
    issues: ["women’s rights", "girls’ education", "humanitarian crisis", "freedom of expression", "poverty", "forced displacement", "restrictions on civil society"],
    youth: "Young Afghans, especially girls and women, face extreme limits on education and public participation. Many young people have been forced to leave the country or continue studying in difficult conditions.",
    why: "Afghanistan shows how quickly rights can be removed when authoritarian power controls public and private life.",
  },
  ucraina: {
    country: "Ucraina 🇺🇦",
    region: "Eastern Europe",
    status: "Conflict / Resistance",
    themes: "war, sovereignty, displacement, democracy, international law",
    overview: "Ukraine is a European country strongly shaped by Russia’s full-scale invasion. The war has affected civilians, infrastructure, democratic life, migration and human rights. Ukraine’s case is central to debates about sovereignty, international law and resistance.",
    issues: ["war and civilian protection", "refugees and internally displaced people", "international law", "reconstruction", "democracy during wartime", "Russian occupation", "war crimes investigations"],
    youth: "Young Ukrainians have experienced war, displacement, interrupted education and uncertainty. Many are involved in volunteering, digital activism, humanitarian work and international awareness campaigns.",
    why: "Ukraine helps explain why sovereignty, human rights and international law are not abstract ideas, but matters of life and security.",
  },
  palestina_israele: {
    country: "Palestina / Israele 🇵🇸🇮🇱",
    region: "Middle East",
    status: "Critical / Conflict",
    themes: "occupation, war, civilians, displacement, international law",
    overview: "Israel and Palestine are at the center of one of the world’s longest and most controversial conflicts. The situation involves questions of statehood, occupation, security, displacement, humanitarian law, civilian protection and human rights. This card uses careful, neutral and human-rights-focused language.",
    issues: ["occupation", "civilian protection", "displacement", "humanitarian crisis", "hostages and detainees", "international law", "statehood and self-determination", "freedom of movement"],
    youth: "Young people on both sides grow up with fear, political tension and insecurity. Palestinian youth often face restrictions linked to occupation, movement and access to basic services, while Israeli youth also live with security fears, military service and political polarization.",
    why: "This case helps users understand how conflict affects civilians and why international law exists to protect human dignity during war.",
  },
  cina: {
    country: "Cina 🇨🇳",
    region: "East Asia",
    status: "Critical",
    themes: "authoritarianism, surveillance, censorship, minority rights, economic power",
    overview: "China is one of the world’s most powerful states economically and politically. It has lifted millions out of poverty and plays a major role in global trade, but it is also an authoritarian one-party state with strong restrictions on freedom of expression, political opposition, civil society and independent media.",
    issues: ["censorship", "surveillance", "political repression", "minority rights", "Hong Kong", "Xinjiang", "digital control", "global influence"],
    youth: "Young people in China experience intense academic and work pressure, online censorship and limited space for political expression. At the same time, they are part of one of the world’s most technologically advanced societies.",
    why: "China helps explain how economic development and authoritarian political control can exist together.",
  },
  francia: {
    country: "Francia 🇫🇷",
    region: "Western Europe",
    status: "Stable / Watch",
    themes: "secularism, protests, immigration, identity, police violence",
    overview: "France is a democratic republic with a strong tradition of citizenship, secularism and protest. However, it faces debates around immigration, racism, Islamophobia, antisemitism, police violence, social inequality and the meaning of secularism in public life.",
    issues: ["secularism", "protest movements", "immigration", "racism and discrimination", "police violence", "social inequality", "far-right politics"],
    youth: "Young people in France are often involved in protests about pensions, climate, racism, education and economic inequality. Many young people from immigrant backgrounds face discrimination and questions of identity.",
    why: "France is useful to explain how citizenship, secularism and national identity can become central political debates.",
  },
  nigeria: {
    country: "Nigeria 🇳🇬",
    region: "West Africa",
    status: "Concern",
    themes: "youth, corruption, security, religion, oil, inequality",
    overview: "Nigeria is Africa’s most populous country and one of its largest economies. It has a young and creative population, but it also faces corruption, insecurity, religious and ethnic tensions, police violence, poverty and environmental damage linked to oil production.",
    issues: ["corruption", "youth unemployment", "police violence", "terrorism and insecurity", "religious tensions", "oil pollution", "regional inequality"],
    youth: "Young Nigerians are active in music, technology, entrepreneurship and activism. Movements such as protests against police brutality show how youth can challenge state violence and demand accountability.",
    why: "Nigeria shows the power of young populations in shaping politics, culture and social change.",
  },
  germania: {
    country: "Germania 🇩🇪",
    region: "Central Europe",
    status: "Stable",
    themes: "memory politics, migration, far right, EU, climate",
    overview: "Germany is one of Europe’s strongest democracies and a central actor in the European Union. Its civic culture is deeply shaped by the memory of Nazism and the Holocaust. Today, Germany faces debates around migration, far-right extremism, climate policy, social integration and European leadership.",
    issues: ["far-right extremism", "migration and integration", "Holocaust memory", "climate transition", "EU leadership", "energy policy", "social cohesion"],
    youth: "Young people in Germany are active in climate activism, anti-racism and debates about Europe’s future. Many also engage with questions of memory, identity and democratic responsibility.",
    why: "Germany helps explain why historical memory is important for protecting democracy.",
  },
  iran: {
    country: "Iran 🇮🇷",
    region: "Middle East",
    status: "Critical",
    themes: "women’s rights, protests, repression, censorship, death penalty",
    overview: "Iran is a country with a rich culture and a young, educated society, but its political system places strict limits on freedom of expression, women’s rights, political opposition and civil society. Protests led by women and young people have made Iran a key case for understanding state repression and civic resistance.",
    issues: ["women’s rights", "morality police", "censorship", "political prisoners", "death penalty", "protest repression", "internet restrictions"],
    youth: "Young Iranians are often at the center of protest movements, especially around personal freedom, gender equality, expression and political change.",
    why: "Iran shows how women and young people can become symbols of resistance against authoritarian control.",
  },
  congo: {
    country: "Repubblica Democratica del Congo 🇨🇩",
    region: "Central Africa",
    status: "Critical / Conflict",
    themes: "conflict minerals, displacement, violence, resources, colonial legacy",
    overview: "The Democratic Republic of Congo is one of the world’s richest countries in natural resources, but many people live in poverty and insecurity. Armed conflict, displacement, exploitation of minerals, corruption and weak institutions make the country a key case for understanding the link between resources and human rights.",
    issues: ["armed conflict", "displacement", "conflict minerals", "sexual violence", "corruption", "resource exploitation", "child labor", "weak institutions"],
    youth: "Young people in the DRC are affected by conflict, limited education, poverty and displacement. Some are also involved in peacebuilding, local activism and community support.",
    why: "The DRC shows how global consumption, technology and natural resources can be connected to human rights abuses.",
  },
  svezia: {
    country: "Svezia 🇸🇪",
    region: "Northern Europe",
    status: "Stable",
    themes: "welfare state, gender equality, migration, social trust, security",
    overview: "Sweden is often associated with democracy, welfare policies, gender equality and strong public services. However, it also faces debates around migration, integration, gang violence, social cohesion and national security.",
    issues: ["welfare state", "gender equality", "migration and integration", "social trust", "gang violence", "climate policy", "security and NATO"],
    youth: "Young people in Sweden often benefit from strong education and welfare systems, but social divisions, integration issues and mental health concerns remain important.",
    why: "Sweden helps users understand how welfare states work and why equality still requires constant protection.",
  },
  indonesia: {
    country: "Indonesia 🇮🇩",
    region: "Southeast Asia",
    status: "Watch",
    themes: "religion, democracy, climate, corruption, Indigenous rights",
    overview: "Indonesia is the world’s largest Muslim-majority country and one of Southeast Asia’s most important democracies. It is made up of thousands of islands and many ethnic, linguistic and religious communities. Civic issues include corruption, environmental destruction, religious tolerance, Indigenous rights and freedom of expression.",
    issues: ["corruption", "religious tolerance", "deforestation", "Indigenous rights", "climate vulnerability", "freedom of expression", "regional inequality"],
    youth: "Young Indonesians are active online and involved in education, entrepreneurship, climate activism and debates about democracy. However, many face inequality, job insecurity and environmental risks.",
    why: "Indonesia shows how democracy works in a very diverse society facing major environmental and development challenges.",
  },
  regno_unito: {
    country: "Regno Unito 🇬🇧",
    region: "Northern Europe",
    status: "Stable / Watch",
    themes: "democracy, youth, migration, inequality, political participation",
    overview: "The United Kingdom is a long-established parliamentary democracy with strong institutions and an active civil society. In recent years, it has faced challenges related to Brexit, the cost-of-living crisis, regional inequalities, migration, and debates over the future of the Union.",
    issues: ["cost of living", "regional inequalities", "migration and asylum", "political polarization", "housing affordability", "NHS pressures"],
    youth: "Young people face increasing housing costs, rising tuition fees, and economic uncertainty. Many are actively involved in climate movements, social justice campaigns and local civic initiatives.",
    why: "The UK shows how even long-established democracies face evolving civic challenges linked to economic change, political polarization and citizen participation.",
  },
  canada: {
    country: "Canada 🇨🇦",
    region: "North America",
    status: "Stable",
    themes: "multiculturalism, indigenous rights, climate, housing, migration",
    overview: "Canada is considered one of the world's strongest democracies, known for multiculturalism and respect for human rights. However, it continues to address issues affecting Indigenous communities, housing affordability, climate change and immigration.",
    issues: ["reconciliation with Indigenous peoples", "housing crisis", "climate adaptation", "immigration management", "healthcare access", "affordability"],
    youth: "Young Canadians are increasingly engaged in climate activism, Indigenous reconciliation and mental health awareness while facing rising living costs and housing shortages.",
    why: "Canada demonstrates how inclusive democracies must continuously address historical injustices and emerging social challenges.",
  },
  australia: {
    country: "Australia 🇦🇺",
    region: "Oceania",
    status: "Stable",
    themes: "indigenous rights, climate, migration, housing",
    overview: "Australia is a stable democracy with high living standards. Civic debates focus on Indigenous recognition, climate change, migration policies and housing affordability.",
    issues: ["Indigenous recognition", "climate change", "housing affordability", "immigration", "biodiversity protection", "rural inequalities"],
    youth: "Young Australians are among the most active supporters of climate action and social equality while expressing growing concerns about housing and future opportunities.",
    why: "Australia highlights the relationship between environmental challenges, democratic participation and reconciliation with Indigenous communities.",
  },
  siria: {
    country: "Siria 🇸🇾",
    region: "Middle East",
    status: "High Risk",
    themes: "conflict, displacement, humanitarian crisis, reconstruction",
    overview: "Syria has experienced one of the world's most devastating conflicts since 2011. Years of war have caused widespread displacement, humanitarian crises and the destruction of infrastructure and public services.",
    issues: ["armed conflict", "humanitarian emergency", "internally displaced people", "refugee crisis", "economic collapse", "reconstruction"],
    youth: "An entire generation has grown up during conflict, facing interrupted education, displacement and limited opportunities while many continue to hope for peace and reconstruction.",
    why: "Syria helps explain the long-term civic consequences of war, forced migration and humanitarian crises.",
  },
  libano: {
    country: "Libano 🇱🇧",
    region: "Middle East",
    status: "Watch",
    themes: "economic crisis, governance, youth, migration",
    overview: "Lebanon has a rich cultural history but faces severe political and economic instability. Financial collapse, institutional paralysis and regional tensions continue to affect daily life.",
    issues: ["economic collapse", "political instability", "corruption", "emigration", "inflation", "public services"],
    youth: "Many young Lebanese seek opportunities abroad while others participate in civic movements demanding reforms, transparency and accountability.",
    why: "Lebanon illustrates how political instability and economic crises directly affect citizens' rights and opportunities.",
  },
  corea_nord: {
    country: "Corea del Nord 🇰🇵",
    region: "East Asia",
    status: "Restricted",
    themes: "human rights, authoritarianism, information control",
    overview: "North Korea is one of the world's most closed political systems. Civil liberties are heavily restricted, while information, movement and political participation remain tightly controlled.",
    issues: ["restrictions on freedoms", "limited access to information", "food insecurity", "international sanctions", "political repression", "isolation"],
    youth: "Young people grow up under strict state control with limited access to external information and few opportunities for independent civic participation.",
    why: "North Korea provides an example of how the absence of civil liberties affects everyday life and civic participation.",
  },
  corea_sud: {
    country: "Corea del Sud 🇰🇷",
    region: "East Asia",
    status: "Stable",
    themes: "education, youth, technology, democracy",
    overview: "South Korea is a vibrant democracy and global technological leader. It faces challenges including low birth rates, intense educational pressure, youth employment and political polarization.",
    issues: ["low birth rate", "youth employment", "housing costs", "educational pressure", "mental health", "political polarization"],
    youth: "Many young South Koreans balance academic and professional expectations with growing interest in civic participation, equality and work-life balance.",
    why: "South Korea demonstrates how advanced economies can still face important social and demographic challenges.",
  },
  venezuela: {
    country: "Venezuela 🇻🇪",
    region: "South America",
    status: "High Risk",
    themes: "economic crisis, migration, democracy, human rights",
    overview: "Venezuela has experienced prolonged political and economic crises, leading to one of the world's largest migration movements and significant humanitarian challenges.",
    issues: ["political instability", "inflation", "migration", "shortages of essential goods", "human rights concerns", "economic recovery"],
    youth: "Many young Venezuelans have emigrated in search of education, employment and stability, while others remain committed to rebuilding their communities.",
    why: "Venezuela illustrates the civic consequences of prolonged economic and political crises.",
  },
  colombia: {
    country: "Colombia 🇨🇴",
    region: "South America",
    status: "Watch",
    themes: "peacebuilding, inequality, security, human rights",
    overview: "Colombia has made progress since the peace agreement with the FARC, but continues to face violence in some regions, inequality, drug trafficking and displacement.",
    issues: ["armed groups", "peace implementation", "displacement", "inequality", "drug trafficking", "environmental protection"],
    youth: "Young Colombians increasingly participate in civic activism, peace initiatives and environmental movements while seeking greater opportunities.",
    why: "Colombia shows how societies rebuild after conflict and the importance of peace, justice and civic participation.",
  },
  polonia: {
    country: "Polonia 🇵🇱",
    region: "Central Europe",
    status: "Stable / Watch",
    themes: "rule of law, democracy, media freedom, civil rights",
    overview: "Poland is a democratic member of the European Union. Civic debates have focused on judicial independence, media freedom, migration, women's rights and political polarization.",
    issues: ["rule of law", "political polarization", "judicial independence", "women's rights", "migration", "media freedom"],
    youth: "Many young Poles actively engage in public debates, student movements and demonstrations concerning democracy, equality and European integration.",
    why: "Poland illustrates how democratic institutions continue to evolve through civic participation and debates over the rule of law within the European Union.",
  },
  spagna: {
    country: "Spagna 🇪🇸",
    region: "Southern Europe",
    status: "Stable",
    themes: "youth, regional identity, housing, migration, democracy",
    overview: "Spain is a democratic constitutional monarchy and a member of the European Union. It has a strong welfare system and active civil society, but continues to face challenges related to regional autonomy, youth unemployment, housing affordability, political polarization and migration.",
    issues: ["youth unemployment", "housing affordability", "political polarization", "migration and integration", "regional tensions (Catalonia and the Basque Country)", "climate adaptation"],
    youth: "Young people in Spain are increasingly involved in climate movements, social activism and local politics. However, many struggle to find stable employment and affordable housing, delaying financial independence.",
    why: "Spain shows how democratic societies can successfully protect rights while still facing important social, economic and regional challenges. It offers valuable insights into participation, decentralization and youth engagement.",
  },
  norvegia: {
    country: "Norvegia 🇳🇴",
    region: "Northern Europe",
    status: "Stable",
    themes: "climate, welfare, indigenous rights, sustainability",
    overview: "Norway is one of the world's strongest democracies, with high levels of public trust, transparency and social welfare. Despite its political stability, the country faces debates around climate policy, indigenous rights, immigration and the transition from an oil-based economy.",
    issues: ["transition from fossil fuels", "Sami indigenous rights", "immigration and integration", "mental health among young people", "climate adaptation"],
    youth: "Many Norwegian students actively participate in environmental initiatives and democratic processes. Climate change, sustainability and mental health are among the issues that concern young people the most.",
    why: "Norway demonstrates how even highly developed democracies continue to face complex decisions about sustainability, inclusion and balancing economic growth with environmental responsibility.",
  },
  arabia_saudita: {
    country: "Arabia Saudita 🇸🇦",
    region: "Middle East",
    status: "Restricted",
    themes: "economic reforms, human rights, gender, freedom of expression",
    overview: "Saudi Arabia is an absolute monarchy undergoing significant economic and social reforms through its Vision 2030 programme. While opportunities in education and employment have expanded, restrictions on political participation, freedom of expression and civil liberties remain important civic challenges.",
    issues: ["limited political participation", "restrictions on freedom of expression", "women's rights reforms", "economic diversification", "migrant workers' rights"],
    youth: "More than half of Saudi Arabia's population is under 35. Young people are experiencing rapid social changes, increased educational opportunities and greater access to entertainment and technology, while civic participation remains limited.",
    why: "Saudi Arabia helps explain how economic modernization can occur alongside restrictions on political freedoms, highlighting the relationship between development, governance and human rights.",
  },
  singapore: {
    country: "Singapore 🇸🇬",
    region: "Southeast Asia",
    status: "Stable / Watch",
    themes: "governance, innovation, media, political participation",
    overview: "Singapore is a highly developed city-state known for its efficient institutions, strong economy and low levels of corruption. At the same time, debates continue regarding freedom of expression, media regulation, political competition and the balance between security and civil liberties.",
    issues: ["freedom of expression", "media regulation", "political competition", "cost of living", "ageing population"],
    youth: "Young Singaporeans are highly educated and globally connected. Many are increasingly interested in environmental issues, mental health and civic participation while navigating a competitive education and job market.",
    why: "Singapore offers an interesting case study of how effective governance, economic success and civic freedoms can interact in different ways than in many Western democracies.",
  },
  argentina: {
    country: "Argentina 🇦🇷",
    region: "South America",
    status: "Stable / Watch",
    themes: "economy, democracy, inequality, youth participation",
    overview: "Argentina is a democratic republic with a vibrant political culture and active civil society. However, recurring economic crises, inflation, poverty and political polarization continue to shape everyday life and influence public trust in institutions.",
    issues: ["inflation", "poverty", "political polarization", "unemployment", "access to education", "public debt"],
    youth: "Many young Argentinians are politically engaged and active in social movements, particularly on issues such as gender equality, climate change and education. Economic instability, however, creates uncertainty about future opportunities.",
    why: "Argentina illustrates how democratic institutions can remain resilient even during prolonged economic crises, offering valuable lessons on participation, resilience and social change.",
  },
  egitto: {
    country: "Egitto 🇪🇬",
    region: "North Africa",
    status: "Restricted / Watch",
    themes: "governance, youth, economy, human rights",
    overview: "Egypt is one of the most influential countries in the Middle East and North Africa. It plays a key regional role but faces ongoing civic challenges related to political participation, freedom of expression, economic inequality and rapid population growth.",
    issues: ["restrictions on political freedoms", "freedom of expression", "unemployment", "economic inequality", "water security", "population growth"],
    youth: "Young Egyptians represent a large share of the population. Many seek better educational and employment opportunities while also facing economic pressures and limited civic space.",
    why: "Egypt helps users understand the connections between governance, development, regional stability and the aspirations of one of the largest youth populations in the Arab world.",
  },
};

function setRoute(route) {
  const pageName = pages.some((page) => page.dataset.page === route) ? route : "home";

  pages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === pageName);
  });

  routeLinks.forEach((link) => {
    link.classList.toggle("is-current", link.dataset.route === pageName);
  });

  window.scrollTo(0, 0);

  if (pageName === "search") {
    setTimeout(() => searchInput?.focus(), 80);
  }
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getPageTitle(page) {
  return page.querySelector("h1")?.textContent.trim() || sectionNames[page.dataset.page] || "Sezione";
}

function getSearchIndex() {
  return pages
    .filter((page) => page.dataset.page !== "search")
    .map((page) => ({
      route: page.dataset.page,
      group: sectionNames[page.dataset.page] || getPageTitle(page),
      title: getPageTitle(page),
      text: page.textContent.replace(/\s+/g, " ").trim(),
      normalized: normalizeText(page.textContent.replace(/\s+/g, " ").trim()),
    }));
}

function createSnippet(text, query) {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);
  const index = normalizedText.indexOf(normalizedQuery);
  const start = Math.max(0, index - 70);
  const end = Math.min(text.length, (index === -1 ? 140 : index + query.length + 110));
  let snippet = text.slice(start, end).trim();

  if (start > 0) snippet = `...${snippet}`;
  if (end < text.length) snippet = `${snippet}...`;

  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return snippet.replace(new RegExp(safeQuery, "gi"), (match) => `<mark>${match}</mark>`);
}

function renderSearchResults(query) {
  const normalizedQuery = normalizeText(query.trim());
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  if (!normalizedQuery) {
    searchResults.innerHTML = '<p class="search-empty">Scrivi una parola per vedere i risultati divisi per sezione.</p>';
    return;
  }

  const matches = getSearchIndex().filter((item) => terms.every((term) => item.normalized.includes(term)));

  if (!matches.length) {
    searchResults.innerHTML = `<p class="search-empty">Nessun risultato per "${query}".</p>`;
    return;
  }

  const groups = matches.reduce((acc, item) => {
    acc[item.group] ||= [];
    acc[item.group].push(item);
    return acc;
  }, {});

  searchResults.innerHTML = Object.entries(groups)
    .map(([group, items]) => `
      <section class="search-group">
        <h2>${group}</h2>
        ${items
          .map((item) => `
            <a class="search-result" href="#${item.route}" data-search-route="${item.route}">
              <strong>${item.title}</strong>
              <span>${createSnippet(item.text, terms[0])}</span>
            </a>
          `)
          .join("")}
      </section>
    `)
    .join("");
}

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const route = link.dataset.route;
    history.pushState(null, "", `#${route}`);
    setRoute(route);
  });
});

window.addEventListener("popstate", () => {
  setRoute(location.hash.replace("#", "") || "home");
});

searchButton.addEventListener("click", () => {
  history.pushState(null, "", "#search");
  setRoute("search");
});

quickSearchForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = form.querySelector("input").value.trim();

    history.pushState(null, "", "#search");
    setRoute("search");

    searchInput.value = query;
    renderSearchResults(query);
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderSearchResults(searchInput.value);
});

searchInput.addEventListener("input", () => {
  renderSearchResults(searchInput.value);
});

searchResults.addEventListener("click", (event) => {
  const link = event.target.closest("[data-search-route]");
  if (!link) return;

  event.preventDefault();
  history.pushState(null, "", `#${link.dataset.searchRoute}`);
  setRoute(link.dataset.searchRoute);
});

function renderMapCard(key, shouldScroll = false) {
  const item = mapData[key];
  if (!item) return;

  document.querySelectorAll("[data-map-point]").forEach((point) => {
    point.classList.toggle("is-selected", point.dataset.mapPoint === key);
  });

  document.querySelector("#map-kicker").textContent = item.country;
  document.querySelector("#map-title").textContent = "Civic Overview";
  document.querySelector("#map-copy").textContent = item.overview;
  document.querySelector("#map-region").textContent = item.region;
  document.querySelector("#map-status").textContent = item.status;
  document.querySelector("#map-themes").textContent = item.themes;
  document.querySelector("#map-issues").innerHTML = item.issues.map((issue) => `<li>${issue}</li>`).join("");
  document.querySelector("#map-youth").textContent = item.youth;
  document.querySelector("#map-why").textContent = item.why;

  if (shouldScroll) {
    document.querySelector(".map-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const mapList = document.querySelector(".map-list");

if (mapList) {
  mapList.innerHTML = Object.entries(mapData)
    .map(([key, item]) => `<button type="button" data-map-point="${key}">${item.country}</button>`)
    .join("");
}

document.querySelectorAll("[data-map-point]").forEach((button) => {
  if (button.classList.contains("map-point")) {
    const label = button.textContent.trim();
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  }

  button.addEventListener("click", () => renderMapCard(button.dataset.mapPoint, button.classList.contains("map-point")));
});

renderMapCard("italia");

setRoute(location.hash.replace("#", "") || "home");
