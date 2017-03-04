# Write a function:

# def solution(a)
# that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

# For example, given:

#   A[0] = 1
#   A[1] = 3
#   A[2] = 6
#   A[3] = 4
#   A[4] = 1
#   A[5] = 2
# the function should return 5.

# Assume that:

# N is an integer within the range [1..100,000];
# each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
# Complexity:

# expected worst-case time complexity is O(N);
# expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
# Elements of input arrays can be modified. 

def missing_n(arr)
  # sort and start w/the smallest number and check if the arr includes it until that number equals the largest number in the arr 

  # different cases 
  # array contains negative numbers 
  # => sort array and start counting from 0 
  # array length is 1 
  # => if element is negative, return 1 
  # => if element is positive, start counter at 1 up to the element 
  return 1 if arr.length == 0 && arr[0] < 0

  i = 1
  while arr.include?(i)
    i += 1 
  end 
  i 
end

arr1 = [1, 3, 6, 4, 1, 2] # 5
arr2 = [1] 
arr3 = [2] # 1 
puts missing_n(arr1)
puts missing_n(arr2)
puts missing_n(arr3)

