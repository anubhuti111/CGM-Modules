# ================================
# STUDENT GRADE BOOK
# ================================

# ---------- PART 1: the dictionary ----------
grades = {"Alice": 88, "Bob": 73, "Charlie": 95, "Diana": 61, "Eve": 83}

# ---------- PART 2: class average ----------
total = 0
for name in grades:
    total = total + grades[name]
average = total / len(grades)
print("Class average:", average)

# ---------- PART 3: highest score ----------
top_name = ""
top_score = 0
for name in grades:
    if grades[name] > top_score:
        top_name = name
        top_score = grades[name]
print("Highest score:", top_name, top_score)

# ---------- PART 4: look up a student ----------
lookup = input("Look up a student: ")
print("Score:", grades.get(lookup, "Not found"))
