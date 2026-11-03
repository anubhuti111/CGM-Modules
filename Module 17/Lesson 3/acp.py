# ================================
# SCHOOL CLUB MEMBER BADGE
# ================================

# ---------- PART 1: member details ----------
# YOUR CODE HERE
# Ask for the member name and the club name with input().
# Save each answer in its own variable.
member_name = input("Enter member name: ")
club_name = input("Enter Club name: ")

# ---------- PART 2: data types ----------
# YOUR CODE HERE
# Make member_number = 8, points = 9.5 and is_active = True.
# Print each one with its data type, using type().
member_number=8
points=9.5
is_active=True

print("\n\nMember Name:", member_name, "-> type:", type(member_name))
print("Club Name:", club_name, "-> type:", type(club_name))
print("Member Number: ", member_number, "-> type:", type(member_number))
print("Points: ", points, "-> type:", type(points))
print("Status: Is Active ", is_active, "-> type:", type(is_active))

# ---------- PART 3: badge code ----------
# YOUR CODE HERE
# Join: the first 3 letters of the name,
#       the last letter of the club,
#       and the member number turned into text.
# Save it in badge_code and print it.
first_three=member_name[0:3]
last=member_name[-1:]
member_number_text=str(member_number)
badge_code = first_three + last + member_number_text

print ("Badge Code is: ", badge_code)


# ---------- PART 4: final badge ----------
print("\n\n===== CLUB BADGE =====\n")
# YOUR CODE HERE
# Print four lines: Member, Club, Code and Points | Active.
# Join the words and the values with +.
print("Member Name: ", member_name)
print("Club name: ", club_name)
print("Badge Code: ", badge_code)
print("Points: ", points, "| Active: ", is_active)