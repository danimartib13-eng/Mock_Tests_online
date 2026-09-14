import type { LanguageUseQuestion } from "../types/test";

/**
 * Original Language Use content for the Descomplilearning TECS practice
 * simulation. Not official TECS material.
 */
export const languageUseQuestions: LanguageUseQuestion[] = [
  // Grammar in context (4)
  {
    id: "LU01",
    section: "languageUse",
    questionNumber: 1,
    difficulty: "B1",
    skill: "Grammar in context",
    text: 'Hi Tom, ___ the report yet? I want to make sure you saw my comments before the meeting.',
    options: [
      { id: "A", text: "Did you read" },
      { id: "B", text: "Have you read" },
      { id: "C", text: "Are you reading" },
      { id: "D", text: "Had you read" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      '"Yet" in a question usually signals the present perfect ("Have you read...?") when asking if something has happened up to now.',
  },
  {
    id: "LU02",
    section: "languageUse",
    questionNumber: 2,
    difficulty: "B1/B2",
    skill: "Grammar in context",
    text: "A: I'm not sure whether to take the new job. It pays more, but I'd have to move to another city.\nB: If I ___ you, I'd at least go and visit the city before deciding.",
    options: [
      { id: "A", text: "am" },
      { id: "B", text: "was" },
      { id: "C", text: "were" },
      { id: "D", text: "will be" },
    ],
    correctOptionId: "C",
    points: 1,
    explanation:
      "In the second conditional (\"If I were you...\"), we use \"were\" for all subjects, even \"I\", to give hypothetical advice.",
  },
  {
    id: "LU03",
    section: "languageUse",
    questionNumber: 3,
    difficulty: "A2",
    skill: "Grammar in context",
    text: "The night train to the coast is usually ___ than the express bus, but a lot more comfortable for a long trip.",
    options: [
      { id: "A", text: "cheap" },
      { id: "B", text: "cheaper" },
      { id: "C", text: "the cheapest" },
      { id: "D", text: "more cheap" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      'To compare two things, we use the comparative form of a short adjective: "cheap" becomes "cheaper".',
  },
  {
    id: "LU04",
    section: "languageUse",
    questionNumber: 4,
    difficulty: "B1/B2",
    skill: "Grammar in context",
    text: "Our project files are stored on the shared drive, and every document ___ automatically before anyone can delete it.",
    options: [
      { id: "A", text: "backs up" },
      { id: "B", text: "is backed up" },
      { id: "C", text: "backed up" },
      { id: "D", text: "has backing up" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "Since the document doesn't perform the action itself (something backs it up), the passive form \"is backed up\" is correct here.",
  },

  // Vocabulary in context (3)
  {
    id: "LU05",
    section: "languageUse",
    questionNumber: 5,
    difficulty: "A2",
    skill: "Vocabulary in context",
    text: "A: I need to change my appointment to a different day.\nB: No problem, I can ___ it for you — would next Tuesday work instead?",
    options: [
      { id: "A", text: "reschedule" },
      { id: "B", text: "recycle" },
      { id: "C", text: "remind" },
      { id: "D", text: "repeat" },
    ],
    correctOptionId: "A",
    points: 1,
    explanation:
      '"Reschedule" means to arrange something for a different time — exactly what the receptionist is offering to do.',
  },
  {
    id: "LU06",
    section: "languageUse",
    questionNumber: 6,
    difficulty: "B1",
    skill: "Vocabulary in context",
    text: "I know this is a busy week for the team, but this request is ___ — the client needs an answer before Friday.",
    options: [
      { id: "A", text: "urgent" },
      { id: "B", text: "urgency" },
      { id: "C", text: "urgently" },
      { id: "D", text: "urge" },
    ],
    correctOptionId: "A",
    points: 1,
    explanation:
      '"Urgent" (adjective) correctly describes the request as needing immediate attention; the other options are different word forms that don\'t fit grammatically in this sentence.',
  },
  {
    id: "LU07",
    section: "languageUse",
    questionNumber: 7,
    difficulty: "B1",
    skill: "Vocabulary in context",
    text: "After months of practice, she finally felt ___ enough to give her presentation without reading from her notes.",
    options: [
      { id: "A", text: "confident" },
      { id: "B", text: "confidence" },
      { id: "C", text: "confidently" },
      { id: "D", text: "confide" },
    ],
    correctOptionId: "A",
    points: 1,
    explanation:
      '"Confident" is the adjective form needed to describe how she felt; "confidence" is a noun, "confidently" an adverb, and "confide" a different verb entirely.',
  },

  // Connectors (2)
  {
    id: "LU08",
    section: "languageUse",
    questionNumber: 8,
    difficulty: "A2",
    skill: "Connectors",
    text: "We wanted to have lunch outside today, ___ it started raining just as we sat down.",
    options: [
      { id: "A", text: "so" },
      { id: "B", text: "but" },
      { id: "C", text: "because" },
      { id: "D", text: "although" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      '"But" introduces a contrast — the plan (lunch outside) was interrupted by an unexpected event (rain).',
  },
  {
    id: "LU09",
    section: "languageUse",
    questionNumber: 9,
    difficulty: "B1/B2",
    skill: "Connectors",
    text: "___ the flight was delayed by almost three hours, the team still managed to arrive in time for the opening session.",
    options: [
      { id: "A", text: "Although" },
      { id: "B", text: "Because" },
      { id: "C", text: "So" },
      { id: "D", text: "Despite" },
    ],
    correctOptionId: "A",
    points: 1,
    explanation:
      '"Although" is followed by a full clause ("the flight was delayed...") to show contrast. "Despite" would need a noun or -ing form instead of a full clause.',
  },

  // Sentence completion / sentence structure (2)
  {
    id: "LU10",
    section: "languageUse",
    questionNumber: 10,
    difficulty: "B1",
    skill: "Sentence completion",
    text: "Excuse me, could you tell me ___?",
    options: [
      { id: "A", text: "where is the nearest train station" },
      { id: "B", text: "where the nearest train station is" },
      { id: "C", text: "is where the nearest train station" },
      { id: "D", text: "where nearest is the train station" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      'In embedded/indirect questions ("Could you tell me...?"), the word order stays like a statement (subject + verb), not like a direct question.',
  },
  {
    id: "LU11",
    section: "languageUse",
    questionNumber: 11,
    difficulty: "B1/B2",
    skill: "Sentence completion",
    text: "When I called the office, the assistant told me that the manager ___ the email earlier that morning.",
    options: [
      { id: "A", text: "sends" },
      { id: "B", text: "sent" },
      { id: "C", text: "had sent" },
      { id: "D", text: "has sent" },
    ],
    correctOptionId: "C",
    points: 1,
    explanation:
      'In reported speech, an action that happened before another past action ("earlier that morning", before the call) uses the past perfect: "had sent".',
  },

  // Meaning / speaker intention in context (1)
  {
    id: "LU12",
    section: "languageUse",
    questionNumber: 12,
    difficulty: "B1",
    skill: "Meaning / speaker intention",
    text: "A: This box is really heavy, and I still have three more to carry upstairs.\nB: I'm not busy right now.\n\nWhat is speaker B most likely trying to communicate?",
    options: [
      { id: "A", text: "B doesn't want to help carry the boxes" },
      { id: "B", text: "B is offering to help carry the boxes" },
      { id: "C", text: "B is asking A to wait" },
      { id: "D", text: "B is complaining about having too much free time" },
    ],
    correctOptionId: "B",
    points: 1,
    explanation:
      "By mentioning being free right after A describes a problem, B is indirectly offering to help — a common way of making an offer without saying \"I'll help you\" directly.",
  },
];
