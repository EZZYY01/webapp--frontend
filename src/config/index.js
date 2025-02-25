export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "StringBased Instruments", label: "StringBased Instruments" },
      { id: "Percussion Instruments", label: "Percussion Instruments" },
      { id: "Wind Instruments", label: "Wind Instruments" },
      { id: "Keyboards & Pianos", label: "Keyboards & Pianos" },
      { id: "Electronic Instruments", label: "Electronic Instruments" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "Yamaha", label: "Yamaha" },
      { id: "Fender", label: "Fender" },
      { id: "Roland", label: "Roland" },
      { id: "Gibson", label: "Gibson" },
      { id: "Pearl", label: "Pearl" },
      { id: "Korg", label: "Korg" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "StringBased Instruments",
    label: "StringBased Instruments",
    path: "/shop/listing",
  },
  {
    id: "Percussion Instruments",
    label: "Percussion Instruments",
    path: "/shop/listing",
  },
  {
    id: "Wind Instruments",
    label: "Wind Instruments",
    path: "/shop/listing",
  },
  {
    id: "Electronic Instruments",
    label: "Electronic Instruments",
    path: "/shop/listing",
  },
  {
    id: "Keyboards & Pianos",
    label: "Keyboards & Pianos",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  "StringBased Instruments": "StringBased Instruments",
  "Percussion Instruments": "Percussion Instruments",
  "Wind Instruments": "Wind Instruments",
  "Keyboards & Pianos": "Keyboards & Pianos",
  "Electronic Instruments": "Electronic Instruments",
};

export const brandOptionsMap = {
  Yamaha: "Yamaha",
  Fender: "Fender",
  Roland: "Roland",
  Gibson: "Gibson",
  Pearl: "Pearl",
  "Korg": "Korg",
};

export const filterOptions = {
  category: [
    { id: "StringBased Instruments", label: "StringBased Instruments" },
    { id: "Percussion Instruments", label: "Percussion Instruments" },
    { id: "Wind Instruments", label: "Wind Instruments" },
    { id: "Keyboards & Pianos", label: "Keyboards & Pianos" },
    { id: "Electronic Instruments", label: "Electronic Instruments" },
  ],
  brand: [
    { id: "Yamaha", label: "Yamaha" },
    { id: "Fender", label: "Fender" },
    { id: "Roland", label: "Roland" },
    { id: "Gibson", label: "Gibson" },
    { id: "Pearl", label: "Pearl" },
    { id: "Korg", label: "Korg" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
