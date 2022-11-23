import { title } from "process";

export const seedData = [
  { name: "James" },
  { name: "Mary" },
  { name: "Robert" },
  { name: "Patricia" },
  { name: "John" },
  { name: "Jennifer" },
  { name: "Michael" },
];

export const seedTopics = [
  { subject_title: "Javascript", bootcamper_id: 1, date_added: "2022-11-10", resources: "a_url_resource...", image_src: "an-image-src"},
  { subject_title: "SQL", bootcamper_id: 1, date_added: "2022-11-10", resources: "a_url_resource...", image_src: "an-image-src"},
  { subject_title: "React", bootcamper_id: 1, date_added: "2022-11-10", resources: "a_url_resource...", image_src: "an-image-src"},

]

export const seedReviews = [
  { topic_id: 1, score: 1, date_added: "2022-11-10", bootcamper_id: 1 },
  { topic_id: 2, score: 3, date_added: "2022-11-10", bootcamper_id: 1 },
  { topic_id: 3, score: 4, date_added: "2022-11-10", bootcamper_id: 1 },
]

