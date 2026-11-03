import random

def play_game():
    # Generate a secret number between 1 and 50
    secret_number = random.randint(1, 50)
    attempts_left = 5
    
    print("Welcome to the Number Guessing Game!")
    print("I am thinking of a number between 1 and 50.")
    print(f"You have {attempts_left} attempts to guess it. Good luck!\n")
    
    # Loop running as long as the player has attempts left
    while attempts_left > 0:
        print(f"Remaining Lives: {'❤️ ' * attempts_left} ({attempts_left} left)")
        
        # Get and validate player input
        try:
            guess = int(input("Enter your guess: "))
        except ValueError:
            print("Invalid input! Please enter a valid integer.\n")
            continue
            
        # Check the player's guess
        if guess == secret_number:
            print(f"\n🎉 Congratulations! You guessed the secret number {secret_number} correctly!")
            return
        elif guess < secret_number:
            print("💡 Hint: Too low! Try a higher number.")
        else:
            print("💡 Hint: Too high! Try a lower number.")
            
        # Reduce the number of lives left
        attempts_left -= 1
        print("-" * 30 + "\n")
        
    # Game over condition if all attempts are exhausted
    print("💀 Game Over!")
    print(f"You've run out of attempts. The secret number was {secret_number}.")

# Run the game
if __name__ == "__main__":
    play_game()
