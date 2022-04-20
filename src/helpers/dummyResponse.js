export const dummyResponseLogin = {
  user: {
    role: 'user',
    isEmailVerified: true,
    email: 'pompom@mail.co',
    name: 'pompom',
    id: '625d6c6362fc712fb9a253d9',
  },
  tokens: {
    access: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjVkNmM2MzYyZmM3MTJmYjlhMjUzZDkiLCJpYXQiOjE2NTA0NTU0ODAsImV4cCI6MTY1MDQ1NzI4MCwidHlwZSI6ImFjY2VzcyJ9.5MfdR9sdh1A25B4OynPPxj7ZSS6IzEhxIUsr5YieRFQ',
      expires: '2022-04-20T12:21:20.325Z',
    },
    refresh: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjVkNmM2MzYyZmM3MTJmYjlhMjUzZDkiLCJpYXQiOjE2NTA0NTU0ODAsImV4cCI6MTY1MzA0NzQ4MCwidHlwZSI6InJlZnJlc2gifQ.pzYZbpMPc47f5tnmSnXc-Rw0SgMxRIXK9N-nGmHlSA8',
      expires: '2022-05-20T11:51:20.325Z',
    },
  },
};

export const dataLogin = {
  email: 'pompom@mail.co',
  password: 'pompom123',
};

export const dummyResponseRegister = {
  success: true,
  message:
    'Register succeed! Please try to login with email kichigendutt@mail.co',
  data: {
    role: 'user',
    isEmailVerified: true,
    email: 'kichigendutt@mail.co',
    name: 'Kichi Kuchika',
    id: '625ff9d3dacc2e2fb47cb16a',
  },
};

export const dataRegister = {
  email: 'kichigendutt@mail.co',
  password: 'akutidakgendut123',
  name: 'Kichi Kuchika',
};

export const dataDummyListBook = {
  results: [
    {
      title: 'The Kite Runner',
      author: 'Khaled Hosseini',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51vRNqL61aL._SX318_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eec',
      publisher: 'Riverhead Books',
      average_rating: '5',
      price: '401541',
    },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/618npmqoOsL._SX330_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef4',
      publisher: 'Harper Perennial',
      average_rating: '10',
      price: '298611',
    },
    {
      title: '1984',
      author: 'George Orwell',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/31lWUHDG7uL._SX282_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566edc',
      publisher: 'Signet Classics',
      average_rating: '7',
      price: '275052',
    },
    {
      title: 'Tuck Everlasting',
      author: 'Natalie Babbitt',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51pjcLaWOSL._SX337_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f0c',
      publisher: 'Square Fish',
      average_rating: '9',
      price: '548211',
    },
    {
      title: 'The Great Alone',
      author: 'Kristin Hannah',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/511Dl74cE9L._SX328_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566efc',
      publisher: "St. Martin's Press",
      average_rating: '10',
      price: '55398',
    },
    {
      title: 'Oathbringer (Book 3 of the Stormlight Archive)',
      author: 'Brandon Sanderson',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51G3r2QSvoL._SX327_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed8',
      publisher: 'Tor Books',
      average_rating: '6',
      price: '294104',
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51Ye-YRqLaL._SX312_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef0',
      publisher: 'Dover Publications',
      average_rating: '3',
      price: '468474',
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      author: 'J. K. Rowling',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/5128ATd9dSL._SX418_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed0',
      publisher: 'Scholastic',
      average_rating: '4',
      price: '370495',
    },
    {
      title: 'Invisible Man',
      author: 'Ralph Ellison',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51NIZqFLvJL._SX322_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef8',
      publisher: 'Vintage Books',
      average_rating: '3',
      price: '474320',
    },
    {
      title: 'The Book Thief',
      author: 'Markus Zusak',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51C8Tg0TCaL._SX322_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee0',
      publisher: 'Alfred A. Knopf',
      average_rating: '5',
      price: '577581',
    },
    {
      title: 'The Phantom Tolbooth',
      author: 'Norton Juster',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51QC8X%2BTDyL._SX340_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f08',
      publisher: 'Bullseye Books',
      average_rating: '8',
      price: '570494',
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41lZKXt1%2BML._SX332_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f00',
      publisher: 'Harper Perennial',
      average_rating: '3',
      price: '507387',
    },
    {
      title: "Charlotte's Web",
      author: 'E. B. White',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/61%2B3z1o4oUL._SX334_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee8',
      publisher: 'HarperCollins',
      average_rating: '10',
      price: '494274',
    },
    {
      title: 'The Lion, the Witch, and the Wardrobe',
      author: 'C. S. Lewis',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51erHMLhIzL._SX334_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eea',
      publisher: 'HarperCollins',
      average_rating: '3',
      price: '109984',
    },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J. K. Rowling',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51SfTd37PaL._SX415_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ece',
      publisher: 'Scholastic',
      average_rating: '8',
      price: '292532',
    },
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51MzUz8rQcL._SX305_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eee',
      publisher: 'Del Rey',
      average_rating: '7',
      price: '358150',
    },
    {
      title: 'The Odyssey',
      author: 'Homer',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SX346_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eda',
      publisher: 'Penguin Classics',
      average_rating: '7',
      price: '305712',
    },
    {
      title: 'Don Quixote',
      author: 'Miguel de Cervantes',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51nBHIQv6zL._SX332_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef2',
      publisher: 'Penguin Classics',
      average_rating: '3',
      price: '671859',
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J. K. Rowling',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eca',
      publisher: 'Scholastic',
      average_rating: '6',
      price: '71514',
    },
    {
      title: 'The Brothers Karamasov',
      author: 'Fyodor Dostoevsky',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51FIyYKsCXL._SX333_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef6',
      publisher: 'Farrar',
      average_rating: '9',
      price: '531646',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41k29Fict8L._SX325_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ede',
      publisher: 'Penguin Books',
      average_rating: '5',
      price: '185963',
    },
    {
      title: 'The Guernsey Literary and Potato Peel Pie Society',
      author: 'Mary Ann Shaffer and Annie Barrows',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51zSWUuPdTL._SX315_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566efa',
      publisher: 'Dial Press',
      average_rating: '3',
      price: '369202',
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/514tG8HMsrL._SX317_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed2',
      publisher: 'Wordsworth Editions',
      average_rating: '9',
      price: '367299',
    },
    {
      title: 'Lost Roses',
      author: 'Martha Hall Kelly',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51Tc9vMWawL._SX329_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566efe',
      publisher: 'Ballantine Books',
      average_rating: '3',
      price: '82263',
    },
    {
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41qI9quGIdL._SX324_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee2',
      publisher: 'Simon & Schuster',
      average_rating: '6',
      price: '680681',
    },
    {
      title: 'The Best We Could Do',
      author: 'Thi Bui',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51xQWI0Be9L._SX359_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f06',
      publisher: 'Harry N. Abrams',
      average_rating: '5',
      price: '446739',
    },
    {
      title: 'Mere Christianity',
      author: 'C. S. Lewis',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51IxCmedZ%2BL._SX326_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f02',
      publisher: 'HarperOne',
      average_rating: '7',
      price: '425395',
    },
    {
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Angelou',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41SKsBaGXRL._SX301_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee6',
      publisher: 'Ballantine Books',
      average_rating: '6',
      price: '495305',
    },
    {
      title: 'Bridge to Terebithia',
      author: 'Katherine Paterson',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51cYMLz-YQL._SX334_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f0a',
      publisher: 'HarperCollins',
      average_rating: '8',
      price: '105671',
    },
    {
      title: 'The Way of Kings (Book 1 of the Stormlight Archive)',
      author: 'Brandon Sanderson',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/517Fo8m%2BgnL._SX331_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed6',
      publisher: 'Tor Books',
      average_rating: '10',
      price: '654529',
    },
    {
      title:
        'Learning React Native: Building Native Mobile Apps with JavaScript',
      author: 'Bonnie Eisenman',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/518ctEpEw1L._SX379_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f0e',
      publisher: "O'Reilly Media",
      average_rating: '3',
      price: '435307',
    },
    {
      title: 'Words of Radiance (Book 2 of the Stormlight Archive)',
      author: 'Brandon Sanderson',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51jVA6k9AUL._SX329_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed7',
      publisher: 'Tor Books',
      average_rating: '8',
      price: '441063',
    },
    {
      title: 'Grapes of Wrath',
      author: 'John Steinback',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51QyaWppYJL._SX329_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eeb',
      publisher: 'Viking',
      average_rating: '3',
      price: '255677',
    },
    {
      title: 'The Hobbit',
      author: 'J. R. R. Tolkien',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/61VxEKq8B1L._SX365_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ec9',
      publisher: 'Houghton Mifflin Harcourt',
      average_rating: '4',
      price: '57424',
    },
    {
      title: 'Romeo and Juliet',
      author: 'William Shakespeare',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51n97vsmHlL._SX307_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eed',
      publisher: 'Simon & Schuster',
      average_rating: '3',
      price: '371179',
    },
    {
      title: 'The Iliad',
      author: 'Homer',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51NXvaFyvIL._SX336_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed9',
      publisher: 'Penguin Classics',
      average_rating: '8',
      price: '220023',
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Bronte',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41dAOQBWAUL._SX325_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eef',
      publisher: 'Penguin Classics',
      average_rating: '9',
      price: '463525',
    },
    {
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J. K. Rowling',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51KV4CXARLL._SX342_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ecf',
      publisher: 'Scholastic',
      average_rating: '9',
      price: '287354',
    },
    {
      title: 'The Color Purple',
      author: 'Alice Walker',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51u3siLE7hL._SX326_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef1',
      publisher: 'Mariner Books',
      average_rating: '3',
      price: '103827',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566edb',
      publisher: 'Harper Perennial',
      average_rating: '4',
      price: '517609',
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41d8c5LhjtL._SX308_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef3',
      publisher: 'Wordsworth Editions',
      average_rating: '10',
      price: '249826',
    },
    {
      title: 'How to Be an Antiracist',
      author: 'Ibram X. Kendi',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51JM3rldZCL._SX329_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ec7',
      publisher: 'One World',
      average_rating: '7',
      price: '582825',
    },
    {
      title: 'The Divine Comedy',
      author: 'Dante Alighieri',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51RsV5hUtHL._SX348_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef5',
      publisher: 'Berkley',
      average_rating: '9',
      price: '53380',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SX326_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566edd',
      publisher: 'Scribner',
      average_rating: '5',
      price: '454750',
    },
    {
      title: 'One Thousand Paper Cranes',
      author: 'Ishii Takayuki',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41J5kJQ9W3L._SX305_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef7',
      publisher: 'Laurel Leaf',
      average_rating: '9',
      price: '655698',
    },
    {
      title: 'A Gentleman in Moscow',
      author: 'Amor Towles',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51NricjmP4L._SX324_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed1',
      publisher: 'Penguin Books',
      average_rating: '5',
      price: '505942',
    },
    {
      title: 'Roll of Thunder, Hear My Cry',
      author: 'Mildred D. Taylor',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51hViZbiT3L._SX313_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ef9',
      publisher: 'Puffin Books',
      average_rating: '9',
      price: '547549',
    },
    {
      title: 'Anne Frank: The Diary of a Young Girl',
      author: 'Anne Frank',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51Vps1OxJPL._SX303_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566edf',
      publisher: 'Bantam',
      average_rating: '5',
      price: '375043',
    },
    {
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL._SX330_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566efb',
      publisher: 'G. P. Putnam & Sons',
      average_rating: '9',
      price: '294404',
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J. K. Rowling',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ecb',
      publisher: 'Scholastic',
      average_rating: '10',
      price: '596609',
    },
    {
      title: 'Before We Were Yours',
      author: 'Lisa Wingate',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51Eqh97ZhFL._SX326_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566efd',
      publisher: 'Ballantine Books',
      average_rating: '10',
      price: '188489',
    },
    {
      title: 'Little Women',
      author: 'Louisa May Alcott',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/513jSeoTzDL._SX331_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee1',
      publisher: 'SeaWolf Press',
      average_rating: '6',
      price: '195820',
    },
    {
      title: 'When Breath Becomes Air',
      author: 'Paul Kalanithi',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41csVfG7xxL._SX337_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566eff',
      publisher: 'Random House',
      average_rating: '6',
      price: '55665',
    },
    {
      title: 'A Bear Called Paddington',
      author: 'Michael Bond',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51clgmTURAL._SX321_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed3',
      publisher: 'HarperCollins',
      average_rating: '3',
      price: '261371',
    },
    {
      title: 'Gun, Germs, and Steel',
      author: 'Jared Diamond',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/5101H2lhtXL._SX329_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f01',
      publisher: 'W. W. Norton & Co.',
      average_rating: '10',
      price: '342928',
    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Bronte',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51poYFyvtWL._SX302_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee3',
      publisher: 'Bantam Classics',
      average_rating: '10',
      price: '68583',
    },
    {
      title: 'Dear Friend, from My Life I Write to You in Your Life',
      author: 'Yiyun Li',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51XSWDI%2BcmL._SX322_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f05',
      publisher: 'Random House',
      average_rating: '7',
      price: '487875',
    },
    {
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f03',
      publisher: 'Bantam',
      average_rating: '10',
      price: '223223',
    },
    {
      title: 'Gone With the Wind',
      author: 'Margaret Mitchell',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51y1omNT91L._SX321_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee5',
      publisher: 'Scribner',
      average_rating: '5',
      price: '272006',
    },
    {
      title: 'The Little Prince',
      author: 'Antoine de St. Exupéry',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/4186P0mACWL._SX336_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f07',
      publisher: 'Mariner Books',
      average_rating: '4',
      price: '141876',
    },
    {
      title: 'Oliver Twist',
      author: 'Charles Dickens',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/513w5abICIL._SX348_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed5',
      publisher: 'CreateSpace',
      average_rating: '8',
      price: '673810',
    },
    {
      title: 'Where the Red Fern Grows',
      author: 'Wilson Rawls',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51%2BxGDb9JYL._SX338_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f09',
      publisher: 'Yearling',
      average_rating: '8',
      price: '295370',
    },
    {
      title: 'Becoming',
      author: 'Michelle Obama',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/414JfiBCutL._SX327_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee7',
      publisher: 'Crown Publishing Books',
      average_rating: '6',
      price: '527679',
    },
    {
      title: 'Holes',
      author: 'Louis Sachar',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51M-Bp5PcPL._SX338_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f0b',
      publisher: 'Yearling',
      average_rating: '7',
      price: '585546',
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J. K. Rowling',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51OORp1XD1L._SX421_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ecd',
      publisher: 'Scholastic',
      average_rating: '4',
      price: '678107',
    },
    {
      title: 'Winnie the Pooh',
      author: 'A. A. Milne',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41O90KgELyL._SX345_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f0d',
      publisher: 'Dutton Books for Young Readers',
      average_rating: '8',
      price: '132738',
    },
    {
      title: 'Pippi Longstocking',
      author: 'Astrid Lindgren',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51AJzl2N0VL._SX349_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee9',
      publisher: 'Puffin Books',
      average_rating: '9',
      price: '448436',
    },
    {
      title: 'Voice of War',
      author: 'Zack Argyle',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41JodZ5Vl%2BL.jpg',
      id: '6231453513c01e6f8b566ec6',
      publisher: 'Self Published',
      average_rating: '6',
      price: '177999',
    },
    {
      title: 'The Lord of the Rings',
      author: 'J. R. R. Tolkien',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51r6XIPWmoL._SX331_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ec8',
      publisher: 'Houghton Mifflin Harcourt',
      average_rating: '5',
      price: '580848',
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J. K. Rowling',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51IiQ4r35LL._SX345_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ecc',
      publisher: 'Scholastic',
      average_rating: '6',
      price: '259746',
    },
    {
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/51rVPckPtuL._SX311_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ed4',
      publisher: 'Dover Publications',
      average_rating: '5',
      price: '126633',
    },
    {
      title: 'Animal Farm',
      author: 'George Orwell',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/31wXW-2LRhL._SX292_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566ee4',
      publisher: 'Signet Classics',
      average_rating: '6',
      price: '400603',
    },
    {
      title:
        'This Is Water: Some Thoughts, Delivered on a Significant Occasion, about Living a Compassionate Life',
      author: 'David Foster Wallace',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/31sf4AgyQAL._SX340_BO1,204,203,200_.jpg',
      id: '6231453513c01e6f8b566f04',
      publisher: 'Little, Brown and Co.',
      average_rating: '8',
      price: '345331',
    },
  ],
  page: 1,
  limit: 73,
  totalPages: 1,
  totalResults: 73,
};
