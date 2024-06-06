import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Malice Mizer', 'black'),
  new Category('c2', 'Gackt', '#A67A46'),
  new Category('c3', 'ManaSama', '#292840'),
  new Category('c4', 'Kozi', '#400101'),
  new Category('c5', 'Yuki', '#D97823'),
  new Category('c6', 'Kami', '#A64170')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Malice Mizer',
    '1992-1998',
    'Era',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbMQd-Ym4CTcSqp_OZGBN4b9hOVKhdo3KjQUhvzoTkD6NMIZZEylM5Ti-Lm4r2jDCg6ZfSBeF7qCZWGxRMjUnY4_GUthWd170YrQOX_7OFKM98PMzyOursmxEGL979HoLkygvtU-UnTj5voSaYGMRbPMoAnRXPLAlXzm0cMROY8Kmz1sy4_33dqvVqt-Y/s1113/Malice%20Mizer%20Au%20Revoir%20Merveilles.webp',
    '5 integrantes. ' ,
    [
      'Gackt - vocalista.',
      'Mana - guitarra, sintetizador.',
      'Kozi - guitarra, sintetizador, coros.',
      'Yuki - bajo, coros.',
      'Kami - batería, percusión, coros.',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Gackt',
    'affordable',
    'simple',
    'https://i.pinimg.com/564x/da/36/c0/da36c0e0c1edac8725f4b9595fe7fad4.jpg',
    10,
    [
      'Gackt - vocalista.',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'ManaSama',
    'Guitarrista',
    'compositor  y',
    'https://i0.wp.com/thetacomaledger.com/wp-content/uploads/2023/02/Mana-Sama-Portrait.jpg?resize=700%2C445&ssl=1',
    2.,
    [
      'Ves.teager',
      'Girle',
      'Matenro',
      'Malice Mizer',
      'Moi dix Mois',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true
  )
];