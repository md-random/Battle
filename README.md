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
- Player and monster action messages displayed separately

## Battle Project Version History

- **1.0**: Initial release with basic Battle gameplay
- **1.1**: Fixed image loading issues, improved error handling, updated project structure
- **1.2**: Implemented 3x4 grid layout, added Player and Monster components, updated styling and fonts
- **1.3**: Added cooldown system for secondary and special attacks, improved combat mechanics
- **1.4**: Separated player and monster combat result messages, ensured correct display of player stats and life updates during combat
- **1.5**: Fixed issue with player life not updating when hit by monster; added null checks in Player component to prevent errors.

## Logic and Function Explanations

### Core Game Functions

- `selectRandomMonster()`: Randomly selects a monster from the bestiary.
- `loadPlayerImage()`: Loads the image for the player character.
- `loadMonsterImage(imagePath: string)`: Loads the image for the selected monster.
- `primaryAttack()`: Executes the primary attack and manages cooldowns.
- `secondaryAttack()`: Executes the secondary attack when cooldown is 0.
- `specialAttack()`: Executes the special attack when cooldown is 0.
- `monsterAttack()`: Executes the monster's attack on the player.

### Helper Functions

- `handleImageError()`: Handles errors when an image fails to load for both player and monster.
- `applyDamage(target: 'player' | 'monster', damage: number)`: Applies damage to the specified target and updates life.
- `checkCombatEnd()`: Checks if the combat has ended based on player or monster life.

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
