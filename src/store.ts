const data = [
  {
    id: "agilecoder",
    posts: [
      {
        id: "post-1",
        when: new Date(Date.UTC(2024, 6, 18, 14, 11, 58, 123)),
        content: "Happy Thursday everyone. Have a great day!",
      },
      {
        id: "post-2",
        when: new Date(Date.UTC(2024, 6, 18, 1, 5, 11, 6)),
        content: "Sitting down to a nice dinner with my family.",
      },
      {
        id: "post-3",
        when: new Date(Date.UTC(2024, 6, 17, 17, 45, 23, 789)),
        content: "Finished a great workout session!",
      },
      {
        id: "post-4",
        when: new Date(Date.UTC(2024, 6, 17, 9, 23, 45, 654)),
        content: "Morning run was refreshing. Time to code!",
      },
      {
        id: "post-5",
        when: new Date(Date.UTC(2024, 6, 16, 21, 15, 8, 333)),
        content: "Learning new things every day.",
      },
    ],
    friends: ["thdxr", "samcook", "markdalgleish"],
  },
  {
    id: "thdxr",
    posts: [
      {
        id: "post-6",
        when: new Date(Date.UTC(2024, 6, 18, 14, 11, 58, 123)),
        content: "Beautiful sunrise in Miami today!",
      },
      {
        id: "post-7",
        when: new Date(Date.UTC(2024, 6, 18, 1, 5, 11, 6)),
        content: "Late-night coding session.",
      },
      {
        id: "post-8",
        when: new Date(Date.UTC(2024, 6, 17, 17, 45, 23, 789)),
        content: "Lunch break. Time for some fresh air.",
      },
      {
        id: "post-9",
        when: new Date(Date.UTC(2024, 6, 17, 9, 23, 45, 654)),
        content: "Good morning! Ready to tackle the day.",
      },
      {
        id: "post-10",
        when: new Date(Date.UTC(2024, 6, 16, 21, 15, 8, 333)),
        content: "Just finished reading a great book.",
      },
    ],
    friends: ["agilecoder", "samcook", "markdalgleish"],
  },
  {
    id: "samcook",
    posts: [
      {
        id: "post-11",
        when: new Date(Date.UTC(2024, 6, 18, 14, 11, 58, 123)),
        content: "Coffee is life. Good morning!",
      },
      {
        id: "post-12",
        when: new Date(Date.UTC(2024, 6, 18, 1, 5, 11, 6)),
        content: "Just wrapped up a late meeting.",
      },
      {
        id: "post-13",
        when: new Date(Date.UTC(2024, 6, 17, 17, 45, 23, 789)),
        content: "Taking a walk to clear my mind.",
      },
      {
        id: "post-14",
        when: new Date(Date.UTC(2024, 6, 17, 9, 23, 45, 654)),
        content: "Early start today. Feeling productive.",
      },
      {
        id: "post-15",
        when: new Date(Date.UTC(2024, 6, 16, 21, 15, 8, 333)),
        content: "Had a wonderful dinner with friends.",
      },
    ],
    friends: ["agilecoder", "thdxr", "markdalgleish"],
  },
  {
    id: "markdalgleish",
    posts: [
      {
        id: "post-16",
        when: new Date(Date.UTC(2024, 6, 18, 14, 11, 58, 123)),
        content: "Good evening from Melbourne!",
      },
      {
        id: "post-17",
        when: new Date(Date.UTC(2024, 6, 18, 1, 5, 11, 6)),
        content: "Working on a new project. Exciting times!",
      },
      {
        id: "post-18",
        when: new Date(Date.UTC(2024, 6, 17, 17, 45, 23, 789)),
        content: "Just finished a long day of coding.",
      },
      {
        id: "post-19",
        when: new Date(Date.UTC(2024, 6, 17, 9, 23, 45, 654)),
        content: "Good morning! Ready to code.",
      },
      {
        id: "post-20",
        when: new Date(Date.UTC(2024, 6, 16, 21, 15, 8, 333)),
        content: "Relaxing with a good movie tonight.",
      },
    ],
    friends: ["agilecoder", "thdxr", "samcook"],
  },
];

export async function getAccounts() {
  return data.map(({ id }) => id);
}

export async function getFeed(userId: string) {
  return data
    .filter(({ id }) => id === userId)
    .flatMap(({ friends }) => friends)
    .flatMap((friendId) =>
      data
        .filter(({ id }) => id === friendId)
        .flatMap(({ id: author, posts }) =>
          posts.map((post) => ({ ...post, author }))
        )
    )
    .sort((a, b) => (a.when < b.when ? 1 : a.when > b.when ? -1 : 0));
}

export async function getPost(userId: string, postId: string) {
  return data
    .filter(({ id }) => id === userId)
    .flatMap(({ id: author, posts }) =>
      posts.map((post) => ({ ...post, author }))
    )
    .filter(({ id }) => id === postId)[0];
}

export async function getProfile(userId: string) {
  return data.find(({ id }) => id === userId);
}
