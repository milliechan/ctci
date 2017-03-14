# write a function that given, 1. an amount of money, 2. an array of coin denominations, computes the number of ways to make amount of money with coins of the available denominations 

#ex: for amount=4 (4 cents) and denominations=[1,2,3] in cents, your program would output 4-the number of ways to make 4cents with those denominations 
# 1. 1c, 1c, 1c, 1c
# 2. 1c, 1c, 2c
# 3. 1c, 3c 
# 4. 2c, 2c 


def change_possibilities_bottom_up(amount, denominations)
  ways_of_doing_n_cents = [0] * (amount + 1)
  ways_of_doing_n_cents[0] = 1

  denominations.each do |coin|
    (coin..amount).each do |higher_amount|
      higher_amount_remainder = higher_amount - coin 
      ways_of_doing_n_cents[higher_amount] += ways_of_doing_n_cents[higher_amount_remainder]
    end
  end
  ways_of_doing_n_cents
end

amount = 5 
coins = [1, 3, 5]
puts change_possibilities_bottom_up(amount, coins)