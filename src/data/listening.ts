import type { ListeningQuestion } from "../types/test";

/**
 * Original listening content for the Descomplilearning TECS practice
 * simulation. Not official TECS material, and this format does not
 * reproduce official TECS listening rules.
 *
 * Each audio situation below has a transcript (for recording the actual
 * clip and for content QA) and produces 2 questions that share one audio
 * file. Target clip length: ~50-75 seconds at a natural speaking pace.
 *
 * Audio files themselves are not included yet — `audio.src` points to the
 * expected filename under /public/audio once real recordings are added.
 */

/*
 * AUDIO 1 — "Rescheduling a dental appointment" (context: appointments / daily life)
 * ~55-65s. A natural phone conversation between a patient and a dental
 * clinic receptionist.
 *
 * Transcript:
 * Receptionist: Good morning, Riverside Dental, how can I help you?
 * Patient: Hi, I have an appointment this Thursday with Dr. Alvarez, but
 *   something's come up at work. Is there any way to move it?
 * Receptionist: No problem, let me check... Thursday at 2 is currently
 *   booked, but we do have an opening on Friday at 4:30, or next Monday
 *   at 9 in the morning.
 * Patient: Friday at 4:30 works better for me, actually.
 * Receptionist: Great, I'll move you to Friday at 4:30 then. Could I also
 *   confirm your phone number, in case we need to reach you?
 * Patient: Sure, it's the same one you already have on file.
 * Receptionist: Perfect, that's all set. See you Friday afternoon!
 * Patient: Thanks so much, bye.
 */

/*
 * AUDIO 2 — "A schedule change at work" (context: work)
 * ~50-55s. A team lead briefing the team before a meeting.
 *
 * Transcript:
 * Morning everyone, just a quick update before we start. You'll remember
 * we usually work from home on Wednesdays. Starting next week, we're
 * shifting that to Thursdays instead, mainly because the client workshops
 * are moving to Wednesday mornings, and it's easier if the whole team's in
 * the office for those. So, Wednesdays in the office, Thursdays from home,
 * at least for the next month while we finish the project. If that
 * clashes with something on your end, just send me a quick message and
 * we'll sort something out. Any questions, come find me after the call.
 */

/*
 * AUDIO 3 — "A video call before a client meeting" (context: technology / problem solving)
 * ~65-75s. Two coworkers troubleshooting a screen-share problem.
 *
 * Transcript:
 * A: Are you seeing this? The screen-share keeps freezing every time I
 *   switch slides.
 * B: Yeah, it's been doing that all morning. Honestly, I don't think it's
 *   your laptop — I had the same issue yesterday on a totally different
 *   call.
 * A: Great, and the client meeting starts in twenty minutes. I really
 *   don't want to be fighting with this thing while they're waiting.
 * B: Let's not risk it live. Why don't you export the slides as a PDF and
 *   share that instead? It won't freeze, and it still looks fine on
 *   screen.
 * A: That could actually work. Can you send me the template so the
 *   formatting matches?
 * B: Sending it now. And if it still glitches, we can just email the file
 *   over before we start.
 */

/*
 * AUDIO 4 — "A delayed delivery" (context: daily life / customer service / logistics)
 * ~55-65s. A customer service representative explaining a delay.
 *
 * Transcript:
 * Hi, thanks for holding — I'm just pulling up your order now. I can see
 * your package, order number 4471, was expected to arrive yesterday, but
 * it's currently delayed at our regional center because of a high volume
 * of deliveries this week. The good news is it's already been scanned and
 * it's on its way; our system shows it should arrive by tomorrow evening.
 * You don't need to do anything on your end — we'll send a text message
 * as soon as it's out for delivery. If it still hasn't arrived by Friday,
 * just call us back and we'll open an investigation.
 */

export const listeningQuestions: ListeningQuestion[] = [
  // Audio 1 — dental appointment
  {
    id: "L01",
    section: "listening",
    questionNumber: 1,
    difficulty: "A2",
    skill: "General understanding",
    text: "What is the main purpose of this call?",
    options: [
      { id: "A", text: "To book a first appointment with Dr. Alvarez" },
      { id: "B", text: "To change the time of an existing appointment" },
      { id: "C", text: "To cancel an appointment completely" },
      { id: "D", text: "To ask about the clinic's opening hours" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "The patient calls to move (reschedule) an appointment they already have, not to book a new one or cancel it.",
    audio: { src: "/audio/listening-01.mp3", maxPlays: 2 },
  },
  {
    id: "L02",
    section: "listening",
    questionNumber: 2,
    difficulty: "A2",
    skill: "Specific information",
    text: "What day and time is the patient's new appointment?",
    options: [
      { id: "A", text: "Thursday at 2:00" },
      { id: "B", text: "Friday at 4:30" },
      { id: "C", text: "Monday at 9:00" },
      { id: "D", text: "Friday at 9:00" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "The receptionist offers Friday at 4:30 or Monday at 9:00, and the patient chooses Friday at 4:30.",
    audio: { src: "/audio/listening-01.mp3", maxPlays: 2 },
  },

  // Audio 2 — work schedule change
  {
    id: "L03",
    section: "listening",
    questionNumber: 3,
    difficulty: "B1",
    skill: "Specific information",
    text: "According to the update, which day will the team now work from home?",
    options: [
      { id: "A", text: "Monday" },
      { id: "B", text: "Wednesday" },
      { id: "C", text: "Thursday" },
      { id: "D", text: "Friday" },
    ],
    correctOptionId: "C",
    points: 1,
    explanation:
      "The home-office day is being moved from Wednesday to Thursday, mainly because client workshops are moving to Wednesday mornings.",
    audio: { src: "/audio/listening-02.mp3", maxPlays: 2 },
  },
  {
    id: "L04",
    section: "listening",
    questionNumber: 4,
    difficulty: "B1",
    skill: "Vocabulary in context",
    text: "In the update, the speaker says \"we'll sort something out.\" What does this mean?",
    options: [
      { id: "A", text: "We will cancel the plan" },
      { id: "B", text: "We will find a solution together" },
      { id: "C", text: "We will report the problem to another team" },
      { id: "D", text: "We will wait until next month" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "\"Sort something out\" means to find a solution or arrange things so a problem gets resolved — here, if the schedule change causes a conflict.",
    audio: { src: "/audio/listening-02.mp3", maxPlays: 2 },
  },

  // Audio 3 — troubleshooting before a client meeting
  {
    id: "L05",
    section: "listening",
    questionNumber: 5,
    difficulty: "B1/B2",
    skill: "Main idea",
    text: "What is this conversation mainly about?",
    options: [
      { id: "A", text: "Deciding who will lead the client meeting" },
      { id: "B", text: "Finding a way to fix a screen-sharing problem before a meeting" },
      { id: "C", text: "Complaining about a broken laptop that needs repair" },
      { id: "D", text: "Rescheduling the meeting to a later time" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "The two colleagues are troubleshooting a recurring screen-share freezing issue and agree on a workaround before their meeting starts.",
    audio: { src: "/audio/listening-03.mp3", maxPlays: 2 },
  },
  {
    id: "L06",
    section: "listening",
    questionNumber: 6,
    difficulty: "B1/B2",
    skill: "Inference (speaker intention)",
    text: "What does speaker B suggest doing?",
    options: [
      { id: "A", text: "Restarting the computer and hoping it works" },
      { id: "B", text: "Asking the client to reschedule" },
      { id: "C", text: "Sharing the slides as a PDF instead of the live presentation" },
      { id: "D", text: "Calling technical support immediately" },
    ],
    correctOptionId: "C",
    points: 1,
    explanation:
      "Speaker B suggests exporting the slides as a PDF and sharing that instead, since it won't freeze the way the live screen-share does.",
    audio: { src: "/audio/listening-03.mp3", maxPlays: 2 },
  },

  // Audio 4 — delayed delivery
  {
    id: "L07",
    section: "listening",
    questionNumber: 7,
    difficulty: "B1",
    skill: "Specific information",
    text: "Why has the package been delayed?",
    options: [
      { id: "A", text: "It was sent to the wrong address" },
      { id: "B", text: "The regional center is dealing with a high volume of deliveries" },
      { id: "C", text: "The customer wasn't home to receive it" },
      { id: "D", text: "There was a problem with the payment" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "The representative explains the delay is because the regional center has a high volume of deliveries this week.",
    audio: { src: "/audio/listening-04.mp3", maxPlays: 2 },
  },
  {
    id: "L08",
    section: "listening",
    questionNumber: 8,
    difficulty: "B1",
    skill: "Inference (likely next action)",
    text: "What will most likely happen next, according to the call?",
    options: [
      { id: "A", text: "The customer will need to pick up the package in person" },
      { id: "B", text: "The company will send a text message once the package is out for delivery" },
      { id: "C", text: "The package will be delivered within the hour" },
      { id: "D", text: "The customer must call back today to confirm the address" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "The representative says they will send a text message as soon as the package is out for delivery; the customer only needs to call back if it still hasn't arrived by Friday.",
    audio: { src: "/audio/listening-04.mp3", maxPlays: 2 },
  },
];
