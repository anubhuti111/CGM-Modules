# ================================
# DAILY ACTIVITY PLANNER
# ================================

# ---------- PART 1: homework time ----------
# YOUR CODE HERE
# Ask for the homework time in minutes.
# Turn the answer into a whole number with int().
homework_time = int(input("Enter homwwork time: "))

# ---------- PART 2: choose a plan ----------
# YOUR CODE HERE
# If the homework time is more than 60, set plan to "start homework now"
# and print "That is a long homework session."
# Otherwise, set plan to "finish homework quickly"
# and print "That is a short homework session."
if homework_time > 60:
    plan="Start homework now"
    print("That is a long homework session.")
else:
    plan="finish homework quickly"
    print("That is a short homework session.")


# ---------- PART 3: free time ----------
# YOUR CODE HERE
# Ask: Is there free time after homework? (yes/no)
# If the answer is "yes", print a reminder to pick a hobby.
# If the answer is anything else, print nothing.
free_time = input("Is there free time after homework? (yes/no)")
if free_time=="yes":
    print("Reminder to pick a hobby..")


# ---------- PART 4: summary ----------
print("===== DAILY PLAN =====")
print("Homework in Minutes: ", homework_time)
print("Plan: ", plan)
print("Free time: ", free_time)
# Print the homework minutes, the plan and the free time answer.