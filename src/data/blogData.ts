
import { Article, Author } from '@/types/blog';

// Authors
export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Emily Chen',
    role: 'Travel Writer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'Emily is a passionate travel writer with over 5 years of experience exploring hidden gems across the globe. When not traveling, she enjoys photography and learning new languages.'
  },
  {
    id: 'author-2',
    name: 'Marcus Williams',
    role: 'Film Critic',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'Marcus has been reviewing films for over a decade, with a special focus on indie cinema and international films. He holds a degree in Film Studies and has been published in several major publications.'
  },
  {
    id: 'author-3',
    name: 'Sophia Rodriguez',
    role: 'Book Reviewer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'Sophia is an avid reader and literary critic who has reviewed hundreds of books across various genres. She has a PhD in English Literature and runs a popular book club in her hometown.'
  },
  {
    id: 'author-4',
    name: 'James Wilson',
    role: 'Lifestyle Editor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'James specializes in wellness, sustainability, and modern living topics. With a background in psychology and environmental science, he brings a unique perspective to lifestyle content.'
  },
  {
    id: 'author-5',
    name: 'Olivia Park',
    role: 'Creative Writer',
    avatar: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'Olivia is a published author and writing coach with three novels and numerous short stories to her name. She conducts writing workshops and mentors aspiring writers.'
  }
];

// Articles
export const articles: Article[] = [
  // Travel Articles
  {
    id: 'article-1',
    title: 'Hidden Beaches of Southeast Asia You Need to Visit',
    slug: 'hidden-beaches-southeast-asia',
    excerpt: 'Discover untouched paradises away from the tourist crowds in Thailand, Vietnam, and the Philippines.',
    content: `
      <p>Southeast Asia is renowned for its stunning beaches, but the most popular destinations can often be overcrowded with tourists. This article takes you on a journey to discover hidden beach paradises that remain relatively untouched by mass tourism.</p>
      
      <h2>Koh Kradan, Thailand</h2>
      <p>Located in the Trang province, Koh Kradan offers crystal clear waters and stunning coral reefs just offshore. Unlike its more famous neighbors, this island sees few visitors, especially during weekdays.</p>
      
      <h2>Bai Xep, Vietnam</h2>
      <p>This small fishing village near Quy Nhon has pristine beaches with golden sand and peaceful surroundings. The local community has developed small-scale, sustainable tourism that allows visitors to experience authentic coastal Vietnamese life.</p>
      
      <h2>Calitang Beach, Philippines</h2>
      <p>While El Nido gets all the attention, nearby Calitang Beach offers similar limestone karst views with a fraction of the visitors. The sunset views here are simply spectacular.</p>
      
      <h2>Planning Your Visit</h2>
      <p>The best time to visit these hidden gems is during shoulder seasons (May-June or September-October) when weather is still favorable but tourist numbers are lower. Local transportation may be limited, so plan accordingly and consider staying at family-run guesthouses for the most authentic experience.</p>
    `,
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'travel',
    date: '2023-07-15',
    author: authors[0],
    tags: ['beaches', 'southeast asia', 'thailand', 'vietnam', 'philippines', 'travel tips'],
    likes: 247,
    comments: 42,
    rating: 4.8,
    reviewCount: 56
  },
  {
    id: 'article-2',
    title: 'A Week in Kyoto: Exploring Japan\'s Cultural Heart',
    slug: 'week-in-kyoto-japan',
    excerpt: 'An in-depth itinerary for experiencing traditional temples, gardens, and cuisine in Kyoto, Japan.',
    content: `
      <p>Kyoto, the former imperial capital of Japan, is a city where tradition and modernity coexist harmoniously. With over 1,600 Buddhist temples, 400 Shinto shrines, and 17 UNESCO World Heritage sites, planning a visit can be overwhelming. This 7-day itinerary helps you experience the best of Kyoto at a comfortable pace.</p>
      
      <h2>Day 1-2: Eastern Kyoto</h2>
      <p>Begin your journey in Eastern Kyoto, home to many of the city's most famous temples. Visit Kiyomizu-dera in the morning to avoid crowds, then explore the historic streets of Higashiyama. Don't miss Gion, Kyoto's famous geisha district, in the evening.</p>
      
      <h2>Day 3-4: Northern and Western Kyoto</h2>
      <p>The iconic golden pavilion of Kinkaku-ji is a must-see in Northern Kyoto. Nearby, experience traditional Zen at Ryoan-ji's rock garden. In Western Kyoto, the bamboo groves of Arashiyama create an otherworldly atmosphere.</p>
      
      <h2>Day 5-6: Central Kyoto and Day Trips</h2>
      <p>Explore the Imperial Palace and nearby gardens in Central Kyoto. Consider a day trip to Nara to see the giant Buddha or to Fushimi Inari Shrine with its thousands of vermilion torii gates.</p>
      
      <h2>Day 7: Culinary Experiences</h2>
      <p>Dedicate your final day to Kyoto's culinary treasures. Take a cooking class in the morning, visit Nishiki Market, and enjoy a traditional kaiseki dinner for a memorable finale to your Kyoto experience.</p>
    `,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'travel',
    date: '2023-06-22',
    author: authors[0],
    tags: ['japan', 'kyoto', 'temples', 'culture', 'itinerary'],
    likes: 312,
    comments: 58,
    rating: 4.9,
    reviewCount: 75
  },
  {
    id: 'article-3',
    title: 'Road Tripping Through Portugal\'s Coastal Villages',
    slug: 'portugal-coastal-road-trip',
    excerpt: 'A guide to the perfect 10-day road trip along Portugal\'s stunning Atlantic coast.',
    content: `
      <p>Portugal's 1,794 kilometers of coastline offers dramatic cliffs, historic fishing villages, and golden beaches that make for an unforgettable road trip. This 10-day itinerary takes you from north to south, showcasing the best of Portugal's coastal beauty.</p>
      
      <h2>Days 1-2: Porto and the North</h2>
      <p>Begin in the colorful city of Porto before heading to the laid-back surf town of Viana do Castelo and the historic fortress town of Valença on the Spanish border.</p>
      
      <h2>Days 3-4: The Silver Coast</h2>
      <p>Drive south to Aveiro, known as the "Venice of Portugal," then continue to the medieval walled city of Óbidos and the surfing mecca of Nazaré, famous for its giant waves.</p>
      
      <h2>Days 5-6: Lisbon and Surroundings</h2>
      <p>Spend a day exploring Lisbon, then head to the fairytale palaces of Sintra and the westernmost point of continental Europe at Cabo da Roca.</p>
      
      <h2>Days 7-8: Alentejo Coast</h2>
      <p>The Alentejo coast offers wild, unspoiled beaches and sleepy fishing villages like Vila Nova de Milfontes and Zambujeira do Mar.</p>
      
      <h2>Days 9-10: The Algarve</h2>
      <p>Conclude your journey in the Algarve, exploring the striking limestone formations at Lagos, the historic town of Sagres, and the pristine beaches of Tavira.</p>
    `,
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'travel',
    date: '2023-05-18',
    author: authors[0],
    tags: ['portugal', 'road trip', 'beaches', 'coastal', 'europe'],
    likes: 275,
    comments: 48,
    rating: 4.7,
    reviewCount: 62
  },

  // Books Articles
  {
    id: 'article-4',
    title: 'Must-Read Fiction Books of 2023 So Far',
    slug: 'must-read-fiction-2023',
    excerpt: 'A curated selection of the year\'s most compelling novels across genres, from literary fiction to fantasy.',
    content: `
      <p>2023 has been an exceptional year for fiction, with established authors delivering powerful new works and debut novelists making remarkable entries into the literary scene. Here's our selection of the must-read fiction books of the year so far.</p>
      
      <h2>Literary Fiction</h2>
      <p>"The Covenant of Water" by Abraham Verghese follows three generations of a family in Kerala, India, dealing with a mysterious condition that causes them to drown on dry land. Verghese's first novel in over a decade is a sweeping epic with unforgettable characters.</p>
      
      <h2>Mystery & Thriller</h2>
      <p>"All the Sinners Bleed" by S.A. Cosby tells the story of the first Black sheriff in a rural Virginia county who confronts a serial killer with connections to a local church. Cosby continues to deliver pulse-pounding suspense with meaningful social commentary.</p>
      
      <h2>Science Fiction & Fantasy</h2>
      <p>"Yellowface" by R.F. Kuang is a darkly satirical novel about a white writer who steals the work of a recently deceased Asian American literary star and passes it off as her own. It's a sharp examination of cultural appropriation and the publishing industry.</p>
      
      <h2>Historical Fiction</h2>
      <p>"Demon Copperhead" by Barbara Kingsolver reimagines David Copperfield in the contemporary Appalachian mountains, following a boy born to a teenage single mother in a single-wide trailer. This Pulitzer Prize winner tackles the opioid crisis with compassion and insight.</p>
    `,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80',
    category: 'books',
    date: '2023-07-05',
    author: authors[2],
    tags: ['books', 'fiction', '2023 releases', 'reading list', 'literature'],
    likes: 198,
    comments: 37,
    rating: 4.6,
    reviewCount: 42
  },
  {
    id: 'article-5',
    title: 'How Reading Fiction Develops Empathy: The Science Explained',
    slug: 'reading-fiction-empathy-science',
    excerpt: 'Research shows that reading literary fiction can enhance our ability to understand others\' emotions and perspectives.',
    content: `
      <p>In a world increasingly divided along ideological lines, the ability to understand perspectives different from our own is more valuable than ever. Interestingly, scientific research suggests that one of the most effective ways to develop this skill is through reading fiction.</p>
      
      <h2>The Research</h2>
      <p>A landmark 2013 study published in Science found that reading literary fiction temporarily improves what psychologists call "theory of mind" — the ability to understand others' mental states. Subsequent studies have supported these findings, showing that regular fiction readers tend to score higher on tests of empathy and social cognition.</p>
      
      <h2>How Fiction Builds Empathy</h2>
      <p>When we read fiction, we're invited into the minds of characters whose experiences may be vastly different from our own. We experience their thoughts, feelings, and motivations from the inside. This deep simulation of social experience serves as a kind of training ground for real-world empathy.</p>
      
      <h2>Not All Reading Is Equal</h2>
      <p>The empathy-building effect appears strongest with literary fiction, which typically presents complex, nuanced characters whose minds aren't fully transparent to the reader. Genre fiction with more predictable characters doesn't seem to produce the same effect, nor does non-fiction.</p>
      
      <h2>Practical Applications</h2>
      <p>These findings have led to reading programs in schools aimed at reducing bullying and in corporate settings to enhance leadership skills. Some medical schools now include fiction in their curriculum to help future doctors better understand their patients' experiences.</p>
    `,
    image: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'books',
    date: '2023-06-12',
    author: authors[2],
    tags: ['books', 'psychology', 'empathy', 'science', 'reading benefits'],
    likes: 263,
    comments: 45,
    rating: 4.7,
    reviewCount: 58
  },
  {
    id: 'article-6',
    title: 'Rediscovering Classic Literature: Why the Classics Still Matter',
    slug: 'why-classic-literature-matters',
    excerpt: 'In an age of endless new content, here\'s why returning to the literary classics is still worthwhile and rewarding.',
    content: `
      <p>In our era of constant content creation and endless new books, returning to works that have stood the test of time might seem unnecessary. However, classic literature continues to offer unique rewards that contemporary works often can't replicate.</p>
      
      <h2>Timeless Human Insights</h2>
      <p>Despite changes in society and technology, fundamental human experiences remain remarkably consistent across centuries. Jane Austen's insights into pride and prejudice in relationships, Dostoevsky's exploration of moral dilemmas, and Shakespeare's understanding of ambition and power dynamics remain as relevant today as when they were written.</p>
      
      <h2>Historical Perspective</h2>
      <p>Classic literature offers windows into different historical periods, helping us understand how society has evolved and how many contemporary issues have deep historical roots. This perspective can be invaluable in contextualizing current social and political challenges.</p>
      
      <h2>Linguistic Richness</h2>
      <p>Many classics feature language that stretches our vocabulary and exposes us to more complex sentence structures and rhetorical devices than we typically encounter in contemporary writing. This linguistic richness can enhance our own communication skills.</p>
      
      <h2>Cultural Literacy</h2>
      <p>References to classic literature permeate our culture, from idioms and allusions in everyday speech to influences on contemporary films, books, and art. Familiarity with these works deepens our understanding of cultural conversations.</p>
      
      <h2>Making Classics Accessible</h2>
      <p>If you've been intimidated by classic literature in the past, try starting with more accessible works like "The Great Gatsby" or "To Kill a Mockingbird." Consider reading alongside a guide or joining a discussion group. Modern translations of works in other languages can also make the experience more approachable.</p>
    `,
    image: 'https://images.unsplash.com/photo-1580687780447-1a396730f314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'books',
    date: '2023-05-03',
    author: authors[2],
    tags: ['books', 'classic literature', 'reading', 'literary canon'],
    likes: 184,
    comments: 39,
    rating: 4.5,
    reviewCount: 47
  },

  // Movies Articles
  {
    id: 'article-7',
    title: 'The Renaissance of Practical Effects in Modern Cinema',
    slug: 'practical-effects-renaissance-cinema',
    excerpt: 'How filmmakers are returning to practical effects alongside CGI to create more authentic and impactful movie experiences.',
    content: `
      <p>In an age dominated by computer-generated imagery (CGI), a growing number of influential filmmakers are championing a return to practical effects. Rather than replacing CGI entirely, this movement represents a hybrid approach that combines the best of both worlds.</p>
      
      <h2>The Limitations of CGI</h2>
      <p>Despite tremendous advances in digital technology, purely CGI creations often suffer from a subtle "uncanny valley" effect that viewers can instinctively detect. Physical, tangible elements captured in-camera frequently possess a weight and presence that digital effects struggle to replicate.</p>
      
      <h2>Modern Pioneers</h2>
      <p>Christopher Nolan's commitment to practical effects in films like "Inception," "Interstellar," and "Tenet" has demonstrated that ambitious, fantastical sequences can be achieved without heavy reliance on CGI. Similarly, George Miller's "Mad Max: Fury Road" stunned audiences with its spectacular practical vehicle stunts enhanced by digital touches.</p>
      
      <h2>The Influence of "The Thing"</h2>
      <p>John Carpenter's 1982 horror classic "The Thing" continues to influence filmmakers with its groundbreaking practical creature effects by Rob Bottin. Modern horror directors like Ari Aster ("Hereditary") and Robert Eggers ("The Witch") have embraced practical effects to create more visceral responses from audiences.</p>
      
      <h2>Training for Actors</h2>
      <p>Actors frequently report more authentic performances when reacting to physical props, sets, and creatures rather than tennis balls on sticks representing digital additions. This human element translates to more convincing emotional responses on screen.</p>
      
      <h2>The Hybrid Approach</h2>
      <p>The most successful modern approach combines practical foundations with digital enhancements. Films like "Blade Runner 2049" and "Dune" use elaborate practical sets and lighting while seamlessly integrating CGI elements, creating worlds that feel both fantastic and grounded.</p>
    `,
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'movies',
    date: '2023-07-20',
    author: authors[1],
    tags: ['movies', 'practical effects', 'filmmaking', 'CGI', 'cinema'],
    likes: 287,
    comments: 52,
    rating: 4.8,
    reviewCount: 63
  },
  {
    id: 'article-8',
    title: 'The Art of the Long Take in Cinema',
    slug: 'art-of-long-take-cinema',
    excerpt: 'Exploring how extended, unbroken shots create unique emotional and narrative effects in film.',
    content: `
      <p>The long take—an unbroken, extended shot that lasts much longer than the conventional editing pace—has been used by master filmmakers to create some of cinema's most memorable moments. When employed thoughtfully, this technique can produce uniquely powerful effects that conventional editing cannot achieve.</p>
      
      <h2>Historical Significance</h2>
      <p>While often associated with art house cinema, the long take has a rich history dating back to early film. Orson Welles' opening sequence in "Touch of Evil" (1958) and Alfred Hitchcock's experiment with "Rope" (1948), which appears as a single continuous take, set early benchmarks for the technique.</p>
      
      <h2>Immersion and Realism</h2>
      <p>Long takes often create a heightened sense of realism by preserving the natural continuity of time and space. Alfonso Cuarón's "Children of Men" uses extended sequences to immerse viewers in its dystopian world, making the danger feel immediate and inescapable.</p>
      
      <h2>Technical Achievements</h2>
      <p>Some long takes represent extraordinary technical achievements. The battle sequence in "Atonement," Sebastian Schipper's "Victoria" (shot in a genuine single take over two hours), and Sam Mendes' "1917" (crafted to appear as two continuous shots) demonstrate the meticulous planning required.</p>
      
      <h2>Emotional Impact</h2>
      <p>Perhaps most importantly, long takes can create unique emotional resonance. The famous long take in "Goodfellas," following Henry Hill through the Copacabana, conveys his intoxication with gangster life in a way montage editing couldn't capture. Similarly, the opening sequence of "Boogie Nights" establishes the film's sprawling cast of characters while conveying the interconnected nature of their community.</p>
      
      <h2>Contemporary Masters</h2>
      <p>Directors like Alejandro González Iñárritu ("Birdman"), Steve McQueen ("Hunger"), and Bi Gan ("Long Day's Journey Into Night") continue to push the boundaries of what's possible with extended takes, using new technologies to achieve shots that would have been impossible in earlier eras.</p>
    `,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80',
    category: 'movies',
    date: '2023-06-08',
    author: authors[1],
    tags: ['movies', 'cinematography', 'film technique', 'directors', 'cinema'],
    likes: 231,
    comments: 43,
    rating: 4.7,
    reviewCount: 58
  },
  {
    id: 'article-9',
    title: 'How Streaming is Changing Film Distribution and Production',
    slug: 'streaming-changing-film-industry',
    excerpt: 'An analysis of how streaming platforms are transforming what gets made, how it\'s funded, and how we watch movies.',
    content: `
      <p>The rise of streaming platforms has fundamentally altered the film industry, changing not just how we watch movies, but what kinds of films get made and how they reach audiences. This transformation has accelerated in recent years, creating both new opportunities and significant challenges.</p>
      
      <h2>The Mid-Budget Renaissance</h2>
      <p>As major studios have increasingly focused on big-budget franchise films for theatrical release, streaming platforms have become vital supporters of mid-budget films ($15-50 million) that were becoming endangered in the theatrical market. Character-driven dramas, comedies, and smaller-scale genre films have found new life on platforms like Netflix, Amazon Prime, and Apple TV+.</p>
      
      <h2>Changing Release Strategies</h2>
      <p>The traditional 90-day theatrical window has collapsed, with many films now receiving simultaneous releases or much shorter exclusive theatrical runs. Some studios now assess films individually to determine the optimal release strategy, rather than applying a one-size-fits-all approach.</p>
      
      <h2>Creative Freedom vs. Algorithm-Driven Content</h2>
      <p>Streaming platforms have offered many filmmakers greater creative freedom than traditional studios, with less pressure for broad commercial appeal. However, this is balanced against the growing influence of data and algorithms in determining what content gets greenlit based on viewer metrics.</p>
      
      <h2>The Global Audience</h2>
      <p>International content now reaches global audiences with unprecedented ease. Films like "Parasite" and "RRR" have found enthusiastic viewers worldwide, while streaming platforms actively invest in local productions in various countries that can also appeal to their global subscriber base.</p>
      
      <h2>The Future of Theaters</h2>
      <p>While some predicted the death of movie theaters, recent blockbuster successes suggest a more nuanced future where theaters focus on event films and special experiences while smaller films increasingly premiere on streaming platforms. The industry continues to adapt to find sustainable models that serve both formats.</p>
    `,
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'movies',
    date: '2023-04-25',
    author: authors[1],
    tags: ['movies', 'streaming', 'film industry', 'netflix', 'distribution'],
    likes: 204,
    comments: 47,
    rating: 4.6,
    reviewCount: 51
  },

  // Lifestyle Articles
  {
    id: 'article-10',
    title: 'The Science-Backed Benefits of a Digital Detox',
    slug: 'science-backed-digital-detox-benefits',
    excerpt: 'Research shows that temporarily unplugging from digital devices can reduce stress and improve mental well-being.',
    content: `
      <p>In our hyper-connected world, the idea of disconnecting from digital devices can seem both appealing and anxiety-inducing. However, a growing body of scientific research suggests that periodic digital detoxes—intentional breaks from screens and online connectivity—can provide significant benefits for mental and physical health.</p>
      
      <h2>Impact on Stress and Anxiety</h2>
      <p>Multiple studies have found that excessive smartphone use correlates with increased levels of anxiety and stress. A 2019 study in the Journal of Social and Clinical Psychology found that limiting social media use to 30 minutes per day led to significant reductions in loneliness and depression after three weeks.</p>
      
      <h2>Sleep Quality Improvements</h2>
      <p>The blue light emitted by screens interferes with melatonin production, disrupting our natural sleep cycles. Research from Harvard Medical School demonstrates that avoiding screens for 2-3 hours before bedtime can significantly improve both sleep quality and duration.</p>
      
      <h2>Cognitive Benefits</h2>
      <p>Constant digital notifications fragment our attention. A 2018 study published in the Journal of Behavioral Addictions found that even having a smartphone visible but not in use reduced participants' cognitive capacity. Digital breaks allow our brains to recover from this "attention residue" effect.</p>
      
      <h2>Relationship Enhancement</h2>
      <p>Research from Baylor University found that "phubbing" (phone snubbing) partners reported higher levels of conflict and lower relationship satisfaction. Designated device-free time can lead to more meaningful interactions and stronger connections.</p>
      
      <h2>Practical Detox Strategies</h2>
      <p>Rather than attempting a complete digital elimination, research suggests targeted approaches are most effective: device-free meals, tech-free bedrooms, screen-free Sundays, or scheduled periods without social media. Even short breaks of 24-48 hours have been shown to provide measurable benefits.</p>
    `,
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    category: 'lifestyle',
    date: '2023-07-10',
    author: authors[3],
    tags: ['digital detox', 'mental health', 'wellness', 'technology', 'mindfulness'],
    likes: 312,
    comments: 67,
    rating: 4.8,
    reviewCount: 79
  },
  {
    id: 'article-11',
    title: 'Minimalist Living: Less Stuff, More Meaning',
    slug: 'minimalist-living-guide',
    excerpt: 'How embracing minimalism can reduce stress, save money, and help you focus on what truly matters.',
    content: `
      <p>Minimalism has evolved from a design aesthetic to a lifestyle philosophy embraced by millions seeking relief from consumer culture and material overload. At its core, minimalism isn't about living with nothing—it's about intentionally living with just enough.</p>
      
      <h2>Beyond Decluttering</h2>
      <p>While Marie Kondo's question "Does it spark joy?" has become synonymous with decluttering, true minimalism goes deeper than organizing possessions. It involves questioning our relationship with consumption itself and recognizing how material possessions often create more stress than satisfaction.</p>
      
      <h2>Financial Freedom</h2>
      <p>The financial benefits of minimalism can be profound. Reduced spending on unnecessary items creates opportunity for increased savings, debt reduction, and potentially working less. Many minimalists find they can pursue more meaningful work when their lifestyle requires less income.</p>
      
      <h2>Environmental Impact</h2>
      <p>Consuming less naturally reduces one's environmental footprint. Minimalism often leads to more conscious consumption, with emphasis on quality over quantity and products with lower environmental impact.</p>
      
      <h2>Mental Clarity</h2>
      <p>Research consistently shows that cluttered physical environments correlate with increased stress hormones and reduced ability to focus. Minimalist spaces create a sense of calm and allow for greater concentration on tasks and experiences.</p>
      
      <h2>Starting Your Minimalist Journey</h2>
      <p>Begin with a specific area rather than attempting to transform your entire life at once. The bathroom or closet often makes a good starting point. Focus on keeping items that serve a purpose or bring genuine joy, and be mindful about new purchases, implementing a 24-hour rule before buying non-essential items.</p>
    `,
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'lifestyle',
    date: '2023-06-03',
    author: authors[3],
    tags: ['minimalism', 'decluttering', 'simple living', 'sustainability', 'mindful consumption'],
    likes: 276,
    comments: 49,
    rating: 4.7,
    reviewCount: 58
  },
  {
    id: 'article-12',
    title: 'The Growing Movement Toward Sustainable Fashion',
    slug: 'sustainable-fashion-movement',
    excerpt: 'How consumers and designers are working to transform the fashion industry\'s environmental and ethical impact.',
    content: `
      <p>The fashion industry is one of the world's largest polluters, responsible for approximately 10% of global carbon emissions and 20% of global wastewater. However, a growing movement toward sustainable fashion is beginning to transform how clothes are designed, produced, sold, and valued.</p>
      
      <h2>Understanding Fast Fashion's Impact</h2>
      <p>The rise of "fast fashion"—inexpensive clothing produced rapidly in response to the latest trends—has led to dramatically increased consumption. The average consumer today purchases 60% more clothing items than 15 years ago, while keeping them for half as long.</p>
      
      <h2>Materials Innovation</h2>
      <p>Exciting innovations in sustainable materials are creating alternatives to resource-intensive conventional fabrics. Companies are developing textiles from agricultural waste, recycled plastic, and even mushroom roots and pineapple leaves. These materials often require significantly less water, energy, and chemicals to produce.</p>
      
      <h2>Circular Fashion</h2>
      <p>The concept of circular fashion aims to eliminate waste through careful design, use of biodegradable or recyclable materials, and systems for reuse. Brands like Patagonia and Eileen Fisher have implemented take-back programs, while rental platforms and secondhand marketplaces extend garments' lifespans.</p>
      
      <h2>Ethical Production</h2>
      <p>Sustainable fashion emphasizes fair labor practices and safe working conditions. After the 2013 Rana Plaza factory collapse that killed over 1,100 workers, consumer awareness about fashion supply chains has increased, with more brands providing transparency about their manufacturing processes.</p>
      
      <h2>Consumer Action</h2>
      <p>Individuals can contribute by buying less but better quality, supporting ethical brands, caring properly for garments to extend their life, and giving clothes a second life through resale, swapping, or donation. Every purchase is essentially a vote for the kind of fashion industry we want to see.</p>
    `,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'lifestyle',
    date: '2023-05-15',
    author: authors[3],
    tags: ['sustainable fashion', 'ethical clothing', 'slow fashion', 'environmental impact', 'conscious consumption'],
    likes: 247,
    comments: 53,
    rating: 4.6,
    reviewCount: 61
  },

  // Writing Articles
  {
    id: 'article-13',
    title: 'Developing a Consistent Writing Habit: Strategies That Work',
    slug: 'consistent-writing-habit-strategies',
    excerpt: 'Practical approaches to establish a sustainable writing practice, even with a busy schedule.',
    content: `
      <p>Many aspiring writers struggle not with a lack of ideas or talent, but with consistency. Whether you're working on a novel, maintaining a blog, or simply journal writing for personal growth, developing a sustainable writing habit is crucial for long-term success.</p>
      
      <h2>Frequency Over Volume</h2>
      <p>Research on habit formation shows that consistency matters more than quantity, especially in the beginning stages. Writing 200 words daily is more effective for establishing a habit than writing 1,400 words once a week, even though the total output is the same.</p>
      
      <h2>Understanding Motivation Cycles</h2>
      <p>Relying solely on motivation is a common pitfall. Motivation naturally fluctuates, while habits persist even during motivational lows. Design your writing practice with this reality in mind, creating systems that carry you through inevitable periods of diminished enthusiasm.</p>
      
      <h2>Environmental Triggers</h2>
      <p>The physical and temporal environment significantly impacts habit formation. Writing at the same time and in the same place creates powerful contextual cues that make the behavior increasingly automatic over time. This might mean designating a specific writing corner or writing every day immediately after morning coffee.</p>
      
      <h2>Overcoming Common Obstacles</h2>
      <p>Time constraints, perfectionism, and distractions are the most common barriers to consistent writing. Strategies like time-blocking, adopting a "zero draft" mentality where initial writing can be imperfect, and using focus apps or distraction-free writing tools can address these challenges directly.</p>
      
      <h2>Accountability and Community</h2>
      <p>External accountability dramatically increases follow-through. Writing groups, accountability partners, public commitments on social media, or working with deadlines can provide the external structure many writers need, especially when intrinsic motivation wavers.</p>
    `,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    category: 'writing',
    date: '2023-07-18',
    author: authors[4],
    tags: ['writing', 'habit formation', 'productivity', 'creativity', 'writers block'],
    likes: 294,
    comments: 62,
    rating: 4.9,
    reviewCount: 71
  },
  {
    id: 'article-14',
    title: 'The Craft of Character Development in Fiction Writing',
    slug: 'character-development-fiction-writing',
    excerpt: 'Techniques for creating multidimensional characters that readers will connect with emotionally.',
    content: `
      <p>Memorable characters are the heart of compelling fiction. While intricate plots and beautiful prose have their place, it's dimensional characters that forge the emotional connection between reader and story, often determining whether a book is merely read or deeply felt.</p>
      
      <h2>Beyond Character Sheets</h2>
      <p>While many writing guides recommend filling out extensive character questionnaires, the most vital aspects of character development go beyond basic attributes like eye color or favorite food. Effective character building focuses on core psychological elements: desires, fears, contradictions, values, and blind spots.</p>
      
      <h2>Internal Consistency with Surprises</h2>
      <p>Well-crafted characters operate from a consistent internal logic while still surprising readers in believable ways. Their actions, even unexpected ones, make sense given their established psychology and history. This balance between consistency and surprise creates characters that feel both authentic and unpredictable.</p>
      
      <h2>Character Through Action</h2>
      <p>The writing maxim "show, don't tell" applies particularly to character. Revealing character through decisions under pressure, interactions with others, and responses to failure provides a more powerful portrayal than direct description. What a character does in critical moments reveals who they truly are.</p>
      
      <h2>Distinctive Voice</h2>
      <p>Each significant character should possess a unique voice reflecting their background, education, personality, and worldview. This extends beyond dialect or slang to include sentence structure, vocabulary choices, conversational patterns, and the specific details they notice about their surroundings.</p>
      
      <h2>Character Arcs</h2>
      <p>Compelling characters typically experience meaningful change throughout a story. This transformation doesn't require dramatic personality shifts—subtle evolutions in perspective or self-awareness can be equally powerful. The key is ensuring that change emerges organically from the character's experiences rather than feeling imposed by plot requirements.</p>
    `,
    image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'writing',
    date: '2023-06-15',
    author: authors[4],
    tags: ['writing', 'fiction', 'character development', 'creative writing', 'storytelling'],
    likes: 253,
    comments: 48,
    rating: 4.7,
    reviewCount: 58
  },
  {
    id: 'article-15',
    title: 'From Idea to Published: Navigating the Modern Publishing Landscape',
    slug: 'modern-publishing-landscape-guide',
    excerpt: 'A comprehensive guide to publishing options for writers, from traditional publishing to self-publishing and hybrid models.',
    content: `
      <p>The publishing industry has transformed dramatically in recent years, creating more paths to publication than ever before. For writers with completed manuscripts, understanding the full spectrum of options—along with their respective advantages and challenges—is essential for making informed decisions about how to bring their work to readers.</p>
      
      <h2>Traditional Publishing</h2>
      <p>The conventional route through literary agents and established publishing houses continues to offer significant advantages: professional editing, design, and marketing; wider print distribution; greater media attention; and the validation of selective acceptance. However, the process is highly competitive, typically slower, and offers less creative control and lower royalty percentages.</p>
      
      <h2>Self-Publishing</h2>
      <p>Once stigmatized as "vanity publishing," self-publishing has evolved into a legitimate and increasingly prestigious option. Digital platforms like Amazon KDP, IngramSpark, and Draft2Digital have democratized the process, allowing authors to retain creative control, earn higher royalty percentages, and publish on their own timeline. The trade-off is full responsibility for all aspects of production, marketing, and distribution.</p>
      
      <h2>Hybrid Publishing</h2>
      <p>Filling the middle ground, hybrid publishers combine elements of both models. Authors typically share in production costs but receive higher royalties than traditional publishing while benefiting from professional services and established distribution channels. The quality and legitimacy of hybrid publishers vary significantly, making thorough research essential.</p>
      
      <h2>Digital-First Publishers</h2>
      <p>These publishing houses focus primarily on e-book and print-on-demand formats, often specializing in specific genres. They typically offer more favorable contract terms than traditional publishers but more support than self-publishing. Many successful digital-first titles later transition to wider print distribution after proving their market viability.</p>
      
      <h2>Evaluating Your Options</h2>
      <p>The optimal path depends on specific factors including genre, platform, goals, timeline, and personal resources. Literary fiction and mainstream nonfiction often benefit more from traditional channels, while genre fiction frequently thrives in digital markets. Authors should assess their priorities regarding creative control, timeline, financial investment, and distribution before making their decision.</p>
    `,
    image: 'https://images.unsplash.com/photo-1529473814998-077b4fec6770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'writing',
    date: '2023-05-07',
    author: authors[4],
    tags: ['writing', 'publishing', 'self-publishing', 'book industry', 'authors'],
    likes: 217,
    comments: 54,
    rating: 4.6,
    reviewCount: 49
  },
];

// Get articles by category
export const getArticlesByCategory = (category: string) => {
  return articles.filter(article => article.category === category);
};

// Get article by ID
export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};

// Get featured article (most recent one)
export const getFeaturedArticle = () => {
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];
};

// Get recent articles
export const getRecentArticles = (limit: number = 6) => {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
