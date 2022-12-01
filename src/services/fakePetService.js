const pets = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    petName: "Garfield",
    petType: "Cat",
    likes: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    petName: "Doraemon",
    petType: "Cat",
    likes: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    petName: "Snoopy",
    petType: "Dog",
    likes: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    petName: "Dug",
    petType: "Dog",
    likes: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    petName: "Daffy",
    petType: "Duck",
    likes: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    petName: "Pen Pen",
    petType: "Penguin",
    likes: 0
  }
];

export function getPets() {
  return pets;
}

export function getPet(id) {
  return pets.find(m => m._id === id);
}
