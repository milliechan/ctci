#given an array of integers, find the highest product you can get from three of the integers
# the input array_of_ints will always have at least 3 integers 

def highest_product(arr)
  # if arr length is 3, multiply 3 and return product 

  arr.sort! 
  arr[-1] * arr[-2] * arr[-3]
end

def greedy_sol(arr)
  if arr.length < 3 
    raise Exception, 'Less than 3 items!'
  end

  highest = [arr[0], arr[1]].max 
  lowest = [arr[0], arr[1]].min

  highest_product_of_2 = arr[0] * arr[1]
  lowest_product_of_2 = arr[0] * arr[1]

  highest_product_of_3 = arr[0] * arr[1] * arr[2]

  arr.each_with_index do |current, index|
    next if index < 2 

    highest_product_of_3 = [
      highest_product_of_3, 
      current * highest_product_of_2, 
      current * highest_product_of_3
    ].max 

    highest_product_of_2 = [
      highest_product_of_2, 
      current * highest, 
      current * lowest 
    ].max 

    lowest_product_of_2 = [
      lowest_product_of_2, 
      current * highest, 
      current * lowest 
    ].min 

    highest = [highest, current].max 
    lowest = [lowest, current].min 

  end
  return highest_product_of_3 

end