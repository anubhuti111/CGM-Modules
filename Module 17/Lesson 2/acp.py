import keyword


name= input("Enter your name: ")
goal= input("Enter your goal: ")
target_month = input("Enter the month you want to reach it by: ")

daily_minutes = 30

print("MY PERSONAL GOAL PLAN\n")

print("Name: ", name)
print("\nGoal: ", goal)
print("\nTarget month: ", target_month)
print("\nDaily Practice: ", daily_minutes)

print("\nStatus: Not started")
print("\nReminder: Practise every day!")

print("\nIn one sentence: ", end=" ")
print("Name: ", name, end=" ")
print(", Goal: ", goal, end=" ")
print(", Target month: ", target_month, end=" ")
print(", Daily Practice: ", daily_minutes, end="\n")

# print all the Python keywords
print("Python keywords are...\n")
print(keyword.kwlist)