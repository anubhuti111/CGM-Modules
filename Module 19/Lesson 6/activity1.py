# ================================
# FUNCTION CALCULATOR
# ================================

# ---------- PART 1: four functions ----------
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

# ---------- MAIN PROGRAM ----------
print("FUNCTION CALCULATOR")

# ---------- PART 2, 3 and 4: input, choose, errors ----------
try:
    a = float(input("First number: "))
    b = float(input("Second number: "))
    op = input("Operation (add, subtract, multiply, divide): ")

    if op == "add":
        print("Result:", add(a, b))
    elif op == "subtract":
        print("Result:", subtract(a, b))
    elif op == "multiply":
        print("Result:", multiply(a, b))
    elif op == "divide":
        print("Result:", divide(a, b))
    else:
        print("Unknown operation.")
except ValueError:
    print("Please type numbers only.")
except ZeroDivisionError:
    print("You cannot divide by zero.")
finally:
    print("Thanks for using the calculator!")
