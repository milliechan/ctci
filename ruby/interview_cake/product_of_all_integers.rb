# write a fn that takes an array of integer and returns an array of the products
def get_products_of_all_ints_except_at_index(arr)
    # create an empty product array to return 
    # loop through array
      # multiply all the numbers in array together except for current index 
      # push that into product array 

  product_arr = [] 
  i = 0 

  while i < arr.length
    j = 0 
    product = 1 
    while j < arr.length 
      if j != i 
        product *= arr[j]
      end
      j +=1
    end
    product_arr.push(product)
    i +=1
  end

  product_arr

end

# arr = [1, 7, 3, 4]
# puts get_products_of_all_ints_except_at_index(arr)
#expected output [84, 12, 28, 21]
# check if solution works with 0's 

def get_products_2(arr)

  products_before_index = []

  before_index = 0 
  product = 1
  while before_index < arr.length 
    products_before_index.push(product)
    product *= arr[before_index]
    before_index += 1
  end

  # product of all integers after each index 
  # start from the end, save the product and multiply by arr[i-1]


  products_after_index = []
  after_index = arr.length - 1
  product_so_far = 1 
  while after_index >= 0
    products_after_index.unshift(product_so_far)
    product_so_far *= arr[after_index]   
    after_index -= 1 
  end


  i = 0 
  result = []
  while i < arr.length
    before = products_before_index[i]
    after = products_after_index[i]
    result.push(before * after)
    i += 1 
  end
  result
end

# arr2 = [1, 2, 3]
arr2 = [1, 7, 3, 4]
puts get_products_2(arr2)



def greedy_solution(arr)
  if arr.length < 2 
    reaise IndexError, 'Getting the product of numbers at other indices requries at least 2 numbers'
  end

  product_of_all = [] 

  # get before products
  product_so_far = 1 
  i = 0 
  while i < arr.length
    product_of_all[i] = product_so_far
    product_so_far *= arr[i]
    i += 1 
  end

  # get prod of integers after each index; store total product of all other ints 

  product_so_far = 1 
  i = arr.length - 1
  while i >= 0 
    product_of_all[i] *= product_so_far
    product_so_far *= arr[i]
    i -= 1 
  end

  product_of_all
end 

arr3 = [1, 7, 3, 4]
puts greedy_solution(arr3)

