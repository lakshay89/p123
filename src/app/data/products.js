export const products = [
  {
    id: 1,
    name: "Portrait Acrylic Wall Photo",
    defaultImage: "/mockup/Portrait-Acrylic-Wall-Photo-min-500x500.jpg",
    images: [
      "/mockup/1-500x500.jpg",
      "/mockup/3-500x500.jpg",
      "/mockup/4-500x500.jpg",
    ],
    sizes: [
      { label: "9×12", w: 9, h: 12, price: 699, price5mm: 999, price8mm: 1399 }, // ₹699, ₹999, ₹1399
      { label: "12×16", w: 12, h: 16, price: 1099, price5mm: 1799, price8mm: 2399 }, // ₹1099, ₹1799, ₹2399
      { label: "12×18", w: 12, h: 18, price: 1499, price5mm: 1999, price8mm: 2799 }, // ₹1499, ₹1999, ₹2799
      { label: "15×21", w: 15, h: 21, price: 1999, price5mm: 2799, price8mm: 3999 }, // ₹1999, ₹2799, ₹3999
      { label: "20×30", w: 20, h: 30, price: 3499, price5mm: 4499, price8mm: 5999 }, // ₹3499, ₹4499, ₹5999
      { label: "23×35", w: 23, h: 35, price: 4499, price5mm: 5499, price8mm: 7999 }, // ₹4499, ₹5499, ₹7999
      { label: "36×48", w: 36, h: 48, price: 24999, price5mm: 24999, price8mm: 24999 }, // ₹24999 (8mm only)
    ],
    orientation: "rectangle",
  },
  {
    id: 2,
    name: "Landscape Acrylic Wall Photo",
    defaultImage: "/mockup/Landscape-min-500x500.jpg",
    images: ["/mockup/l1.jpg", "/mockup/l2.jpg", "/mockup/l3.jpg"],
    sizes: [
      { label: "12×9", w: 12, h: 9, price: 699, price5mm: 999, price8mm: 1399 },
      { label: "16×12", w: 16, h: 12, price: 1099, price5mm: 1799, price8mm: 2399 },
      { label: "18×12", w: 18, h: 12, price: 1499, price5mm: 1999, price8mm: 2799 },
      { label: "21×15", w: 21, h: 15, price: 1999, price5mm: 2799, price8mm: 3999 },
      { label: "30×20", w: 30, h: 20, price: 3499, price5mm: 4499, price8mm: 5999 },
      { label: "35×23", w: 35, h: 23, price: 4499, price5mm: 5499, price8mm: 7999 },
      { label: "48×36", w: 48, h: 36, price: 24999, price5mm: 24999, price8mm: 24999 },
    ],
    orientation: "rectangle",
  },
  {
    id: 3,
    name: "Circle Acrylic Wall Photo",
    defaultImage: "/mockup/1-min-1-500x500.jpg",
    images: [
      "/mockup/5-min-37-500x500.jpg",
      "/mockup/3-min-36-500x500.jpg",
      "/mockup/1-min-37-500x500.jpg",
    ],
    sizes: [
      { label: "9×12", w: 9, h: 12, price: 699, price5mm: 999, price8mm: 1399 },
      { label: "12×16", w: 12, h: 16, price: 1099, price5mm: 1799, price8mm: 2399 },
      { label: "12×18", w: 12, h: 18, price: 1499, price5mm: 1999, price8mm: 2799 },
      { label: "15×21", w: 15, h: 21, price: 1999, price5mm: 2799, price8mm: 3999 },
      { label: "20×30", w: 20, h: 30, price: 3499, price5mm: 4499, price8mm: 5999 },
      { label: "23×35", w: 23, h: 35, price: 4499, price5mm: 5499, price8mm: 7999 },
      { label: "36×48", w: 36, h: 48, price: 24999, price5mm: 24999, price8mm: 24999 },
    ],
    orientation: "circle",
  },
  {
    id: 4,
    name: "Rounded Rect Portrait Acrylic Wall Photo",
    defaultImage: "/mockup/Rounded-Rect-Portrait-Acrylic-Wall-Photo-min-500x500.jpg",
    images: [
      "/mockup/2-min-53-500x500.jpg",
      "/mockup/4-min-53-500x500.jpg",
      "/mockup/5-min-54-500x500.jpg",
    ],
    sizes: [
      { label: "9×12", w: 9, h: 12, price: 699, price5mm: 999, price8mm: 1399 },
      { label: "12×16", w: 12, h: 16, price: 1099, price5mm: 1799, price8mm: 2399 },
      { label: "12×18", w: 12, h: 18, price: 1499, price5mm: 1999, price8mm: 2799 },
      { label: "15×21", w: 15, h: 21, price: 1999, price5mm: 2799, price8mm: 3999 },
      { label: "20×30", w: 20, h: 30, price: 3499, price5mm: 4499, price8mm: 5999 },
      { label: "23×35", w: 23, h: 35, price: 4499, price5mm: 5499, price8mm: 7999 },
      { label: "36×48", w: 36, h: 48, price: 24999, price5mm: 24999, price8mm: 24999 },
    ],
    orientation: "rectangle-rounded",
  },
  {
    id: 5,
    name: "Rounded Rect Landscape Acrylic Wall Photo",
    defaultImage: "/mockup/Rounded-Rect-Landscape-Acrylic-Wall-Phot-min-500x500.jpg",
    images: [
      "/mockup/4-min-50-500x500.jpg",
      "/mockup/1-min-42-500x500.jpg",
      "/mockup/5-min-51-500x500.jpg",
    ],
    sizes: [
      { label: "12×9", w: 12, h: 9, price: 699, price5mm: 999, price8mm: 1399 },
      { label: "16×12", w: 16, h: 12, price: 1099, price5mm: 1799, price8mm: 2399 },
      { label: "18×12", w: 18, h: 12, price: 1499, price5mm: 1999, price8mm: 2799 },
      { label: "21×15", w: 21, h: 15, price: 1999, price5mm: 2799, price8mm: 3999 },
      { label: "30×20", w: 30, h: 20, price: 3499, price5mm: 4499, price8mm: 5999 },
      { label: "35×23", w: 35, h: 23, price: 4499, price5mm: 5499, price8mm: 7999 },
      { label: "48×36", w: 48, h: 36, price: 24999, price5mm: 24999, price8mm: 24999 },
    ],
    orientation: "rectangle-rounded",
  },
  {
    id: 6,
    name: "Balloon Shape Acrylic Wall Photo",
    defaultImage: "/mockup/10-min-2-500x500.jpg",
    images: [
      "/mockup/1-min-36-500x500.jpg",
      "/mockup/2-min-35-500x500.jpg",
      "/mockup/3-min-35-500x500.jpg",
    ],
    sizes: [
      { label: "9×12", w: 9, h: 12, price: 699, price5mm: 999, price8mm: 1399 },
      { label: "12×16", w: 12, h: 16, price: 1099, price5mm: 1799, price8mm: 2399 },
      { label: "12×18", w: 12, h: 18, price: 1499, price5mm: 1999, price8mm: 2799 },
      { label: "15×21", w: 15, h: 21, price: 1999, price5mm: 2799, price8mm: 3999 },
      { label: "20×30", w: 20, h: 30, price: 3499, price5mm: 4499, price8mm: 5999 },
      { label: "23×35", w: 23, h: 35, price: 4499, price5mm: 5499, price8mm: 7999 },
      { label: "36×48", w: 36, h: 48, price: 24999, price5mm: 24999, price8mm: 24999 },
    ],
    orientation: "rectangle-rounded",
  },
];
