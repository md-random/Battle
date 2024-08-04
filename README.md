# Battle Game

## Description

This is a Vue 3 component that implements a Battle game. It features a responsive design, random monster selection, and detailed monster statistics.

## Features

- Play Battle against randomly selected monsters
- Responsive design for various screen sizes
- Detailed monster stats including attack style, life, attack power, and defense rating
- Visually appealing monster images
- Realistic game logic including special attacks

## Battle Project Version History

1.0: Initial release with basic Battle gameplay  
1.1: Fixed image loading issues, improved error handling, updated project structure

## Logic and Function Explanations

### Core Game Functions

- `selectRandomMonster()`: Randomly selects a monster from the bestiary.
- `loadMonsterImage(imagePath: string)`: Loads the image for the selected monster.

### Helper Functions

- `handleImageError(event: Event)`: Handles errors when an image fails to load.

### Game Flow Functions

- `onMounted()`: Initializes the component and selects a random monster when mounted.

## Customization

You can customize the game by modifying the following:

- Adding new monsters to the bestiary in `src/interface/Bestiary.ts`
- Adjusting monster stats
- Changing image paths for monsters in the `src/assets/bestiary-images/` directory

## Future Improvements

- Add player character creation
- Implement combat system
- Create inventory and item system
- Add progression and leveling mechanics
- Implement multiplayer functionality

## License

This project is open source and available under the MIT License.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
