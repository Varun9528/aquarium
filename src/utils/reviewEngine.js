// AI Review Generation Engine for Pet's Heaven Indore
// Verified styles, ratings (1-5 stars), product categories, and Indore Hinglish flow

export const OFFICIAL_GOOGLE_REVIEW_URL = 'https://maps.app.goo.gl/QMUvJdDfyrvPcvqu6';

export const PRODUCT_OPTIONS = [
  { id: 'dogs', label: 'Dogs & Breeds', icon: '🐕' },
  { id: 'cats', label: 'Cats & Breeds', icon: '🐱' },
  { id: 'birds', label: 'Pet Birds', icon: '🦜' },
  { id: 'hamsters', label: 'Hamsters', icon: '🐹' },
  { id: 'mice', label: 'Pet Mice', icon: '🐭' },
  { id: 'fish', label: 'Aquarium Fish', icon: '🐠' },
  { id: 'other', label: 'Other Pets / Supplies', icon: '✨' },
];

export const EXPERIENCE_OPTIONS = [
  { id: 'quality', label: 'Product Quality' },
  { id: 'staff', label: 'Staff Behaviour' },
  { id: 'store', label: 'Store Experience' },
  { id: 'guidance', label: 'Helpful Guidance' },
  { id: 'variety', label: 'Variety & Selection' },
  { id: 'overall', label: 'Overall Experience' },
  { id: 'other', label: 'Other' },
];

export const STYLE_DEFINITIONS = [
  { id: 'short', name: 'Short & Simple', tag: 'Direct & Concise' },
  { id: 'detailed', name: 'Detailed Experience', tag: 'Comprehensive' },
  { id: 'professional', name: 'Professional', tag: 'Formal & Polished' },
  { id: 'friendly', name: 'Friendly & Conversational', tag: 'Warm & Casual' },
  { id: 'hinglish', name: 'Natural Hinglish', tag: 'Local Indore Vibe' },
  { id: 'personal', name: 'Personal Experience', tag: 'First-Person Story' },
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateVariations(rating, products, experiences, customNote) {
  const prodText = products && products.length > 0
    ? products.map(p => p.label).join(', ')
    : 'pets and supplies';
  const expText = experiences && experiences.length > 0
    ? experiences.map(e => e.label).join(', ')
    : 'store service';
  const hasNotes = customNote && customNote.trim().length > 0;
  const note = hasNotes ? customNote.trim() : '';

  // 1. Short & Simple (Punchy, 1-2 lines, direct tone)
  let shortText = '';
  if (rating === 5) {
    const sOpen = [
      `Excellent pet shop in Indore for ${prodText}!`,
      `Had a wonderful 5-star experience with ${prodText} at Pet's Heaven Indore.`,
      `Top-notch quality of ${prodText} and truly outstanding ${expText}.`,
      `Great place in Indore if you are looking for ${prodText}.`
    ];
    const sEnd = [
      `Staff was very polite and helpful throughout. Highly recommend!`,
      `Very neat store and honest advice. Must visit in Indore!`,
      `Healthy pets, fair guidance, and prompt assistance. 5/5 stars.`,
      `Definitely the most reliable pet store in the city.`
    ];
    shortText = `${pickRandom(sOpen)} ${pickRandom(sEnd)}${note ? ` Especially appreciated: ${note}.` : ''}`;
  } else if (rating === 4) {
    const sOpen = [
      `Very good collection of ${prodText} at Pet's Heaven Indore.`,
      `Pleasant visit today for ${prodText}.`,
      `Solid pet store in Indore with good ${expText}.`
    ];
    const sEnd = [
      `Helpful staff and clean premises. Good experience overall.`,
      `Appreciated their guidance and selection. 4 stars well deserved.`,
      `Nice collection and polite team. Will visit again.`
    ];
    shortText = `${pickRandom(sOpen)} ${pickRandom(sEnd)}${note ? ` Note: ${note}.` : ''}`;
  } else if (rating === 3) {
    shortText = `Fair experience at Pet's Heaven Indore regarding ${prodText}. Selection was alright and ${expText} was standard.${note ? ` Specific note: ${note}.` : ''} Average overall visit.`;
  } else if (rating === 2) {
    shortText = `Visited Pet's Heaven Indore for ${prodText}, but the ${expText} was below expectations.${note ? ` Concern: ${note}.` : ''} Needs better attention to customer queries.`;
  } else {
    shortText = `Very disappointed with our visit to Pet's Heaven Indore for ${prodText}. The ${expText} was unsatisfactory.${note ? ` Issue faced: ${note}.` : ''} Management needs to improve store standards.`;
  }

  // 2. Detailed Experience (Multi-sentence, chronological walkthrough)
  let detailedText = '';
  if (rating === 5) {
    const dOpen = `I recently visited Pet's Heaven Indore near Nagar Nigam Road to explore their ${prodText} collection.`;
    const dBody = `The store is well organized, and the attention given to ${expText} was remarkable. The team answered all my questions regarding care routines, feeding, and habitat requirements without rushing.`;
    const dNote = note ? ` In our case, ${note}, which proved how attentive they are.` : '';
    const dClose = ` It is reassuring to have a knowledgeable, ethical pet destination like this in Indore. Full 5 stars!`;
    detailedText = `${dOpen} ${dBody}${dNote}${dClose}`;
  } else if (rating === 4) {
    detailedText = `Spent time exploring Pet's Heaven Indore looking for ${prodText}. The variety they carry is quite impressive and the staff gave good insights regarding ${expText}.${note ? ` An important point was that ${note}.` : ''} Clean environment and healthy companions. Overall a very good 4-star experience in Indore.`;
  } else if (rating === 3) {
    detailedText = `Here is my detailed review of Pet's Heaven Indore regarding ${prodText}. While they have an accessible store location and reasonable variety, the ${expText} felt average.${note ? ` In particular, ${note}.` : ''} Decent stop for basic supplies, but there is clear room for customer care improvements.`;
  } else if (rating === 2) {
    detailedText = `Sharing honest feedback from our recent visit to Pet's Heaven Indore regarding ${prodText}. The store has potential, but our experience with ${expText} fell short.${note ? ` Main issue encountered: ${note}.` : ''} More staff training and clearer customer assistance are needed.`;
  } else {
    detailedText = `Writing this detailed review to highlight serious deficiencies at Pet's Heaven Indore during our visit for ${prodText}. We expected proper standards, but ${expText} was very poorly handled.${note ? ` Detailed problem: ${note}.` : ''} Fellow pet owners should exercise caution until management rectifies these issues.`;
  }

  // 3. Professional (Formal, objective vocabulary, evaluating facility standards)
  let professionalText = '';
  if (rating === 5) {
    const pOpen = [
      `Pet's Heaven Indore demonstrates exemplary operational standards in domestic pet retail and animal care.`,
      `Commendable service standards observed during our consultation at Pet's Heaven Indore regarding ${prodText}.`,
      `A highly structured and ethically managed pet establishment in Indore.`
    ];
    const pBody = [
      `Their advisory quality and diligence concerning ${expText} reflect genuine commitment to animal well-being and customer transparency.`,
      `Store personnel exhibited commendable technical knowledge and handled inquiries regarding ${expText} systematically.`,
      `The facility maintains orderly enclosures, sound hygiene protocols, and transparent customer consultation.`
    ];
    professionalText = `${pickRandom(pOpen)} ${pickRandom(pBody)}${note ? ` Specifically documented: ${note}.` : ''} Fully recommended as a benchmark pet provider in the Indore region.`;
  } else if (rating === 4) {
    professionalText = `A systematically maintained pet facility in Indore offering a diverse catalog of ${prodText}. Standards regarding ${expText} were handled with professionalism and courtesy.${note ? ` Notable observation: ${note}.` : ''} Recommended for Indore pet owners seeking verified companions and accessories.`;
  } else if (rating === 3) {
    professionalText = `Neutral assessment regarding Pet's Heaven Indore for ${prodText}. While the inventory is satisfactory, protocols surrounding ${expText} met only baseline requirements.${note ? ` Recorded point: ${note}.` : ''} Operational refinement would significantly enhance the client experience.`;
  } else if (rating === 2) {
    professionalText = `Critical evaluation of Pet's Heaven Indore regarding ${prodText}. Professional standards with respect to ${expText} did not meet expectations.${note ? ` Recorded concern: ${note}.` : ''} Structural review and staff training are recommended to store administration.`;
  } else {
    professionalText = `Unfavorable review regarding service standards at Pet's Heaven Indore for ${prodText}. Substantial shortcomings were documented in ${expText}.${note ? ` Primary infraction: ${note}.` : ''} Rectification is urgently required to maintain acceptable business and animal care benchmarks.`;
  }

  // 4. Friendly & Conversational (Warm, informal, energetic, relatable)
  let friendlyText = '';
  if (rating === 5) {
    const fOpen = [
      `Loved every bit of our visit to Pet's Heaven in Indore! 🐾`,
      `Such a pleasant experience stopping by Pet's Heaven Indore today! ✨`,
      `Big thumbs up to the wonderful folks at Pet's Heaven Indore!`
    ];
    const fBody = [
      `We came in looking for ${prodText} and the team was so welcoming and patient with ${expText}.`,
      `You can tell they genuinely care about their animals. Exploring ${prodText} here was an absolute delight!`,
      `They gave us great tips on ${expText} and made the whole process easy and fun.`
    ];
    friendlyText = `${pickRandom(fOpen)} ${pickRandom(fBody)}${note ? ` Plus, ${note} - which was super sweet!` : ''} Will definitely be coming back for more supplies! 🙌`;
  } else if (rating === 4) {
    friendlyText = `Had a really nice time checking out Pet's Heaven in Indore! Went to see their ${prodText} and everyone was sweet and helpful about ${expText}.${note ? ` By the way, ${note}.` : ''} Good vibe and healthy pets. Definitely recommend stopping by!`;
  } else if (rating === 3) {
    friendlyText = `Stopped by Pet's Heaven in Indore for ${prodText}. It was an okay visit - ${expText} was fine, nothing extraordinary.${note ? ` A quick note: ${note}.` : ''} Handy shop if you live nearby, but has room to be even better.`;
  } else if (rating === 2) {
    friendlyText = `Was really excited to visit Pet's Heaven Indore for ${prodText}, but unfortunately the ${expText} left us a bit disappointed.${note ? ` To be specific: ${note}.` : ''} Hope they take this kindly and improve!`;
  } else {
    friendlyText = `Really sad to share that our visit to Pet's Heaven Indore for ${prodText} didn't go well at all. The ${expText} was quite frustrating.${note ? ` What happened: ${note}.` : ''} Hopefully things get sorted out for future visitors.`;
  }

  // 5. Natural Hinglish (Authentic Indore colloquial flow)
  let hinglishText = '';
  if (rating === 5) {
    const hOpen = [
      `Indore mein Pet's Heaven sach mein kaafi badiya pet store hai!`,
      `Pet's Heaven Indore ka visit bohot hi mast aur satisfying raha!`,
      `Agar Indore mein ache ${prodText} chahiye toh Pet's Heaven best option hai.`
    ];
    const hBody = [
      `Yahan ${prodText} ki quality ek number hai aur staff ne ${expText} mein bohot ache se guide kiya.`,
      `${expText} bohot cooperative laga aur sabhi doubts patience ke saath clear kiye.`,
      `Store ka setup kaafi clean aur hygienic hai, companions bhi healthy aur active the.`
    ];
    hinglishText = `${pickRandom(hOpen)} ${pickRandom(hBody)}${note ? ` Khaaskar ke ${note} bohot accha laga.` : ''} Indore walon ke liye genuinely recommended store hai! 🌟`;
  } else if (rating === 4) {
    hinglishText = `Pet's Heaven Indore ka chakkar lagaya tha ${prodText} dekhne. Overall experience kaafi accha raha! ${expText} mein staff helpful tha aur advice bhi sahi mili.${note ? ` Ek baat achi lagi: ${note}.` : ''} Indore mein pet lovers ke liye solid 4-star recommendation hai!`;
  } else if (rating === 3) {
    hinglishText = `Theek-thaak experience raha Pet's Heaven Indore par. ${prodText} check kiye the, ${expText} average laga.${note ? ` Dhyan dene wali baat: ${note}.` : ''} Normal store visit tha, thoda aur improvement ho sakta hai.`;
  } else if (rating === 2) {
    hinglishText = `Pet's Heaven Indore ka visit thoda disappointing raha for ${prodText}. Specially ${expText} pe thoda dhyan dene ki zarurat hai.${note ? ` Problem yeh thi: ${note}.` : ''} Genuine feedback de raha hu taaki aage sudhaar ho sake.`;
  } else {
    hinglishText = `Pet's Heaven Indore par bohot hi bekar experience raha. Hum ${prodText} ke liye gaye the par ${expText} bilkul bhi theek nahi tha.${note ? ` Khaas shikayat: ${note}.` : ''} Store management ko service pe seriously focus karna chahiye.`;
  }

  // 6. Personal Experience (Reflective, first-person storytelling)
  let personalText = '';
  if (rating === 5) {
    personalText = `As an animal lover in Indore, finding an ethical and knowledgeable store is everything. My visit to Pet's Heaven for ${prodText} gave me complete peace of mind. What truly set them apart was their focus on ${expText} - they genuinely care about long-term pet well-being rather than just making a quick sale.${note ? ` In my personal experience: ${note}.` : ''} I am grateful to have found this trusted pet home in our city.`;
  } else if (rating === 4) {
    personalText = `When searching for ${prodText} in Indore, Pet's Heaven was recommended to me by a friend. I am glad I visited; their attention to ${expText} made the consultation smooth and reassuring.${note ? ` A personal highlight was: ${note}.` : ''} A dependable place that I would gladly recommend to family and friends.`;
  } else if (rating === 3) {
    personalText = `My visit to Pet's Heaven Indore for ${prodText} felt balanced. While they have an easy-to-reach location, my personal experience with ${expText} was average.${note ? ` In my case: ${note}.` : ''} An okay experience that met basic expectations.`;
  } else if (rating === 2) {
    personalText = `Sharing my personal perspective after visiting Pet's Heaven Indore for ${prodText}. Regrettably, the standard of ${expText} fell short of what I anticipated.${note ? ` Personally, ${note}.` : ''} I hope management takes this constructive feedback to heart.`;
  } else {
    personalText = `I rarely write negative reviews, but my personal experience at Pet's Heaven Indore for ${prodText} was deeply unsatisfactory. The lack of care regarding ${expText} was unacceptable.${note ? ` What personally affected my visit: ${note}.` : ''} Would not recommend based on this visit.`;
  }

  return [
    { ...STYLE_DEFINITIONS[0], text: shortText },
    { ...STYLE_DEFINITIONS[1], text: detailedText },
    { ...STYLE_DEFINITIONS[2], text: professionalText },
    { ...STYLE_DEFINITIONS[3], text: friendlyText },
    { ...STYLE_DEFINITIONS[4], text: hinglishText },
    { ...STYLE_DEFINITIONS[5], text: personalText },
  ];
}
