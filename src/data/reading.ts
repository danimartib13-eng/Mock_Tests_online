import type { ReadingPassage } from "../types/test";

/**
 * Original reading content for the Descomplilearning TECS practice
 * simulation. Not official TECS material.
 */
export const readingPassages: ReadingPassage[] = [
  {
    id: "R-P1",
    title: "Notice: Elevator Maintenance This Weekend",
    text: `To all residents of Maple Court Apartments,

Please be informed that the elevator in Building B will be out of service this Saturday and Sunday for scheduled maintenance. Our maintenance team will be replacing worn parts to keep the elevator running safely and smoothly.

During this time, residents on the upper floors are encouraged to use the stairwell near the main entrance. If you have heavy items to carry, please contact the building office at least one day in advance, and our staff will be happy to help.

We expect the elevator to be back in service by Monday morning. We apologize for any inconvenience and thank you for your patience.

Building Management`,
    questions: [
      {
        id: "R01",
        section: "reading",
        questionNumber: 1,
        difficulty: "A2",
        skill: "Main idea",
        text: "What is the main purpose of this notice?",
        options: [
          { id: "A", text: "To announce a rent increase" },
          { id: "B", text: "To inform residents about a temporary elevator closure" },
          { id: "C", text: "To invite residents to a building meeting" },
          { id: "D", text: "To advertise a new maintenance service" },
        ],
        correctOptionId: "B",
        points: 1,
        explanation:
          "The notice's main purpose is to tell residents the elevator will be out of service for maintenance over the weekend.",
      },
      {
        id: "R02",
        section: "reading",
        questionNumber: 2,
        difficulty: "A2",
        skill: "Specific information",
        text: "What should residents do if they need help carrying heavy items?",
        options: [
          { id: "A", text: "Use the stairwell without help" },
          { id: "B", text: "Wait until Monday morning" },
          { id: "C", text: "Contact the building office at least one day in advance" },
          { id: "D", text: "Call an outside moving company" },
        ],
        correctOptionId: "C",
        points: 1,
        explanation:
          "The notice says residents with heavy items should contact the building office at least a day in advance so staff can help.",
      },
    ],
  },
  {
    id: "R-P2",
    title: "Email: Change of Plans",
    text: `Hi Sofia,

I hope you're doing well! I'm writing because I have some news about our trip to the coast next month — I'm afraid we're going to have to push it back. My manager just told me that the project deadline moved up, so I can't take time off until later in the summer.

I know we were both looking forward to it, so I don't want to just cancel. What if we went in August instead? The weather should still be nice, and hotel prices usually drop a bit after the peak season, so it might actually work out cheaper for both of us.

If August doesn't work for you, we could also look at a long weekend somewhere closer, just so we still get a break sooner. Let me know what you think, and sorry again for the last-minute change — I really didn't see this coming.

Talk soon,
Elena`,
    questions: [
      {
        id: "R03",
        section: "reading",
        questionNumber: 3,
        difficulty: "B1",
        skill: "Specific information",
        text: "Why does Elena want to postpone the trip?",
        options: [
          { id: "A", text: "She can't afford it right now" },
          { id: "B", text: "Her project deadline moved up, so she can't take time off" },
          { id: "C", text: "She found a cheaper trip for later" },
          { id: "D", text: "She is worried about the weather" },
        ],
        correctOptionId: "B",
        points: 1,
        explanation:
          "Elena explains that her manager moved the project deadline up, so she can't take time off until later in the summer.",
      },
      {
        id: "R04",
        section: "reading",
        questionNumber: 4,
        difficulty: "B1",
        skill: "Vocabulary in context",
        text: "In the email, what does \"push it back\" mean?",
        options: [
          { id: "A", text: "Cancel it completely" },
          { id: "B", text: "Make it happen earlier" },
          { id: "C", text: "Delay it to a later date" },
          { id: "D", text: "Change the location" },
        ],
        correctOptionId: "C",
        points: 1,
        explanation:
          "\"Push something back\" means to delay or postpone it to a later time — here, moving the trip to a later month.",
      },
    ],
  },
  {
    id: "R-P3",
    title: "Rethinking the Workweek",
    text: `Over the past few years, the way many people think about work has changed dramatically. For decades, a standard workweek meant five days in an office, from roughly nine in the morning until five in the evening. Today, a growing number of companies are questioning whether that model still makes sense.

Part of this shift came from necessity: when offices closed unexpectedly a few years ago, employees had to find ways to stay productive from home. Many managers who had once insisted that in-person supervision was essential were surprised to discover that output didn't drop — in some cases, it even improved. Once that assumption was challenged, it became harder to justify going back to the old routine without questioning why.

Since then, some companies have kept fully remote teams, while others have settled on a hybrid arrangement, with employees coming into the office two or three days a week. A smaller number have gone further still, experimenting with a four-day week while keeping salaries the same. Early results from these trials have been mixed but generally encouraging: several companies reported that employees felt less exhausted and made fewer mistakes, even though they were technically working fewer hours.

Of course, this flexibility isn't available to everyone. Jobs that require a physical presence — in healthcare, retail, or manufacturing, for example — are much harder to reorganize around a shorter or more flexible schedule. This has created a noticeable gap between industries, and some workers worry it could eventually widen existing inequalities in the job market.

Still, for many office-based employees, the conversation has moved on from whether flexible work is possible to how it should be structured. Questions about how to measure productivity fairly, how to keep remote teams connected, and how to prevent the workday from quietly stretching into the evening are now central to how companies plan for the future. Whatever shape it eventually takes, it seems unlikely that most workplaces will simply return to exactly how things were before.`,
    questions: [
      {
        id: "R05",
        section: "reading",
        questionNumber: 5,
        difficulty: "B1",
        skill: "Main idea",
        text: "What is this article mainly about?",
        options: [
          { id: "A", text: "The history of office buildings" },
          { id: "B", text: "How and why traditional work schedules are being reconsidered" },
          { id: "C", text: "A step-by-step guide to requesting remote work" },
          { id: "D", text: "The financial problems caused by remote work" },
        ],
        correctOptionId: "B",
        points: 1,
        explanation:
          "The article discusses how attitudes toward the traditional workweek have shifted and why companies are reconsidering it.",
      },
      {
        id: "R06",
        section: "reading",
        questionNumber: 6,
        difficulty: "B1",
        skill: "Specific information",
        text: "According to the article, what did some companies discover when employees started working from home?",
        options: [
          { id: "A", text: "Productivity dropped significantly" },
          { id: "B", text: "Employees' output did not drop, and sometimes improved" },
          { id: "C", text: "Employees preferred going back to the office immediately" },
          { id: "D", text: "In-person supervision became more important than before" },
        ],
        correctOptionId: "B",
        points: 1,
        explanation:
          "The text states that output didn't drop when offices closed, and in some cases even improved.",
      },
      {
        id: "R07",
        section: "reading",
        questionNumber: 7,
        difficulty: "B1/B2",
        skill: "Inference",
        text: "What can be inferred about jobs in healthcare, retail, or manufacturing based on the article?",
        options: [
          { id: "A", text: "They have already fully adopted flexible schedules" },
          { id: "B", text: "They are less able to adopt the same kind of flexibility as office jobs" },
          { id: "C", text: "They no longer exist in most countries" },
          { id: "D", text: "They are the main reason remote work became popular" },
        ],
        correctOptionId: "B",
        points: 1,
        explanation:
          "The article says these jobs 'require a physical presence' and are 'much harder to reorganize,' implying they can't adopt the same flexibility as office-based roles.",
      },
      {
        id: "R08",
        section: "reading",
        questionNumber: 8,
        difficulty: "B1/B2",
        skill: "Vocabulary in context",
        text: "In the article, what does the phrase \"stretching into the evening\" most likely mean?",
        options: [
          { id: "A", text: "Becoming shorter than planned" },
          { id: "B", text: "Extending beyond normal working hours" },
          { id: "C", text: "Being cancelled at the last minute" },
          { id: "D", text: "Moving to a different time zone" },
        ],
        correctOptionId: "B",
        points: 1,
        explanation:
          "\"Stretching into the evening\" describes the workday extending later than it should, beyond normal working hours.",
      },
    ],
  },
];
