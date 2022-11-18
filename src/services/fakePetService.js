const pets = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    petName: "Garfield",
    petType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cat" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    petName: "Doraemon",
    petType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Cat" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    petName: "Snoopy",
    petType: { _id: "5b21ca3eeb7f6fbccd471820", name: "Dog" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    petName: "Dug",
    petType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Dog" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    petName: "Daffy",
    petType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Duck" },
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    petName: "Pen Pen",
    petType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Penguin" },
  }
];

export function getPets() {
  return pets;
}

export function getPet(id) {
  return pets.find(m => m._id === id);
}
