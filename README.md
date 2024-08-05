# Battle Game

## Description

This is a Vue 3 component that implements a Battle game. It features a responsive design, random monster selection, and detailed monster statistics.

## Features

- Play Battle against randomly selected monsters
- Responsive design for various screen sizes
- Detailed monster stats including attack style, life, attack power, and defense rating
- Visually appealing monster images
- Realistic game logic including special attacks
- Cooldown system for secondary and special attacks

## Battle Project Version History

1.0: Initial release with basic Battle gameplay  
1.1: Fixed image loading issues, improved error handling, updated project structure  
1.2: Implemented 3x4 grid layout, added Player and Monster components, updated styling and fonts  
1.3: Added cooldown system for secondary and special attacks, improved combat mechanics

## Logic and Function Explanations

### Core Game Functions

- `selectRandomMonster()`: Randomly selects a monster from the bestiary.
- `loadPlayerImage()`: Loads the image for the player character.
- `loadMonsterImage(imagePath: string)`: Loads the image for the selected monster.
- `primaryAttack()`: Executes the primary attack and manages cooldowns.
- `secondaryAttack()`: Executes the secondary attack when cooldown is 0.
- `specialAttack()`: Executes the special attack when cooldown is 0.

### Helper Functions

- `handleImageError()`: Handles errors when an image fails to load for both player and monster.
- `incrementTurn()`: Manages turn progression and cooldown decrementation.

## Customization

You can customize the game by modifying the following:

- Adding new monsters to the bestiary in `src/interface/Bestiary.ts`
- Adjusting player and monster stats in their respective components
- Changing image paths for player and monsters in the appropriate asset directories
- Modifying cooldown durations for secondary and special attacks

## Future Improvements

- Add player character creation
- Implement more complex combat system
- Create inventory and item system
- Add progression and leveling mechanics

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
