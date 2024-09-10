# Python - Hello, World

In this project, I explored the basics of Python by working with the interpreter, printing text and variables, and practicing string manipulation, including indexing and slicing.

## Function Prototypes :floppy_disk:

The following table lists the prototypes for the functions implemented in this project:

| File                       | Prototype                             |
| -------------------------- | ------------------------------------- |
| `10-check_cycle.c`          | `int check_cycle(listint_t *list);`   |
| `102-magic_calculation.py`  | `def magic_calculation(a, b):`        |

## Project Tasks :page_with_curl:

### **0. Run Python File**
  * [0-run](./0-run): Bash script to execute a Python script stored in the `$PYFILE` environment variable.

### **1. Run Inline**
  * [1-run_inline](./1-run_inline): Bash script to execute Python code stored in the `$PYCODE` environment variable.

### **2. Hello, Print**
  * [2-print.py](./2-print.py): Python script that prints the line `"Programming is like building a multilingual puzzle"` followed by a newline, using the `print` function.

### **3. Print Integer**
  * [3-print_number.py](./3-print_number.py): Python script that prints the integer value of the `number` variable, followed by `Battery street` and a newline.
  * This task continues from [this source code](https://github.com/holbertonschool/0x00.py/blob/master/3-print_number.py).

### **4. Print Float**
  * [4-print_float.py](./4-print_float.py): Python script that prints the value of the `number` variable as a float, formatted to two decimal places.
  * This task continues from [this source code](https://github.com/holbertonschool/0x00.py/blob/master/4-print_float.py).

### **5. Print String**
  * [5-print_string.py](./5-print_string.py): Python script that prints the string stored in the `str` variable three times, followed by a newline, and then prints the first nine characters of the string.
  * This task continues from [this source code](https://github.com/holbertonschool/0x00.py/blob/master/5-print_string.py).

### **6. Play with Strings**
  * [6-concat.py](./6-concat.py): Python script that prints `Welcome to Holberton School!` using the variables `str1 = "Holberton"` and `str2 = "School"`.
  * This task continues from [this source code](https://github.com/holbertonschool/0x00.py/blob/master/6-concat.py).

### **7. Copy - Cut - Paste**
  * [7-edges.py](./7-edges.py): Python script that extracts and sets three new string variables from the `word` variable:
    * `word_first_3`: The first three letters of `word`.
    * `word_last_2`: The last two letters of `word`.
    * `middle_word`: The `word` variable without its first and last letters.
  * This task continues from [this source code](https://github.com/holbertonschool/0x00.py/blob/master/7-edges.py).

### **8. Create a New Sentence**
  * [8-concat_edges.py](./8-concat_edges.py): Python script that prints the phrase `object-oriented programming with Python`, followed by a newline, without creating new variables or string literals.
  * This task continues from [this source code](https://github.com/holbertonschool/0x00.py/blob/master/8-concat_edges.py).

### **9. Easter Egg**
  * [9-easter_egg.py](./9-easter_egg.py): Python script that prints "The Zen of Python" by Tim Peters.

### **10. Linked List Cycle**
  * [10-check_cycle.c](./10-check_cycle.c): C function to detect if a linked list contains a cycle.
    * Returns `1` if a cycle is present, otherwise returns `0`.
    * Helper Files:
      * [linked_lists.c](./linked_lists.c): Contains functions to manage linked lists for testing purposes (provided by Holberton School).
      * [lists.h](./lists.h): Header file with definitions and function prototypes for `linked_lists.c` and `10-check_cycle.c`.

### **11. Hello, Write**
  * [100-write.py](./100-write.py): Python script that prints the text `and that piece of art is useful - Dora Korpar, 2015-10-19` to `stderr` using the `write` function from the `sys` module, followed by a newline.
  * The script exits with status code `1`.

### **12. Compile**
  * [101-compile](./101-compile): Bash script that compiles a Python script stored in the `$PYFILE` environment variable, saving the compiled version as `$PYFILEc` (e.g., if `export PYFILE=my_main.py`, the output file will be `my_main.pyc`).

### **13. ByteCode -> Python #1**
  * [102-magic_calculation.py](./102-magic_calculation.py): Python function that matches the bytecode provided by Holberton School.
