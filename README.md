# Conversion between Roman numbers and Integer

To convert roman numbers into integer we need to use a lookup table that maps roman letters to numbers.

Here is how the logic will work:

```shell
  - check if the value of current letter is less than the next letter.
  - If it is, subtract the value of the current letter from the value of the next letter. 
  - Afterward, retrieve this value and added to the accumulated value and increment the index by 2.
  - Otherwise, If value of current letter is greater then add its count to the accumulated value. 
  - Increment the index by 1.
```

To convert integers into roman numbers we also need to use a lookup table as well. 

Here is how the logic will work:

```shell
  - divide the given number with the current highest roman letter value and store it in an integer called numTimes(for example, the given number divided by 'M' in first division within the for loop)
  - repeatingly append to the end of the string until numTimes amount of times.
  - repeat the division step but with the roman letter with next highest value. Repeat until we have appended all the needed letters.
```
