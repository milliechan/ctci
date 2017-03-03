# find longest sequence of zeros in binary representation of an integer


def binary_gap(n)
  binary = n.to_s(2)
  # split the binary string at 1's 
  gaps = binary.split('1')
  # remove last el of array if original integer was even. binary representation of even numbers always end in 0
  # consecutive 1's will result in empty strings 
  gaps.pop if n % 2 == 0
  return 0 if gaps.empty? 
  gaps.sort[-1]
end

# tests 
puts binary_gap(10) # expect: 1 