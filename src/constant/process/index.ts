export interface IProcessStep {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

export const processSteps: IProcessStep[] = [
  {
    id: 1,
    title: "Design Consultation",
    description:
      "We understand your goals, challenges, and vision to define a clear and effective design direction.",
    imgUrl: "/img/get-started/step-1.png",
  },
  {
    id: 2,
    title: "Project Quote & Brief",
    description:
      "We provide a transparent proposal outlining scope, timeline, and deliverables for full clarity.",
    imgUrl: "/img/get-started/step-2.png",
  },
  {
    id: 3,
    title: "Design Kick Off",
    description:
      "We align the team, set milestones, and begin the creative process with focus.",
    imgUrl: "/img/get-started/step-3.png",
  },
  {
    id: 4,
    title: "Design Collaboration",
    description:
      "We refine ideas together through structured feedback to achieve the best possible outcome.",
    imgUrl: "/img/get-started/step-4.png",
  },
  {
    id: 5,
    title: "Design Daily Update",
    description:
      "We share consistent progress updates to keep everything aligned and on track.",
    imgUrl: "/img/get-started/step-5.png",
  },
  {
    id: 6,
    title: "Hand Off & Launch",
    description:
      "We deliver final assets ready for implementation and ensure a smooth project launch.",
    imgUrl: "/img/get-started/step-6.png",
  },
];
